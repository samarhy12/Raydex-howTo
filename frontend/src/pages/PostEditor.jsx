import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Plus,
  Trash2,
  Image,
  Type,
  ArrowUp,
  ArrowDown,
  Save,
  X,
} from "lucide-react";
import toast from "react-hot-toast";
import { postsAPI } from "../services/api.js";

const PostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
  });
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(isEditMode);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      loadPost();
    }
  }, [id, isEditMode]);

  const loadPost = async () => {
    setLoading(true);
    try {
      const response = await postsAPI.getById(id);

      // Set form data
      setFormData({
        title: response.post.title || "",
        subtitle: response.post.subtitle || "",
      });

      // Set blocks from API response
      const loadedBlocks = response.post.content || [];
      setBlocks(loadedBlocks);

      console.log("Loaded post:", response.post);
      console.log("Loaded blocks:", loadedBlocks);
    } catch (error) {
      console.error("Error loading post:", error);
      toast.error("Failed to load post for editing");
      navigate("/admin");
    } finally {
      setLoading(false);
    }
  };

  const addTextBlock = () => {
    setBlocks([...blocks, { type: "text", data: "" }]);
  };

  const addImageBlock = () => {
    setBlocks([...blocks, { type: "image", data: null, caption: "" }]);
  };

  const updateBlock = (index, updates) => {
    const newBlocks = [...blocks];
    newBlocks[index] = { ...newBlocks[index], ...updates };
    setBlocks(newBlocks);
  };

  const removeBlock = (index) => {
    setBlocks(blocks.filter((_, i) => i !== index));
  };

  const moveBlock = (index, direction) => {
    const newBlocks = [...blocks];
    const targetIndex = direction === "up" ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= blocks.length) return;

    [newBlocks[index], newBlocks[targetIndex]] = [
      newBlocks[targetIndex],
      newBlocks[index],
    ];
    setBlocks(newBlocks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }

    if (blocks.length === 0) {
      toast.error("Add at least one content block");
      return;
    }

    setSaving(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("subtitle", formData.subtitle || "");

      // Add blocks using the backend's expected format
      blocks.forEach((block, index) => {
        formDataToSend.append(`block_type_${index}`, block.type);

        if (block.type === "text") {
          formDataToSend.append(`text_${index}`, block.data || "");
        } else if (block.type === "image") {
          if (block.data instanceof File) {
            // New image upload
            formDataToSend.append(`image_${index}`, block.data);
          } else if (typeof block.data === "string" && block.data) {
            // Existing image (just the filename)
            formDataToSend.append(`existing_image_${index}`, block.data);
          }
          formDataToSend.append(`caption_${index}`, block.caption || "");
        }
      });

      let response;
      if (isEditMode) {
        response = await postsAPI.update(id, formDataToSend);
        toast.success("Post updated successfully!");
      } else {
        response = await postsAPI.create(formDataToSend);
        toast.success("Post created successfully!");
      }

      console.log("Save response:", response);
      navigate("/admin");
    } catch (error) {
      console.error("Error saving post:", error);
      const errorMessage = error.response?.data?.error || "Failed to save post";
      toast.error(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-3 border-border border-t-accent rounded-full animate-spin-slow" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Header */}
        <header className="mb-12">
          <Link
            to="/admin"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-accent transition-colors mb-6 group"
          >
            <X
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Cancel
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-2">
            {isEditMode ? "Edit Post" : "Create New Post"}
          </h1>
          <p className="text-base text-ink-soft">
            {isEditMode
              ? "Update your article content"
              : "Write and publish a new article"}
          </p>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-ink mb-2"
            >
              Title *
            </label>
            <input
              type="text"
              id="title"
              required
              className="w-full py-4 px-4 border-2 border-border rounded-lg bg-surface text-ink text-xl font-serif placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
              placeholder="Enter article title..."
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          {/* Subtitle */}
          <div>
            <label
              htmlFor="subtitle"
              className="block text-sm font-semibold text-ink mb-2"
            >
              Subtitle (Optional)
            </label>
            <input
              type="text"
              id="subtitle"
              className="w-full py-3 px-4 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
              placeholder="Add a subtitle or description..."
              value={formData.subtitle}
              onChange={(e) =>
                setFormData({ ...formData, subtitle: e.target.value })
              }
            />
          </div>

          {/* Content Blocks */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-semibold text-ink">
                Content Blocks *
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={addTextBlock}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-md text-sm font-medium text-ink-soft hover:text-ink hover:border-accent hover:bg-accent-light transition-all duration-fast"
                >
                  <Type size={16} />
                  Add Text
                </button>
                <button
                  type="button"
                  onClick={addImageBlock}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-md text-sm font-medium text-ink-soft hover:text-ink hover:border-accent hover:bg-accent-light transition-all duration-fast"
                >
                  <Image size={16} />
                  Add Image
                </button>
              </div>
            </div>

            {/* Blocks List */}
            {blocks.length === 0 ? (
              <div className="text-center py-16 bg-hover border-2 border-dashed border-border rounded-lg">
                <div className="text-5xl mb-4 opacity-30">📝</div>
                <p className="text-ink-soft mb-6">No content blocks yet</p>
                <div className="flex gap-3 justify-center">
                  <button
                    type="button"
                    onClick={addTextBlock}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-surface rounded-md font-medium transition-all duration-base hover:bg-accent-soft"
                  >
                    <Type size={16} />
                    Add Text Block
                  </button>
                  <button
                    type="button"
                    onClick={addImageBlock}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-info text-surface rounded-md font-medium transition-all duration-base hover:bg-info/90"
                  >
                    <Image size={16} />
                    Add Image Block
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {blocks.map((block, index) => (
                  <BlockEditor
                    key={index}
                    block={block}
                    index={index}
                    totalBlocks={blocks.length}
                    onUpdate={(updates) => updateBlock(index, updates)}
                    onRemove={() => removeBlock(index)}
                    onMove={(direction) => moveBlock(index, direction)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t-2 border-border">
            <Link
              to="/admin"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 border-2 border-border rounded-lg bg-surface text-ink-soft font-medium transition-all duration-base hover:bg-hover hover:border-accent hover:text-ink"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 group inline-flex items-center justify-center gap-2 py-3.5 px-6 border-2 border-transparent rounded-lg text-surface bg-accent hover:bg-accent-soft focus:outline-none focus:ring-4 focus:ring-accent-light transition-all duration-base hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 font-medium"
            >
              {saving ? (
                <>
                  <div className="w-5 h-5 border-2 border-surface border-t-transparent rounded-full animate-spin-slow" />
                  Saving...
                </>
              ) : (
                <>
                  <Save size={18} />
                  {isEditMode ? "Update Post" : "Publish Post"}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const BlockEditor = ({
  block,
  index,
  totalBlocks,
  onUpdate,
  onRemove,
  onMove,
}) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        toast.error("Please select a valid image file");
        return;
      }

      // Validate file size (16MB max)
      if (file.size > 16 * 1024 * 1024) {
        toast.error("Image must be smaller than 16MB");
        return;
      }

      onUpdate({ data: file });
    }
  };

  // Determine if this is an existing image (string) or new upload (File)
  const hasExistingImage = block.data && typeof block.data === "string";
  const hasNewUpload = block.data instanceof File;
  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

  return (
    <div className="bg-surface border-2 border-border rounded-lg p-6 animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-hover rounded-md text-sm font-medium text-ink-soft">
          {block.type === "text" ? <Type size={14} /> : <Image size={14} />}
          {block.type === "text" ? "Text Block" : "Image Block"}
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onMove("up")}
            disabled={index === 0}
            className="p-2 text-ink-muted hover:text-ink hover:bg-hover rounded-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            title="Move up"
          >
            <ArrowUp size={16} />
          </button>
          <button
            type="button"
            onClick={() => onMove("down")}
            disabled={index === totalBlocks - 1}
            className="p-2 text-ink-muted hover:text-ink hover:bg-hover rounded-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            title="Move down"
          >
            <ArrowDown size={16} />
          </button>
          <button
            type="button"
            onClick={onRemove}
            className="p-2 text-error hover:bg-error-light rounded-md transition-all"
            title="Remove block"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {block.type === "text" ? (
        <textarea
          className="w-full py-3 px-4 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted resize-y min-h-[150px] leading-relaxed transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
          placeholder="Write your content here..."
          value={block.data || ""}
          onChange={(e) => onUpdate({ data: e.target.value })}
        />
      ) : (
        <div className="space-y-4">
          {/* Existing Image Preview */}
          {hasExistingImage && (
            <div className="mb-4 p-4 bg-hover rounded-lg border border-border-soft">
              <p className="text-sm font-medium text-ink mb-2">
                Current Image:
              </p>
              <img
                src={`${API_BASE}/static/uploads/${block.data}`}
                alt="Current"
                className="max-w-full h-auto rounded-lg border-2 border-border shadow-md"
                onError={(e) => {
                  console.error("Image load error:", block.data);
                  e.target.src =
                    'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23f0f0f0" width="200" height="200"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999">Image not found</text></svg>';
                }}
              />
              <p className="text-xs text-ink-muted mt-2">File: {block.data}</p>
            </div>
          )}

          {/* Upload New Image */}
          <div>
            <label className="block text-sm font-medium text-ink mb-2">
              {hasExistingImage ? "Replace Image (Optional)" : "Image File *"}
            </label>
            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/gif,image/webp"
              onChange={handleImageChange}
              className="w-full py-2 px-4 border border-border rounded-lg bg-surface text-ink file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-accent file:text-surface hover:file:bg-accent-soft transition-all"
            />
            {hasNewUpload && (
              <div className="mt-2 p-2 bg-success-light border border-success/20 rounded text-sm text-success">
                ✓ New image selected: {block.data.name}
                <br />
                <span className="text-xs">
                  This will{" "}
                  {hasExistingImage
                    ? "replace the current image"
                    : "be uploaded"}{" "}
                  when you save
                </span>
              </div>
            )}
            {!hasExistingImage && !hasNewUpload && (
              <p className="text-xs text-ink-muted mt-1">
                Accepted formats: PNG, JPG, GIF, WEBP (max 16MB)
              </p>
            )}
          </div>

          {/* Caption */}
          <div>
            <label className="block text-sm font-medium text-ink mb-2">
              Caption (Optional)
            </label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
              placeholder="Add image caption..."
              value={block.caption || ""}
              onChange={(e) => onUpdate({ caption: e.target.value })}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostEditor;

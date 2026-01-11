import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Eye, Calendar, User, Send } from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import { motion, useScroll, useSpring } from "framer-motion";
import toast from "react-hot-toast";
import { postsAPI, commentsAPI } from "../services/api.js";
import { useAuth } from "../contexts/AuthContext.jsx";

const Post = () => {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentForm, setCommentForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    comment: "",
  });
  const [submittingComment, setSubmittingComment] = useState(false);

  // Reading progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const loadPost = useCallback(async () => {
    setLoading(true);
    try {
      const response = await postsAPI.getById(id);
      setPost(response.post);

      // Load comments
      const commentsResponse = await fetch(`/api/posts/${id}/comments`);
      const commentsData = await commentsResponse.json();
      if (commentsData.success) {
        setComments(commentsData.comments);
      }
    } catch (error) {
      console.error("Error loading post:", error);
      toast.error("Failed to load article");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadPost();
  }, [loadPost]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setSubmittingComment(true);

    try {
      const result = await commentsAPI.add(id, commentForm);
      if (result.success) {
        toast.success("Comment added successfully!");
        setComments([result.comment, ...comments]);
        setCommentForm({ ...commentForm, comment: "" });
      }
    } catch (error) {
      toast.error("Failed to add comment");
    } finally {
      setSubmittingComment(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-3 border-border border-t-accent rounded-full animate-spin-slow" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6 opacity-30">📄</div>
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">
            Article not found
          </h2>
          <Link
            to="/"
            className="text-accent hover:text-accent-soft font-medium"
          >
            ← Back to articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen pb-20">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
        style={{ scaleX }}
      />

      {/* Back Button */}
      <div className="max-w-container mx-auto px-6 md:px-8 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-accent transition-colors group"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to articles
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-reading mx-auto px-6 md:px-8 pt-12 pb-16">
        <div className="animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="text-xl md:text-2xl text-ink-soft leading-relaxed mb-8">
              {post.subtitle}
            </p>
          )}

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-border-soft">
            <div className="flex items-center gap-2 text-sm text-ink-soft">
              <User size={16} />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-muted">
              <Calendar size={16} />
              <time>{format(new Date(post.created_at), "MMMM d, yyyy")}</time>
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-muted">
              <Clock size={16} />
              <span>{Math.ceil(post.content.length * 2)} min read</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-muted">
              <Eye size={16} />
              <span>{post.views} views</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-reading mx-auto px-6 md:px-8">
        <div className="prose-custom">
          {post.content.map((block, index) => (
            <ContentBlock key={index} block={block} index={index} />
          ))}
        </div>
      </div>

      {/* Article Footer */}
      <footer className="max-w-reading mx-auto px-6 md:px-8 mt-20 pt-12 border-t-2 border-border">
        {/* Share Section */}
        <div className="mb-16">
          <p className="text-sm font-medium text-ink-muted mb-4">
            Share this article
          </p>
          <div className="flex gap-3">
            <ShareButton
              platform="Twitter"
              url={window.location.href}
              text={post.title}
            />
            <ShareButton platform="Facebook" url={window.location.href} />
            <ShareButton platform="LinkedIn" url={window.location.href} />
          </div>
        </div>

        {/* Comments Section */}
        <div className="space-y-12">
          <div>
            <h2 className="font-serif text-3xl font-bold text-ink mb-2">
              Comments
            </h2>
            <p className="text-base text-ink-soft">
              {comments.length} {comments.length === 1 ? "comment" : "comments"}
            </p>
          </div>

          {/* Comment Form */}
          <div className="bg-surface border border-border rounded-lg p-6 md:p-8">
            <h3 className="font-serif text-xl font-semibold text-ink mb-6">
              Leave a comment
            </h3>

            <form onSubmit={handleCommentSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full py-3 px-4 border border-border rounded-md bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                    placeholder="Your name"
                    value={commentForm.name}
                    onChange={(e) =>
                      setCommentForm({ ...commentForm, name: e.target.value })
                    }
                    disabled={isAuthenticated}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full py-3 px-4 border border-border rounded-md bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                    placeholder="your@email.com"
                    value={commentForm.email}
                    onChange={(e) =>
                      setCommentForm({ ...commentForm, email: e.target.value })
                    }
                    disabled={isAuthenticated}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-ink mb-2"
                >
                  Comment *
                </label>
                <textarea
                  id="comment"
                  required
                  rows="6"
                  className="w-full py-3 px-4 border border-border rounded-md bg-surface text-ink placeholder-ink-muted resize-y min-h-[150px] leading-relaxed transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                  placeholder="Share your thoughts..."
                  value={commentForm.comment}
                  onChange={(e) =>
                    setCommentForm({ ...commentForm, comment: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={submittingComment}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-surface rounded-md font-medium transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submittingComment ? (
                  <>
                    <div className="w-4 h-4 border-2 border-surface border-t-transparent rounded-full animate-spin-slow" />
                    Posting...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Post Comment
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.length === 0 ? (
              <div className="text-center py-12 bg-hover rounded-lg">
                <p className="text-ink-soft">
                  No comments yet. Be the first to comment!
                </p>
              </div>
            ) : (
              comments.map((comment, index) => (
                <CommentCard
                  key={comment.id}
                  comment={comment}
                  delay={index * 100}
                />
              ))
            )}
          </div>
        </div>
      </footer>
    </article>
  );
};

const ContentBlock = ({ block, index }) => {
  if (block.type === "text") {
    return (
      <div
        className="content-text mb-8 animate-fade-in"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <p className="text-lg leading-relaxed text-ink">{block.data}</p>
      </div>
    );
  }

  if (block.type === "image") {
    return (
      <figure
        className="my-12 animate-fade-in"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={`/static/uploads/${block.data}`}
            alt={block.caption || "Article image"}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
        {block.caption && (
          <figcaption className="mt-4 text-center text-sm italic text-ink-muted leading-relaxed px-4">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return null;
};

const ShareButton = ({ platform, url, text }) => {
  const shareUrls = {
    Twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(text || "")}`,
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`,
  };

  return (
    <a
      href={shareUrls[platform]}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 border border-border rounded-md text-sm font-medium text-ink-soft hover:text-ink hover:border-accent hover:bg-accent-light transition-all duration-fast"
    >
      {platform}
    </a>
  );
};

const CommentCard = ({ comment, delay }) => {
  return (
    <div
      className="bg-surface border border-border rounded-lg p-6 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-light to-accent-light/50 flex items-center justify-center font-serif text-sm font-semibold text-accent">
            {comment.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="font-medium text-ink">{comment.name}</div>
            <div className="text-xs text-ink-muted">
              {formatDistanceToNow(new Date(comment.created_at), {
                addSuffix: true,
              })}
            </div>
          </div>
        </div>
      </div>
      <p className="text-ink-soft leading-relaxed">{comment.comment}</p>
    </div>
  );
};

export default Post;

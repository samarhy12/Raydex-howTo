import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { postsAPI, adminAPI } from "../services/api.js";

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalViews: 0,
    totalComments: 0,
    totalRequests: 0,
    pendingRequests: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    setLoading(true);
    try {
      // Load dashboard stats and posts from API
      const [dashboardResponse, postsResponse] = await Promise.all([
        adminAPI.getDashboard(),
        postsAPI.getAll(),
      ]);

      if (dashboardResponse.success) {
        setStats(dashboardResponse.stats);
      }

      if (postsResponse.success) {
        // Transform posts to include comment count
        const postsWithCounts = postsResponse.posts.map((post) => ({
          ...post,
          // Note: Backend doesn't return comment count directly in list view
          // We'll need to either modify the backend or handle this differently
          commentCount: 0, // Placeholder - backend would need to provide this
        }));
        setPosts(postsWithCounts);
      }

      console.log("Dashboard loaded:", dashboardResponse, postsResponse);
    } catch (error) {
      console.error("Error loading dashboard:", error);
      toast.error("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (postId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      const response = await postsAPI.delete(postId);

      if (response.success) {
        toast.success("Post deleted successfully!");
        setPosts(posts.filter((p) => p.id !== postId));

        // Update stats
        setStats((prev) => ({
          ...prev,
          totalPosts: prev.totalPosts - 1,
        }));
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      const errorMessage =
        error.response?.data?.error || "Failed to delete post";
      toast.error(errorMessage);
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
      <div className="max-w-container mx-auto px-6 md:px-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 mb-12 border-b-2 border-border">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-2">
              Dashboard
            </h1>
            <p className="text-base text-ink-soft">
              Manage your content and monitor performance
            </p>
          </div>
          <Link
            to="/admin/create"
            className="inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-6 py-3 bg-accent text-surface rounded-md transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md"
          >
            Create New Post
          </Link>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-surface border border-border rounded-lg p-6 flex items-center gap-6 transition-all duration-base hover:border-accent hover:-translate-y-0.5 hover:shadow-md">
            <div className="text-5xl opacity-80">📝</div>
            <div>
              <div className="font-serif text-3xl font-bold text-ink leading-none mb-1">
                {stats.totalPosts}
              </div>
              <div className="text-sm font-medium text-ink-muted">
                Total Posts
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6 flex items-center gap-6 transition-all duration-base hover:border-accent hover:-translate-y-0.5 hover:shadow-md">
            <div className="text-5xl opacity-80">👁</div>
            <div>
              <div className="font-serif text-3xl font-bold text-ink leading-none mb-1">
                {stats.totalViews.toLocaleString()}
              </div>
              <div className="text-sm font-medium text-ink-muted">
                Total Views
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6 flex items-center gap-6 transition-all duration-base hover:border-accent hover:-translate-y-0.5 hover:shadow-md">
            <div className="text-5xl opacity-80">💬</div>
            <div>
              <div className="font-serif text-3xl font-bold text-ink leading-none mb-1">
                {stats.totalComments}
              </div>
              <div className="text-sm font-medium text-ink-muted">
                Total Comments
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6 flex items-center gap-6 transition-all duration-base hover:border-accent hover:-translate-y-0.5 hover:shadow-md">
            <div className="text-5xl opacity-80">📮</div>
            <div>
              <div className="font-serif text-3xl font-bold text-ink leading-none mb-1">
                {stats.pendingRequests}
                <span className="text-lg text-ink-muted font-normal">
                  /{stats.totalRequests}
                </span>
              </div>
              <div className="text-sm font-medium text-ink-muted">
                Pending Requests
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-semibold text-ink mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/admin/create"
              className="p-6 bg-surface border-2 border-border rounded-lg hover:border-accent hover:-translate-y-0.5 transition-all duration-base group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-base">
                ✍️
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-1">
                Create Post
              </h3>
              <p className="text-sm text-ink-soft">
                Write and publish a new article
              </p>
            </Link>

            <Link
              to="/admin/requests"
              className="p-6 bg-surface border-2 border-border rounded-lg hover:border-accent hover:-translate-y-0.5 transition-all duration-base group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-base">
                📬
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-1">
                View Requests
              </h3>
              <p className="text-sm text-ink-soft">
                Manage question requests
                {stats.pendingRequests > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold text-accent-soft bg-accent rounded-full">
                    {stats.pendingRequests}
                  </span>
                )}
              </p>
            </Link>

            <button
              onClick={loadDashboard}
              className="p-6 bg-surface border-2 border-border rounded-lg hover:border-accent hover:-translate-y-0.5 transition-all duration-base group text-left"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 group-hover:rotate-180 transition-all duration-base">
                🔄
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-1">
                Refresh Data
              </h3>
              <p className="text-sm text-ink-soft">
                Reload dashboard statistics
              </p>
            </button>
          </div>
        </section>

        {/* Posts List */}
        <section>
          <div className="flex items-baseline justify-between pb-6 mb-8 border-b border-border-soft">
            <h2 className="font-serif text-3xl font-semibold text-ink">
              All Posts
            </h2>
            <span className="text-sm font-medium text-ink-muted uppercase tracking-wider">
              {posts.length} articles
            </span>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20 bg-surface border border-border rounded-lg">
              <div className="text-6xl mb-6 opacity-30">📄</div>
              <h3 className="font-serif text-2xl font-semibold text-ink mb-4">
                No posts yet
              </h3>
              <p className="text-base text-ink-soft mb-8">
                Create your first post to get started
              </p>
              <Link
                to="/admin/create"
                className="inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-6 py-3 bg-accent text-surface rounded-md transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md"
              >
                Create Post
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <PostRow key={post.id} post={post} onDelete={handleDelete} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

const PostRow = ({ post, onDelete }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-surface border border-border rounded-lg transition-all duration-base hover:border-accent hover:shadow-md">
      <div className="flex-1 min-w-0">
        <Link
          to={`/post/${post.id}`}
          className="font-serif text-xl font-semibold text-ink hover:text-accent transition-colors duration-fast block mb-2 truncate"
        >
          {post.title}
        </Link>
        {post.subtitle && (
          <p className="text-sm text-ink-soft mb-3 truncate">{post.subtitle}</p>
        )}
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-ink-muted">
          <span className="flex items-center gap-1.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="opacity-60"
            >
              <path
                d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 4v4l3 2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {format(new Date(post.created_at), "MMM d, yyyy")}
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="opacity-60"
            >
              <path
                d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="8"
                cy="8"
                r="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            {post.views} views
          </span>
          {post.commentCount !== undefined && (
            <span className="flex items-center gap-1.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="opacity-60"
              >
                <path
                  d="M14 10c0 .6-.4 1-1 1H4l-3 3V2c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v8z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              {post.commentCount} comments
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 md:border-l md:border-border-soft md:pl-6">
        <Link
          to={`/post/${post.id}`}
          className="w-10 h-10 flex items-center justify-center border border-border rounded-md bg-surface text-ink-soft hover:bg-hover hover:border-info hover:text-info transition-all duration-fast"
          title="View"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M1 9s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="9"
              cy="9"
              r="2.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </Link>
        <Link
          to={`/admin/edit/${post.id}`}
          className="w-10 h-10 flex items-center justify-center border border-border rounded-md bg-surface text-ink-soft hover:bg-hover hover:border-accent hover:text-accent transition-all duration-fast"
          title="Edit"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M13 2l3 3-9 9H4v-3l9-9z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <button
          onClick={() => onDelete(post.id)}
          className="w-10 h-10 flex items-center justify-center border border-border rounded-md bg-surface text-ink-soft hover:bg-error-light hover:border-error hover:text-error transition-all duration-fast"
          title="Delete"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M2 4h14M6 4V2h6v2M7 8v5M11 8v5M3 4h12v11c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V4z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;

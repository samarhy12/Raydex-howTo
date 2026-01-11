import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext.jsx";
import { postsAPI } from "../services/api.js";

const Home = () => {
  const { isAuthenticated } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    loadPosts();
  }, [searchQuery]);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const response = await postsAPI.getAll(searchQuery);
      setPosts(response.posts || []);
    } catch (error) {
      console.error("Error loading posts:", error);
      toast.error("Failed to load articles");
      // Fallback to empty array
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-surface via-paper to-paper border-b border-border-soft relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-container mx-auto px-6 md:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-light border border-accent/20 rounded-full text-sm font-medium text-accent mb-6 animate-fade-in">
              <Sparkles size={16} />
              Request Custom How-To Guides
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-ink mb-6 animate-fade-in stagger-1">
              Learn How To Build
              <br />
              <span className="text-gradient">Anything Worth Building</span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-ink-soft leading-relaxed mb-10 animate-fade-in stagger-2 max-w-2xl mx-auto">
              In-depth guides and tutorials for developers, designers, and
              makers. Can't find what you need? Request a custom guide with
              48-hour delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in stagger-3">
              <a
                href="#articles"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-surface rounded-lg font-medium transition-all duration-base hover:bg-accent-soft hover:-translate-y-1 hover:shadow-xl"
              >
                Browse Articles
                <ArrowRight size={18} />
              </a>
              {isAuthenticated ? (
                <Link
                  to="/request"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface text-accent border-2 border-accent rounded-lg font-medium transition-all duration-base hover:bg-accent-light hover:-translate-y-1 hover:shadow-xl"
                >
                  <Sparkles size={18} />
                  Request Custom Guide
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface text-accent border-2 border-accent rounded-lg font-medium transition-all duration-base hover:bg-accent-light hover:-translate-y-1 hover:shadow-xl"
                >
                  <Sparkles size={18} />
                  Get Started Free
                </Link>
              )}
            </div>

            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="max-w-2xl mx-auto relative animate-fade-in stagger-4"
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-ink-muted" />
                </div>
                <input
                  type="text"
                  className="w-full font-sans text-base py-5 pl-16 pr-16 border-2 border-border rounded-xl bg-surface text-ink placeholder-ink-muted shadow-lg transition-all duration-base focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light focus:shadow-xl"
                  placeholder="Search articles... (e.g., React, Flask, TypeScript)"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                {searchInput && (
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-hover rounded-md transition-all duration-fast"
                    onClick={() => {
                      setSearchInput("");
                      setSearchQuery("");
                    }}
                  >
                    ✕
                  </button>
                )}
              </div>
            </form>

            {searchQuery && (
              <p className="text-sm text-ink-soft mt-6 animate-fade-in">
                Showing results for{" "}
                <strong className="text-accent">"{searchQuery}"</strong>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section id="articles" className="py-20 md:py-24">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
              Latest Guides
            </h2>
            <span className="text-sm text-ink-muted">
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-[420px] bg-gradient-to-r from-surface via-hover to-surface bg-[length:200%_100%] animate-shimmer rounded-xl border border-border"
                />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-24 max-w-md mx-auto">
              <div className="text-7xl text-ink-muted opacity-20 mb-6">◇</div>
              <h3 className="font-serif text-2xl font-semibold text-ink mb-4">
                {searchQuery ? "No articles found" : "No articles yet"}
              </h3>
              <p className="text-base text-ink-soft leading-relaxed mb-8">
                {searchQuery
                  ? "Try adjusting your search terms or browse all articles"
                  : "Check back soon for new content"}
              </p>
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSearchInput("");
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-surface rounded-lg font-medium transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md"
                >
                  Clear Search
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <PostCard key={post.id} post={post} delay={index * 100} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {!searchQuery && (
        <section className="py-20 md:py-24 border-t border-border-soft">
          <div className="max-w-container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-accent-light to-accent-light/50 rounded-2xl p-12 border border-accent/20">
              <div className="text-5xl mb-6">🎯</div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
                Need Something Specific?
              </h2>
              <p className="text-lg text-ink-soft mb-8 leading-relaxed">
                Can't find the guide you're looking for? Request a custom how-to
                tutorial and we'll create it for you within 48 hours.
              </p>
              {isAuthenticated ? (
                <Link
                  to="/request"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-surface rounded-lg font-medium transition-all duration-base hover:bg-accent-soft hover:-translate-y-1 hover:shadow-xl"
                >
                  <Sparkles size={18} />
                  Request Custom Guide
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-surface rounded-lg font-medium transition-all duration-base hover:bg-accent-soft hover:-translate-y-1 hover:shadow-xl"
                >
                  Sign Up to Request
                  <ArrowRight size={18} />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

const PostCard = ({ post, delay }) => {
  const firstImage = post.content?.find((block) => block.type === "image");

  return (
    <Link
      to={`/post/${post.id}`}
      className="group flex flex-col bg-surface border border-border rounded-xl overflow-hidden transition-all duration-base hover:-translate-y-2 hover:shadow-xl hover:border-accent animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {firstImage ? (
        <div className="relative w-full h-56 bg-hover overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink/10" />
          <img
            src={`/static/uploads/${firstImage.data}`}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-110"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-full h-56 bg-gradient-to-br from-accent-light to-accent-light/30 flex items-center justify-center">
          <span className="text-6xl opacity-30">◆</span>
        </div>
      )}

      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex items-center gap-2 text-xs font-medium text-ink-muted uppercase tracking-wider">
          <time>{format(new Date(post.created_at), "MMM d, yyyy")}</time>
          <span className="opacity-50">•</span>
          <span>{post.views} views</span>
        </div>

        <h2 className="font-serif text-xl font-semibold text-ink leading-snug tracking-tight group-hover:text-accent transition-colors duration-fast line-clamp-2">
          {post.title}
        </h2>

        {post.subtitle && (
          <p className="font-sans text-sm text-ink-soft leading-relaxed line-clamp-2">
            {post.subtitle}
          </p>
        )}

        <div className="flex items-center justify-between pt-4 mt-auto border-t border-border-soft">
          <span className="text-xs text-ink-muted">By {post.author}</span>
          <span className="flex items-center gap-1 text-xs font-medium text-accent transition-all duration-fast group-hover:gap-2">
            Read article
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Home;

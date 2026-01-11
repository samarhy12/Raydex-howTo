import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Send, AlertCircle, Clock } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext.jsx";
import { questionRequestsAPI } from "../services/api.js";

const QuestionRequest = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "medium",
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const categories = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Database & Backend",
    "DevOps & Deployment",
    "Data Science & AI",
    "Business & Marketing",
    "Project Management",
    "Productivity Tools",
    "Other",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const requestData = {
        ...formData,
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
      };

      const result = await questionRequestsAPI.create(requestData);

      if (result.success) {
        // Store in localStorage for demo
        const existingRequests = JSON.parse(
          localStorage.getItem("questionRequests") || "[]"
        );
        existingRequests.push(result.request);
        localStorage.setItem(
          "questionRequests",
          JSON.stringify(existingRequests)
        );

        toast.success(
          "Request submitted successfully! We'll deliver within 48 hours."
        );
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
      console.error("Error submitting request:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const isFormValid =
    formData.title && formData.category && formData.description;

  return (
    <div className="min-h-screen py-12 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center">
              <span className="text-3xl">💡</span>
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">
            Request a How-To Guide
          </h1>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto">
            Tell us what you need help with, and we'll create a comprehensive
            tutorial just for you
          </p>
        </header>

        {/* 48hr Promise Banner */}
        <div className="bg-gradient-to-r from-accent-light to-accent-light/50 border border-accent/20 rounded-lg p-6 mb-8 animate-fade-in stagger-1">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <Clock size={20} className="text-surface" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-1">
                48-Hour Delivery Promise
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                We're committed to delivering your custom how-to guide within 48
                hours of submission. You'll receive a notification when it's
                ready, and it will appear in your dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Request Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 animate-fade-in stagger-2"
        >
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-ink mb-2"
            >
              What do you want to learn? *
            </label>
            <input
              type="text"
              id="title"
              className="w-full py-3.5 px-4 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
              placeholder="e.g., How to build a REST API with Flask"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
            <p className="mt-2 text-xs text-ink-muted">
              Be specific and clear about what you want to learn
            </p>
          </div>

          {/* Category and Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-semibold text-ink mb-2"
              >
                Category *
              </label>
              <select
                id="category"
                className="w-full py-3.5 px-4 border border-border rounded-lg bg-surface text-ink transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="priority"
                className="block text-sm font-semibold text-ink mb-2"
              >
                Priority Level
              </label>
              <select
                id="priority"
                className="w-full py-3.5 px-4 border border-border rounded-lg bg-surface text-ink transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
              >
                <option value="low">Low - Learning for fun</option>
                <option value="medium">Medium - For a project</option>
                <option value="high">High - Urgent need</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-ink mb-2"
            >
              Detailed Description *
            </label>
            <textarea
              id="description"
              rows="8"
              className="w-full py-3.5 px-4 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted resize-y min-h-[200px] leading-relaxed transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
              placeholder="Provide as much detail as possible about what you want to learn. Include:&#10;• Your current skill level&#10;• Specific technologies or tools you want to use&#10;• What you're trying to build or achieve&#10;• Any challenges you're facing&#10;• Preferred learning style (step-by-step, video, code examples, etc.)"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
            <p className="mt-2 text-xs text-ink-muted">
              The more details you provide, the better we can tailor the guide
              to your needs
            </p>
          </div>

          {/* Info Banner */}
          <div className="bg-info-light border border-info/20 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle size={20} className="text-info flex-shrink-0 mt-0.5" />
            <div className="text-sm text-ink-soft leading-relaxed">
              <strong className="text-ink">What happens next:</strong> Our team
              will review your request and create a comprehensive, step-by-step
              guide. You'll be notified via email when it's ready, and it will
              appear in your dashboard with links to the full article.
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
            <Link
              to="/dashboard"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 border border-border rounded-lg bg-surface text-ink-soft font-medium transition-all duration-base hover:bg-hover hover:border-accent hover:text-ink"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={submitting || !isFormValid}
              className="flex-1 group inline-flex items-center justify-center gap-2 py-3.5 px-6 border border-transparent rounded-lg text-surface bg-accent hover:bg-accent-soft focus:outline-none focus:ring-4 focus:ring-accent-light transition-all duration-base hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 font-medium"
            >
              {submitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-surface border-t-transparent rounded-full animate-spin-slow" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Submit Request
                  <span className="text-xs opacity-70 ml-1">
                    (48hr delivery)
                  </span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Help Text */}
        <div className="mt-12 pt-8 border-t border-border-soft text-center">
          <p className="text-sm text-ink-muted">
            Have questions about the request process?{" "}
            <Link
              to="/"
              className="text-accent hover:text-accent-soft font-medium"
            >
              View our guide articles
            </Link>{" "}
            or contact support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionRequest;

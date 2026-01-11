import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  CheckCircle,
  AlertCircle,
  Trash2,
  ExternalLink,
} from "lucide-react";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { questionRequestsAPI } from "../services/api.js";

const AdminRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    setLoading(true);
    try {
      const result = await questionRequestsAPI.getAll();

      if (result.success) {
        setRequests(result.requests);
        console.log("Loaded requests:", result.requests);
      } else {
        toast.error("Failed to load requests");
      }
    } catch (error) {
      console.error("Error loading requests:", error);
      const errorMessage =
        error.response?.data?.error || "Failed to load requests";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const result = await questionRequestsAPI.updateStatus(id, newStatus);

      if (result.success) {
        // Update local state
        setRequests(
          requests.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
        );
        toast.success(`Request marked as ${newStatus}`);
      }
    } catch (error) {
      console.error("Error updating status:", error);
      const errorMessage =
        error.response?.data?.error || "Failed to update status";
      toast.error(errorMessage);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this request?")) {
      return;
    }

    try {
      const result = await questionRequestsAPI.delete(id);

      if (result.success) {
        setRequests(requests.filter((r) => r.id !== id));
        toast.success("Request deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting request:", error);
      const errorMessage =
        error.response?.data?.error || "Failed to delete request";
      toast.error(errorMessage);
    }
  };

  const filteredRequests = requests.filter((req) => {
    if (filter === "all") return true;
    return req.status === filter;
  });

  const stats = {
    total: requests.length,
    pending: requests.filter((r) => r.status === "pending").length,
    inProgress: requests.filter((r) => r.status === "in-progress").length,
    completed: requests.filter((r) => r.status === "completed").length,
  };

  return (
    <div className="min-h-screen py-12 pb-20">
      <div className="max-w-container mx-auto px-6 md:px-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 mb-12 border-b-2 border-border">
          <div>
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-accent transition-colors mb-4 group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:-translate-x-1"
              >
                <path
                  d="M10 12L6 8l4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Dashboard
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-2 animate-fade-in">
              Question Requests
            </h1>
            <p className="text-base text-ink-soft animate-fade-in stagger-1">
              Manage and respond to user how-to guide requests
            </p>
          </div>
          <button
            onClick={loadRequests}
            className="inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-6 py-3 bg-surface border border-border text-ink-soft rounded-md transition-all duration-base hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:shadow-md"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform hover:rotate-180"
            >
              <path
                d="M14 8A6 6 0 1 1 8 2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8 2v4l2-2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Refresh
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <StatCard
            label="Total Requests"
            value={stats.total}
            icon="📝"
            color="border-ink/10"
          />
          <StatCard
            label="Pending"
            value={stats.pending}
            icon="⏳"
            color="border-warning/20 bg-warning-light/30"
          />
          <StatCard
            label="In Progress"
            value={stats.inProgress}
            icon="⚡"
            color="border-info/20 bg-info-light/30"
          />
          <StatCard
            label="Completed"
            value={stats.completed}
            icon="✅"
            color="border-success/20 bg-success-light/30"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          <FilterButton
            label="All Requests"
            count={stats.total}
            active={filter === "all"}
            onClick={() => setFilter("all")}
          />
          <FilterButton
            label="Pending"
            count={stats.pending}
            active={filter === "pending"}
            onClick={() => setFilter("pending")}
          />
          <FilterButton
            label="In Progress"
            count={stats.inProgress}
            active={filter === "in-progress"}
            onClick={() => setFilter("in-progress")}
          />
          <FilterButton
            label="Completed"
            count={stats.completed}
            active={filter === "completed"}
            onClick={() => setFilter("completed")}
          />
        </div>

        {/* Requests Table */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-32 bg-gradient-to-r from-surface via-hover to-surface bg-[length:200%_100%] animate-shimmer rounded-lg border border-border"
              />
            ))}
          </div>
        ) : filteredRequests.length === 0 ? (
          <div className="text-center py-20 bg-surface border-2 border-dashed border-border rounded-lg">
            <div className="text-6xl mb-6 opacity-30">📭</div>
            <h3 className="font-serif text-2xl font-semibold text-ink mb-4">
              {filter === "all" ? "No requests yet" : `No ${filter} requests`}
            </h3>
            <p className="text-base text-ink-soft">
              {filter === "all"
                ? "Waiting for users to submit their first how-to guide requests"
                : `No ${filter} requests at the moment`}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredRequests.map((request, index) => (
              <RequestRow
                key={request.id}
                request={request}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
                delay={index * 50}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ label, value, icon, color }) => (
  <div
    className={`bg-surface border ${color} rounded-lg p-4 md:p-6 transition-all duration-base hover:-translate-y-1 hover:shadow-md animate-fade-in`}
  >
    <div className="flex items-center justify-between mb-2">
      <span className="text-2xl md:text-3xl">{icon}</span>
      <div className="font-serif text-2xl md:text-3xl font-bold text-ink">
        {value}
      </div>
    </div>
    <div className="text-xs md:text-sm font-medium text-ink-muted">{label}</div>
  </div>
);

const FilterButton = ({ label, count, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-base ${
      active
        ? "bg-accent text-surface shadow-md"
        : "bg-surface text-ink-soft border border-border hover:border-accent hover:text-accent"
    }`}
  >
    {label} <span className="opacity-70">({count})</span>
  </button>
);

const RequestRow = ({ request, onStatusChange, onDelete, delay }) => {
  const statusConfig = {
    pending: {
      color: "bg-warning-light text-warning border-warning/20",
      icon: <Clock size={16} />,
    },
    "in-progress": {
      color: "bg-info-light text-info border-info/20",
      icon: <AlertCircle size={16} />,
    },
    completed: {
      color: "bg-success-light text-success border-success/20",
      icon: <CheckCircle size={16} />,
    },
  };

  const status = statusConfig[request.status] || statusConfig.pending;

  return (
    <div
      className="bg-surface border border-border rounded-lg p-6 transition-all duration-base hover:border-accent hover:shadow-md animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-1">
              <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                {request.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-3 line-clamp-2">
                {request.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <span className="px-2 py-1 bg-hover rounded text-ink-soft font-medium">
                    {request.category}
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      request.priority === "high"
                        ? "bg-error"
                        : request.priority === "medium"
                        ? "bg-warning"
                        : "bg-success"
                    }`}
                  />
                  {request.priority} priority
                </span>
                <span>
                  {format(new Date(request.createdAt), "MMM d, yyyy • h:mm a")}
                </span>
              </div>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${status.color} flex-shrink-0`}
            >
              {status.icon}
              {request.status}
            </span>
          </div>

          {/* User Info */}
          <div className="mt-4 pt-4 border-t border-border-soft">
            <div className="flex items-center gap-2 text-sm text-ink-soft">
              <span className="font-medium">Requested by:</span>
              <span>{request.userName}</span>
              <span className="opacity-50">•</span>
              <span className="text-ink-muted">{request.userEmail}</span>
            </div>
          </div>

          {/* Delivery Info */}
          {(request.estimatedDelivery || request.completedAt) && (
            <div className="mt-2 flex items-center gap-4 text-xs text-ink-muted">
              {request.estimatedDelivery && request.status !== "completed" && (
                <span className="flex items-center gap-1.5">
                  <Clock size={12} />
                  Est. delivery:{" "}
                  {format(new Date(request.estimatedDelivery), "MMM d, yyyy")}
                </span>
              )}
              {request.completedAt && (
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={12} />
                  Completed:{" "}
                  {format(new Date(request.completedAt), "MMM d, yyyy")}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex lg:flex-col gap-2 lg:min-w-[140px]">
          {request.status === "pending" && (
            <button
              onClick={() => onStatusChange(request.id, "in-progress")}
              className="flex-1 lg:flex-none px-4 py-2 text-sm font-medium bg-info-light text-info border border-info/20 rounded-md hover:bg-info hover:text-surface transition-all duration-fast"
            >
              Start Work
            </button>
          )}
          {request.status === "in-progress" && (
            <button
              onClick={() => onStatusChange(request.id, "completed")}
              className="flex-1 lg:flex-none px-4 py-2 text-sm font-medium bg-success-light text-success border border-success/20 rounded-md hover:bg-success hover:text-surface transition-all duration-fast"
            >
              Mark Done
            </button>
          )}
          {request.status === "completed" && request.articleId && (
            <Link
              to={`/post/${request.articleId}`}
              className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-accent-light text-accent border border-accent/20 rounded-md hover:bg-accent hover:text-surface transition-all duration-fast"
            >
              <ExternalLink size={14} />
              View Post
            </Link>
          )}
          <button
            onClick={() => onDelete(request.id)}
            className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-error-light text-error border border-error/20 rounded-md hover:bg-error hover:text-surface transition-all duration-fast"
          >
            <Trash2 size={14} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminRequests;

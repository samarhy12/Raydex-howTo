import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus, Clock, CheckCircle, AlertCircle, Calendar } from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import { useAuth } from "../contexts/AuthContext.jsx";
import { questionRequestsAPI } from "../services/api.js";

const Dashboard = () => {
  const { user } = useAuth();
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
      }
    } catch (error) {
      console.error("Error loading requests:", error);
    } finally {
      setLoading(false);
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-2 animate-fade-in">
              My Dashboard
            </h1>
            <p className="text-base text-ink-soft animate-fade-in stagger-1">
              Track your how-to guide requests and their progress
            </p>
          </div>
          <Link
            to="/request"
            className="inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-6 py-3 bg-accent text-surface rounded-md transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md animate-fade-in stagger-2"
          >
            <Plus size={18} />
            New Request
          </Link>
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

        {/* Requests List */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-40 bg-gradient-to-r from-surface via-hover to-surface bg-[length:200%_100%] animate-shimmer rounded-lg border border-border"
              />
            ))}
          </div>
        ) : filteredRequests.length === 0 ? (
          <div className="text-center py-20 bg-surface border-2 border-dashed border-border rounded-lg">
            <div className="text-6xl mb-6 opacity-30">📭</div>
            <h3 className="font-serif text-2xl font-semibold text-ink mb-4">
              {filter === "all" ? "No requests yet" : `No ${filter} requests`}
            </h3>
            <p className="text-base text-ink-soft mb-8 max-w-md mx-auto">
              {filter === "all"
                ? "Haven't requested any how-to guides yet. Submit your first request to get started!"
                : `You don't have any ${filter} requests at the moment.`}
            </p>
            {filter === "all" && (
              <Link
                to="/request"
                className="inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-6 py-3 bg-accent text-surface rounded-md transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md"
              >
                <Plus size={18} />
                Submit Your First Request
              </Link>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredRequests.map((request, index) => (
              <RequestCard
                key={request.id}
                request={request}
                delay={index * 100}
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

const RequestCard = ({ request, delay }) => {
  const statusConfig = {
    pending: {
      color: "bg-warning-light text-warning border-warning/20",
      icon: <Clock size={16} />,
      label: "Pending Review",
    },
    "in-progress": {
      color: "bg-info-light text-info border-info/20",
      icon: <AlertCircle size={16} />,
      label: "In Progress",
    },
    completed: {
      color: "bg-success-light text-success border-success/20",
      icon: <CheckCircle size={16} />,
      label: "Completed",
    },
  };

  const status = statusConfig[request.status] || statusConfig.pending;
  const estimatedDelivery = request.estimatedDelivery
    ? new Date(request.estimatedDelivery)
    : null;
  const isOverdue =
    estimatedDelivery &&
    estimatedDelivery < new Date() &&
    request.status !== "completed";

  return (
    <div
      className="bg-surface border border-border rounded-lg p-6 transition-all duration-base hover:border-accent hover:shadow-md animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-3">
            <h3 className="font-serif text-xl font-semibold text-ink flex-1">
              {request.title}
            </h3>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${status.color}`}
            >
              {status.icon}
              {status.label}
            </span>
          </div>

          <p className="text-sm text-ink-soft leading-relaxed mb-4 line-clamp-2">
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
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDistanceToNow(new Date(request.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Delivery Estimate */}
      {request.status !== "completed" && estimatedDelivery && (
        <div
          className={`mt-4 pt-4 border-t border-border-soft ${
            isOverdue ? "text-error" : "text-ink-soft"
          }`}
        >
          <div className="flex items-center gap-2 text-sm">
            <Clock size={16} />
            <span className="font-medium">
              {isOverdue ? "Overdue" : "Estimated delivery"}:
            </span>
            <span>{format(estimatedDelivery, "MMM d, yyyy • h:mm a")}</span>
            <span className="text-xs opacity-70">
              ({formatDistanceToNow(estimatedDelivery, { addSuffix: true })})
            </span>
          </div>
        </div>
      )}

      {/* Completed with article link */}
      {request.status === "completed" && request.articleId && (
        <div className="mt-4 pt-4 border-t border-border-soft">
          <Link
            to={`/post/${request.articleId}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-soft transition-colors"
          >
            View Published Article →
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

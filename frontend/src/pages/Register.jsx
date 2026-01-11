import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "../contexts/AuthContext.jsx";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    const result = await register(
      formData.name,
      formData.email,
      formData.password
    );

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 animate-fade-in-up">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <span className="text-4xl text-accent animate-bounce-subtle">
              ◆
            </span>
          </div>
          <h2 className="font-serif text-4xl font-bold text-ink mb-2">
            Join Raydex How-To
          </h2>
          <p className="text-base text-ink-soft">
            Create your account and start requesting custom how-to guides
          </p>
        </div>

        {/* Register Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-error-light border border-error/20 rounded-lg p-4 text-sm text-error">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-ink mb-2"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-ink-muted" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-ink mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-ink-muted" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-ink mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-ink-muted" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={6}
                  className="w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <p className="mt-1 text-xs text-ink-muted">
                Must be at least 6 characters
              </p>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-ink mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-ink-muted" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group w-full flex items-center justify-center gap-2 py-3.5 px-4 border border-transparent text-sm font-medium rounded-lg text-surface bg-accent hover:bg-accent-soft focus:outline-none focus:ring-4 focus:ring-accent-light transition-all duration-base hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-surface border-t-transparent rounded-full animate-spin-slow" />
            ) : (
              <>
                Create Account
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-ink-soft">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-accent hover:text-accent-soft transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

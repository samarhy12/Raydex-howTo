import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "../contexts/AuthContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await login(formData.email, formData.password);

    if (result.success) {
      navigate(from, { replace: true });
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
            Welcome Back
          </h2>
          <p className="text-base text-ink-soft">
            Login to access your account and request how-to guides
          </p>
        </div>

        {/* Demo Credentials */}
        <div className="bg-info-light border border-info/20 rounded-lg p-4">
          <p className="text-sm font-medium text-ink mb-2">Demo Credentials:</p>
          <div className="space-y-1 text-xs text-ink-soft">
            <p>
              <strong>Admin:</strong> admin@raydex.com / admin123
            </p>
            <p>
              <strong>User:</strong> Any email / password (6+ chars)
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
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
                  autoComplete="current-password"
                  required
                  className="w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
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
                Sign In
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
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-accent hover:text-accent-soft transition-colors"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  User,
  LogOut,
  Settings,
  FileText,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext.jsx";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef(null);

  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border">
      <div className="max-w-container mx-auto px-6 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-4 group transition-transform duration-base hover:translate-x-0.5"
          >
            <span className="text-xl text-accent leading-none group-hover:animate-bounce-subtle">
              ◆
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="font-serif text-lg font-semibold text-ink leading-none tracking-tight">
                Raydex
              </span>
              <span className="font-sans text-xs font-medium text-ink-muted uppercase tracking-widest leading-none hidden sm:block">
                How-To
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 md:gap-6">
            {isAdminRoute ? (
              // Admin Navigation
              <>
                <Link
                  to="/admin"
                  className={`relative font-sans text-sm font-medium px-3 py-2 rounded-sm transition-all duration-fast hidden md:block ${
                    location.pathname === "/admin"
                      ? "text-accent"
                      : "text-ink-soft hover:text-ink hover:bg-hover"
                  }`}
                >
                  Dashboard
                  {location.pathname === "/admin" && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                  )}
                </Link>
                <Link
                  to="/admin/requests"
                  className={`relative font-sans text-sm font-medium px-3 py-2 rounded-sm transition-all duration-fast hidden md:block ${
                    location.pathname === "/admin/requests"
                      ? "text-accent"
                      : "text-ink-soft hover:text-ink hover:bg-hover"
                  }`}
                >
                  Requests
                  {location.pathname === "/admin/requests" && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                  )}
                </Link>
                <Link
                  to="/"
                  className="font-sans text-sm font-medium text-accent px-4 py-2 border border-border rounded-md transition-all duration-base hover:bg-accent hover:text-surface hover:border-accent hover:-translate-y-0.5"
                >
                  ← View Site
                </Link>
              </>
            ) : (
              // Public Navigation
              <>
                <Link
                  to="/"
                  className={`relative font-sans text-sm font-medium px-3 py-2 rounded-sm transition-all duration-fast hidden md:block ${
                    location.pathname === "/"
                      ? "text-accent"
                      : "text-ink-soft hover:text-ink hover:bg-hover"
                  }`}
                >
                  Articles
                  {location.pathname === "/" && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                  )}
                </Link>

                {isAuthenticated && (
                  <Link
                    to="/dashboard"
                    className={`relative font-sans text-sm font-medium px-3 py-2 rounded-sm transition-all duration-fast hidden md:block ${
                      location.pathname === "/dashboard"
                        ? "text-accent"
                        : "text-ink-soft hover:text-ink hover:bg-hover"
                    }`}
                  >
                    My Requests
                    {location.pathname === "/dashboard" && (
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                    )}
                  </Link>
                )}
              </>
            )}

            {/* User Menu / Auth Buttons */}
            {isAuthenticated ? (
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-base hover:bg-hover"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-soft flex items-center justify-center font-serif text-sm font-semibold text-surface">
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <span className="hidden md:block font-sans text-sm font-medium text-ink">
                    {user?.name}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 glass rounded-lg shadow-xl py-2 animate-fade-in">
                    <div className="px-4 py-3 border-b border-border-soft">
                      <p className="text-sm font-semibold text-ink">
                        {user?.name}
                      </p>
                      <p className="text-xs text-ink-muted truncate">
                        {user?.email}
                      </p>
                      {isAdmin && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-accent-light text-accent rounded">
                          Admin
                        </span>
                      )}
                    </div>

                    <div className="py-2">
                      {!isAdminRoute && (
                        <Link
                          to="/dashboard"
                          className="flex items-center gap-3 px-4 py-2 text-sm text-ink-soft hover:text-ink hover:bg-hover transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <FileText size={16} />
                          My Requests
                        </Link>
                      )}

                      <Link
                        to="/profile"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-ink-soft hover:text-ink hover:bg-hover transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <Settings size={16} />
                        Settings
                      </Link>

                      {isAdmin && !isAdminRoute && (
                        <Link
                          to="/admin"
                          className="flex items-center gap-3 px-4 py-2 text-sm text-accent hover:bg-accent-light transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <User size={16} />
                          Admin Panel
                        </Link>
                      )}
                    </div>

                    <div className="border-t border-border-soft pt-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-2 w-full text-sm text-error hover:bg-error-light transition-colors"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="flex items-center gap-2 font-sans text-sm font-medium text-ink-soft px-4 py-2 rounded-md transition-all duration-base hover:text-ink hover:bg-hover"
                >
                  <LogIn size={16} />
                  <span className="hidden md:inline">Login</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center gap-2 font-sans text-sm font-medium text-surface px-4 py-2 bg-accent rounded-md transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md"
                >
                  <UserPlus size={16} />
                  <span className="hidden md:inline">Sign Up</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

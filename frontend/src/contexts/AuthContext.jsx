import React, { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../services/api";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);

        // Verify token is still valid by making a test request
        verifyToken(parsedUser);
      } catch (error) {
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const verifyToken = async (userData) => {
    try {
      // Make a simple authenticated request to verify token
      await api.get("/auth/verify");
    } catch (error) {
      // Token is invalid, clear storage
      if (error.response?.status === 401) {
        localStorage.removeItem("user");
        setUser(null);
      }
    }
  };

  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });

      if (response.data.success) {
        const userData = {
          ...response.data.user,
          token: response.data.token,
        };

        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));

        if (userData.role === "admin") {
          toast.success("Welcome back, Admin!");
        } else {
          toast.success(`Welcome back, ${userData.name}!`);
        }

        return { success: true, user: userData };
      }

      toast.error(response.data.error || "Login failed");
      return { success: false, error: response.data.error };
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Login failed. Please try again.";
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        const userData = {
          ...response.data.user,
          token: response.data.token,
        };

        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        toast.success(`Welcome to Raydex How-To, ${name}!`);

        return { success: true, user: userData };
      }

      toast.error(response.data.error || "Registration failed");
      return { success: false, error: response.data.error };
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Registration failed. Please try again.";
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
  };

  const updateProfile = async (updates) => {
    try {
      // If there's an API endpoint for profile updates, use it
      // For now, just update locally
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      toast.success("Profile updated successfully");
      return { success: true };
    } catch (error) {
      toast.error("Failed to update profile");
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-3 border-border border-t-accent rounded-full animate-spin-slow" />
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

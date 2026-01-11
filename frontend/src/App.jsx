import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Navigation from "./components/Navigation.jsx";

// Public Pages
import Home from "./pages/Home.jsx";
import Post from "./pages/Post.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

// Protected User Pages
import Dashboard from "./pages/Dashboard.jsx";
import QuestionRequest from "./pages/QuestionRequest.jsx";
import Profile from "./pages/Profile.jsx";

// Protected Admin Pages
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminRequests from "./pages/AdminRequests.jsx";
import PostEditor from "./pages/PostEditor.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-paper">
          <Navigation />
          <main className="flex-1">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Protected User Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/request"
                element={
                  <ProtectedRoute>
                    <QuestionRequest />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              {/* Protected Admin Routes */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute adminOnly>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/requests"
                element={
                  <ProtectedRoute adminOnly>
                    <AdminRequests />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/create"
                element={
                  <ProtectedRoute adminOnly>
                    <PostEditor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/edit/:id"
                element={
                  <ProtectedRoute adminOnly>
                    <PostEditor />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#FFFFFF",
              color: "#1A1917",
              border: "1px solid #E5E3DC",
              borderRadius: "8px",
              padding: "16px",
              fontSize: "14px",
            },
            success: {
              iconTheme: {
                primary: "#2C5F2D",
                secondary: "#FFFFFF",
              },
            },
            error: {
              iconTheme: {
                primary: "#8B2C2C",
                secondary: "#FFFFFF",
              },
            },
          }}
        />
      </Router>
    </AuthProvider>
  );
}

const Footer = () => {
  return (
    <footer className="mt-auto py-12 border-t border-border bg-surface">
      <div className="max-w-container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-lg text-accent opacity-70">◆</span>
            <div className="flex flex-col gap-1">
              <span className="font-serif text-base font-semibold text-ink">
                Raydex How-To
              </span>
              <span className="font-sans text-xs text-ink-muted italic">
                Knowledge worth sharing
              </span>
            </div>
          </div>
          <div className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Agyarey Raphael. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;

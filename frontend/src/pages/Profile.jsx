import React, { useState } from "react";
import { User, Mail, Lock, Camera, Save, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [saving, setSaving] = useState(false);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      updateProfile(profileData);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setSaving(true);

    try {
      // In production, this would be an API call
      toast.success("Password updated successfully!");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error("Failed to update password");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      logout();
      navigate("/");
      toast.success("Account deleted successfully");
    }
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateProfile({ avatar: event.target.result });
        toast.success("Avatar updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen py-12 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Header */}
        <header className="pb-8 mb-12 border-b-2 border-border animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-2">
            Account Settings
          </h1>
          <p className="text-base text-ink-soft">
            Manage your profile, security, and preferences
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2 sticky top-24">
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-base ${
                  activeTab === "profile"
                    ? "bg-accent text-surface"
                    : "text-ink-soft hover:bg-hover hover:text-ink"
                }`}
              >
                <User size={18} />
                Profile
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-base ${
                  activeTab === "security"
                    ? "bg-accent text-surface"
                    : "text-ink-soft hover:bg-hover hover:text-ink"
                }`}
              >
                <Lock size={18} />
                Security
              </button>
              <button
                onClick={() => setActiveTab("danger")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-base ${
                  activeTab === "danger"
                    ? "bg-error text-surface"
                    : "text-ink-soft hover:bg-error-light hover:text-error"
                }`}
              >
                <Trash2 size={18} />
                Danger Zone
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="animate-fade-in">
                <div className="bg-surface border border-border rounded-lg p-6 md:p-8">
                  <h2 className="font-serif text-2xl font-semibold text-ink mb-6">
                    Profile Information
                  </h2>

                  {/* Avatar Upload */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-ink mb-4">
                      Profile Picture
                    </label>
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent-soft flex items-center justify-center font-serif text-3xl font-semibold text-surface overflow-hidden">
                          {user?.avatar ? (
                            <img
                              src={user.avatar}
                              alt={user.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            user?.name?.charAt(0).toUpperCase()
                          )}
                        </div>
                        <label className="absolute bottom-0 right-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent-soft transition-colors shadow-md">
                          <Camera size={16} className="text-surface" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleAvatarUpload}
                          />
                        </label>
                      </div>
                      <div>
                        <p className="text-sm text-ink-soft mb-1">
                          Upload a new profile picture
                        </p>
                        <p className="text-xs text-ink-muted">
                          JPG, PNG or GIF. Max size 2MB.
                        </p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleProfileUpdate} className="space-y-6">
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
                          type="text"
                          id="name"
                          className="w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                          value={profileData.name}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              name: e.target.value,
                            })
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
                          type="email"
                          id="email"
                          className="w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                          value={profileData.email}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="submit"
                        disabled={saving}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-surface rounded-lg font-medium transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Save size={18} />
                        {saving ? "Saving..." : "Save Changes"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="animate-fade-in">
                <div className="bg-surface border border-border rounded-lg p-6 md:p-8">
                  <h2 className="font-serif text-2xl font-semibold text-ink mb-6">
                    Change Password
                  </h2>

                  <form onSubmit={handlePasswordUpdate} className="space-y-6">
                    <div>
                      <label
                        htmlFor="currentPassword"
                        className="block text-sm font-medium text-ink mb-2"
                      >
                        Current Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Lock size={18} className="text-ink-muted" />
                        </div>
                        <input
                          type="password"
                          id="currentPassword"
                          className="w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                          placeholder="••••••••"
                          value={passwordData.currentPassword}
                          onChange={(e) =>
                            setPasswordData({
                              ...passwordData,
                              currentPassword: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="newPassword"
                        className="block text-sm font-medium text-ink mb-2"
                      >
                        New Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Lock size={18} className="text-ink-muted" />
                        </div>
                        <input
                          type="password"
                          id="newPassword"
                          className="w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                          placeholder="••••••••"
                          value={passwordData.newPassword}
                          onChange={(e) =>
                            setPasswordData({
                              ...passwordData,
                              newPassword: e.target.value,
                            })
                          }
                          required
                          minLength={6}
                        />
                      </div>
                      <p className="mt-2 text-xs text-ink-muted">
                        Must be at least 6 characters
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-ink mb-2"
                      >
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Lock size={18} className="text-ink-muted" />
                        </div>
                        <input
                          type="password"
                          id="confirmPassword"
                          className="w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light"
                          placeholder="••••••••"
                          value={passwordData.confirmPassword}
                          onChange={(e) =>
                            setPasswordData({
                              ...passwordData,
                              confirmPassword: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="submit"
                        disabled={saving}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-surface rounded-lg font-medium transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Lock size={18} />
                        {saving ? "Updating..." : "Update Password"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Danger Zone Tab */}
            {activeTab === "danger" && (
              <div className="animate-fade-in">
                <div className="bg-error-light border-2 border-error/30 rounded-lg p-6 md:p-8">
                  <h2 className="font-serif text-2xl font-semibold text-error mb-4">
                    Delete Account
                  </h2>
                  <p className="text-sm text-ink-soft mb-6 leading-relaxed">
                    Once you delete your account, there is no going back. This
                    will permanently delete your profile, all your question
                    requests, and remove your access to the platform.
                  </p>
                  <button
                    onClick={handleDeleteAccount}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-error text-surface rounded-lg font-medium transition-all duration-base hover:bg-error/90 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <Trash2 size={18} />
                    Delete My Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

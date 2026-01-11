import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");
  if (user) {
    try {
      const { token } = JSON.parse(user);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error parsing user token:", error);
    }
  }
  return config;
});

// Add response interceptor for better error logging and token expiry handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });

    // Handle token expiry
    if (
      error.response?.status === 401 &&
      error.response?.data?.error?.includes("Token")
    ) {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

// ==================== Authentication API ====================

export const authAPI = {
  login: async (email, password) => {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  },

  register: async (name, email, password) => {
    const response = await api.post("/auth/register", {
      name,
      email,
      password,
    });
    return response.data;
  },

  verify: async () => {
    const response = await api.get("/auth/verify");
    return response.data;
  },
};

// ==================== Posts API ====================

export const postsAPI = {
  getAll: async (searchQuery = "") => {
    const url = searchQuery
      ? `/posts?q=${encodeURIComponent(searchQuery)}`
      : "/posts";
    const response = await api.get(url);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },

  create: async (formData) => {
    const response = await api.post("/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  update: async (id, formData) => {
    const response = await api.put(`/posts/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  },
};

// ==================== Comments API ====================

export const commentsAPI = {
  getAll: async (postId) => {
    const response = await api.get(`/posts/${postId}/comments`);
    return response.data;
  },

  add: async (postId, commentData) => {
    const formData = new FormData();
    formData.append("name", commentData.name);
    formData.append("email", commentData.email);
    formData.append("comment", commentData.comment);

    const response = await api.post(`/posts/${postId}/comments`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  getAllAdmin: async () => {
    const response = await api.get("/admin/comments");
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/comments/${id}`);
    return response.data;
  },
};

// ==================== Question Requests API ====================

export const questionRequestsAPI = {
  create: async (questionData) => {
    const response = await api.post("/requests", questionData);
    return response.data;
  },

  getAll: async () => {
    const response = await api.get("/requests");
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/requests/${id}`);
    return response.data;
  },

  updateStatus: async (
    id,
    status,
    estimatedDelivery = null,
    articleId = null
  ) => {
    const data = { status };
    if (estimatedDelivery) data.estimated_delivery = estimatedDelivery;
    if (articleId) data.article_id = articleId;

    const response = await api.put(`/requests/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/requests/${id}`);
    return response.data;
  },
};

// ==================== Admin API ====================

export const adminAPI = {
  getDashboard: async () => {
    const response = await api.get("/admin/dashboard");
    return response.data;
  },

  getComments: async () => {
    const response = await api.get("/admin/comments");
    return response.data;
  },
};

export default api;

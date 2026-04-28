// admin/src/api/client.ts

import axios from 'axios';

const API_BASE_URL = '/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available (for future enhancement)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Site Content API
export const contentApi = {
  getAll: () => apiClient.get('/content').then(res => res.data),
  update: (key: string, data: { zh: string; en: string; module?: string; type?: string }) =>
    apiClient.put(`/content/${key}`, data).then(res => res.data),
};

// News API
export const newsApi = {
  getAll: () => apiClient.get('/news').then(res => res.data),
  create: (data: { date: string; title_zh: string; title_en: string; desc_zh: string; desc_en: string; image_url: string }) =>
    apiClient.post('/news', data).then(res => res.data),
  update: (id: number, data: any) =>
    apiClient.put(`/news/${id}`, data).then(res => res.data),
  delete: (id: number) =>
    apiClient.delete(`/news/${id}`).then(res => res.data),
};

// Questions (FAQ) API
export const questionsApi = {
  getAll: () => apiClient.get('/questions').then(res => res.data),
  create: (data: { text_zh: string; text_en: string; display_order: number }) =>
    apiClient.post('/questions', data).then(res => res.data),
  update: (id: number, data: any) =>
    apiClient.put(`/questions/${id}`, data).then(res => res.data),
  delete: (id: number) =>
    apiClient.delete(`/questions/${id}`).then(res => res.data),
};

// Navigation API
export const navigationApi = {
  getAll: () => apiClient.get('/navigation').then(res => res.data),
  create: (data: { name_zh: string; name_en: string; href: string; display_order: number }) =>
    apiClient.post('/navigation', data).then(res => res.data),
  update: (id: number, data: any) =>
    apiClient.put(`/navigation/${id}`, data).then(res => res.data),
  delete: (id: number) =>
    apiClient.delete(`/navigation/${id}`).then(res => res.data),
};

// Contact Info API
export const contactInfoApi = {
  getAll: () => apiClient.get('/contact').then(res => res.data),
  update: (id: number, data: { value: string; label_zh: string; label_en: string }) =>
    apiClient.put(`/contact/${id}`, data).then(res => res.data),
};

// Contact Submissions API
export const contactSubmissionsApi = {
  getAll: (role?: string) => 
    role ? apiClient.get('/contact-submissions', { params: { role } }).then(res => res.data) :
    apiClient.get('/contact-submissions').then(res => res.data),
  
  updateStatus: (id: number, status: 'pending' | 'contacted' | 'closed', adminNote: string) =>
    apiClient.put(`/contact-submissions/${id}`, { status, admin_note: adminNote }).then(res => res.data),
  
  delete: (id: number) =>
    apiClient.delete(`/contact-submissions/${id}`).then(res => res.data),
};

// Member API
export const memberApi = {
  getAll: () => apiClient.get('/members').then(res => res.data),
  create: (data: { name: string; phone: string }) =>
    apiClient.post('/members', data).then(res => res.data),
  update: (id: number, data: { name: string; phone: string }) =>
    apiClient.put(`/members/${id}`, data).then(res => res.data),
  delete: (id: number) =>
    apiClient.delete(`/members/${id}`).then(res => res.data),
};

// Auth API
export const authApi = {
  login: (phone: string) =>
    apiClient.post('/login', { phone }).then(res => res.data),
  logout: () => {
    localStorage.removeItem('auth_token');
  },
};

// File Upload API
export const uploadApi = {
  upload: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    return apiClient.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(res => res.data);
  },
};

export default apiClient;

import axios from 'axios';

// Remove /api suffix if present to have a clean base URL
let API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
if (API_URL.endsWith('/api')) {
    API_URL = API_URL.replace(/\/api$/, '');
}

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to add JWT token if exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("admin_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Public API calls
export const getPersonalProfile = () => api.get('/api/public/personal-profile');
export const getAboutSection = () => api.get('/api/public/about');
export const getProjects = () => api.get('/api/public/projects');
export const getSkills = () => api.get('/api/public/skills');
export const getExperience = () => api.get('/api/public/experience');
export const getEducation = () => api.get('/api/public/education');
export const getAchievements = () => api.get('/api/public/achievements');
export const getSocialLinks = () => api.get('/api/public/social-links');

// Admin Auth
export const loginAdmin = (username, password) => {
    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);
    return api.post('/api/token', formData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
};

// Generic Admin CRUD
export const adminGet = (endpoint) => api.get(`/api/public/${endpoint}`);
export const adminCreate = (endpoint, data) => api.post(`/api/admin/${endpoint}`, data);
export const adminUpdate = (endpoint, id, data) => api.put(`/api/admin/${endpoint}/${id}`, data);
export const adminDelete = (endpoint, id) => api.delete(`/api/admin/${endpoint}/${id}`);

// Singleton Admin updates
export const adminUpdateProfile = (data) => api.put(`/api/admin/personal-profile`, data);
export const adminUpdateAbout = (data) => api.put(`/api/admin/about`, data);

export default api;

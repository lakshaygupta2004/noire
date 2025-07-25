import axios from 'axios';

// Ensure baseURL ends with '/api/auth' even if VITE_API_URL ends with '/api'
const baseApiUrl = import.meta.env.VITE_API_URL || '/api/auth';

const API = axios.create({
  baseURL: baseApiUrl.endsWith('/api')
    ? `${baseApiUrl}/auth`
    : baseApiUrl, // fallback: if VITE_API_URL already has /auth, use as-is
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = (userData) => API.post('/register', userData);
export const loginUser = (userData) => API.post('/login', userData);

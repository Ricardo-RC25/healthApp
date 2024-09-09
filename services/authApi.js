// services/api.js
import axios from 'axios';

const API_URL = 'https://backend-0n0t.onrender.com';

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export const login = () => {
  return apiClient.post('/api/auth/login');
};

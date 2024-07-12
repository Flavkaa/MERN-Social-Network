import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000,
});

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

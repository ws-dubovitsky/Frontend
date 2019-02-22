import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 60000,
  headers: { Authorization: localStorage.getItem('usertoken') },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('usertoken');

  if (token != null) {
    config.headers.Authorization = token;
  }

  return config;
}, err => Promise.reject(err));

export const checkLogin = () => axiosInstance.get('/auth');

export const register = newUser => axiosInstance.post('auth/signup', newUser);

export const login = user => axiosInstance
  .post('auth/login/', user);

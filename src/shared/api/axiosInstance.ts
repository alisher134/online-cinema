import axios, { type CreateAxiosDefaults } from 'axios';

import { authApi, getAccessTokenFromCookies, setAccessTokenToCookie } from '@/entities/auth';

import { ENV_CONFIG } from '../config/env';
import { ROUTES } from '../config/routes';

const AxiosConfig: CreateAxiosDefaults = {
  baseURL: ENV_CONFIG.apiUrl,
  withCredentials: true,
};

export const publicApi = axios.create(AxiosConfig);

export const axiosInstance = axios.create(AxiosConfig);

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getAccessTokenFromCookies();
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await authApi.refresh();

        if (data) setAccessTokenToCookie(data.accessToken);

        return axiosInstance(originalRequest);
      } catch (error) {
        window.location.href = ROUTES.auth.login.page;
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

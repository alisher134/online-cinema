import axios, { type CreateAxiosDefaults } from 'axios';

import {
  authApi,
  getAccessTokenFromCookies,
  removeAccessTokenFromCookie,
  setAccessTokenToCookie,
} from '@/entities/auth';

const AxiosConfig: CreateAxiosDefaults = {
  baseURL: '/api/v1',
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
        removeAccessTokenFromCookie();
        await authApi.logout();
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

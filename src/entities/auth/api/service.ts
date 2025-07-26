import type { LoginFormFields } from '@/features/auth/login';

import type { User } from '@/entities/profile';

import { axiosInstance, publicApi } from '@/shared/api';

import { AUTH_API_URLS } from '../model/constants';
import type { AccessToken, AuthResponse, RegisterDto } from '../model/types';

export const authService = {
  async getMe() {
    return axiosInstance.get<User>(AUTH_API_URLS.getMe);
  },

  async login(dto: LoginFormFields) {
    return publicApi.post<AuthResponse>(AUTH_API_URLS.login, dto);
  },

  async register(dto: RegisterDto) {
    return publicApi.post<AuthResponse>(AUTH_API_URLS.register, dto);
  },

  async refresh() {
    return publicApi.post<AccessToken>(AUTH_API_URLS.refresh);
  },

  async logout() {
    return publicApi.post(AUTH_API_URLS.logout);
  },
};

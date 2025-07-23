import type { LoginFormFields } from '@/widgets/auth/login';

import { publicApi } from '@/shared/api';

import { AUTH_API_URLS } from '../model/authConstants';
import type { AccessToken, AuthResponse, RegisterDto } from '../model/authTypes';

export const authApi = {
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

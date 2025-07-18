import type { LoginFormFields } from '@/widgets/auth/login';
import type { RegisterFormFields } from '@/widgets/auth/register';

import { publicApi } from '@/shared/api';

import { AUTH_API_URLS } from '../model/authConstants';
import type { AuthResponse } from '../model/authTypes';

export const authApi = {
  async login(dto: LoginFormFields) {
    return publicApi.post<AuthResponse>(AUTH_API_URLS.login, dto);
  },

  async register(dto: RegisterFormFields) {
    return publicApi.post<AuthResponse>(AUTH_API_URLS.register, dto);
  },
};

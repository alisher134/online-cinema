import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ExtraArgument } from '@/app/providers/store';

import type { LoginFormFields } from '@/features/auth/login';

import { USER_LS_KEY } from '@/entities/profile';

import { ROUTES } from '@/shared/config/routes';
import { removeFromLS } from '@/shared/helpers/local-storage';
import { errorHandler } from '@/shared/libs';

import { removeAccessTokenFromCookie, setAccessTokenToCookie } from '../lib/cookies';

import { AUTH_MESSAGES } from './constants';
import type { AuthResponse, RegisterDto } from './types';

export const loginThunk = createAsyncThunk<AuthResponse, LoginFormFields, { extra: ExtraArgument }>(
  'auth/login',
  async (dto, { rejectWithValue, extra: { api, router, toast } }) => {
    try {
      const { data } = await api.auth.login(dto);

      const { accessToken } = data;

      setAccessTokenToCookie(accessToken);

      toast.success(AUTH_MESSAGES.loginSuccess);
      router.navigate(ROUTES.appRoute);

      return data;
    } catch (error) {
      toast.error(errorHandler(error));
      return rejectWithValue(error);
    }
  },
);

export const registerThunk = createAsyncThunk<AuthResponse, RegisterDto, { extra: ExtraArgument }>(
  'auth/register',
  async (dto, { rejectWithValue, extra: { api, router, toast } }) => {
    try {
      const { data } = await api.auth.register(dto);

      const { accessToken } = data;

      setAccessTokenToCookie(accessToken);

      toast.success(AUTH_MESSAGES.registerSuccess);
      router.navigate(ROUTES.profile.settings.page);

      return data;
    } catch (error) {
      toast.error(errorHandler(error));
      return rejectWithValue(error);
    }
  },
);

export const logoutThunk = createAsyncThunk<AuthResponse, void, { extra: ExtraArgument }>(
  'auth/logout',
  async (_, { rejectWithValue, extra: { api, toast } }) => {
    try {
      const { data } = await api.auth.logout();

      removeAccessTokenFromCookie();
      removeFromLS(USER_LS_KEY);
      toast.success(AUTH_MESSAGES.logoutSuccess);

      return data;
    } catch (error) {
      toast.error(errorHandler(error));
      return rejectWithValue(error);
    }
  },
);

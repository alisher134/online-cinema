import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ExtraArgument } from '@/app/providers/store';

import type { LoginFormFields } from '@/widgets/auth/login';

import { ROUTES } from '@/shared/config/routes';
import { removeFromLS, setToLS } from '@/shared/helpers/local-storage';
import { errorHandler } from '@/shared/libs';

import { removeAccessTokenFromCookie, setAccessTokenToCookie } from '../lib/authCookies';

import { AUTH_MESSAGES, USER_LS_KEY } from './authConstants';
import type { AuthResponse, RegisterDto } from './authTypes';

export const loginThunk = createAsyncThunk<AuthResponse, LoginFormFields, { extra: ExtraArgument }>(
  'auth/login',
  async (dto, { rejectWithValue, extra: { api, router, toast } }) => {
    try {
      const { data } = await api.auth.login(dto);

      const { accessToken, ...user } = data;

      setAccessTokenToCookie(accessToken);
      setToLS(USER_LS_KEY, user);
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

      const { accessToken, ...user } = data;

      setAccessTokenToCookie(accessToken);
      setToLS(USER_LS_KEY, user);
      toast.success(AUTH_MESSAGES.registerSuccess);
      router.navigate(ROUTES.appRoute);

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

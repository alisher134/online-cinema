import { createAsyncThunk } from '@reduxjs/toolkit';

import type { LoginFormFields } from '@/widgets/auth/login';

import { authApi } from '../api/authApi';
import { removeAccessTokenFromCookie, setAccessTokenToCookie } from '../lib/authCookies';

import type { AuthResponse, RegisterDto } from './authTypes';

export const loginThunk = createAsyncThunk<AuthResponse, LoginFormFields>(
  'auth/login',
  async (dto, { rejectWithValue }) => {
    try {
      const { data } = await authApi.login(dto);

      setAccessTokenToCookie(data.accessToken);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const registerThunk = createAsyncThunk<AuthResponse, RegisterDto>(
  'auth/register',
  async (dto, { rejectWithValue }) => {
    try {
      const { data } = await authApi.register(dto);

      setAccessTokenToCookie(data.accessToken);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logoutThunk = createAsyncThunk<AuthResponse>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authApi.logout();

      removeAccessTokenFromCookie();

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

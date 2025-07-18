import { createAsyncThunk } from '@reduxjs/toolkit';

import type { LoginFormFields } from '@/widgets/auth/login';

import { authApi } from '../api/authApi';
import { setAccessTokenToCookie } from '../lib/authCookies';

import type { AuthResponse } from './authTypes';

export const loginThunk = createAsyncThunk<AuthResponse, LoginFormFields>(
  'auth/login',
  async (authData, { rejectWithValue }) => {
    try {
      const { data } = await authApi.login(authData);

      setAccessTokenToCookie(data.accessToken);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

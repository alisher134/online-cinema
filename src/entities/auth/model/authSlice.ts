import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getAccessTokenFromCookies } from '../lib/authCookies';

import { loginThunk, logoutThunk, registerThunk } from './authThunks';
import type { AuthState } from './authTypes';

const initialState: AuthState = {
  authStatus: 'idle',
  isAuth: !!getAccessTokenFromCookies(),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    isAuth: (state) => state.isAuth,
    isAuthLoading: (state) => state.authStatus === 'pending',
  },
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      isAnyOf(loginThunk.pending, registerThunk.pending, logoutThunk.pending),
      (state) => {
        state.authStatus = 'pending';
        state.isAuth = false;
      },
    );

    builder.addMatcher(isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled), (state) => {
      state.authStatus = 'success';
      state.isAuth = true;
    });

    builder.addMatcher(isAnyOf(logoutThunk.fulfilled), (state) => {
      state.authStatus = 'success';
      state.isAuth = false;
    });

    builder.addMatcher(isAnyOf(loginThunk.rejected, registerThunk.rejected), (state) => {
      state.authStatus = 'failed';
      state.isAuth = false;
    });

    builder.addMatcher(isAnyOf(logoutThunk.rejected), (state) => {
      state.authStatus = 'failed';
      state.isAuth = false;
    });
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;

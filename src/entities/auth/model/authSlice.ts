import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loginThunk, logoutThunk, registerThunk } from './authThunks';
import type { AuthState } from './authTypes';

const initialState: AuthState = {
  authStatus: 'idle',
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    isAuth: (state) => state.isLoggedIn,
    isAuthLoading: (state) => state.authStatus === 'pending',
  },
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.authStatus = 'pending';
      })
      .addCase(loginThunk.fulfilled, (state) => {
        state.authStatus = 'success';
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.authStatus = 'failed';
        state.isLoggedIn = false;
      })
      .addCase(registerThunk.pending, (state) => {
        state.authStatus = 'pending';
      })
      .addCase(registerThunk.fulfilled, (state) => {
        state.authStatus = 'success';
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, (state) => {
        state.authStatus = 'failed';
        state.isLoggedIn = false;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.authStatus = 'pending';
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.authStatus = 'success';
        state.isLoggedIn = false;
      })
      .addCase(logoutThunk.rejected, (state) => {
        state.authStatus = 'failed';
        state.isLoggedIn = false;
      });
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;

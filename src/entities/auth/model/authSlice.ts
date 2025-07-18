import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loginThunk } from './authThunks';
import type { AuthState } from './authTypes';

const initialState: AuthState = {
  loading: 'idle',
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(loginThunk.fulfilled, (state) => {
        state.loading = 'succeeded';
        state.isAuth = true;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.loading = 'failed';
        state.isAuth = false;
      });
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;

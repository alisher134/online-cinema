import { type PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getJSONFromLS } from '@/shared/helpers/local-storage/localStorage';

import { loginThunk, logoutThunk, registerThunk } from './authThunks';
import type { AuthState, User } from './authTypes';

const initialState: AuthState = {
  authStatus: 'idle',
  user: getJSONFromLS('user'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    isAuth: (state) => Boolean(state.user),
    isAuthLoading: (state) => state.authStatus === 'pending',
  },
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      isAnyOf(loginThunk.pending, registerThunk.pending, logoutThunk.pending),
      (state) => {
        state.authStatus = 'pending';
      },
    );

    builder.addMatcher(
      isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled),
      (state, action: PayloadAction<User>) => {
        state.authStatus = 'success';
        state.user = action.payload;
      },
    );

    builder.addMatcher(isAnyOf(logoutThunk.fulfilled), (state) => {
      state.authStatus = 'success';
      state.user = null;
    });

    builder.addMatcher(isAnyOf(loginThunk.rejected, registerThunk.rejected), (state) => {
      state.authStatus = 'failed';
    });

    builder.addMatcher(isAnyOf(logoutThunk.rejected), (state) => {
      state.authStatus = 'failed';
      state.user = null;
    });
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;

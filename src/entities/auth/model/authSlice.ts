import { type PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getJSONFromLS } from '@/shared/helpers/local-storage/localStorage';

import { loginThunk, logoutThunk, registerThunk } from './authThunks';
import type { AuthState, User } from './authTypes';

const initialState: AuthState = {
  authStatus: 'idle',
  isLoggedIn: false,
  user: getJSONFromLS('user'),
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
        state.isLoggedIn = true;
      },
    );
    builder.addMatcher(isAnyOf(logoutThunk.fulfilled), (state) => {
      state.authStatus = 'success';
      state.user = null;
      state.isLoggedIn = false;
    });

    builder.addMatcher(
      isAnyOf(loginThunk.rejected, registerThunk.rejected, logoutThunk.rejected),
      (state) => {
        state.authStatus = 'failed';
        state.user = null;
        state.isLoggedIn = false;
      },
    );
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;

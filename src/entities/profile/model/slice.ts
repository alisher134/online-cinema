import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { changePasswordThunk, editProfileThunk, loadMeThunk } from './thunks';
import type { ProfileState, User } from './types';

const initialState: ProfileState = {
  status: {
    loadMe: 'idle',
    editProfile: 'idle',
    changePassword: 'idle',
  },
  userInfo: null,
  isEmailVerified: false,
  isProfileComplete: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  selectors: {
    selectStatus: (state) => state.status,
    userInfo: (state) => state.userInfo,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadMeThunk.pending, (state) => {
        state.status.loadMe = 'pending';
      })
      .addCase(loadMeThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.status.loadMe = 'success';
        state.userInfo = action.payload;
      })
      .addCase(loadMeThunk.rejected, (state) => {
        state.status.loadMe = 'failed';
        state.userInfo = null;
      })

      .addCase(editProfileThunk.pending, (state) => {
        state.status.editProfile = 'pending';
      })
      .addCase(editProfileThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.status.editProfile = 'success';
        state.userInfo = action.payload;
      })
      .addCase(editProfileThunk.rejected, (state) => {
        state.status.editProfile = 'failed';
      })

      .addCase(changePasswordThunk.pending, (state) => {
        state.status.changePassword = 'pending';
      })
      .addCase(changePasswordThunk.fulfilled, (state) => {
        state.status.changePassword = 'success';
      })
      .addCase(changePasswordThunk.rejected, (state) => {
        state.status.changePassword = 'failed';
      });
  },
});

export const { reducer: profileReducer } = profileSlice;

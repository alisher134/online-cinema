import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { User } from '@/entities/auth';

import { changePasswordThunk, editProfileThunk } from './profileThunks';
import type { ProfileState } from './profileTypes';

const initialState: ProfileState = {
  profileStatuses: {
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
    editProfileIsLoading: (state) => state.profileStatuses.editProfile === 'pending',
    changePasswordIsLoading: (state) => state.profileStatuses.changePassword === 'pending',
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(editProfileThunk.pending, (state) => {
        state.profileStatuses.editProfile = 'pending';
      })
      .addCase(editProfileThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.profileStatuses.editProfile = 'success';
        state.userInfo = action.payload;
      })
      .addCase(editProfileThunk.rejected, (state) => {
        state.profileStatuses.editProfile = 'failed';
      })
      .addCase(changePasswordThunk.pending, (state) => {
        state.profileStatuses.changePassword = 'pending';
      })
      .addCase(changePasswordThunk.fulfilled, (state) => {
        state.profileStatuses.changePassword = 'success';
      })
      .addCase(changePasswordThunk.rejected, (state) => {
        state.profileStatuses.changePassword = 'failed';
      });
  },
});

export const { reducer: profileReducer } = profileSlice;

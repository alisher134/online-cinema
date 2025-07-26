import { createSelector } from '@reduxjs/toolkit';

import { profileSlice } from './profileSlice';

export const selectStatus = profileSlice.selectors.selectStatus;
export const selectUserInfo = profileSlice.selectors.userInfo;

export const selectIsLoadMeLoading = createSelector(
  [selectStatus],
  (status) => status.loadMe === 'pending',
);

export const selectIsEditProfileLoading = createSelector(
  [selectStatus],
  (status) => status.editProfile === 'pending',
);

export const selectIsChangePasswordLoading = createSelector(
  [selectStatus],
  (status) => status.changePassword === 'pending',
);

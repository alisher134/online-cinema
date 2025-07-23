import { profileSlice } from './profileSlice';

export const selectEditProfileLoading = profileSlice.selectors.editProfileIsLoading;
export const selectChangePasswordLoading = profileSlice.selectors.changePasswordIsLoading;

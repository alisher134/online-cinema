import type { ChangePasswordFormValues } from '@/features/profile/change-password';
import type { EditProfileFormValues } from '@/features/profile/edit-profile';

import { axiosInstance } from '@/shared/api';

import { PROFILE_API_URLS } from '../model/profileConstants';
import type { User } from '../model/profileTypes';

export const profileApi = {
  getProfile: () => axiosInstance.get<User>(PROFILE_API_URLS.getProfile),
  editProfile: (data: EditProfileFormValues) =>
    axiosInstance.put<User>(PROFILE_API_URLS.editProfile, data),
  changePassword: (data: ChangePasswordFormValues) =>
    axiosInstance.post(PROFILE_API_URLS.changePassword, data),
};

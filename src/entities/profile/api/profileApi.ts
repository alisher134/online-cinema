import type { ChangePasswordFormValues } from '@/features/profile/change-password';
import type { EditProfileFormValues } from '@/features/profile/edit-profile';

import type { User } from '@/entities/auth';

import { axiosInstance } from '@/shared/api';

import { PROFILE_API_URLS } from '../model/profileConstants';

export const profileApi = {
  getProfile: () => axiosInstance.get<User>(PROFILE_API_URLS.getProfile),
  editProfile: (data: EditProfileFormValues) =>
    axiosInstance.put<User>(PROFILE_API_URLS.editProfile, data),
  changePassword: (data: ChangePasswordFormValues) =>
    axiosInstance.post(PROFILE_API_URLS.changePassword, data),
};

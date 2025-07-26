import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ExtraArgument } from '@/app/providers/store';

import type { ChangePasswordFormValues } from '@/features/profile/change-password';
import type { EditProfileFormValues } from '@/features/profile/edit-profile';

import { ROUTES } from '@/shared/config/routes';
import { errorHandler } from '@/shared/libs';

import { EDIT_PROFILE_MESSAGES } from './constants';
import type { User } from './types';

export const loadMeThunk = createAsyncThunk<User, void, { extra: ExtraArgument }>(
  'profile/load',
  async (_, { rejectWithValue, extra: { api, toast } }) => {
    try {
      const { data } = await api.auth.getMe();

      return data;
    } catch (error) {
      toast.error(errorHandler(error));
      return rejectWithValue(error);
    }
  },
);

export const editProfileThunk = createAsyncThunk<
  User,
  EditProfileFormValues,
  { extra: ExtraArgument }
>('profile/edit', async (dto, { rejectWithValue, extra: { api, toast, router } }) => {
  try {
    const { data } = await api.profile.editProfile(dto);

    toast.success(EDIT_PROFILE_MESSAGES.editProfileSuccess);
    router.navigate(ROUTES.profile.page);

    return data;
  } catch (error) {
    toast.error(errorHandler(error));
    return rejectWithValue(error);
  }
});

export const changePasswordThunk = createAsyncThunk<
  User,
  ChangePasswordFormValues,
  { extra: ExtraArgument }
>('profile/change-password', async (dto, { rejectWithValue, extra: { api, toast, router } }) => {
  try {
    const { data } = await api.profile.changePassword(dto);

    toast.success(EDIT_PROFILE_MESSAGES.editProfileSuccess);
    router.navigate(ROUTES.profile.page);

    return data;
  } catch (error) {
    toast.error(errorHandler(error));
    return rejectWithValue(error);
  }
});

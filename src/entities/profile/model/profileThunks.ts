import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ExtraArgument } from '@/app/providers/store';

import type { ChangePasswordFormValues } from '@/features/profile/change-password';
import type { EditProfileFormValues } from '@/features/profile/edit-profile';

import type { User } from '@/entities/auth';
import { USER_LS_KEY } from '@/entities/auth/model/authConstants';

import { ROUTES } from '@/shared/config/routes';
import { setToLS } from '@/shared/helpers/local-storage';
import { errorHandler } from '@/shared/libs';

import { EDIT_PROFILE_MESSAGES } from './profileConstants';

export const editProfileThunk = createAsyncThunk<
  User,
  EditProfileFormValues,
  { extra: ExtraArgument }
>('profile/edit', async (dto, { rejectWithValue, extra: { api, toast, router } }) => {
  try {
    const { data } = await api.profile.editProfile(dto);

    toast.success(EDIT_PROFILE_MESSAGES.editProfileSuccess);
    router.navigate(ROUTES.profile.settings.page);

    setToLS(USER_LS_KEY, data);

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
    router.navigate(ROUTES.profile.settings.page);

    return data;
  } catch (error) {
    toast.error(errorHandler(error));
    return rejectWithValue(error);
  }
});

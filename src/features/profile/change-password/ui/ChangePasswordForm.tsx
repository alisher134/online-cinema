import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { changePasswordThunk, selectChangePasswordLoading } from '@/entities/profile';

import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { ButtonLoader } from '@/shared/ui/Button';
import { PasswordInput } from '@/shared/ui/PasswordInput';

import { changePasswordSchema } from '../model/changePasswordSchema';
import type { ChangePasswordFormValues } from '../model/changePasswordTypes';

import styles from './ChangePasswordForm.module.scss';

export const ChangePasswordForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(changePasswordSchema),
  });

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectChangePasswordLoading);

  const onSubmit: SubmitHandler<ChangePasswordFormValues> = (data) => {
    dispatch(changePasswordThunk(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <PasswordInput
        {...register('oldPassword')}
        placeholder="Enter your old password"
        error={errors.oldPassword}
        label="Old Password"
        className={styles.input}
      />

      <PasswordInput
        {...register('newPassword')}
        placeholder="Enter your new password"
        error={errors.newPassword}
        label="New Password"
        className={styles.input}
      />

      <PasswordInput
        {...register('confirmNewPassword')}
        placeholder="Confirm your new password"
        error={errors.confirmNewPassword}
        label="Confirm New Password"
        className={styles.input}
      />

      <ButtonLoader isLoading={isLoading} size="lg" className={styles.button}>
        Change Password
      </ButtonLoader>
    </form>
  );
};

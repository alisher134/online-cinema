import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { changePasswordThunk, selectIsChangePasswordLoading } from '@/entities/profile';

import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { ButtonLoader } from '@/shared/ui/Button';
import { FormControl } from '@/shared/ui/FormControl';
import { PasswordInput } from '@/shared/ui/PasswordInput';

import { changePasswordSchema } from '../model/schema';
import type { ChangePasswordFormValues } from '../model/types';

import styles from './ChangePasswordForm.module.scss';

export const ChangePasswordForm = () => {
  const { control, reset, handleSubmit } = useForm<ChangePasswordFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(changePasswordSchema),
  });

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsChangePasswordLoading);

  const onSubmit: SubmitHandler<ChangePasswordFormValues> = (data) => {
    dispatch(changePasswordThunk(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormControl
        control={control}
        name="oldPassword"
        label="Old Password"
        className={styles.input}
      >
        {(field) => <PasswordInput {...field} placeholder="Enter your old password" />}
      </FormControl>

      <FormControl
        control={control}
        name="newPassword"
        label="New Password"
        className={styles.input}
      >
        {(field) => <PasswordInput {...field} placeholder="Enter your new password" />}
      </FormControl>

      <FormControl
        control={control}
        name="confirmNewPassword"
        label="Confirm New Password"
        className={styles.input}
      >
        {(field) => <PasswordInput {...field} placeholder="Conform your new password" />}
      </FormControl>

      <ButtonLoader isLoading={isLoading} size="lg" className={styles.button}>
        Change Password
      </ButtonLoader>
    </form>
  );
};

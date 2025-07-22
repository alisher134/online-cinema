import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { ButtonLoader } from '@/shared/ui/Button';
import { PasswordInput } from '@/shared/ui/PasswordInput';

import { changePasswordSchema } from '../model/changePasswordSchema';
import type { ChangePasswordFormValues } from '../model/changePasswordTypes';

import styles from './ChangePasswordForm.module.scss';

export const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(changePasswordSchema),
  });

  const isLoading = false;

  const onSubmit: SubmitHandler<ChangePasswordFormValues> = (data) => {
    console.log(data);
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

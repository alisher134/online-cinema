import { type SubmitHandler, useFormContext } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

import type { LoginFormFields } from '@/widgets/auth/login';

import { loginThunk, selectIsAuthLoading } from '@/entities/auth';

import { ROUTES } from '@/shared/config/routes';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { errorHandler } from '@/shared/libs';
import { ButtonLoader } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { PasswordInput } from '@/shared/ui/PasswordInput';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormContext<LoginFormFields>();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsAuthLoading);

  const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
    const resultAction = await dispatch(loginThunk(data));

    if (loginThunk.fulfilled.match(resultAction)) {
      toast.success('Authentication was successful');
      navigate(ROUTES.appRoute);
      reset();
    }

    if (loginThunk.rejected.match(resultAction)) {
      toast.error(errorHandler(resultAction.payload));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input
        {...register('email')}
        type="email"
        placeholder="Enter your email address"
        error={errors.email}
        label="Email Address"
        className={styles.input}
      />

      <PasswordInput
        {...register('password')}
        placeholder="Enter your password"
        error={errors.password}
        label="Password"
        className={styles.input}
      />

      <ButtonLoader isLoading={isLoading} size="full" className={styles.button}>
        Login
      </ButtonLoader>
    </form>
  );
};

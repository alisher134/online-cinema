import { type SubmitHandler, useFormContext } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

import type { RegisterFormFields } from '@/widgets/auth/register';

import { registerThunk, selectIsAuthLoading } from '@/entities/auth';

import { ROUTES } from '@/shared/config/routes';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { errorHandler } from '@/shared/libs';
import { ButtonLoader } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { PasswordInput } from '@/shared/ui/PasswordInput';

import styles from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useFormContext<RegisterFormFields>();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const isLoading = useAppSelector(selectIsAuthLoading);

  const onSubmit: SubmitHandler<RegisterFormFields> = async (data) => {
    const { confirmPassword, ...rest } = data;
    const resultAction = await dispatch(registerThunk(rest));

    if (registerThunk.fulfilled.match(resultAction)) {
      toast.success('Registration was success');
      navigate(ROUTES.appRoute);
      reset();
    }

    if (registerThunk.rejected.match(resultAction)) {
      toast.error(errorHandler(errorHandler));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input
        {...register('firstName')}
        type="firstName"
        placeholder="Enter your first name"
        error={errors.firstName}
        label="First Name"
        className={styles.input}
      />

      <Input
        {...register('lastName')}
        type="lastName"
        placeholder="Enter your last name"
        error={errors.lastName}
        label="Last Name"
        className={styles.input}
      />

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

      <PasswordInput
        {...register('confirmPassword')}
        placeholder="Enter your password"
        error={errors.confirmPassword}
        label="Confirm Password"
        className={styles.input}
      />

      <ButtonLoader isLoading={isLoading} size="full" className={styles.button}>
        Register
      </ButtonLoader>
    </form>
  );
};

import { type SubmitHandler, useFormContext } from 'react-hook-form';

import type { RegisterFormFields } from '@/widgets/auth/register';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { PasswordInput } from '@/shared/ui/PasswordInput';

import styles from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<RegisterFormFields>();

  const onSubmit: SubmitHandler<RegisterFormFields> = (data) => {
    console.log(data);
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

      <Button size="full" type="submit" className={styles.button}>
        Register
      </Button>
    </form>
  );
};

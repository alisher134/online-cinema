import { useFormContext } from 'react-hook-form';

import type { LoginFormFields } from '@/widgets/auth/login';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { PasswordInput } from '@/shared/ui/PasswordInput';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormFields>();

  return (
    <form className={styles.form}>
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

      <Button size="full" className={styles.button}>
        Login
      </Button>
    </form>
  );
};

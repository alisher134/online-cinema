import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { selectIsAuthLoading } from '@/entities/auth';
import { loginThunk } from '@/entities/auth/model/thunks';

import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { ButtonLoader } from '@/shared/ui/Button';
import { FormControl } from '@/shared/ui/FormControl';
import { Input } from '@/shared/ui/Input';
import { PasswordInput } from '@/shared/ui/PasswordInput';

import { loginSchema } from '../../model/loginSchema';
import type { LoginFormFields } from '../../model/loginTypes';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const { handleSubmit, control, reset } = useForm({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsAuthLoading);

  const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
    await dispatch(loginThunk(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormControl label="Email Address" name="email" control={control} className={styles.input}>
        {(field) => <Input {...field} type="email" placeholder="Enter your email address" />}
      </FormControl>

      <FormControl label="Password" name="password" control={control} className={styles.input}>
        {(field) => <PasswordInput {...field} placeholder="Enter your password" />}
      </FormControl>

      <ButtonLoader isLoading={isLoading} size="full" className={styles.button}>
        Login
      </ButtonLoader>
    </form>
  );
};

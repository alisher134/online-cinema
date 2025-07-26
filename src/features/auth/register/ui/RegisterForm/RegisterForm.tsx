import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { selectIsAuthLoading } from '@/entities/auth';
import { registerThunk } from '@/entities/auth/model/thunks';

import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { ButtonLoader } from '@/shared/ui/Button';
import { FormControl } from '@/shared/ui/FormControl';
import { Input } from '@/shared/ui/Input';
import { PasswordInput } from '@/shared/ui/PasswordInput';

import { registerSchema } from '../../model/registerSchema';
import type { RegisterFormFields } from '../../model/registerTypes';

import styles from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const { reset, control, handleSubmit } = useForm<RegisterFormFields>({
    mode: 'onChange',
    resolver: zodResolver(registerSchema),
  });

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsAuthLoading);

  const onSubmit: SubmitHandler<RegisterFormFields> = async (data) => {
    const { confirmPassword, ...rest } = data;
    await dispatch(registerThunk(rest));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormControl control={control} name="firstName" label="First Name" className={styles.input}>
        {(field) => <Input {...field} type="text" placeholder="Enter your first name" />}
      </FormControl>

      <FormControl control={control} name="lastName" label="Last Name" className={styles.input}>
        {(field) => <Input {...field} type="text" placeholder="Enter your last name" />}
      </FormControl>

      <FormControl control={control} name="email" label="Email Address" className={styles.input}>
        {(field) => <Input {...field} type="email" placeholder="Enter your email address" />}
      </FormControl>

      <FormControl control={control} name="password" label="Password" className={styles.input}>
        {(field) => <PasswordInput {...field} placeholder="Enter your password" />}
      </FormControl>

      <FormControl
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        className={styles.input}
      >
        {(field) => <PasswordInput {...field} placeholder="Enter your password" />}
      </FormControl>

      <ButtonLoader isLoading={isLoading} size="full" className={styles.button}>
        Register
      </ButtonLoader>
    </form>
  );
};

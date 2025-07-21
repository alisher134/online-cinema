import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { useAppSelector } from '@/shared/hooks';
import { ButtonLoader } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import { editProfileSchema } from '../../model/editProfileSchema';
import type { EditProfileFormValues } from '../../model/editProfileTypes';

import styles from './EditProfileForm.module.scss';

export const EditProfileForm = () => {
  const user = useAppSelector((state) => state.auth.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      avatarPath: user?.avatarPath,
      phoneNumber: user?.phoneNumber,
    },
  });

  const isLoading = false;

  const onSubmit: SubmitHandler<EditProfileFormValues> = (data) => {
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

      <Input
        {...register('age')}
        type="string"
        placeholder="Enter your age"
        error={errors.age}
        label="Age"
        className={styles.input}
      />

      <Input
        {...register('country')}
        type="string"
        placeholder="Enter your country"
        error={errors.country}
        label="Country"
        className={styles.input}
      />

      <Input
        {...register('phoneNumber')}
        type="string"
        placeholder="Enter your phone number"
        error={errors.phoneNumber}
        label="Phone Number"
        className={styles.input}
      />

      <ButtonLoader type="submit" size="lg" isLoading={isLoading} className={styles.button}>
        Edit Details
      </ButtonLoader>
    </form>
  );
};

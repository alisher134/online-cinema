import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';

import { editProfileThunk, selectEditProfileLoading } from '@/entities/profile';

import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { ButtonLoader } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Select } from '@/shared/ui/Select';
import { TextArea } from '@/shared/ui/TextArea';

import { SELECT_GENDER_DATA } from '../model/editProfileData';
import { editProfileSchema } from '../model/editProfileSchema';
import type { EditProfileFormValues } from '../model/editProfileTypes';

import styles from './EditProfileForm.module.scss';

export const EditProfileForm = () => {
  const user = useAppSelector((state) => state.auth.user);

  const {
    register,
    control,
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
      age: user?.age,
      aboutMe: user?.aboutMe,
      country: user?.country,
      gender: user?.gender,
    },
  });

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectEditProfileLoading);

  const onSubmit: SubmitHandler<EditProfileFormValues> = (data) => {
    dispatch(editProfileThunk(data));
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
        type="number"
        placeholder="Enter your age"
        error={errors.age}
        label="Age"
        className={styles.input}
      />

      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            error={errors.gender}
            label="Gender"
            placeholder="Select your gender"
            options={SELECT_GENDER_DATA}
            className={styles.input}
          />
        )}
      />

      <Input
        {...register('country')}
        type="string"
        placeholder="Enter your country"
        error={errors.country}
        label="Country"
        className={styles.input}
      />

      <TextArea
        {...register('aboutMe')}
        placeholder="Enter your about me"
        error={errors.aboutMe}
        label="About Me"
        className={styles.input}
      />

      <Input
        {...register('phoneNumber')}
        type="number"
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

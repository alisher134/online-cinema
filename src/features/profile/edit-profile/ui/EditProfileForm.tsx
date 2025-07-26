import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import {
  editProfileThunk,
  selectIsEditProfileLoading,
  selectIsLoadMeLoading,
  selectUserInfo,
} from '@/entities/profile';

import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { ButtonLoader } from '@/shared/ui/Button';
import { FormControl } from '@/shared/ui/FormControl';
import { Input } from '@/shared/ui/Input';
import { Select } from '@/shared/ui/Select';
import { TextArea } from '@/shared/ui/TextArea';

import { SELECT_GENDER_DATA } from '../model/editProfileData';
import { editProfileSchema } from '../model/editProfileSchema';
import type { EditProfileFormValues } from '../model/editProfileTypes';

import styles from './EditProfileForm.module.scss';

export const EditProfileForm = () => {
  const user = useAppSelector(selectUserInfo);

  const isLoadMeLoading = useAppSelector(selectIsLoadMeLoading);

  const { control, handleSubmit } = useForm<EditProfileFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      avatarPath: user?.avatarPath ?? '',
      phoneNumber: user?.phoneNumber ?? undefined,
      age: user?.age ?? undefined,
      aboutMe: user?.aboutMe ?? '',
      country: user?.country ?? '',
      gender: user?.gender ?? undefined,
    },
  });

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsEditProfileLoading);

  const onSubmit: SubmitHandler<EditProfileFormValues> = (data) => {
    dispatch(editProfileThunk(data));
  };

  if (isLoadMeLoading) {
    return <p>Loading</p>;
  }

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

      <FormControl control={control} name="age" label="Age" className={styles.input}>
        {(field) => (
          <Input
            {...field}
            onChange={(e) => field.onChange(e.target.valueAsNumber)}
            type="number"
            placeholder="Enter your age"
          />
        )}
      </FormControl>

      <FormControl control={control} name="gender" label="Gender" className={styles.input}>
        {(field) => (
          <Select
            {...field}
            placeholder="Select your gender"
            options={SELECT_GENDER_DATA}
            className={styles.input}
          />
        )}
      </FormControl>

      <FormControl control={control} name="country" label="Country" className={styles.input}>
        {(field) => <Input {...field} placeholder="Enter your country" />}
      </FormControl>

      <FormControl control={control} name="aboutMe" label="About Me" className={styles.input}>
        {(field) => <TextArea {...field} placeholder="Enter your about me" />}
      </FormControl>

      <FormControl
        control={control}
        name="phoneNumber"
        label="Phone Number"
        className={styles.input}
      >
        {(field) => <Input {...field} type="tel" placeholder="Enter your phone number" />}
      </FormControl>

      <ButtonLoader type="submit" size="lg" isLoading={isLoading} className={styles.button}>
        Edit Details
      </ButtonLoader>
    </form>
  );
};

import type { UserGender, UserRole } from '@/entities/auth';

import type { RequestStatus } from '@/shared/types/redux';

export interface ProfileState {
  userInfo: UserInfoType | null;
  profileStatuses: {
    editProfile: RequestStatus;
    changePassword: RequestStatus;
  };
  isEmailVerified: boolean;
  isProfileComplete: boolean;
}

export type UserInfoType = {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  avatarPath: string | null;
  role: UserRole | null;
  age: string | null;
  country: string | null;
  aboutMe: string | null;
  gender: UserGender | null;
};

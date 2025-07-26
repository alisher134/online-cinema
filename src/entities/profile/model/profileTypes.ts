import type { RequestStatus } from '@/shared/types/redux';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string | null;
  avatarPath: string | null;
  role: UserRole;
  age: number | null;
  country: string | null;
  aboutMe: string | null;
  gender: UserGender | null;
  createdAt: string;
  updatedAt: string;
}

export type UserRole = 'ADMIN' | 'USER';
export type UserGender = 'MALE' | 'FEMALE';

export interface ProfileState {
  status: {
    loadMe: RequestStatus;
    editProfile: RequestStatus;
    changePassword: RequestStatus;
  };
  userInfo: User | null;
  isEmailVerified: boolean;
  isProfileComplete: boolean;
}

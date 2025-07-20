import type { RegisterFormFields } from '@/widgets/auth/register';

export type AuthStatus = 'idle' | 'pending' | 'success' | 'failed';

export type AuthState = {
  authStatus: AuthStatus;
  isLoggedIn: boolean;
  user: User | null;
};

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string | null;
  password: string;
  avatarPath: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export type AccessToken = {
  accessToken: string;
};

export const AuthTokens = {
  ACCESS: 'accessToken',
} as const;

export type RegisterDto = Omit<RegisterFormFields, 'confirmPassword'>;

export type AuthResponse = AccessToken & User;

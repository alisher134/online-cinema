import type { RegisterFormFields } from '@/widgets/auth/register';

export type AuthStatus = 'idle' | 'pending' | 'success' | 'failed';

export type AuthState = {
  authStatus: AuthStatus;
  isAuth: boolean;
};

export type AccessToken = {
  accessToken: string;
};

export const AuthTokens = {
  ACCESS: 'accessToken',
} as const;

export type RegisterDto = Omit<RegisterFormFields, 'confirmPassword'>;

export type AuthResponse = AccessToken;

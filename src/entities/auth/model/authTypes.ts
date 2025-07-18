export type AuthState = {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  isAuth: boolean;
};

export type AccessToken = {
  accessToken: string;
};

export const AuthTokens = {
  ACCESS_TOKEN: 'accessToken',
};

export type AuthResponse = AccessToken;

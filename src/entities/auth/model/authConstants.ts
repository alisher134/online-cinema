export const AUTH_API_URLS = {
  login: 'auth/login',
  register: 'auth/register',
  logout: 'auth/logout',
} as const;

export const AUTH_MESSAGES = {
  loginSuccess: 'Successfully logged in',
  logoutSuccess: 'Goodbye 👋',
  registerSuccess: 'Registration successful',
} as const;

export const USER_LS_KEY = 'user';

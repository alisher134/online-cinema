export const AUTH_API_URLS = {
  login: 'auth/login',
  register: 'auth/register',
  refresh: 'auth/refresh',
  getMe: 'auth/me',
  logout: 'auth/logout',
} as const;

export const AUTH_MESSAGES = {
  loginSuccess: 'Successfully logged in',
  logoutSuccess: 'Goodbye 👋',
  registerSuccess: 'Registration successful',
} as const;

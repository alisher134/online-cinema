export { authReducer, authActions } from './model/slice';
export { selectIsAuth, selectIsAuthLoading } from './model/selectors';
export { useAuth } from './hooks/useAuth';
export {
  getAccessTokenFromCookies,
  removeAccessTokenFromCookie,
  setAccessTokenToCookie,
} from './lib/cookies';
export { authService as authApi } from './api/service';
export * from './model/types';

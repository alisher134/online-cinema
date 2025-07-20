import { authSlice } from './authSlice';

export const selectIsAuth = authSlice.selectors.isAuth;
export const selectIsAuthLoading = authSlice.selectors.isAuthLoading;

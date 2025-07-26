import { authSlice } from './slice';

export const selectIsAuth = authSlice.selectors.isAuth;
export const selectIsAuthLoading = authSlice.selectors.isAuthLoading;

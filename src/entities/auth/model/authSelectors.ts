import type { RootState } from '@/app/providers/store';

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectIsAuthLoading = (state: RootState) => state.auth.loading;

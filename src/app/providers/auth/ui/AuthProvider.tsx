import { type ReactNode, useEffect } from 'react';

import { getAccessTokenFromCookies } from '@/entities/auth';
import { loadMeThunk } from '@/entities/profile';

import { useAppDispatch } from '@/shared/hooks';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch();
  const accessToken = getAccessTokenFromCookies();

  useEffect(() => {
    if (accessToken) dispatch(loadMeThunk());
  }, [accessToken, dispatch]);

  return <>{children}</>;
};

import { type ReactNode, useEffect } from 'react';

import { getAccessTokenFromCookies } from '@/entities/auth';
import { loadMeThunk } from '@/entities/profile';

import { useAppDispatch } from '@/shared/hooks';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = getAccessTokenFromCookies();
    if (accessToken) dispatch(loadMeThunk());
  }, [dispatch]);

  return <>{children}</>;
};

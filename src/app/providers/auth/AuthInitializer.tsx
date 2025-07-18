import { useEffect } from 'react';

import { authActions, getAccessTokenFromCookies } from '@/entities/auth';

import { useAppDispatch } from '@/shared/hooks';

export const AuthInitializer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = getAccessTokenFromCookies();

    if (accessToken) dispatch(authActions.setIsAuth(true));
  }, [dispatch]);

  return null;
};

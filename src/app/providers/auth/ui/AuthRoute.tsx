import type { ReactNode } from 'react';
import { Navigate } from 'react-router';

import { useAuth } from '@/entities/auth';

import { ROUTES } from '@/shared/config/routes';

type AuthRouteProps = {
  children: ReactNode;
};

export const AuthRoute = ({ children }: AuthRouteProps) => {
  const isAuth = useAuth();

  const replaceUrl = ROUTES.auth.login.page;

  if (!isAuth) return <Navigate to={replaceUrl} />;

  return children;
};

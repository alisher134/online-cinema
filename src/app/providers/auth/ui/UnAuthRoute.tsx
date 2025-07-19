import type { ReactNode } from 'react';
import { Navigate } from 'react-router';

import { useAuth } from '@/entities/auth';

import { ROUTES } from '@/shared/config/routes';

type UnAuthRouteProps = {
  children: ReactNode;
};

export const UnAuthRoute = ({ children }: UnAuthRouteProps) => {
  const isAuth = useAuth();

  const replaceUrl = ROUTES.appRoute;

  if (isAuth) return <Navigate to={replaceUrl} />;

  return <>{children}</>;
};

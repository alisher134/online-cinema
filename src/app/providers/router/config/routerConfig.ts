import { createBrowserRouter } from 'react-router';

import { AuthLayout } from '@/app/layouts/AuthLayout';
import { MainLayout } from '@/app/layouts/MainLayout';

import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';

import { ROUTES } from '@/shared/config/routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.appRoute,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
  {
    path: ROUTES.auth.route,
    Component: AuthLayout,
    children: [
      {
        path: ROUTES.auth.login.route,
        Component: LoginPage,
      },
      {
        path: ROUTES.auth.register.route,
        Component: RegisterPage,
      },
    ],
  },
]);

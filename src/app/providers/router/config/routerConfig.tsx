import { Outlet, createBrowserRouter } from 'react-router';

import { AuthLayout } from '@/app/layouts/AuthLayout';
import { MainLayout } from '@/app/layouts/MainLayout';

import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/auth/LoginPage';
import { RegisterPage } from '@/pages/auth/RegisterPage';
import { ProfilePage } from '@/pages/profile/ProfilePage';
import { ProfileSettingsPage } from '@/pages/profile/ProfileSettingsPage';

import { ROUTES } from '@/shared/config/routes';

import { UnAuthRoute } from '../../auth';

export const router = createBrowserRouter([
  {
    path: ROUTES.appRoute,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: ROUTES.profile.route,
        Component: () => (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            index: true,
            Component: ProfilePage,
          },
          {
            path: ROUTES.profile.settings.route,
            Component: ProfileSettingsPage,
            children: [
              {
                index: true,
                Component: () => <section>Edit Profile</section>,
              },
              {
                path: ROUTES.profile.settings.password.route,
                Component: () => <section>Password</section>,
              },
              {
                path: ROUTES.profile.settings.dataPrivacy.route,
                Component: () => <section>Data privacy</section>,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: ROUTES.auth.route,
    Component: () => (
      <UnAuthRoute>
        <AuthLayout />
      </UnAuthRoute>
    ),
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

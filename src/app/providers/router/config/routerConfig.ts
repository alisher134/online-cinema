import { createBrowserRouter } from 'react-router';

import { MainLayout } from '@/app/layouts/MainLayout';

import { HomePage } from '@/pages/HomePage';

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
]);

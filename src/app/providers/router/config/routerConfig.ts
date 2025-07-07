import { createBrowserRouter } from 'react-router';

import { HomePage } from '../../../../pages/HomePage';
import { ROUTES } from '../../../../shared/config/routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.appRoute,
    Component: HomePage,
  },
]);

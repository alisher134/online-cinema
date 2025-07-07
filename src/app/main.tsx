import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { Providers } from './providers';
import { router } from './providers/router/config/routerConfig';
import './styles/index.scss';

const root = document.getElementById('root') as HTMLElement;

const container = createRoot(root!);

container.render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>,
);

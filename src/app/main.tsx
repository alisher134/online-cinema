import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { Providers } from './providers';
import './styles/index.scss';

const root = document.getElementById('root') as HTMLElement;

const container = createRoot(root!);

container.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);

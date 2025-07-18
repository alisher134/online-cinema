import { type ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import { AuthInitializer } from './auth';
import { StoreProvider } from './store';

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <StoreProvider>
      <AuthInitializer />
      {children}
      <Toaster />
    </StoreProvider>
  );
};

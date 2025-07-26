import { type ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import { AuthProvider } from './auth';
import { StoreProvider } from './store';

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <StoreProvider>
      <AuthProvider>
        {children}
        <Toaster />
      </AuthProvider>
    </StoreProvider>
  );
};

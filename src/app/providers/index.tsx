import { type ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import { CookiesConsent } from '@/widgets/CookiesConsent';

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
        <CookiesConsent />
        <Toaster />
      </AuthProvider>
    </StoreProvider>
  );
};

import { type ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import { StoreProvider } from './store';

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <StoreProvider>
      {children}
      <Toaster />
    </StoreProvider>
  );
};

import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Loader } from '@/shared/ui/Loader';
import { Logo } from '@/shared/ui/Logo';

import styles from './AuthLayout.module.scss';

export const AuthLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className={styles.layout}>
        <header>
          <Logo />
        </header>
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </Suspense>
  );
};

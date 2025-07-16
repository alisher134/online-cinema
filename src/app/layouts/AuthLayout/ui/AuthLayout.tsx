import { Outlet } from 'react-router';

import { Logo } from '@/shared/ui/Logo';

import styles from './AuthLayout.module.scss';

export const AuthLayout = () => {
  return (
    <div className={styles.layout}>
      <header>
        <Logo />
      </header>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

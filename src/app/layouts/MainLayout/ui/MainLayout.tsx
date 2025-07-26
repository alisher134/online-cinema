import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Footer } from '@/widgets/Footer';
import { Sidebar } from '@/widgets/Sidebar';

import { Loader } from '@/shared/ui/Loader';

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className={styles.wrapper}>
        <Sidebar />

        <div className={styles.content}>
          <main className={styles.main}>
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

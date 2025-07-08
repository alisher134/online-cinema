import { Outlet } from 'react-router';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />

      <div className={styles.content}>
        <Header />

        <main className={styles.main}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

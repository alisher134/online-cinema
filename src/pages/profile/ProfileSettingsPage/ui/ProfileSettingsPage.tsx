import { Outlet } from 'react-router';

import { ProfileSidebar } from '@/widgets/Profile';

import styles from './ProfileSettingsPage.module.scss';

export const ProfileSettingsPage = () => {
  return (
    <section className={styles.settings}>
      <div className={styles.inner}>
        <ProfileSidebar />

        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

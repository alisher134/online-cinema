import { ProfileMenuList } from '../ProfileMenu';

import styles from './ProfileSidebar.module.scss';

export const ProfileSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Profile Settings</h2>

      <ProfileMenuList />
    </div>
  );
};

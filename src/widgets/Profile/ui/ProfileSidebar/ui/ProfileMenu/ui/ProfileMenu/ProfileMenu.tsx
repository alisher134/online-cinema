import type { NavMenu } from '@/shared/ui/Menu';

import { ProfileMenuItem } from '../ProfileMenuItem/ProfileMenuItem';

import styles from './ProfileMenu.module.scss';

type ProfileMenuProps = NavMenu;

export const ProfileMenu = ({ title, items }: ProfileMenuProps) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <h4 className={styles.title}>{title}</h4>
        {items.map((item) => (
          <ProfileMenuItem key={item.title} title={item.title} link={item.link} icon={item.icon} />
        ))}
      </ul>
    </nav>
  );
};

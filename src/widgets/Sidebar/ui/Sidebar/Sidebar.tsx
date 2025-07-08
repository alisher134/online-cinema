import { Logo } from '@/shared/ui/Logo';

import { SidebarMenu } from '../SidebarMenu/SidebarMenu';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Logo className={styles.logo} />

      <SidebarMenu />
    </aside>
  );
};

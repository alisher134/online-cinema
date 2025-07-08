import { ButtonLink } from '@/shared/ui/Button';
import { Logo } from '@/shared/ui/Logo';

import { SidebarMenu } from '../SidebarMenu/SidebarMenu';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const isSubscribe = false;

  return (
    <aside className={styles.sidebar}>
      <Logo className={styles.logo} />

      <SidebarMenu />

      {!isSubscribe && (
        <ButtonLink size="md" to="/subscribe" className={styles.subscribe}>
          Subscribe
        </ButtonLink>
      )}
    </aside>
  );
};

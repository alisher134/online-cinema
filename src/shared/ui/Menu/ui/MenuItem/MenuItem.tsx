import clsx from 'clsx';
import { useLocation } from 'react-router';

import type { NavMenuItem } from '../../model/menuTypes';

import styles from './MenuItem.module.scss';

type MenuItemProps = NavMenuItem & {
  onClick?: () => void;
};

export const MenuItem = ({ title, link, icon, onClick }: MenuItemProps) => {
  const { pathname } = useLocation();
  const Icon = icon!;
  const active = pathname === link;

  const content = (
    <>
      <Icon className={styles.icon} />
      <span className={styles.text}>{title}</span>
    </>
  );

  if (link) {
    return (
      <li className={clsx(styles.item, { [styles.active]: active })}>
        <a href={link} className={styles.link}>
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className={clsx(styles.item, { [styles.active]: active })}>
      <button onClick={onClick} className={styles.button}>
        {content}
      </button>
    </li>
  );
};

import clsx from 'clsx';
import { useLocation } from 'react-router';

import type { NavMenuItem } from '../../model/menuTypes';

import styles from './MenuItem.module.scss';

export const MenuItem = ({ title, link, icon }: NavMenuItem) => {
  const { pathname } = useLocation();
  const Icon = icon!;
  const active = pathname === link;

  return (
    <li className={clsx(styles.item, { [styles.active]: active })}>
      <a href={link} className={styles.link}>
        <Icon className={styles.icon} />
        <span className={styles.text}>{title}</span>
      </a>
    </li>
  );
};

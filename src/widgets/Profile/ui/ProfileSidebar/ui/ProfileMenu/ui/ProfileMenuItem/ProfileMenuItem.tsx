import clsx from 'clsx';
import { ChevronRightIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router';

import type { NavMenuItem } from '@/shared/ui/Menu';

import styles from './ProfileMenuItem.module.scss';

export const ProfileMenuItem = ({ title, link = '', icon }: NavMenuItem) => {
  const Icon = icon;
  const { pathname } = useLocation();
  const active = pathname === link;

  return (
    <li className={clsx(styles.item, { [styles.active]: active })}>
      <Link to={link} className={styles.link}>
        <Icon className={styles.icon} />
        <span className={styles.text}>{title}</span>
      </Link>

      <ChevronRightIcon className={styles.arrow} />
    </li>
  );
};

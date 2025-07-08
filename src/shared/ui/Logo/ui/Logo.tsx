import clsx from 'clsx';
import { Link } from 'react-router';

import { ROUTES } from '@/shared/config/routes';

import styles from './Logo.module.scss';

type Props = {
  className?: string;
};

export const Logo = ({ className }: Props) => {
  return (
    <Link to={ROUTES.appRoute} className={clsx(styles.logo, className)}>
      Online Cinema
    </Link>
  );
};

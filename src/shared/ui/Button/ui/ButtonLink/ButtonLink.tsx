import clsx from 'clsx';
import type { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router';

import type { ButtonSize, ButtonVariant } from '../../model/buttonTypes';
import styles from '../Button/Button.module.scss';

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const ButtonLink = ({
  className,
  to,
  variant = 'primary',
  size = 'sm',
  children,
  ...props
}: Props) => {
  return (
    <Link
      to={to}
      className={clsx(styles.button, styles.link, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
};

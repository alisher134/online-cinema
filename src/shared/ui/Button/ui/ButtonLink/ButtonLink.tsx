import clsx from 'clsx';
import { Link, type LinkProps } from 'react-router';

import type { ButtonSize, ButtonVariant } from '../../model/types';
import styles from '../Button/Button.module.scss';

interface ButtonLinkProps extends LinkProps {
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
}: ButtonLinkProps) => {
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

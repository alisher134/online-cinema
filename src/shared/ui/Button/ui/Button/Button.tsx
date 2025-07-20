import clsx from 'clsx';

import type { ButtonProps } from '../../model/buttonTypes';

import styles from './Button.module.scss';

export const Button = ({
  className,
  variant = 'primary',
  size = 'sm',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={clsx(styles.button, styles[variant], styles[size], className)} {...props}>
      {children}
    </button>
  );
};

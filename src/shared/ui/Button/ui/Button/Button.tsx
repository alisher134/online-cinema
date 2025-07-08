import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

import type { ButtonSize, ButtonVariant } from '../../model/buttonTypes';

import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = ({
  className,
  variant = 'primary',
  size = 'sm',
  children,
  ...props
}: Props) => {
  return (
    <button className={clsx(styles.button, styles[variant], styles[size], className)} {...props}>
      {children}
    </button>
  );
};

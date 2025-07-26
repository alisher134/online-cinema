import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './IconButton.module.scss';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: ReactNode;
}

export const IconButton = ({ className, icon, ...props }: IconButtonProps) => {
  return (
    <button className={clsx(styles['icon-button'], className)} {...props}>
      {icon}
    </button>
  );
};

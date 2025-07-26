import clsx from 'clsx';
import type { InputHTMLAttributes, JSX } from 'react';

import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  rightElement?: JSX.Element;
}

export const Input = ({ className, rightElement, name, ...props }: InputProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.inner}>
        <input id={name} className={styles.input} {...props} />

        {rightElement}
      </div>
    </div>
  );
};

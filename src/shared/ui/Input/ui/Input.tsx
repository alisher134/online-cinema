import clsx from 'clsx';
import type { InputHTMLAttributes, JSX } from 'react';
import type { FieldError } from 'react-hook-form';

import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  label: string;
  rightElement?: JSX.Element;
}

export const Input = ({ className, error, label, rightElement, ...props }: InputProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <div className={styles.inner}>
        <input id={label} className={styles.input} {...props} />

        {rightElement}
      </div>
      {error && <p className={styles.error}>{error?.message}</p>}
    </div>
  );
};

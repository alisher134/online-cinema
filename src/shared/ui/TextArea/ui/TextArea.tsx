import clsx from 'clsx';
import type { TextareaHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

import styles from './TextArea.module.scss';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  error?: FieldError;
  label: string;
}

export const TextArea = ({ className, label, error, ...props }: TextAreaProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <textarea id={label} className={styles.textarea} {...props} />
      {error && <p className={styles.error}>{error?.message}</p>}
    </div>
  );
};

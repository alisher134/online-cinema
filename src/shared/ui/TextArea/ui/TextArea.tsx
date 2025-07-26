import clsx from 'clsx';
import type { TextareaHTMLAttributes } from 'react';

import styles from './TextArea.module.scss';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const TextArea = ({ className, name, ...props }: TextAreaProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <textarea id={name} className={styles.textarea} {...props} />
    </div>
  );
};

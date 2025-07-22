import clsx from 'clsx';
import { ChevronUpIcon } from 'lucide-react';
import { useState } from 'react';
import type { FieldError } from 'react-hook-form';

import type { SelectOption } from '../model/selectTypes';

import styles from './Select.module.scss';

interface SelectProps {
  className?: string;
  error?: FieldError;
  label?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  value?: string | null;
  placeholder: string;
}

export const Select = ({
  className,
  label,
  error,
  options,
  value,
  onChange,
  placeholder,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnChange = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  const getCurrentOption = options.find((option) => option.value === value);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <label className={styles.label}>{label}</label>

      <div className={clsx(styles.inner, { [styles.open]: isOpen })}>
        <div className={styles.select} onClick={() => setIsOpen((prev) => !prev)} {...props}>
          <span className={styles.placeholder}>{getCurrentOption?.label ?? placeholder}</span>
        </div>

        {isOpen && (
          <ul className={styles.dropdown}>
            {options.map((item) => (
              <li
                key={item.value}
                onClick={() => handleOnChange(item.value)}
                className={clsx(styles.option, {
                  [styles.selected]: getCurrentOption?.value === item.value,
                })}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}

        <ChevronUpIcon size={18} className={styles.icon} />
      </div>

      {error && <p className={styles.error}>{error?.message}</p>}
    </div>
  );
};

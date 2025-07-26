import clsx from 'clsx';
import { ChevronUpIcon } from 'lucide-react';
import { useState } from 'react';

import type { SelectOption } from '../model/selectTypes';

import styles from './Select.module.scss';

interface SelectProps<T> {
  className?: string;
  options: SelectOption<T>[];
  onChange: (value: T) => void;
  value?: T;
  placeholder: string;
}

export const Select = <T extends string | number>({
  className,
  options,
  value,
  onChange,
  placeholder,
  ...props
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnChange = (value: T) => {
    onChange(value);
    setIsOpen(false);
  };

  const getCurrentOption = options.find((option) => option.value === value);

  return (
    <div className={clsx(styles.wrapper, className)}>
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
    </div>
  );
};

import { type ReactNode, useMemo } from 'react';
import {
  type Control,
  type ControllerRenderProps,
  type FieldValues,
  type Path,
  useController,
} from 'react-hook-form';

import styles from './FormControl.module.scss';

type FormControlProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  className?: string;
  children: (field: ControllerRenderProps<T, Path<T>>) => ReactNode;
};

export const FormControl = <T extends FieldValues>({
  children,
  name,
  control,
  label,
  className,
}: FormControlProps<T>) => {
  const {
    field: { ...fieldProps },
    fieldState: { error },
  } = useController<T>({ name, control });

  const errorText = useMemo(() => error?.message, [error]);

  const content = (
    <>
      {children(fieldProps)}
      {errorText && <p className={styles.error}>{errorText}</p>}
    </>
  );

  if (label)
    return (
      <div className={className}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        {content}
      </div>
    );

  return <div className={className}>{content}</div>;
};

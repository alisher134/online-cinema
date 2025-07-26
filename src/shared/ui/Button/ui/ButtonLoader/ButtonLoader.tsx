import { LoaderCircleIcon } from 'lucide-react';

import type { ButtonProps } from '../../model/types';
import { Button } from '../Button/Button';

import styles from './ButtonLoader.module.scss';

interface ButtonLoaderProps extends ButtonProps {
  isLoading: boolean;
}

export const ButtonLoader = ({ children, isLoading, ...rest }: ButtonLoaderProps) => {
  return (
    <Button disabled={isLoading} {...rest}>
      {isLoading ? <LoaderCircleIcon className={styles.loader} /> : children}
    </Button>
  );
};

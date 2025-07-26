import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

import { Input } from '@/shared/ui/Input';

import styles from './PasswordInput.module.scss';

type PasswordInputProps = {
  className?: string;
  placeholder: string;
};

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const renderButton = (
    <button
      type="button"
      onClick={() => (isShowPassword ? setIsShowPassword(false) : setIsShowPassword(true))}
      className={styles.button}
    >
      {isShowPassword ? (
        <EyeOffIcon className={styles.icon} />
      ) : (
        <EyeIcon className={styles.icon} />
      )}
    </button>
  );

  return (
    <Input type={isShowPassword ? 'text' : 'password'} rightElement={renderButton} {...props} />
  );
};

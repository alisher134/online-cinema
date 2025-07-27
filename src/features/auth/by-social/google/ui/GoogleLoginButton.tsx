import GoogleIcon from '@/shared/assets/icons/google-icon.svg';
import { Button } from '@/shared/ui/Button';

import { GOOGLE_REDIRECT_URL } from '../lib/redirectToGoogle';

import styles from './GoogleLoginButton.module.scss';

export const GoogleLoginButton = () => {
  const handleClick = () => {
    window.location.href = `${GOOGLE_REDIRECT_URL}`;
  };

  return (
    <Button variant="secondary" size="full" onClick={handleClick} className={styles.button}>
      <img src={GoogleIcon} alt="" className={styles.icon} />
      <span>Login with Google</span>
    </Button>
  );
};

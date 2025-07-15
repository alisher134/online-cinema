import { Link } from 'react-router';

import { ROUTES } from '@/shared/config/routes';

import styles from './LoginLabel.module.scss';

export const LoginLabel = () => {
  return (
    <div className={styles.label}>
      <p className={styles.text}>Already have an account?</p>
      <Link to={ROUTES.auth.login.page} className={styles.link}>
        Login
      </Link>
    </div>
  );
};

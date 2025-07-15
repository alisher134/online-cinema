import { Link } from 'react-router';

import { ROUTES } from '@/shared/config/routes';

import styles from './RegisterLabel.module.scss';

export const RegisterLabel = () => {
  return (
    <div className={styles.label}>
      <p className={styles.text}>Don't have an account?</p>
      <Link to={ROUTES.auth.register.page} className={styles.link}>
        Register
      </Link>
    </div>
  );
};

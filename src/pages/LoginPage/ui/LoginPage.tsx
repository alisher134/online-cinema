import { LoginCreateForm } from '@/widgets/auth/login';

import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <section className={styles.login}>
      <h1 className={styles.title}>Hey there, welcome back</h1>
      <LoginCreateForm />
    </section>
  );
};

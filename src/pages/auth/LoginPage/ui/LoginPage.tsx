import { LoginFormProvider } from '@/widgets/auth/login';

import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <section className={styles.login}>
      <h2 className={styles.title}>Hey there, welcome back</h2>
      <LoginFormProvider />
    </section>
  );
};

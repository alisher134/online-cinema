import { LoginForm } from '@/features/auth/login';
import { AuthSwitch } from '@/features/auth/ui';

import { ROUTES } from '@/shared/config/routes';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <section className={styles.login}>
      <h2 className={styles.title}>Hey there, welcome back</h2>

      <LoginForm />

      <AuthSwitch text="Don't have an account?" link={ROUTES.auth.register.page} label="Register" />
    </section>
  );
};

export default LoginPage;

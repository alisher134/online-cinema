import { RegisterForm } from '@/features/auth/register';
import { AuthSwitch } from '@/features/auth/ui';

import { ROUTES } from '@/shared/config/routes';

import styles from './RegisterPage.module.scss';

export const RegisterPage = () => {
  return (
    <section className={styles.register}>
      <h2 className={styles.title}>Register</h2>

      <RegisterForm />

      <AuthSwitch text="Already have an account?" link={ROUTES.auth.login.page} label="Login" />
    </section>
  );
};

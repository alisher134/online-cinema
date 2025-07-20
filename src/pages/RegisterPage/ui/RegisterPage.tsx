import { RegisterFormProvider } from '@/widgets/auth/register';

import styles from './RegisterPage.module.scss';

export const RegisterPage = () => {
  return (
    <section className={styles.register}>
      <h2 className={styles.title}>Register</h2>
      <RegisterFormProvider />
    </section>
  );
};

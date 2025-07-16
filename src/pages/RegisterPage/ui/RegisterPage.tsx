import { RegisterCreateForm } from '@/widgets/auth/register';

import styles from './RegisterPage.module.scss';

export const RegisterPage = () => {
  return (
    <section className={styles.register}>
      <h1 className={styles.title}>Register</h1>
      <RegisterCreateForm />
    </section>
  );
};

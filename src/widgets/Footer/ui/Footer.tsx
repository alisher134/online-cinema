import styles from './Footer.module.scss';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© {year} «Online Cinema»</p>
      <p className={styles.text}>All rights reserved</p>
    </footer>
  );
};

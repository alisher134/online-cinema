import { Link } from 'react-router';

import styles from './AuthSwitch.module.scss';

type AuthSwitchProps = {
  text: string;
  link: string;
  label: string;
};

export const AuthSwitch = ({ text, link, label }: AuthSwitchProps) => {
  return (
    <div className={styles['auth-switch']}>
      <p className={styles.text}>{text}</p>
      <Link to={link} className={styles.link}>
        {label}
      </Link>
    </div>
  );
};

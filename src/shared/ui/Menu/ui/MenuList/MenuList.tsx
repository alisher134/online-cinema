import type { NavMenu } from '../../model/menuTypes';
import { MenuItem } from '../MenuItem/MenuItem';

import styles from './MenuList.module.scss';

export const MenuList = ({ menu }: { menu: NavMenu }) => {
  const { title, items } = menu;

  return (
    <div className={styles.menu}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <MenuItem key={item.title} title={item.title} link={item.link} icon={item.icon} />
        ))}
      </ul>
    </div>
  );
};

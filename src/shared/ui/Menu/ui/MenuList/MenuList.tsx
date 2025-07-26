import type { ReactNode } from 'react';

import type { NavMenu } from '../../model/types';
import { MenuItem } from '../MenuItem/MenuItem';

import styles from './MenuList.module.scss';

type MenuListProps = {
  menu: NavMenu;
  renderItems?: ReactNode;
};

export const MenuList = ({ menu, renderItems }: MenuListProps) => {
  const { title, items } = menu;

  return (
    <div className={styles.menu}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <MenuItem key={item.title} title={item.title} link={item.link} icon={item.icon} />
        ))}
        {renderItems}
      </ul>
    </div>
  );
};

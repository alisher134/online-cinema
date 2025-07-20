import type { LucideIcon } from 'lucide-react';

export interface NavMenuItem {
  link?: string;
  title: string;
  icon: LucideIcon;
}

export interface NavMenu {
  title: string;
  items: NavMenuItem[];
}

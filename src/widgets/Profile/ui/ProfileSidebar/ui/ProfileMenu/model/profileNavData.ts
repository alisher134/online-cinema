import { KeyIcon, ShieldCheckIcon, UserIcon } from 'lucide-react';

import { ROUTES } from '@/shared/config/routes';
import type { NavMenuItem } from '@/shared/ui/Menu';

export const PROFILE_PERSONAL_NAV_DATA: NavMenuItem[] = [
  {
    title: 'Edit Profile',
    icon: UserIcon,
    link: ROUTES.profile.settings.page,
  },
  {
    title: 'Password',
    icon: KeyIcon,
    link: ROUTES.profile.settings.password.page,
  },
];

export const PROFILE_GENERAL_NAV_DATA: NavMenuItem[] = [
  {
    title: 'Data privacy',
    icon: ShieldCheckIcon,
    link: ROUTES.profile.settings.dataPrivacy.page,
  },
];

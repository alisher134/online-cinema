import {
  BookmarkIcon,
  HeartIcon,
  HelpCircleIcon,
  LockIcon,
  LogInIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from 'lucide-react';

import { ROUTES } from '@/shared/config/routes';
import { MenuItem, MenuList } from '@/shared/ui/Menu';
import { GENERAL_MENU, LIBRARY_MENU, MENU } from '@/shared/ui/Menu';

export const SidebarMenu = () => {
  const isAuth = true;
  const isAdmin = false;

  const renderAuthLibraryMenu = (isAuth: boolean) => {
    if (!isAuth) return null;

    return (
      <>
        <MenuItem title="Favorites" link={ROUTES.profile.favorites} icon={HeartIcon} />
        <MenuItem title="Watch Later" link={'/watch-later'} icon={BookmarkIcon} />
      </>
    );
  };

  const renderGeneralMenu = (isAuth: boolean) => {
    if (!isAuth) {
      return <MenuItem title="Sign in" link="/login" icon={LogInIcon} />;
    }

    return (
      <>
        <MenuItem title="Profile" link={ROUTES.profile.index} icon={UserIcon} />
        {isAdmin && <MenuItem title="Admin panel" link="/admin" icon={LockIcon} />}
        <MenuItem title="Settings" link={'/settings'} icon={SettingsIcon} />
        <MenuItem title="Help & Support" link={'/help'} icon={HelpCircleIcon} />
        <MenuItem title="Logout" link={ROUTES.profile.index} icon={LogOutIcon} />
      </>
    );
  };

  return (
    <nav>
      <MenuList menu={MENU} />

      <MenuList menu={LIBRARY_MENU} />
      {renderAuthLibraryMenu(isAuth)}

      <MenuList menu={GENERAL_MENU} />
      {renderGeneralMenu(isAuth)}
    </nav>
  );
};

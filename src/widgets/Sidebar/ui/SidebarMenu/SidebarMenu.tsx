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
import toast from 'react-hot-toast';

import { useAuth } from '@/entities/auth';
import { logoutThunk } from '@/entities/auth';

import { ROUTES } from '@/shared/config/routes';
import { useAppDispatch } from '@/shared/hooks';
import { errorHandler } from '@/shared/libs';
import { GENERAL_MENU, LIBRARY_MENU, MENU, MenuItem, MenuList } from '@/shared/ui/Menu';

export const SidebarMenu = () => {
  const isAuth = useAuth();
  const isAdmin = true;

  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    const resultAction = await dispatch(logoutThunk());

    if (logoutThunk.fulfilled.match(resultAction)) toast.success('Logout was successful');
    if (logoutThunk.rejected.match(resultAction)) toast.error(errorHandler(resultAction.error));
  };

  const renderAuthLibraryMenu = (isAuth: boolean) => {
    if (!isAuth) return null;

    return (
      <>
        <MenuItem title="Favorites" link={ROUTES.profile.favorites.page} icon={HeartIcon} />
        <MenuItem title="Watch Later" link={ROUTES.profile.watchLater.page} icon={BookmarkIcon} />
      </>
    );
  };

  const renderGeneralMenu = (isAuth: boolean) => {
    if (!isAuth) {
      return <MenuItem title="Sign in" link={ROUTES.auth.login.page} icon={LogInIcon} />;
    }

    return (
      <>
        <MenuItem title="Profile" link={ROUTES.profile.page} icon={UserIcon} />
        {isAdmin && <MenuItem title="Admin panel" link="/admin" icon={LockIcon} />}
        <MenuItem title="Settings" link={ROUTES.profile.settings.page} icon={SettingsIcon} />
        <MenuItem title="Help & Support" link={ROUTES.help.page} icon={HelpCircleIcon} />
        <MenuItem title="Logout" onClick={handleLogout} icon={LogOutIcon} />
      </>
    );
  };

  return (
    <nav>
      <MenuList menu={MENU} />

      <MenuList menu={LIBRARY_MENU} renderItems={renderAuthLibraryMenu(isAuth)} />

      <MenuList menu={GENERAL_MENU} renderItems={renderGeneralMenu(isAuth)} />
    </nav>
  );
};

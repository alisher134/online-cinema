import { PROFILE_GENERAL_NAV_DATA, PROFILE_PERSONAL_NAV_DATA } from '../../model/profileNavData';
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';

export const ProfileMenuList = () => {
  return (
    <div>
      <ProfileMenu title="Personal info" items={PROFILE_PERSONAL_NAV_DATA} />
      <ProfileMenu title="General" items={PROFILE_GENERAL_NAV_DATA} />
    </div>
  );
};

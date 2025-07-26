import { selectIsLoadMeLoading, selectUserInfo } from '@/entities/profile';

import { useAppSelector } from '@/shared/hooks';

import { PROFILE_GENDERS } from '../model/profileData';

const ProfilePage = () => {
  const user = useAppSelector(selectUserInfo);

  const isLoading = useAppSelector(selectIsLoadMeLoading);

  const userName = `${user?.firstName} ${user?.lastName}`;

  const userGender = PROFILE_GENDERS.filter((gender) => gender.value === user?.gender);

  return (
    <div>
      <h2>ProfilePage</h2>

      {isLoading ? (
        <p>Загрузка</p>
      ) : (
        <div>
          <h3>{userName}</h3>

          {userGender.map((gender) => (
            <div>
              <span>{gender.label}</span>
              <span> </span>
              <span>{user?.age}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

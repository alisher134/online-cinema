import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import { loginBySocial } from '@/entities/auth/model/thunks';

import { ROUTES } from '@/shared/config/routes';
import { useAppDispatch } from '@/shared/hooks';

const SocialAuth = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const accessToken = searchParams.get('accessToken');

  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    console.log('MOUNT SocialAuth');

    if (!accessToken) {
      navigate(ROUTES.auth.login.page);
      return;
    }

    const authorize = async () => {
      try {
        await dispatch(loginBySocial(accessToken)).unwrap();
      } catch {
        navigate(ROUTES.auth.login.page);
      }
    };

    authorize();
  }, [accessToken, navigate, dispatch]);

  return <div>Loading you in...</div>;
};

export default SocialAuth;

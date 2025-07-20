import Cookies from 'js-cookie';

import { AuthTokens } from '../model/authTypes';

export const setAccessTokenToCookie = (accessToken: string) => {
  Cookies.set(AuthTokens.ACCESS, accessToken, { secure: true });
};

export const removeAccessTokenFromCookie = () => {
  Cookies.remove(AuthTokens.ACCESS);
};

export const getAccessTokenFromCookies = () => {
  return Cookies.get(AuthTokens.ACCESS);
};

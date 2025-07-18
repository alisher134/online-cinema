import Cookies from 'js-cookie';

import { AuthTokens } from '../model/authTypes';

export const setAccessTokenToCookie = (accessToken: string) => {
  Cookies.set(AuthTokens.ACCESS_TOKEN, accessToken, { secure: true });
};

export const removeAccessTokenFromCookie = () => {
  Cookies.remove(AuthTokens.ACCESS_TOKEN);
};

export const getAccessTokenFromCookies = () => {
  return Cookies.get(AuthTokens.ACCESS_TOKEN);
};

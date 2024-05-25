import 'client-only';
import Cookies from 'js-cookie';
import { clientEnv } from './env';

export const setLiffAccessTokenToCookie = (token: string) => {
  Cookies.set(clientEnv.NEXT_PUBLIC_LIFF_ACCESS_TOKEN_COOKIE, token);
};

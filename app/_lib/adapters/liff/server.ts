import { cookies } from 'next/headers';
import { serverEnv } from '@/env/server';

export const getLineAccessTokenFromCookie = () =>
  String(cookies().get(serverEnv.COOKIE_NAME_LIFF_ACCESS_TOKEN)?.value ?? '');

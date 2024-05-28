import { cookies } from 'next/headers';

import { serverEnv } from '@/infra/server/env';

export const getLineAccessTokenFromCookie = () =>
  String(cookies().get(serverEnv.COOKIE_NAME_LIFF_ACCESS_TOKEN)?.value ?? '');

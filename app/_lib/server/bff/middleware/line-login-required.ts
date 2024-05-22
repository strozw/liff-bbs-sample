import { createMiddleware } from 'hono/factory';
import { getCookie } from 'hono/cookie';
import { serverEnv } from '@/env/server';
import { lineLoginApi } from '@/app/_lib/adapters/line-login';

export const lineLoginRequired = createMiddleware(async (context, next) => {
  try {
    const accessToken = getCookie(
      context,
      serverEnv.COOKIE_NAME_LIFF_ACCESS_TOKEN,
    );

    if (!accessToken) {
      throw new Error('access token is nothing');
    }

    await lineLoginApi.verify({ accessToken });

    await next();
  } catch {
    await next();

    const res = new Response('Not authorization', { status: 403 });

    context.res = res;
  }
});

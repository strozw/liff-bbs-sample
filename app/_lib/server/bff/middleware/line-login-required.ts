import { createMiddleware } from 'hono/factory';
import { getCurrentUser } from '@/app/_lib/interactors/server/users';

export const lineLoginRequired = createMiddleware(async (context, next) => {
  try {
    const user = await getCurrentUser();

    if (!user) {
      throw new Error('access token is nothing');
    }

    context.set('currentUser', user);

    await next();
  } catch {
    await next();

    const res = new Response('Not authorization', { status: 403 });

    context.res = res;
  }
});

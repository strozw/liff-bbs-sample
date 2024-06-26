import { createMiddleware } from 'hono/factory';

import { getCurrentUser } from '@/usecase/server/users';

export const authMiddleware = createMiddleware(async (context, next) => {
  try {
    const user = await getCurrentUser();

    context.set('currentUser', user);

    await next();
  } catch {
    await next();

    const res = new Response('Not authorization', { status: 403 });

    context.res = res;
  }
});

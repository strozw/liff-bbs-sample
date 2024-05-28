import { Hono } from 'hono';

import { getCurrentUser } from '@/usecase/server/users';

export const usersApp = new Hono().get('/current', async (c) => {
  const user = await getCurrentUser();

  return c.json({
    user,
  });
});

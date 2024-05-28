import { Hono } from 'hono';

import { authMiddleware } from './middlewares/auth-middleware';
import { threadsApp } from './threads';
import { usersApp } from './users';

declare module 'hono' {
  interface ContextVariableMap {
    user?: {
      id: string;
      lineUserId: string;
      name: string;
    };
  }
}

export const app = new Hono().basePath('/api');

app.use('/*', authMiddleware);

const route = app.route('/users', usersApp).route('/threads', threadsApp);

export type AppType = typeof route;

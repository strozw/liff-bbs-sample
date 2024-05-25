import { Hono } from 'hono';
import { threadsApp } from './threads';
import { lineLoginRequired } from '@/app/_/servers/middlewares/line-login-required';

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

app.use('/threads/*', lineLoginRequired);

const route = app.route('/threads', threadsApp);

export type AppType = typeof route;

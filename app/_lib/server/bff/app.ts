import { Hono } from 'hono';
import { lineLoginRequired } from './middleware/line-login-required';
import { threadsApp } from './threads';

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

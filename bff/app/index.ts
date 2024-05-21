import { Hono } from 'hono';
import { threadsApp } from './threads';
import { lineLoginRequired } from './middleware/line-login-required';

export const runtime = 'edge';

export const app = new Hono().basePath('/api');

app.use('/threads/*', lineLoginRequired);

const route = app.route('/threads', threadsApp);

export type AppType = typeof route;

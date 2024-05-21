import 'client-only';
import { hc } from 'hono/client';
import { AppType } from '@/bff/app';

export const bffApi = hc<AppType>('/');

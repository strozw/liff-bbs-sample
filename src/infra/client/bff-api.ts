'use client';

import { hc } from 'hono/client';
import 'client-only';
import { AppType } from '@/app/_/servers/bff-app/app';

export const bffApi = hc<AppType>('/');

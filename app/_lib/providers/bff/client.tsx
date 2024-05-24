'use client';

import 'client-only';
import { hc } from 'hono/client';

import { AppType } from '@/app/_lib/server/bff/app';

export const bffApi = hc<AppType>('/');

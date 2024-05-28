'use client';

import 'client-only';

import { hc } from 'hono/client';

import type { AppType } from '@/app/_/servers/bff-app/app';

export const bffApi = hc<AppType>('/');

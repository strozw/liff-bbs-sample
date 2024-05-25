import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_LIFF_ACCESS_TOKEN_COOKIE: z.string(),
    NEXT_PUBLIC_LIFF_ID: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_LIFF_ACCESS_TOKEN_COOKIE:
      process.env.NEXT_PUBLIC_LIFF_ACCESS_TOKEN_COOKIE,
    NEXT_PUBLIC_LIFF_ID: process.env.NEXT_PUBLIC_LIFF_ID,
  },

  server: {},
});

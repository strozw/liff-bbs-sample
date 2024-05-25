import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const serverEnv = createEnv({
  client: {},
  runtimeEnv: {
    COOKIE_NAME_LIFF_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_LIFF_ACCESS_TOKEN_COOKIE,
  },

  server: {
    COOKIE_NAME_LIFF_ACCESS_TOKEN: z.string(),
  },
});

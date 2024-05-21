type ENV_KEY = 'NEXT_PUBLIC_LIFF_ID' | 'NEXT_PUBLIC_LIFF_ACCESS_TOKEN_COOKIE';

declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv extends Record<ENV_KEY, string> {}
    }
  }
}

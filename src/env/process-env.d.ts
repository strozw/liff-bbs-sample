type ENV_KEY = 'NEXT_PUBLIC_LIFF_ACCESS_TOKEN_COOKIE' | 'NEXT_PUBLIC_LIFF_ID';

declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv extends Record<ENV_KEY, string> {}
    }
  }
}

'use client';

import 'client-only';
import type { Liff } from '@line/liff';
import { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { clientEnv } from '@/env/client';

const LiffContext = createContext<Liff | null>(null);

export function useLiff() {
  return useContext(LiffContext);
}

export function LiffProvider({ children }: { children: React.ReactNode }) {
  const [, setCookie] = useCookies();
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [, setLiffError] = useState<Error | null>(null);

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    void import('@line/liff')
      .then((liff) => liff.default)
      .then((liff) => {
        console.log('LIFF init...');
        liff
          .init({
            liffId: clientEnv.NEXT_PUBLIC_LIFF_ID,
            withLoginOnExternalBrowser: true,
          })
          .then(() => {
            console.log('LIFF init succeeded.');
            console.log(liff.getOS());

            setLiffObject(liff);

            const accessToken = liff.getAccessToken();

            setCookie(
              clientEnv.NEXT_PUBLIC_LIFF_ACCESS_TOKEN_COOKIE,
              accessToken,
            );

            void liff.getProfile().then((prof) => {
              console.log({ prof });
            });
          })
          .catch((error: Error) => {
            console.log('LIFF init failed.');
            console.error(error);
            setLiffError(error);
          });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!liffObject) {
    return null;
  }

  return (
    <LiffContext.Provider value={liffObject}>{children}</LiffContext.Provider>
  );
}

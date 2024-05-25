import type { Liff } from '@line/liff';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { setLiffAccessTokenToCookie } from './cookie';
import { clientEnv } from '@/infra/client/env';

const LiffContext = createContext<Liff | null>(null);

export function useLiff() {
  return useContext(LiffContext);
}

export const LiffProvider = ({ children }: PropsWithChildren) => {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [, setLiffError] = useState<Error | null>(null);

  useEffect(() => {
    void import('@line/liff')
      .then((liff) => liff.default)
      .then((liff) => {
        liff
          .init({
            liffId: clientEnv.NEXT_PUBLIC_LIFF_ID,
            withLoginOnExternalBrowser: true,
          })
          .then(() => {
            setLiffObject(liff);

            const accessToken = liff.getAccessToken();

            if (!accessToken) {
              throw new Error('LIFF Auth Error');
            }

            setLiffAccessTokenToCookie(accessToken);

            liff
              .getProfile()
              .then((prof) => {
                console.log({ prof });
              })
              .catch((error) => {
                throw error;
              });
          })
          .catch((error: Error) => {
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
};

'use client';

import { FC, PropsWithChildren } from 'react';
import { ApiStoreProvider } from './store/api/client';

export const AppShell: FC<PropsWithChildren> = ({ children }) => {
  return <ApiStoreProvider>{children}</ApiStoreProvider>;
};

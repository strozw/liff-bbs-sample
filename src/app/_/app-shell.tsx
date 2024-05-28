'use client';

import type { FC, PropsWithChildren } from 'react';

import { AsyncStoreProvider } from '@/infra/client/async-store';

export const AppShell: FC<PropsWithChildren> = ({ children }) => {
  return <AsyncStoreProvider>{children}</AsyncStoreProvider>;
};

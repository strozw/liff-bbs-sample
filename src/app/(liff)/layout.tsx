import type { PropsWithChildren } from 'react';
import React from 'react';

import { LiffProvider } from '@/infra/client/liff';

export default function Layout({ children }: PropsWithChildren) {
  return <LiffProvider>{children}</LiffProvider>;
}

import React, { PropsWithChildren } from 'react';

import { LiffProvider } from '../_lib/providers/liff/client';

export default function Layout({ children }: PropsWithChildren) {
  return <LiffProvider>{children}</LiffProvider>;
}

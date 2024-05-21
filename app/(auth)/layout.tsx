import React from 'react';

import { LiffProvider } from '../_lib/adapters/liff/client';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LiffProvider>{children}</LiffProvider>;
}

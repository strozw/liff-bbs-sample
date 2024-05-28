'use client';
import '@/app/_/components/globals.css';

import { Noto_Sans_JP } from 'next/font/google';

import { AppShell } from '@/app/_/app-shell';

/**
 * fetch の結果を static file に cache しないようにする
 */
export const fetchCache = 'default-no-store';

/**
 * SSR を矯正 (SSG が必要な場合は個別に `export const dynamic = 'auto' or 'force-static'` を指定する)
 */
export const dynamic = 'force-dynamic';

const noto = Noto_Sans_JP({
  subsets: ['cyrillic', 'latin', 'latin-ext', 'vietnamese'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

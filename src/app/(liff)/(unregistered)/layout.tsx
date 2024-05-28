'use client';

import { WithUnregistration } from '@/app/_/features/with-unregistration/components';
import type { LayoutProps } from '@/utils/types';

export default function Layout({ children }: LayoutProps) {
  return (
    <WithUnregistration>
      <div className="flex h-screen items-center justify-center">
        {children}
      </div>
    </WithUnregistration>
  );
}

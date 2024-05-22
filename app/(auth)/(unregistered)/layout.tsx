import { redirect } from 'next/navigation';
import { LayoutProps } from '@/app/_lib/utils/types';
import { getCurrentUser } from '@/app/_lib/interactors/user-interactors';

export default async function Layout({ children }: LayoutProps) {
  const user = await getCurrentUser();

  if (user) {
    redirect('/threads');
  }

  return (
    <div className="flex h-screen items-center justify-center">{children}</div>
  );
}

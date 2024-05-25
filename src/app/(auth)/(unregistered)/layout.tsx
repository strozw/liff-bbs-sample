import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/usecase/server/users';
import { LayoutProps } from '@/utils/types';

export default async function Layout({ children }: LayoutProps) {
  const user = await getCurrentUser();

  if (user) {
    redirect('/threads');
  }

  return (
    <div className="flex h-screen items-center justify-center">{children}</div>
  );
}

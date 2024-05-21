import { redirect } from 'next/navigation';
import { UserInteractors } from '@/app/_lib/adapters/bff/server';
import { getLineAccessTokenFromCookie } from '@/app/_lib/adapters/liff/server';
import { LayoutProps } from '@/app/_lib/utils/types';

export default async function Layout({ children }: LayoutProps) {
  const accessToken = getLineAccessTokenFromCookie();

  const user = await UserInteractors.getUserByCurrentLineAccount(accessToken);

  if (user) {
    redirect('/threads');
  }

  return (
    <div className="flex h-screen items-center justify-center">{children}</div>
  );
}

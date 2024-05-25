import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Button, buttonVariants } from '@/app/_/components/button';
import { HomeIcon, PlusIcon, UserIcon } from '@/app/_/components/icons';
import { LayoutProps } from '@/utils/types';
import { getCurrentUser } from '@/usecase/server/users';

export default async function Layout({ children }: LayoutProps) {
  const user = await getCurrentUser();

  if (!user) {
    return redirect('/registration');
  }

  return (
    <div className="flex h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-primary px-4 text-white shadow-sm ">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">
            <Link href="/threads">BBS</Link>
          </h1>
        </div>

        <div className="flex items-center gap-4"></div>
      </header>

      <main className="flex-1 overflow-auto p-4">{children}</main>

      <footer className="sticky bottom-0 z-10 flex h-16 w-full items-center justify-between bg-white px-4 shadow-sm dark:bg-gray-950">
        <Link
          className={buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })}
          href="/threads"
        >
          <HomeIcon className="size-6" />
          <span className="sr-only">Home</span>
        </Link>

        <Link
          className={buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })}
          href="/threads/new"
        >
          <PlusIcon className="size-6" />
          <span className="sr-only">Create</span>
        </Link>

        <Button size="icon" variant="ghost">
          <UserIcon className="size-6" />
          <span className="sr-only">Profile</span>
        </Button>
      </footer>
    </div>
  );
}

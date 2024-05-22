import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <main className="flex min-h-dvh flex-col items-center justify-center px-4 md:px-6">
        <div className="max-w-md space-y-4 text-center">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <p className="text-gray-500 dark:text-gray-400">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/"
          >
            Return to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

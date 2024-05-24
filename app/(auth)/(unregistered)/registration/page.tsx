import { UserRegistrationForm } from '@/app/_lib/features/user-registration-form/components';

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JTCEQNzmzjO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Page() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register Your Profile</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your name to use threads.
        </p>
      </div>

      <UserRegistrationForm />
    </div>
  );
}

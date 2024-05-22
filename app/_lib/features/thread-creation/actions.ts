'use server';

import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';
import { getLineAccessTokenFromCookie } from '@/app/_lib/adapters/liff/server';
import { threadCreationSchema } from '@/app/_lib/features/thread-creation/schema';
import { getUserByCurrentLineAccount } from '@/app/_lib/interactors/user-interactors';
import { createThread } from '@/app/_lib/interactors/thread-interactors';

export const threadCreationAction = async (
  _prevState: unknown,
  formData: FormData,
) => {
  const submission = parseWithZod(formData, { schema: threadCreationSchema });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const token = getLineAccessTokenFromCookie();

  const user = await getUserByCurrentLineAccount(token);

  const data = await createThread({
    ...submission.value,
    userId: user.id,
  });

  redirect(`/threads/${data?.id}`);
};

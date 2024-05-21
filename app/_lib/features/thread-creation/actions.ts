'use server';

import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';
import { getLineAccessTokenFromCookie } from '../../adapters/liff/server';
import { threadCreationSchema } from '@/app/_lib/features/thread-creation/schema';
import { ThreadInteractors, UserInteractors } from '@/bff/interactors';

export const threadCreationAction = async (
  _prevState: unknown,
  formData: FormData,
) => {
  const submission = parseWithZod(formData, { schema: threadCreationSchema });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const token = getLineAccessTokenFromCookie();

  const user = await UserInteractors.getUserByCurrentLineAccount(token);

  const data = await ThreadInteractors.createThread({
    ...submission.value,
    userId: user.id,
  });

  redirect(`/threads/${data?.id}`);
};

'use server';

import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getLineAccessTokenFromCookie } from '../../providers/liff/server';
import { getUserByCurrentLineAccount } from '../../interactors/server/users';
import { createComment } from '../../interactors/server/comments';
import { commentCreationSchema } from './schema';

export const commentCreationAction = async (
  threadId: string,
  _prevState: unknown,
  formData: FormData,
) => {
  const submission = parseWithZod(formData, { schema: commentCreationSchema });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const token = getLineAccessTokenFromCookie();

  const user = await getUserByCurrentLineAccount(token);

  await createComment({
    ...submission.value,
    threadId,
    userId: user.id,
  });

  revalidatePath(`/threads/${threadId}`);

  redirect(`/threads/${threadId}`);
};

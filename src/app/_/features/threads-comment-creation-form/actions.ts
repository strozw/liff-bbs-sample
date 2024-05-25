'use server';

import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { commentCreationSchema } from './schemas';
import { getUserByCurrentLineAccount } from '@/usecase/server/users';
import { createComment } from '@/usecase/server/comments';
import { getLineAccessTokenFromCookie } from '@/infra/server/cookie';

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

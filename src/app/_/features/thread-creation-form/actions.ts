'use server';

import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';
import { getLineAccessTokenFromCookie } from '@/infra/server/cookie';
import { threadCreationSchema } from '@/app/_/features/thread-creation-form/schemas';
import { getUserByCurrentLineAccount } from '@/usecase/server/users';
import { createThread } from '@/usecase/server/threads';

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

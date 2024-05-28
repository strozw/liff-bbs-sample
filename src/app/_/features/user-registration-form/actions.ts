'use server';

import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';

import { getLineAccessTokenFromCookie } from '@/infra/server/cookie';
import { createUser } from '@/usecase/server/users';

import { userRegistrationSchema } from './schema';

export const userRegistrationAction = async (
  _prevState: unknown,
  formData: FormData,
) => {
  const submission = parseWithZod(formData, {
    schema: userRegistrationSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const lineAccessToken = getLineAccessTokenFromCookie();

  await createUser(lineAccessToken, {
    name: submission.value.name,
  });

  redirect('/threads');
};

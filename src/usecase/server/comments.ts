import type { Schema } from '@/domain/types';
import { amplifyClient } from '@/infra/server/amplify';

export const createComment = async (
  payload: Required<
    Pick<Schema['Comment']['type'], 'body' | 'threadId' | 'userId'>
  >,
) => {
  const res = await amplifyClient.models.Comment.create(payload);

  if (res.errors?.[0]) {
    throw new Error(res.errors[0].message);
  }

  return res.data;
};

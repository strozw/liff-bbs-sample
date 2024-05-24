import { amplifyClient } from '@/app/_lib/adapters/amplify/server';
import { Schema } from '@/amplify/data/resource';

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

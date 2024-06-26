import type { Schema } from '@/domain/types';
import { amplifyClient } from '@/infra/server/amplify';

export const createThread = async (
  payload: Required<
    Pick<Schema['Thread']['type'], 'description' | 'title' | 'userId'>
  >,
) => {
  const res = await amplifyClient.models.Thread.create(payload);

  if (res.errors?.[0]) {
    throw new Error(res.errors[0].message);
  }

  return res.data;
};

export const getThreadOutline = async (id: string) => {
  const res = await amplifyClient.models.Thread.get(
    { id: id },
    {
      selectionSet: ['id', 'title', 'description'],
    },
  );

  if (res.errors?.[0]) {
    throw new Error(res.errors[0].message);
  }

  return res.data;
};

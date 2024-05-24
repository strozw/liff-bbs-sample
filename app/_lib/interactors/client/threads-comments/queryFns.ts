import { bffApi } from '@/app/_lib/providers/bff/client';

export const fetchThreadComments = async (threadId: string) => {
  const res = await bffApi.api.threads[':id'].comments.$get({
    param: { id: threadId },
  });

  return await res.json();
};

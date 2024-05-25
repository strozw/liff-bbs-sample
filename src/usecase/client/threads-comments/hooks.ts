import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { threadCommentsQueryKeys } from './queryKeys';
import { fetchThreadComments } from './queryFns';

export const useThreadsComments = (threadId: string) =>
  useQuery(
    useMemo(
      () => ({
        queryFn: fetchThreadComments.bind(null, threadId),
        queryKey: threadCommentsQueryKeys.threadsComments(threadId),
      }),
      [threadId],
    ),
  );
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { fetchThreadComments } from './queryFns';
import { threadCommentsQueryKeys } from './queryKeys';

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

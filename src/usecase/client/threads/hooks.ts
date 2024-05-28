import { useQuery } from '@tanstack/react-query';

import type { CustomQueryOptions } from '../types';
import { fetchLatestThreads, fetchThread } from './queryFns';
import { threadsQueryKeys } from './queryKeys';

export const useLatestThreads = (
  options?: CustomQueryOptions<ReturnType<typeof fetchLatestThreads>>,
) =>
  useQuery({
    queryFn: fetchLatestThreads,
    queryKey: threadsQueryKeys.latest,
    ...options,
  });

export const useThread = (
  id: string,
  options?: CustomQueryOptions<ReturnType<typeof fetchThread>>,
) =>
  useQuery({
    queryFn: () => fetchThread(id),
    queryKey: threadsQueryKeys.detail(id),
    ...options,
  });

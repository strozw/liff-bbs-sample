import { useQuery } from '@tanstack/react-query';
import { fetchLatestThreads } from './queryFns';
import { threadsQueryKeys } from './queryKeys';

export const useLatestThreads = () =>
  useQuery({
    queryFn: fetchLatestThreads,
    queryKey: threadsQueryKeys.latest,
  });

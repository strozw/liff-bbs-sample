import { useQuery } from '@tanstack/react-query';

import type { CustomQueryOptions } from '../types';
import { usersQueryKeys } from './queryFns';
import { fetchCurrentUser } from './queryKeys';

export const useCurrentUser = (
  options?: CustomQueryOptions<ReturnType<typeof fetchCurrentUser>>,
) =>
  useQuery({
    queryFn: fetchCurrentUser,
    queryKey: usersQueryKeys.current,
    ...options,
  });

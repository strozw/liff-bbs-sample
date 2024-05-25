import { threadCommentsQueryKeys } from '../threads-comments/queryKeys';

export const threadsQueryKeys = {
  all: ['threads'] as const,
  latest: [...threadCommentsQueryKeys.all, 'latest'],
};

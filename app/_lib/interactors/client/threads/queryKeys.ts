import { threadCommentsKeys } from '../threads-comments';

export const threadsQueryKeys = {
  all: ['threads'] as const,
  latest: [...threadCommentsKeys.all, 'latest'],
};

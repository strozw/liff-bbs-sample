import { commentsQueryKeys } from '../comments/queryKeys';
import { threadsQueryKeys } from '../threads/queryKeys';

export const threadCommentsQueryKeys = {
  all: ['threads-comments'] as const,

  threadsComments(threadId: string) {
    return [
      ...threadsQueryKeys.all,
      ...commentsQueryKeys.all,
      ...threadCommentsQueryKeys.all,
      threadId,
    ] as const;
  },
};

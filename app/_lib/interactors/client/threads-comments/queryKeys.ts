import { commentsQueryKeys } from '../comments';
import { threadsQueryKeys } from '../threads';

export const threadCommentsKeys = {
  all: ['threads-comments'] as const,

  threadsComments(threadId: string) {
    return [
      ...threadsQueryKeys.all,
      ...commentsQueryKeys.all,
      ...threadCommentsKeys.all,
      threadId,
    ] as const;
  },
};

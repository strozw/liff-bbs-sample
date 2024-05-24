'use client';

import { useThreadsComments } from '../../interactors/client/threads-comments/hooks';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/_lib/components/avatar';

export const ThreadsCommentList = ({ threadId }: { threadId: string }) => {
  const { data } = useThreadsComments(threadId);

  const comments = data?.comments;

  return (
    <div className="grid gap-4">
      {comments?.map((comment) => (
        <div className="flex items-start gap-4" key={comment.id}>
          <Avatar className="size-10">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback>
              {comment?.author?.name?.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <div className="font-medium">{comment?.author?.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {comment.createdAt}
              </div>
            </div>
            <div>{comment.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

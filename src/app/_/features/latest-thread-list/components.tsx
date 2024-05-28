'use client';

import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/app/_/components/avatar';
import { Card } from '@/app/_/components/card';
import { MessageCircleIcon } from '@/app/_/components/icons';
import { useLatestThreads } from '@/usecase/client/threads/hooks';

export const LatestThreadList = () => {
  const { data, isSuccess } = useLatestThreads();

  return (
    <div>
      {isSuccess &&
        data?.threads?.map((thread) => (
          <Link href={`/threads/${thread.id}`} key={thread.id}>
            <Card className="m-2 grid grid-cols-[3rem_1fr] items-center gap-4 p-2 ring-black focus:ring-2">
              <Avatar className="size-12 border">
                <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                <AvatarFallback>
                  {thread?.author?.name?.substring(0, 2)}
                </AvatarFallback>
              </Avatar>

              <div className="grid gap-1">
                <div className="font-medium">{thread.title}</div>

                <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                  {thread.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <MessageCircleIcon className="size-4" />
                  <span>{thread.comments.length} comments</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
    </div>
  );
};

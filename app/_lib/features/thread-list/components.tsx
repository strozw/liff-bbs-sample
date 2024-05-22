'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { Card } from '../../components/card';
import { bffApi } from '../../adapters/bff/client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/_lib/components/avatar';
import { MessageCircleIcon } from '@/app/_lib/components/icons';

export const ThreadList = () => {
  const { data, isSuccess } = useQuery({
    queryFn: async () => {
      const res = await bffApi.api.threads.recent.$get();

      const data = await res.json();

      return data;
    },
    queryKey: ['threads'],
  });

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

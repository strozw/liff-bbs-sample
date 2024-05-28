'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/_/components/card';
import { ThreadsCommentCreationForm } from '@/app/_/features/threads-comment-creation-form/components';
import { ThreadsCommentList } from '@/app/_/features/threads-comment-list/components';
import { useThread } from '@/usecase/client/threads/hooks';

export default function Page({ params }: { params: { id: string } }) {
  const { data: thread, isSuccess } = useThread(params.id);

  return isSuccess ? (
    <Card>
      <CardHeader>
        <CardTitle>{thread?.title}</CardTitle>

        <CardDescription>{thread?.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <ThreadsCommentList threadId={thread.id} />
      </CardContent>

      <CardFooter>
        <ThreadsCommentCreationForm threadId={thread?.id} />
      </CardFooter>
    </Card>
  ) : null;
}

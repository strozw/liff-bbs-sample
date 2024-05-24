import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/_lib/components/card';
import { ThreadsCommentCreationForm } from '@/app/_lib/features/threads-comment-creation-form/components';
import { ThreadsCommentList } from '@/app/_lib/features/threads-comment-list/components';
import { getThreadOutline } from '@/app/_lib/interactors/server/threads';

export default async function Page({ params }: { params: { id: string } }) {
  const thread = await getThreadOutline(params.id);

  if (!thread) {
    throw new Error('non existend thread');
  }

  return (
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
  );
}

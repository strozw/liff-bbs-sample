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
import { getThreadOutline } from '@/usecase/server/threads';

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

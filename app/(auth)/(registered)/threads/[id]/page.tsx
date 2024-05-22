import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/_lib/components/card';
import { CommentCreationForm } from '@/app/_lib/features/comment-creation/commponent';
import { CommentList } from '@/app/_lib/features/comment-list/components';
import { getThreadOutline } from '@/app/_lib/interactors/thread-interactors';

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
        <CommentList threadId={thread.id} />
      </CardContent>
      <CardFooter>
        <CommentCreationForm threadId={thread?.id} />
      </CardFooter>
    </Card>
  );
}

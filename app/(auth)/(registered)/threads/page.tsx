import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_lib/components/card';
import { ThreadList } from '@/app/_lib/features/thread-list/components';

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest Threads</CardTitle>

        <CardDescription>
          Explore the latest discussions on our BBS.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ThreadList />
      </CardContent>
    </Card>
  );
}

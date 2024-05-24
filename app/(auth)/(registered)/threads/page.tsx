import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_lib/components/card';
import { LatestThreadList } from '@/app/_lib/features/latest-thread-list/components';

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
        <LatestThreadList />
      </CardContent>
    </Card>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_lib/components/card';
import { ThreadCreationForm } from '@/app/_lib/features/thread-creation-form/components';

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Thread</CardTitle>

        <CardDescription>
          Start a new discussion on the community board.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Card className="w-full max-w-md p-4">
          <ThreadCreationForm />
        </Card>
      </CardContent>
    </Card>
  );
}

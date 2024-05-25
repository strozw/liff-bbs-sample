'use client';
import { getFormProps, getTextareaProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useFormState } from 'react-dom';
import { commentCreationAction } from './actions';
import { commentCreationSchema } from './schemas';
import { Button } from '@/app/_/components/button';
import { Textarea } from '@/app/_/components/textarea';

export const ThreadsCommentCreationForm = ({
  threadId,
}: {
  threadId: string;
}) => {
  const queryClient = useQueryClient();

  const [lastResult, action] = useFormState(
    async (state: unknown, payload: FormData) => {
      const result = await commentCreationAction(threadId, state, payload);

      void queryClient.invalidateQueries({ queryKey: ['comments'] });

      return result;
    },
    undefined,
  );

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: commentCreationSchema });
    },
  });

  return (
    <form action={action} className="w-full" {...getFormProps(form)}>
      <Textarea
        className="w-full"
        placeholder="Write your comment..."
        {...getTextareaProps(fields.body)}
      />

      <div className="flex justify-center">
        <Button className="mt-4" size="lg">
          Post
        </Button>
      </div>
    </form>
  );
};

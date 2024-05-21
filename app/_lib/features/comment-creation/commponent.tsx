/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import { getFormProps, getTextareaProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useFormState } from 'react-dom';
import { useQueryClient } from '@tanstack/react-query';
import { commentCreationAction } from './actions';
import { commentCreationSchema } from './schema';
import { Button } from '@/app/_lib/components/button';
import { Textarea } from '@/app/_lib/components/textarea';

export const CommentCreationForm = ({ threadId }: { threadId: string }) => {
  const queryClient = useQueryClient();

  const boundAction = commentCreationAction.bind(null, threadId);

  // TODO: fix type-error
  // @ts-ignore
  const [lastResult, action] = useFormState(async (...params) => {
    // @ts-ignore
    await boundAction(...params);
    void queryClient.invalidateQueries({ queryKey: ['comments'] });
  }, undefined);

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

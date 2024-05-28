'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import type { FC } from 'react';
import { useFormState } from 'react-dom';

import { Button } from '@/app/_/components/button';
import { Input } from '@/app/_/components/input';
import { Label } from '@/app/_/components/label';
import { Textarea } from '@/app/_/components/textarea';

import { threadCreationAction } from './actions';
import { threadCreationSchema } from './schemas';

export const ThreadCreationForm: FC = () => {
  const [lastResult, action] = useFormState(threadCreationAction, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: threadCreationSchema });
    },
  });

  return (
    <form action={action} className="grid gap-4" {...getFormProps(form)}>
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>

        <Input
          placeholder="Enter a title for your thread"
          {...getInputProps(fields.title, {
            type: 'text',
          })}
        />

        <div className="text-sm text-red-500" id={fields.title.errorId}>
          {fields.title.errors}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>

        <Textarea
          className="min-h-[120px]"
          placeholder="Provide a brief description of your thread"
          {...getInputProps(fields.description, {
            type: 'text',
          })}
        />

        <div className="text-sm text-red-500" id={fields.description.errorId}>
          {fields.description.errors}
        </div>
      </div>

      <Button type="submit">Create Thread</Button>
    </form>
  );
};

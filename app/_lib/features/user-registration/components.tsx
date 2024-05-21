'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { FC } from 'react';
import { useFormState } from 'react-dom';
import { userRegistrationAction } from './actions';
import { userRegistrationSchema } from './schema';
import { Label } from '@/app/_lib/components/label';
import { Input } from '@/app/_lib/components/input';
import { Button } from '@/app/_lib/components/button';

export const UserRegistrationForm: FC = () => {
  const [lastResult, action] = useFormState(userRegistrationAction, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: userRegistrationSchema });
    },
  });

  return (
    <form action={action} className="space-y-4" {...getFormProps(form)}>
      <div className="space-y-2">
        <Label htmlFor="name"> Name </Label>

        <Input
          placeholder="Enter your name"
          {...getInputProps(fields.name, {
            type: 'text',
          })}
        />

        <div className="text-sm text-red-500" id={fields.name.errorId}>
          {fields.name.errors}
        </div>
      </div>

      <Button className="w-full" type="submit">
        Register
      </Button>
    </form>
  );
};

import { z } from 'zod';

export const commentCreationSchema = z.object({
  body: z.string().min(1),
});

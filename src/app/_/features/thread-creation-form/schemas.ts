import { z } from 'zod';

export const threadCreationSchema = z.object({
  description: z.string(),
  title: z.string().min(1),
});

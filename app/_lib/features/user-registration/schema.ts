import { z } from 'zod';

export const userRegistrationSchema = z.object({
  name: z.string().min(2),
});

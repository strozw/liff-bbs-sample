import 'server-only';

import outputs from 'amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';

import type { Schema } from '@/domain/types';

Amplify.configure(outputs);

export const amplifyClient = generateClient<Schema>({
  authMode: 'apiKey',
});

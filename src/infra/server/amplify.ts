import 'server-only';
import { generateClient } from 'aws-amplify/data';
import { Amplify } from 'aws-amplify';
import outputs from 'amplify_outputs.json';
import { Schema } from '@/domain/types';

Amplify.configure(outputs);

export const amplifyClient = generateClient<Schema>();

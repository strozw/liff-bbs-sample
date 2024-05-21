import 'server-only';
import { generateClient } from 'aws-amplify/data';
import { Amplify } from 'aws-amplify';
import { Schema } from '@/amplify/data/resource';
import outputs from '@/amplify_outputs.json';

Amplify.configure(outputs);

export const amplifyClient = generateClient<Schema>();

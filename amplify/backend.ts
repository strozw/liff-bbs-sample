import { defineBackend } from '@aws-amplify/backend';

import { adminAuth } from './auth/resource.js';
import { data } from './data/resource.js';
import { mainStorage } from './storage/resource.js';

defineBackend({
  admin_auth: adminAuth,
  data,
  main_storage: mainStorage,
});

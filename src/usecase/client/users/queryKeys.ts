import { bffApi } from '@/infra/client/bff-api';

export const fetchCurrentUser = async () => {
  const res = await bffApi.api.users.current.$get();

  return res.json();
};

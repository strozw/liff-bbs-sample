import { bffApi } from '@/infra/client/bff-api';

export const fetchLatestThreads = async () => {
  const res = await bffApi.api.threads.recent.$get();

  const data = await res.json();

  return data;
};

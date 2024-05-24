import { bffApi } from '@/app/_lib/adapters/bff/client';

export const fetchLatestThreads = async () => {
  const res = await bffApi.api.threads.recent.$get();

  const data = await res.json();

  return data;
};

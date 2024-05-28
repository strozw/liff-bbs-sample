export const threadsQueryKeys = {
  all: ['threads'] as const,
  detail: (id: string) => [threadsQueryKeys.all, 'detail', id] as const,
  latest: ['threads', 'latest'] as const,
};

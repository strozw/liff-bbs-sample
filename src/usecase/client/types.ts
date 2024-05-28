import type { UseQueryOptions } from '@tanstack/react-query';

export type CustomQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData extends Promise<infer T> ? T : TQueryFnData,
  // TQueryKey extends QueryKey = unknown[],
> = Omit<UseQueryOptions<TData, TError, TData>, 'queryFn' | 'queryKey'>;

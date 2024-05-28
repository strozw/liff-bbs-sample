import { useRouter } from 'next/navigation';
import type { FC, PropsWithChildren } from 'react';

import { useCurrentUser } from '@/usecase/client/users/hook';

export const WithUnregistration: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { isError, isSuccess } = useCurrentUser();

  if (isSuccess) {
    router.push('/threads');

    return <></>;
  }

  return isError ? children : <></>;
};

import { useRouter } from 'next/navigation';
import type { FC, PropsWithChildren } from 'react';

import { useCurrentUser } from '@/usecase/client/users/hook';

export const WithRegistration: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { isError, isSuccess } = useCurrentUser();

  if (isError) {
    router.push('/registration');

    return <></>;
  }

  return isSuccess ? children : null;
};

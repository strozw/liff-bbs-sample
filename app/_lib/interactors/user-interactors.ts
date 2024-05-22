import React from 'react';
import { getLineAccessTokenFromCookie } from '@/app/_lib/adapters/liff/server';
import { Schema } from '@/amplify/data/resource';
import { amplifyClient } from '@/app/_lib/adapters/amplify/server';
import { lineLoginApi } from '@/app/_lib/adapters/line-login';

export const getUserByCurrentLineAccount = async (lineAccessToken: string) => {
  const lineProfile = await lineLoginApi.userinfo({
    accessToken: lineAccessToken,
  });

  const res = await amplifyClient.models.User.listUserByLineUserId(
    {
      lineUserId: lineProfile.sub,
    },
    { selectionSet: ['id', 'name', 'lineUserId'] },
  );

  const user = res.data[0];

  return user;
};

export const createUser = async (
  lineAccessToken: string,
  userProps: Required<Pick<Schema['User']['type'], 'name'>>,
) => {
  const lineProfile = await lineLoginApi.userinfo({
    accessToken: lineAccessToken,
  });

  const res = await amplifyClient.models.User.create({
    ...userProps,
    lineUserId: lineProfile.sub,
  });

  return res.data;
};

export const getCurrentUser = React.cache(async () => {
  const accessToken = getLineAccessTokenFromCookie();

  const user = await getUserByCurrentLineAccount(accessToken);

  return user;
});

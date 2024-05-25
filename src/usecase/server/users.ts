import React from 'react';
import { Schema } from 'amplify/data/resource';
import { amplifyClient } from '@/infra/server/amplify';
import { lineLoginApi } from '@/infra/universal/line-login-api';
import { getLineAccessTokenFromCookie } from '@/infra/server/cookie';

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

import { Schema } from '@/amplify/data/resource';
import { amplifyClient } from '@/bff/lib/adapters/amplify';
import { lineLoginApi } from '@/bff/lib/adapters/line-login';

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

  console.log(res.errors);

  return res.data;
};

import ky from 'ky';

type VerifyAccessTokenResBody = {
  scope: 'profile';
  client_id: string;
  expires_in: number;
};

type UserInfoResBody = {
  sub: string;
  name: string;
  picture: string;
};

const client = ky.create({
  prefixUrl: 'https://api.line.me/oauth2/v2.1/',
});

export const lineLoginApi = {
  client,

  /**
   * @see {@url https://developers.line.biz/ja/reference/line-login/#verify-access-token}
   */
  verify: async ({ accessToken }: { accessToken: string }) => {
    return client
      .get('verify', {
        searchParams: { access_token: accessToken },
      })
      .json<VerifyAccessTokenResBody>();
  },

  /**
   * @see {@url https://developers.line.biz/ja/reference/line-login/#userinfo}
   */
  userinfo: async ({ accessToken }: { accessToken: string }) => {
    return client
      .get('userinfo', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .json<UserInfoResBody>();
  },
};

import ky from 'ky';

type VerifyAccessTokenResBody = {
  client_id: string;
  expires_in: number;
  scope: 'profile';
};

type UserInfoResBody = {
  name: string;
  picture: string;
  sub: string;
};

const client = ky.create({
  prefixUrl: 'https://api.line.me/oauth2/v2.1/',
});

export const lineLoginApi = {
  client,

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
};

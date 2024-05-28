import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * When used alongside data, it is automatically configured as an auth provider for data
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const adminAuth = defineAuth({
  loginWith: {
    email: true,
    // externalProviders: {
    //   callbackUrls: ['https://localhost:3000/threads'],
    //   logoutUrls: ['https://localhost:3000/logouted'],
    //   oidc: [
    //     {
    //       name: 'LINE',
    //       // scopes: ['profile', 'email', 'openid'],
    //       scopes: ['profile', 'openid'],
    //       clientId: secret('LINE_CHANNEL_ID'),
    //       clientSecret: secret('LINE_CHANNEL_SECRET'),
    //       issuerUrl: 'https://access.line.me',
    //       endpoints: {
    //         token: 'https://api.line.me/oauth2/v2.1/token',
    //         jwksUri: 'https://api.line.me/oauth2/v2.1/verify',
    //         userInfo: 'https://api.line.me/v2/profile',
    //         authorization: 'https://access.line.me/oauth2/v2.1/authorize',
    //       },
    //       attributeMapping: {
    //         /**
    //          * @see {@link https://developers.line.biz/ja/reference/line-login/#verify-id-token-response}
    //          */
    //         // custom: {
    //         //   /**
    //         //    * LINE User ID
    //         //    */
    //         //   sub: 'line_sub',
    //         //   /**
    //         //    * LINE Display User Name
    //         //    */
    //         //   name: 'name'
    //         // }
    //       }
    //     },
    //   ],
    // }
    // add social providers
    // externalProviders: {
    /**
     * first, create your secrets using `amplify sandbox secret`
     * then, import `secret` from `@aws-amplify/backend`
     * @see https://docs.amplify.aws/gen2/deploy-and-host/sandbox-environments/features/#setting-secrets
     */
    // loginWithAmazon: {
    //   clientId: secret('LOGINWITHAMAZON_CLIENT_ID'),
    //   clientSecret: secret('LOGINWITHAMAZON_CLIENT_SECRET'),
    // }
    // configure callback and logout URLs
    // callbackUrls: ['http://localhost:3000'],
    // logoutUrls: ['http://localhost:3000'],
    // },
  },

  /**
   * enable multifactor authentication
   * @see https://docs.amplify.aws/gen2/build-a-backend/auth/manage-mfa
   */
  multifactor: {
    mode: 'OPTIONAL',
    sms: true,
    totp: true,
  },

  // userAttributes: {
  //   /** request additional attributes for your app's users */
  //   // profilePicture: {
  //   //   mutable: true,
  //   //   required: false,
  //   // },
  // },
});

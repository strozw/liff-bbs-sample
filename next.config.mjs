import { fileURLToPath } from 'node:url';
import createJiti from 'jiti';
const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('./src/infra/client/env');
jiti('./src/infra/server/env');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint-disable-next-line @typescript-eslint/require-await
  async redirects() {
    return [
      {
        destination: '/threads',
        permanent: true,
        source: '/',
      },
    ];
  },
};

export default nextConfig;

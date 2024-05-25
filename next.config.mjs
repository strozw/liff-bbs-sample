import { fileURLToPath } from 'node:url';
import createJiti from 'jiti';
const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('./src/env/client');
jiti('./src/env/server');

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

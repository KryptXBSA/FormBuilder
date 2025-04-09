 import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

 if (process.env.NODE_ENV === 'development') {
	await setupDevPlatform();
  }

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;

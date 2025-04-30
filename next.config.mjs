/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions:true
  },
  typescript: {
		ignoreBuildErrors: true,
	},
}

export default nextConfig

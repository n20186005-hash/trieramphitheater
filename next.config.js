/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  async redirects() {
    return [{ source: '/:path*', has: [{ type: 'host', value: 'trieramphitheater.com' }], destination: 'https://www.trieramphitheater.com/:path*', permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;

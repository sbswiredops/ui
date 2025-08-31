/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      // Reduce HMR issues
      resolveAlias: {
        canvas: './empty-module.js',
      },
    },
  },
  // Allow dev origins to prevent cross-origin warnings
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig

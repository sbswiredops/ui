/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix cross-origin warnings for dev server
  allowedDevOrigins: [
    'd32519ff6e0e4b148dc37b9edb7f1f37-cb822441-eeaa-4be0-b792-27b5b4.fly.dev'
  ],
  turbopack: {
    // Reduce HMR issues
    resolveAlias: {
      canvas: './empty-module.js',
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
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig

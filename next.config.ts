import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chakhimarket.netlify.app',
        port: '',
        pathname: '/public/images/',
        search: '',
      },
    ],
  },
};

export default nextConfig;

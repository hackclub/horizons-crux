import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: isDev ? '' : '/horizons-crux',
  assetPrefix: isDev ? '' : '/horizons-crux/',
};

module.exports = nextConfig;

export default nextConfig;

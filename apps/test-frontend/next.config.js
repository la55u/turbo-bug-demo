const path = require("path");

/**
 * @[type] {import('next').NextConfig}
 */
const nextConfig = {
  transpilePackages: [],
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
};

module.exports = nextConfig;

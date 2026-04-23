/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hyperdrive-v2-repository',
  assetPrefix: '/hyperdrive-v2-repository',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

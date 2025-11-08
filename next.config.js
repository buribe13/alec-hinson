/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['cdn.sanity.io'],
  },
  // If your GitHub repo is username.github.io, set basePath to ''
  // If your GitHub repo is username/repo-name, set basePath to '/repo-name'
  basePath: process.env.NODE_ENV === 'production' ? '/alec-hinson' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/alec-hinson' : '',
}

module.exports = nextConfig


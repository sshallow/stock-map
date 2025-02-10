/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://smartpayt.com/prod-api/:path*'
      }
    ]
  }
}

module.exports = nextConfig

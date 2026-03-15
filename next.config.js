/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // API 路由重写到外部服务
      {
        source: '/api/polymarket/:path*',
        destination: 'https://gamma-api.polymarket.com/:path*'
      },
      {
        source: '/games/groups/:path*',
        destination: 'https://api.bookmaker.xyz/games/groups/:path*'
      },
      {
        source: '/games/:path*',
        destination: 'https://api.bookmaker.xyz/games/affiliate/0x82875517c2B4bd534de4B2C0d21BFf5F40b25dA6/games/:path*'
      },
      {
        source: '/games-2/:path*',
        destination: 'https://content.bookmaker.xyz/games-2/:path*'
      },
      {
        source: '/images/:path*',
        destination: 'https://bookmaker.xyz/images/:path*'
      },
      {
        source: '/providers-logo/:path*',
        destination: 'https://content.bookmaker.xyz/providers-logo/:path*'
      },
      {
        source: '/bapi/:path*',
        destination: 'https://www.apollox.finance/bapi/:path*'
      },
      {
        source: '/fapi/:path*',
        destination: 'https://www.apollox.finance/fapi/:path*'
      },
      {
        source: '/cloud-futures/:path*',
        destination: 'https://static.apollox.com/cloud-futures/:path*'
      },
      {
        source: '/api/:path*',
        destination: 'https://static.apollox.com/api/:path*'
      }
    ]
  }
}

module.exports = nextConfig 
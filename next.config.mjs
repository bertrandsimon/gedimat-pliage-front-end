/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Matches any path
      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        pathname: '/**', // Matches any path
      },
    ],
  },
}

export default nextConfig

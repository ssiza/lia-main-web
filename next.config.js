/** @type {import('next').NextConfig} */
const nextConfig = {
  // Default dev allowlist includes "localhost" but not the numeric loopback; using 127.0.0.1
  // in the browser can block some /_next dev fetches and contribute to RSC "Failed to fetch".
  allowedDevOrigins: ['127.0.0.1'],
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig

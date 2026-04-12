/** @type {import('next').NextConfig} */
const extraDevHosts = (process.env.NEXT_ALLOWED_DEV_ORIGINS ?? '')
  .split(',')
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean)

const nextConfig = {
  // Dev-only: Next blocks cross-origin /_next requests. "localhost" is allowed by default;
  // 127.0.0.1 and LAN IPs (real phone testing) must be listed. Use NEXT_ALLOWED_DEV_ORIGINS.
  allowedDevOrigins: ['127.0.0.1', ...extraDevHosts],
  turbopack: {
    root: __dirname,
  },
  images: {
    // In dev, skip /_next/image (Sharp). Embedded browsers & DevTools “mobile mode” often
    // report net::ERR_INTERNET_DISCONNECTED for that route even though static /img/* works.
    unoptimized: process.env.NODE_ENV === 'development',
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

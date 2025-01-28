/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Keep it false if needed for your project
  output: 'export',       // Add this line to enable static export
  images: {
    unoptimized: true,    // Add this line to handle Next.js image optimization
  },
};

module.exports = nextConfig;

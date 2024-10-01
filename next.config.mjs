/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // This ensures all paths have a trailing slash
  output: 'standalone', // (Optional) Makes the build standalone, helpful for deployment
};

export default nextConfig;

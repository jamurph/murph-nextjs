/** @type {import('next').NextConfig} */
const path = require('path');


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, 
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/scss')],
  },
  images: {
    loader: "default",
    domains: ["localhost","admin.mxm.dev", "jacobmurphy.dev", "mxm.dev"],
  },
};

module.exports = nextConfig;

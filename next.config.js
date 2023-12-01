/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        pathname: "/**",
      },
      {
        protocol: "https",

        hostname: "lionfish-app-p9hoi.ondigitalocean.app/uploads",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

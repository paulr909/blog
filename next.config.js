/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/paulr909/blog-data/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;

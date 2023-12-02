/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dikfq3kxl/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;

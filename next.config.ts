import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["ar"],
    defaultLocale: "ar",
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

export default nextConfig;

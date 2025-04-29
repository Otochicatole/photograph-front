import type { NextConfig } from "next";
import dotenv from "dotenv";

dotenv.config();

const nextConfig: NextConfig = {
  env: {
    STRAPI_HOST: process.env.STRAPI_HOST,
    STRAPI_TOKEN: process.env.STRAPI_TOKEN,
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
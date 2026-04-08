import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mehul-portfolio",
  images: { unoptimized: true }
};

export default nextConfig;

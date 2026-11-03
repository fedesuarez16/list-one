import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Source images are pre-optimized WebP; serve them straight from the CDN
  // to avoid the image optimizer cold-start latency after each deploy.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

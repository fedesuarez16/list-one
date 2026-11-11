import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Source images are pre-optimized WebP; serve them straight from the CDN
  // to avoid the image optimizer cold-start latency after each deploy.
  images: {
    unoptimized: true,
  },
  // La guía de instalación estuvo publicada como artículo; ahora es una sección de la home.
  async redirects() {
    return [
      {
        source: "/articulos/guia-instalacion-revestimiento-alistonado",
        destination: "/instalacion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

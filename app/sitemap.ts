import type { MetadataRoute } from "next";
import { products } from "@/lib/productos";
import { siteUrl } from "@/lib/site";
import { usos } from "@/lib/usos";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/images/listone-prendido.webp`,
        `${siteUrl}/images/product_tradicional_detail.jpg`,
        `${siteUrl}/images/usecases/living.webp`,
      ],
    },
    {
      url: `${siteUrl}/instalacion`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...usos.map((uso) => ({
      url: `${siteUrl}/revestimiento-alistonado/${uso.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${siteUrl}${uso.image}`],
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/productos/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: Object.values(product.images).map((image) => `${siteUrl}/images/catalog/${image}`),
    })),
  ];
}

import type { MetadataRoute } from "next";
import { articulos } from "@/lib/articulos";
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
    ...usos.map((uso) => ({
      url: `${siteUrl}/revestimiento-alistonado/${uso.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${siteUrl}${uso.image}`],
    })),
    ...articulos.map((articulo) => ({
      url: `${siteUrl}/articulos/${articulo.slug}`,
      lastModified: new Date(articulo.published),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: [`${siteUrl}${articulo.image}`],
    })),
  ];
}

import type { MetadataRoute } from "next";
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
        `${siteUrl}/images/listone-prendido.png`,
        `${siteUrl}/images/product_tradicional_detail.jpg`,
        `${siteUrl}/images/usecases/living.png`,
      ],
    },
    ...usos.map((uso) => ({
      url: `${siteUrl}/revestimiento-alistonado/${uso.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${siteUrl}${uso.image}`],
    })),
  ];
}

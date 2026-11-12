"use client";

import Link from "next/link";
import { useState } from "react";
import { VariantImages, VariantToggle } from "@/components/ProductVariants";
import { type Product, defaultVariant } from "@/lib/productos";

type Props = {
  product: Product;
  className?: string;
  headingLevel?: "h3" | "h4";
};

export default function ProductCard({ product, className = "", headingLevel: Heading = "h4" }: Props) {
  const [variant, setVariant] = useState(defaultVariant(product));

  return (
    // El link del título se estira a toda la tarjeta (::after); el selector queda por encima con z-10.
    <article className={`group relative min-w-0 ${className}`}>
      <div className="relative aspect-[0.88] overflow-hidden rounded-2xl bg-[#f2eee8]">
        <VariantImages
          product={product}
          active={variant}
          sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 22vw"
          zoomOnHover
        />
      </div>
      <div className="flex items-start justify-between gap-3 px-1 pt-3 sm:px-2 sm:pt-4">
        <div className="min-w-0">
          <Heading className="truncate text-sm font-semibold text-stone-900 sm:text-base">
            <Link href={`/productos/${product.slug}`} className="after:absolute after:inset-0 group-hover:text-[#c71e2c]">
              {product.name}
            </Link>
          </Heading>
          <p className="mt-1 truncate text-xs text-stone-500 sm:text-sm">{product.detail}</p>
        </div>
        <VariantToggle product={product} active={variant} onChange={setVariant} />
      </div>
    </article>
  );
}

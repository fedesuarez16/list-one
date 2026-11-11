"use client";

import { useState } from "react";
import { VariantImages, VariantToggle } from "@/components/ProductVariants";
import { type Product, defaultVariant } from "@/lib/productos";

export default function ProductDetailViewer({ product }: { product: Product }) {
  const [variant, setVariant] = useState(defaultVariant(product));

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-white shadow-[0_20px_60px_-36px_rgba(42,31,23,0.28)]">
        <VariantImages product={product} active={variant} fit="contain" priority sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-sm text-stone-600">Elegí la terminación</p>
        <VariantToggle product={product} active={variant} onChange={setVariant} size="md" />
      </div>
    </div>
  );
}

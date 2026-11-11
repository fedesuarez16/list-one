"use client";

import Image from "next/image";
import { type Product, type Variant, productTitle, variants } from "@/lib/productos";

type ImagesProps = {
  product: Product;
  active: Variant;
  sizes: string;
  fit?: "cover" | "contain";
  priority?: boolean;
  zoomOnHover?: boolean;
};

/** Fotos apiladas de cada variante; la activa aparece con fundido. Va dentro de un contenedor `relative`. */
export function VariantImages({ product, active, sizes, fit = "cover", priority = false, zoomOnHover = false }: ImagesProps) {
  return variants.map(({ id, label }) => {
    const image = product.images[id];
    if (!image) return null;
    const isActive = id === active;
    return (
      <Image
        key={id}
        src={`/images/catalog/${image}`}
        alt={isActive ? `${productTitle(product)}, revestimiento alistonado ${label.toLowerCase()}` : ""}
        fill
        priority={priority && isActive}
        sizes={sizes}
        className={`${fit === "cover" ? "object-cover" : "object-contain"} transition-[opacity,transform] duration-500 motion-reduce:transition-none ${zoomOnHover ? "group-hover:scale-[1.04]" : ""} ${isActive ? "opacity-100" : "opacity-0"}`}
      />
    );
  });
}

type ToggleProps = {
  product: Product;
  active: Variant;
  onChange: (variant: Variant) => void;
  size?: "sm" | "md";
};

/** Selector Solo / Con LED. Una variante sin foto queda deshabilitada ("Próximamente"). */
export function VariantToggle({ product, active, onChange, size = "sm" }: ToggleProps) {
  const buttonSize = size === "sm" ? "px-2.5 py-1.5 text-[11px] sm:text-xs" : "px-5 py-2.5 text-sm";

  return (
    <div className="relative z-10 flex shrink-0 rounded-full bg-stone-100 p-0.5" role="group" aria-label={`Variante de ${productTitle(product)}`}>
      {variants.map(({ id, label }) => {
        const available = Boolean(product.images[id]);
        const isActive = id === active;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            disabled={!available}
            aria-pressed={isActive}
            title={available ? undefined : "Próximamente"}
            className={`rounded-full font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${buttonSize} ${
              isActive ? (id === "led" ? "bg-[#c71e2c] text-white shadow-sm" : "bg-white text-stone-900 shadow-sm") : "text-stone-500 enabled:hover:text-stone-900"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

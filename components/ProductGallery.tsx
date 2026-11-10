"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Category = "enchapados" | "macizas" | "particulados";

type Variant = "solo" | "led";

type Product = {
  name: string;
  detail: string;
  tag: string;
  category: Category;
  // Foto por variante. Si falta una, esa opción del selector queda deshabilitada.
  images: Partial<Record<Variant, string>>;
};

const variants: { id: Variant; label: string }[] = [
  { id: "solo", label: "Solo" },
  { id: "led", label: "Con LED" },
];

// Orden de render de los carruseles.
const categories: { id: Category; title: string }[] = [
  { id: "enchapados", title: "Enchapados Naturales" },
  { id: "macizas", title: "Maderas Macizas" },
  { id: "particulados", title: "Particulados" },
];

// Asignación de categorías provisoria: ajustar `category` por producto.
// Regla: lo que antes era "Especiales" o "Exterior" va a "macizas".
const products: Product[] = [
  { name: "Eucalipto", detail: "Ranura fina", tag: "Ranura fina", category: "macizas", images: { solo: "eucalipto-ranura-fina.webp", led: "eucalipto-led.webp" } },
  { name: "Pino", detail: "Impregnado CCA", tag: "CCA", category: "macizas", images: { solo: "pino-impregnado-cca.webp" } },
  { name: "Freijó", detail: "Veta natural", tag: "Madera", category: "enchapados", images: { solo: "freijo.webp" } },
  { name: "Guatambú", detail: "Madera natural", tag: "Madera", category: "enchapados", images: { solo: "guatambu.webp", led: "guatambu-cobertor-led.webp" } },
  { name: "Guayubira", detail: "Madera natural", tag: "Madera", category: "enchapados", images: { led: "guayubira-led.webp" } },
  { name: "Paraíso", detail: "Madera natural", tag: "Madera", category: "enchapados", images: { led: "paraiso-led.webp" } },
  { name: "Itaúba", detail: "Madera natural", tag: "Madera", category: "enchapados", images: { solo: "itauba.webp" } },
  { name: "Roble americano", detail: "Madera natural", tag: "Madera", category: "enchapados", images: { solo: "roble-americano.webp", led: "roble-americano-led.webp" } },
  { name: "Pino", detail: "Base negra", tag: "Base negra", category: "particulados", images: { solo: "pino-base-negra.webp", led: "pino-base-negra-led.webp" } },
  { name: "Pino", detail: "Finger", tag: "Finger", category: "particulados", images: { solo: "pino-finger.webp" } },
];

function ProductCard({ product }: { product: Product }) {
  const [variant, setVariant] = useState<Variant>(product.images.solo ? "solo" : "led");

  return (
    <article className="group min-w-0 shrink-0 basis-[82%] snap-start sm:basis-[46%] lg:basis-[calc(25%_-_18px)]">
      <div className="relative aspect-[0.88] overflow-hidden rounded-2xl bg-[#f2eee8]">
        {variants.map(({ id, label }) => {
          const image = product.images[id];
          if (!image) return null;
          const active = id === variant;
          return (
            <Image
              key={id}
              src={`/images/catalog/${image}`}
              alt={active ? `${product.name}, revestimiento alistonado ${product.detail.toLowerCase()}, ${label.toLowerCase()}` : ""}
              fill
              sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 22vw"
              className={`object-cover transition-[opacity,transform] duration-500 group-hover:scale-[1.04] motion-reduce:transition-none ${active ? "opacity-100" : "opacity-0"}`}
            />
          );
        })}
        <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-2.5 py-1.5 text-[10px] font-semibold tracking-wide text-stone-700 shadow-sm backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
          {product.tag}
        </span>
      </div>
      <div className="flex items-start justify-between gap-3 px-1 pt-3 sm:px-2 sm:pt-4">
        <div className="min-w-0">
          <h4 className="truncate text-sm font-semibold text-stone-900 sm:text-base">{product.name}</h4>
          <p className="mt-1 truncate text-xs text-stone-500 sm:text-sm">{product.detail}</p>
        </div>
        <div className="flex shrink-0 rounded-full bg-stone-100 p-0.5" role="group" aria-label={`Variante de ${product.name} ${product.detail}`}>
          {variants.map(({ id, label }) => {
            const available = Boolean(product.images[id]);
            const active = id === variant;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setVariant(id)}
                disabled={!available}
                aria-pressed={active}
                title={available ? undefined : "Próximamente"}
                className={`rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 sm:text-xs ${
                  active ? (id === "led" ? "bg-[#c71e2c] text-white shadow-sm" : "bg-white text-stone-900 shadow-sm") : "text-stone-500 enabled:hover:text-stone-900"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
}

const arrowClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-lg text-stone-700 transition hover:border-[#c71e2c] hover:text-[#c71e2c] disabled:pointer-events-none disabled:opacity-35";

function CategoryCarousel({ id, title, items }: { id: Category; title: string; items: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const headingId = `categoria-${id}`;

  const syncArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 1);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
  }, []);

  useEffect(() => {
    syncArrows();
    window.addEventListener("resize", syncArrows);
    return () => window.removeEventListener("resize", syncArrows);
  }, [syncArrows]);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!track || !(card instanceof HTMLElement)) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: reducedMotion ? "auto" : "smooth" });
  }

  return (
    <div className="mt-12 first:mt-8 sm:mt-16">
      <div className="flex items-end justify-between gap-4">
        <h3 id={headingId} className="text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
          {title}
        </h3>
        <div className="hidden items-center gap-2 md:flex">
          <button type="button" onClick={() => move(-1)} disabled={!canPrev} aria-label={`${title}: anterior`} className={arrowClass}>
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" onClick={() => move(1)} disabled={!canNext} aria-label={`${title}: siguiente`} className={arrowClass}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={syncArrows}
        className="product-carousel-track mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:gap-5 lg:gap-6"
        role="region"
        aria-labelledby={headingId}
        aria-roledescription="carrusel"
      >
        {items.map((product) => (
          <ProductCard key={`${product.name}-${product.detail}`} product={product} />
        ))}
      </div>
    </div>
  );
}

export default function ProductGallery() {
  return (
    <section id="productos" className="slat-pattern-bg scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-b border-stone-200 pb-8 sm:flex-row sm:items-end sm:justify-between sm:pb-10">
          <div>
            <p className="eyebrow">La colección Listone</p>
            <h2 className="section-title mt-4">Revestimiento alistonado en seis maderas.</h2>
          </div>
          <p className="section-copy max-w-lg sm:pb-1">
            Eucalipto, pino, guatambú, freijó, guayubira y paraíso. Deslizá por las vetas y terminaciones: algunas opciones suman iluminación LED para darle otra dimensión a la pared.
          </p>
        </div>

        {categories.map((category) => {
          const items = products.filter((product) => product.category === category.id);
          if (items.length === 0) return null;
          return <CategoryCarousel key={category.id} id={category.id} title={category.title} items={items} />;
        })}
      </div>
    </section>
  );
}

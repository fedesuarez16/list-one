"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { type Category, type Product, categories, products } from "@/lib/productos";

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
          <ProductCard key={product.slug} product={product} className="shrink-0 basis-[82%] snap-start sm:basis-[46%] lg:basis-[calc(25%_-_18px)]" />
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

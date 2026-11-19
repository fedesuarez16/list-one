"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { type Category, type Product, categories, products } from "@/lib/productos";

const arrowClass =
  "flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.6)] transition hover:scale-105 hover:bg-[#c71e2c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c71e2c] active:scale-95 disabled:pointer-events-none disabled:bg-stone-200 disabled:text-stone-400 disabled:shadow-none motion-reduce:transition-none";

/** Intervalo de autoplay por posición del carrusel (ms). */
const AUTOPLAY_MS = [3000, 2000, 4000];

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

function CategoryCarousel({ id, title, items, autoplayMs }: { id: Category; title: string; items: Product[]; autoplayMs?: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
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

  const move = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!track || !(card instanceof HTMLElement)) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: reducedMotion ? "auto" : "smooth" });
  }, []);

  // Autoplay: avanza una tarjeta por intervalo y vuelve al inicio al llegar al final.
  // Se pausa con hover/foco/touch y en pestaña oculta; no corre con reduced motion.
  useEffect(() => {
    if (!autoplayMs) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || pausedRef.current || document.hidden) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
      if (atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
      else move(1);
    }, autoplayMs);
    return () => window.clearInterval(interval);
  }, [autoplayMs, move]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <div
      className="mt-12 first:mt-8 sm:mt-16"
      onPointerEnter={pause}
      onPointerLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div className="flex items-end justify-between gap-4">
        <h3 id={headingId} className="text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
          {title}
        </h3>
        <div className="flex shrink-0 items-center gap-2.5">
          <button type="button" onClick={() => move(-1)} disabled={!canPrev} aria-label={`${title}: anterior`} className={arrowClass}>
            <Chevron direction="left" />
          </button>
          <button type="button" onClick={() => move(1)} disabled={!canNext} aria-label={`${title}: siguiente`} className={arrowClass}>
            <Chevron direction="right" />
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

        {categories.map((category, index) => {
          const items = products.filter((product) => product.category === category.id);
          if (items.length === 0) return null;
          return <CategoryCarousel key={category.id} id={category.id} title={category.title} items={items} autoplayMs={AUTOPLAY_MS[index]} />;
        })}
      </div>
    </section>
  );
}

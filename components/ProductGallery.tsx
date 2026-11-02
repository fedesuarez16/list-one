"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const products = [
  { name: "Eucalipto", detail: "Ranura fina", image: "eucalipto-ranura-fina.webp", tag: "Ranura fina" },
  { name: "Eucalipto", detail: "Versión iluminada", image: "eucalipto-led.webp", tag: "Con LED" },
  { name: "Freijó", detail: "Veta natural", image: "freijo.webp", tag: "Madera" },
  { name: "Freijó", detail: "Veta alternativa", image: "freijo-veta-alternativa.webp", tag: "Madera" },
  { name: "Guatambú", detail: "Madera natural", image: "guatambu.webp", tag: "Madera" },
  { name: "Guatambú", detail: "Iluminación", image: "guatambu-iluminado.webp", tag: "Iluminado" },
  { name: "Guatambú", detail: "Iluminación con cobertor", image: "guatambu-cobertor-led.webp", tag: "Con LED" },
  { name: "Guayubira", detail: "Iluminación LED", image: "guayubira-led.webp", tag: "Con LED" },
  { name: "Guayubira", detail: "Versión iluminada", image: "guayubira-iluminada.webp", tag: "Iluminado" },
  { name: "Paraíso", detail: "Con LED", image: "paraiso-led.webp", tag: "Con LED" },
  { name: "Paraíso", detail: "Iluminación LED", image: "paraiso-iluminacion-led.webp", tag: "Con LED" },
  { name: "Pino", detail: "Base negra", image: "pino-base-negra.webp", tag: "Base negra" },
  { name: "Pino", detail: "Base negra iluminada", image: "pino-base-negra-led.webp", tag: "Con LED" },
  { name: "Pino", detail: "Finger", image: "pino-finger.webp", tag: "Finger" },
  { name: "Pino", detail: "Impregnado CCA", image: "pino-impregnado-cca.webp", tag: "CCA" },
];

function closestProductIndex(track: HTMLDivElement, targetLeft: number) {
  const trackLeft = track.getBoundingClientRect().left;
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  Array.from(track.children).forEach((product, index) => {
    if (!(product instanceof HTMLElement)) return;

    const left = product.getBoundingClientRect().left - trackLeft + track.scrollLeft;
    const distance = Math.abs(left - targetLeft);
    if (distance < closestDistance) {
      closestIndex = index;
      closestDistance = distance;
    }
  });

  return closestIndex;
}

export default function ProductGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollToProduct = useCallback((requestedIndex: number) => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    let nextIndex: number;
    let left: number;

    if (requestedIndex < 0) {
      left = maxScroll;
      nextIndex = closestProductIndex(track, left);
    } else {
      const candidateIndex = requestedIndex % products.length;
      const product = track.children.item(candidateIndex);
      if (!(product instanceof HTMLElement)) return;

      const candidateLeft = product.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
      if (candidateLeft > maxScroll + 1 && requestedIndex > currentIndexRef.current) {
        nextIndex = 0;
        left = 0;
      } else if (candidateLeft > maxScroll + 1) {
        left = maxScroll;
        nextIndex = closestProductIndex(track, left);
      } else {
        nextIndex = candidateIndex;
        left = candidateLeft;
      }
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    track.scrollTo({ left, behavior: reducedMotion ? "auto" : "smooth" });
    currentIndexRef.current = nextIndex;
    setCurrentIndex(nextIndex);
  }, []);

  const syncCurrentProduct = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const closestIndex = closestProductIndex(track, track.scrollLeft);
    currentIndexRef.current = closestIndex;
    setCurrentIndex((current) => current === closestIndex ? current : closestIndex);
  }, []);

  useEffect(() => {
    if (!isPlaying || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      scrollToProduct(currentIndexRef.current + 1);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [isPlaying, scrollToProduct]);

  function handleManualMove(index: number) {
    setIsPlaying(false);
    scrollToProduct(index);
  }

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

        <div
          ref={trackRef}
          onScroll={syncCurrentProduct}
          className="product-carousel-track mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 sm:gap-5 lg:gap-6"
          role="region"
          aria-label="Colección de revestimientos Listone"
          aria-roledescription="carrusel"
        >
          {products.map((product) => (
            <article key={product.image} className="group min-w-0 shrink-0 basis-[82%] snap-start sm:basis-[46%] lg:basis-[calc(25%_-_18px)]">
              <div className="relative aspect-[0.88] overflow-hidden rounded-2xl bg-[#f2eee8]">
                <Image
                  src={`/images/catalog/${product.image}`}
                  alt={`${product.name}, revestimiento alistonado ${product.detail.toLowerCase()}`}
                  fill
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 22vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                />
                <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-2.5 py-1.5 text-[10px] font-semibold tracking-wide text-stone-700 shadow-sm backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
                  {product.tag}
                </span>
              </div>
              <div className="px-1 pt-3 sm:px-2 sm:pt-4">
                <h3 className="truncate text-sm font-semibold text-stone-900 sm:text-base">{product.name}</h3>
                <p className="mt-1 truncate text-xs text-stone-500 sm:text-sm">{product.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm tabular-nums text-stone-500" aria-label={`Producto ${currentIndex + 1} de ${products.length}`}>
            {String(currentIndex + 1).padStart(2, "0")} <span className="px-1 text-stone-300">/</span> {String(products.length).padStart(2, "0")}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleManualMove(currentIndex - 1)}
              aria-label="Producto anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-lg text-stone-700 transition hover:border-[#c71e2c] hover:text-[#c71e2c]"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => setIsPlaying((playing) => !playing)}
              aria-label={isPlaying ? "Pausar carrusel" : "Reanudar carrusel"}
              aria-pressed={!isPlaying}
              className="h-11 rounded-full border border-stone-300 px-4 text-xs font-semibold text-stone-700 transition hover:border-[#c71e2c] hover:text-[#c71e2c]"
            >
              {isPlaying ? "Pausar" : "Reanudar"}
            </button>
            <button
              type="button"
              onClick={() => handleManualMove(currentIndex + 1)}
              aria-label="Producto siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-lg text-stone-700 transition hover:border-[#c71e2c] hover:text-[#c71e2c]"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

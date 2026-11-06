"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LightTransition() {
  const [isOn, setIsOn] = useState(false);
  const [hasSelectedState, setHasSelectedState] = useState(false);

  useEffect(() => {
    if (hasSelectedState) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      setIsOn((current) => !current);
    }, 4800);

    return () => window.clearInterval(interval);
  }, [hasSelectedState]);

  return (
    <div className="overflow-hidden rounded-[1.4rem] bg-white shadow-[0_20px_60px_-36px_rgba(42,31,23,0.28)]">
      <div className="relative aspect-[1.4] overflow-hidden bg-stone-200 sm:aspect-[1.7]">
        <Image
          src="/images/listone-apagado.webp"
          fetchPriority="high"
          alt={isOn ? "" : "Revestimiento alistonado con la iluminación apagada"}
          fill
          sizes="(max-width: 1024px) 100vw, 62vw"
          className={`object-cover transition-opacity duration-1000 motion-reduce:transition-none ${isOn ? "opacity-0" : "opacity-100"}`}
        />
        <Image
          src="/images/listone-prendido.webp"
          alt={isOn ? "Revestimiento alistonado con la iluminación encendida" : ""}
          fill
          sizes="(max-width: 1024px) 100vw, 62vw"
          className={`object-cover transition-opacity duration-1000 motion-reduce:transition-none ${isOn ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div>
          <p className="text-sm text-stone-600">Girá la perilla</p>
          <p className="mt-0.5 text-sm font-semibold text-stone-900" aria-live="polite">
            {isOn ? "Luz encendida" : "Luz apagada"}
          </p>
        </div>

        {/* Dimmer: placa clara + perilla negra que rota entre apagado (-130°) y encendido (130°). */}
        <button
          type="button"
          role="switch"
          aria-checked={isOn}
          aria-label="Iluminación"
          onClick={() => {
            setHasSelectedState(true);
            setIsOn((current) => !current);
          }}
          className={`group relative flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-full bg-stone-100 ring-1 ring-stone-200 transition-shadow duration-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c71e2c] motion-reduce:transition-none ${isOn ? "shadow-[0_0_28px_4px_rgba(255,190,110,0.55)]" : "shadow-none"}`}
        >
          {/* Pulso de invitación: solo hasta que el usuario toca la perilla por primera vez. */}
          {!hasSelectedState && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 animate-ping rounded-full ring-2 ring-[#c71e2c]/60 [animation-duration:1.8s] motion-reduce:hidden"
            />
          )}
          <span
            aria-hidden="true"
            className={`relative h-12 w-12 rounded-full bg-[radial-gradient(circle_at_35%_30%,#3a3633,#0d0c0b_70%)] shadow-[0_6px_14px_-4px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.18)] transition-transform duration-700 ease-[cubic-bezier(0.34,1.4,0.64,1)] group-active:scale-95 motion-reduce:transition-none ${isOn ? "rotate-[130deg]" : "-rotate-[130deg]"}`}
          >
            <span
              className={`absolute left-1/2 top-1.5 h-3 w-1 -translate-x-1/2 rounded-full transition-colors duration-700 motion-reduce:transition-none ${isOn ? "bg-[#ffbe6e]" : "bg-white/70"}`}
            />
          </span>
        </button>
      </div>
    </div>
  );
}

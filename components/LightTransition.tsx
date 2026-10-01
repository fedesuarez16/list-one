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
          src="/images/listone-apagado.png"
          alt={isOn ? "" : "Revestimiento alistonado con la iluminación apagada"}
          fill
          sizes="(max-width: 1024px) 100vw, 62vw"
          className={`object-cover transition-opacity duration-1000 motion-reduce:transition-none ${isOn ? "opacity-0" : "opacity-100"}`}
        />
        <Image
          src="/images/listone-prendido.png"
          alt={isOn ? "Revestimiento alistonado con la iluminación encendida" : ""}
          fill
          sizes="(max-width: 1024px) 100vw, 62vw"
          className={`object-cover transition-opacity duration-1000 motion-reduce:transition-none ${isOn ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-stone-600">Elegí el estado de la luz</p>
        <div className="flex w-full rounded-full bg-stone-100 p-1 sm:w-auto" role="group" aria-label="Elegir iluminación">
          <button
            type="button"
            onClick={() => {
              setHasSelectedState(true);
              setIsOn(false);
            }}
            aria-pressed={!isOn}
            className={`flex-1 rounded-full px-5 py-2.5 text-sm font-semibold transition sm:flex-none ${!isOn ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-900"}`}
          >
            Apagada
          </button>
          <button
            type="button"
            onClick={() => {
              setHasSelectedState(true);
              setIsOn(true);
            }}
            aria-pressed={isOn}
            className={`flex-1 rounded-full px-5 py-2.5 text-sm font-semibold transition sm:flex-none ${isOn ? "bg-[#c71e2c] text-white shadow-sm" : "text-stone-500 hover:text-stone-900"}`}
          >
            Encendida
          </button>
        </div>
      </div>
    </div>
  );
}

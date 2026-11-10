"use client";

import Image from "next/image";
import LightSwitch, { useLightCycle } from "@/components/LightSwitch";

export default function LightTransition() {
  const { isOn, hasInteracted, toggle } = useLightCycle(false);

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
        <LightSwitch isOn={isOn} hasInteracted={hasInteracted} onToggle={toggle} />
      </div>
    </div>
  );
}

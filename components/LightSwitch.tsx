"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Estado de luz que alterna solo cada `intervalMs` hasta que el usuario toca el interruptor.
 * Respeta prefers-reduced-motion (no alterna solo).
 */
export function useLightCycle(initialOn: boolean, intervalMs = 4800) {
  const [isOn, setIsOn] = useState(initialOn);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => setIsOn((current) => !current), intervalMs);
    return () => window.clearInterval(interval);
  }, [hasInteracted, intervalMs]);

  function toggle() {
    setHasInteracted(true);
    setIsOn((current) => !current);
  }

  return { isOn, hasInteracted, toggle };
}

type LightSwitchProps = {
  isOn: boolean;
  hasInteracted: boolean;
  onToggle: () => void;
  size?: "md" | "lg";
  className?: string;
};

const SIZES = {
  md: { box: "h-[4.25rem] w-[4.25rem]", img: "68px", extra: "" },
  lg: { box: "h-24 w-24 sm:h-28 sm:w-28", img: "112px", extra: "ring-4 ring-white/85" },
} as const;

/** Interruptor: foto del control; apagado = desaturado, encendido = color pleno + halo cálido. */
export default function LightSwitch({ isOn, hasInteracted, onToggle, size = "md", className = "" }: LightSwitchProps) {
  const sz = SIZES[size];
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      aria-label="Iluminación"
      onClick={onToggle}
      className={`group relative flex ${sz.box} shrink-0 items-center justify-center rounded-full transition-shadow duration-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c71e2c] motion-reduce:transition-none ${isOn ? "shadow-[0_0_28px_4px_rgba(255,190,110,0.55)]" : "shadow-none"} ${className}`}
    >
      {/* Pulso de invitación: solo hasta que el usuario toca el interruptor por primera vez. */}
      {!hasInteracted && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 animate-ping rounded-full ring-2 ring-[#c71e2c]/60 [animation-duration:1.8s] motion-reduce:hidden"
        />
      )}
      {/* interruptor.webp: recorte circular con fondo transparente del PNG original.
          Gira como una perilla real: 0° apagado, 150° encendido. */}
      <span
        aria-hidden="true"
        className={`relative h-full w-full overflow-hidden rounded-full shadow-[0_8px_18px_-6px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-active:scale-90 motion-reduce:transition-none ${sz.extra} ${isOn ? "rotate-[150deg]" : "rotate-0"}`}
      >
        <Image
          src="/images/interruptor.webp"
          alt=""
          fill
          sizes={sz.img}
          className={`object-cover transition-[filter] duration-700 motion-reduce:transition-none ${isOn ? "saturate-100 brightness-100" : "saturate-0 brightness-90"}`}
        />
      </span>
    </button>
  );
}

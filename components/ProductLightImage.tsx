"use client";

import Image from "next/image";
import LightSwitch, { useLightCycle } from "@/components/LightSwitch";

/** Foto de la sección "Diseño que se siente" con el mismo encendido/apagado que el hero. */
export default function ProductLightImage() {
  const { isOn, hasInteracted, toggle } = useLightCycle(true);

  return (
    <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-[1.5rem] lg:order-1">
      <Image
        src="/images/producto-apagado.webp"
        alt={isOn ? "" : "Pasillo con revestimiento alistonado de madera y LED apagado"}
        fill
        sizes="(max-width: 1024px) 100vw, 45vw"
        className={`object-cover transition-opacity duration-1000 motion-reduce:transition-none ${isOn ? "opacity-0" : "opacity-100"}`}
      />
      <Image
        src="/images/producto-prendido.webp"
        alt={isOn ? "Pasillo con revestimiento alistonado de madera y LED encendido entre los listones" : ""}
        fill
        sizes="(max-width: 1024px) 100vw, 45vw"
        className={`object-cover transition-opacity duration-1000 motion-reduce:transition-none ${isOn ? "opacity-100" : "opacity-0"}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
        El detalle hace la diferencia
      </span>
      <div className="absolute bottom-4 right-4">
        <LightSwitch isOn={isOn} hasInteracted={hasInteracted} onToggle={toggle} />
      </div>
    </div>
  );
}

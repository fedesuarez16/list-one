import InstallIllustration from "@/components/InstallIllustrations";
import { datosClave, herramientas, instalacionIntro, pasosInstalacion } from "@/lib/instalacion";

export default function InstallGuide() {
  return (
    <section id="instalacion" className="scroll-mt-24 bg-[#f4f1eb] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Instalación</p>
            <h2 className="section-title mt-4 max-w-2xl">Guía de instalación paso a paso.</h2>
          </div>
          <p className="section-copy max-w-md sm:pb-1">{instalacionIntro}</p>
        </div>

        <div className="mt-10 grid gap-4 border-y border-stone-300/70 py-6 sm:grid-cols-3 sm:gap-6">
          {datosClave.map((dato) => (
            <div key={dato.label}>
              <p className="text-2xl font-semibold tracking-[-0.03em] text-[#211d1a] sm:text-3xl">{dato.value}</p>
              <p className="mt-1 text-sm text-stone-500">{dato.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">Vas a necesitar</span>
          {herramientas.map((item) => (
            <span key={item} className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 sm:text-sm">
              {item}
            </span>
          ))}
        </div>

        {/* Mobile: carrusel con scroll-snap. sm+: grilla. El detalle de cada paso se expande con <details> (sin JS, indexable). */}
        <ol className="product-carousel-track -mx-5 mt-10 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {pasosInstalacion.map((step, index) => (
            <li key={step.title} className="w-[80%] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_-40px_rgba(42,31,23,0.35)] sm:w-auto">
              <div className="relative aspect-[4/3] bg-[#faf8f4] p-6">
                <InstallIllustration icon={step.icon} />
                <span className="absolute left-4 top-4 flex size-8 items-center justify-center rounded-full bg-[#211d1a] text-xs font-semibold text-white">
                  {index + 1}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-semibold tracking-tight text-stone-900">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-stone-600">{step.resumen}</p>

                <details className="group mt-4">
                  <summary className="flex cursor-pointer list-none items-center gap-1.5 text-sm font-semibold text-[#c71e2c] [&::-webkit-details-marker]:hidden">
                    <span className="group-open:hidden">Ver detalle</span>
                    <span className="hidden group-open:inline">Ocultar detalle</span>
                    <svg viewBox="0 0 16 16" className="size-4 transition-transform group-open:rotate-180" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <div className="mt-3 space-y-3 border-t border-stone-200 pt-3 text-sm leading-6 text-stone-600">
                    {step.detalle.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {step.bullets && (
                      <ul className="list-disc space-y-1 pl-5 marker:text-[#c71e2c]">
                        {step.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {step.closing && <p>{step.closing}</p>}
                  </div>
                </details>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

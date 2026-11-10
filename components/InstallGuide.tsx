import { instalacionIntro, pasosInstalacion } from "@/lib/instalacion";

export default function InstallGuide() {
  return (
    <section id="instalacion" className="scroll-mt-24 bg-[#f4f1eb] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-b border-stone-300/70 pb-8 sm:flex-row sm:items-end sm:justify-between sm:pb-10">
          <div>
            <p className="eyebrow">Instalación</p>
            <h2 className="section-title mt-4 max-w-2xl">Guía de instalación paso a paso.</h2>
          </div>
          <p className="section-copy max-w-md sm:pb-1">{instalacionIntro}</p>
        </div>

        {/* columns-2 (no grid): mantiene el orden de lectura 1→5 / 6→9 y equilibra alturas desparejas. */}
        <ol className="mt-10 gap-x-6 md:columns-2 lg:gap-x-8">
          {pasosInstalacion.map((step, index) => (
            <li key={step.title} className="mb-6 break-inside-avoid rounded-2xl bg-white p-6 sm:p-7 lg:mb-8">
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-semibold tracking-[0.16em] text-[#c71e2c]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-stone-900 sm:text-xl">{step.title}</h3>
              </div>
              {step.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm leading-6 text-stone-600 sm:text-[0.95rem] sm:leading-7">{paragraph}</p>
              ))}
              {step.bullets && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-stone-600 marker:text-[#c71e2c] sm:text-[0.95rem] sm:leading-7">
                  {step.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {step.closing && <p className="mt-3 text-sm leading-6 text-stone-600 sm:text-[0.95rem] sm:leading-7">{step.closing}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

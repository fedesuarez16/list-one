import Link from "next/link";
import InstallIllustration from "@/components/InstallIllustrations";
import { datosClave, instalacionIntro, pasosInstalacion } from "@/lib/instalacion";

/** Resumen visual para el home; el detalle completo vive en /instalacion. */
export default function InstallGuide() {
  return (
    <section id="instalacion" className="scroll-mt-24 bg-[#f4f1eb] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Instalación</p>
            <h2 className="section-title mt-4 max-w-2xl">Se instala en nueve pasos.</h2>
            <p className="section-copy mt-4 max-w-md">{instalacionIntro}</p>
          </div>
          <Link href="/instalacion" className="button-primary inline-flex shrink-0 self-start sm:self-auto">
            Ver guía completa <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {pasosInstalacion.map((step, index) => (
            <li key={step.title}>
              <Link
                href={`/instalacion#paso-${index + 1}`}
                className="group flex items-center gap-4 rounded-2xl bg-white p-3 pr-5 transition hover:shadow-[0_18px_50px_-30px_rgba(42,31,23,0.35)]"
              >
                <div className="aspect-[4/3] w-24 shrink-0 rounded-xl bg-[#faf8f4] p-2 sm:w-28">
                  <InstallIllustration icon={step.icon} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c71e2c]">
                    Paso {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-semibold tracking-tight text-stone-900 transition group-hover:text-[#c71e2c] sm:text-lg">
                    {step.title}
                  </h3>
                </div>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-4 border-t border-stone-300/70 pt-6 sm:grid-cols-3 sm:gap-6">
          {datosClave.map((dato) => (
            <div key={dato.label}>
              <p className="text-2xl font-semibold tracking-[-0.03em] text-[#211d1a]">{dato.value}</p>
              <p className="mt-1 text-sm text-stone-500">{dato.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

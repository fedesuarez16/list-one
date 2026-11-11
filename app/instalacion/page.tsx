import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InstallIllustration from "@/components/InstallIllustrations";
import { datosClave, herramientas, instalacionIntro, pasosInstalacion } from "@/lib/instalacion";
import { siteName, siteUrl } from "@/lib/site";

const title = "Cómo instalar revestimiento alistonado: guía paso a paso";
const description =
  "Guía completa para instalar revestimiento alistonado de madera: medición, preparación de la pared, corte, adhesivo, colocación, secado y terminación.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/instalacion" },
  openGraph: { type: "article", locale: "es_AR", url: "/instalacion", siteName, title, description },
};

export default function InstalacionPage() {
  const url = `${siteUrl}/instalacion`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: title,
        description,
        url,
        tool: herramientas.map((name) => ({ "@type": "HowToTool", name })),
        step: pasosInstalacion.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.title,
          url: `${url}#paso-${index + 1}`,
          text: [...step.detalle, ...(step.bullets ?? []), ...(step.closing ? [step.closing] : [])].join(" "),
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: siteName, item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Guía de instalación", item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Header />
      <main>
        <section className="slat-pattern-bg bg-[#f4f1eb] px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14">
          <div className="mx-auto max-w-5xl">
            <nav aria-label="Ruta de navegación" className="text-xs font-medium text-stone-500">
              <Link href="/" className="transition hover:text-[#c71e2c]">Inicio</Link>
              <span className="px-2 text-stone-300">/</span>
              <span>Guía de instalación</span>
            </nav>

            <p className="eyebrow mt-10">Instalación</p>
            <h1 className="mt-4 max-w-3xl text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.05em] text-[#211d1a] sm:text-5xl lg:text-[3.5rem]">
              Cómo instalar revestimiento alistonado.
            </h1>
            <p className="section-copy mt-6 max-w-xl">{instalacionIntro}</p>

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

            {/* Índice rápido */}
            <nav aria-label="Pasos" className="mt-10 flex flex-wrap gap-2">
              {pasosInstalacion.map((step, index) => (
                <a
                  key={step.title}
                  href={`#paso-${index + 1}`}
                  className="rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-stone-600 transition hover:bg-white hover:text-[#c71e2c] sm:text-sm"
                >
                  {index + 1}. {step.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 sm:py-24">
          <ol className="mx-auto max-w-5xl space-y-14 sm:space-y-20">
            {pasosInstalacion.map((step, index) => (
              <li
                key={step.title}
                id={`paso-${index + 1}`}
                className="grid scroll-mt-28 items-center gap-6 md:grid-cols-2 md:gap-12"
              >
                <div className={`aspect-[4/3] rounded-2xl bg-[#f4f1eb] p-8 sm:p-10 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <InstallIllustration icon={step.icon} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c71e2c]">
                    Paso {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">{step.title}</h2>
                  <p className="mt-3 text-base font-medium text-stone-800">{step.resumen}</p>
                  <div className="mt-4 space-y-3 text-[0.95rem] leading-7 text-stone-600">
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
                </div>
              </li>
            ))}
          </ol>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

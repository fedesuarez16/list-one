import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";
import ProductLightImage from "@/components/ProductLightImage";
import { faqs, siteDescription, siteName, siteUrl } from "@/lib/site";

const details = [
  {
    number: "01",
    title: "Textura",
    description: "El relieve de los listones suma profundidad y sombras suaves a la pared.",
  },
  {
    number: "02",
    title: "Ritmo",
    description: "La repetición vertical aporta orden visual y acompaña la arquitectura.",
  },
  {
    number: "03",
    title: "Calidez",
    description: "La madera transforma la sensación del ambiente con un gesto simple.",
  },
];

const guide = [
  {
    slug: "interior",
    title: "Revestimiento alistonado interior",
    description:
      "Paredes de living, respaldos de cama, recepciones y oficinas. Los listones de madera aportan calidez y ayudan a disimular imperfecciones del muro.",
  },
  {
    slug: "exterior",
    title: "Revestimiento alistonado exterior",
    description:
      "Patios, galerías y fachadas. Maderas como el pino impregnado CCA están preparadas para la intemperie y suman textura a la arquitectura.",
  },
  {
    slug: "con-led",
    title: "Revestimiento alistonado con LED",
    description:
      "Iluminación integrada entre los listones que resalta la veta de la madera y convierte la pared en la fuente de luz del espacio.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/images/logo.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: "es-AR",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "Product",
      "@id": `${siteUrl}/#product`,
      name: "Revestimiento alistonado de madera Listone",
      description: siteDescription,
      category: "Revestimientos de madera para paredes",
      material: ["Eucalipto", "Pino", "Guatambú", "Freijó", "Guayubira", "Paraíso"],
      brand: { "@id": `${siteUrl}/#organization` },
      image: [
        `${siteUrl}/images/listone-prendido.webp`,
        `${siteUrl}/images/product_tradicional_detail.jpg`,
        `${siteUrl}/images/usecases/living.webp`,
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const useCases = [
  {
    title: "Exterior",
    description: "Revestimiento alistonado en un patio contemporáneo.",
    image: "/images/usecases/euca-2.webp",
    alt: "Patio exterior con revestimiento alistonado e iluminación",
  },
  {
    title: "Dormitorio",
    description: "Una propuesta cálida para sumar textura al ambiente.",
    image: "/images/usecases/dorm.webp",
    alt: "Dormitorio con revestimiento alistonado e iluminación cálida",
  },
  {
    title: "Living",
    description: "Una pared protagonista en un ambiente integrado.",
    image: "/images/usecases/living.webp",
    alt: "Living amplio con pared revestida en listones de madera",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <Hero />
        <ProductGallery />

        <section id="producto" className="scroll-mt-24 bg-[#211d1a] px-5 py-20 text-white sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <ProductLightImage />

            <div className="order-1 lg:order-2">
              <p className="eyebrow text-[#ff665e]">Diseño que se siente</p>
              <h2 className="section-title mt-4 text-white">
                Revestimiento alistonado: una pared con carácter, sin recargar el ambiente.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                Los listones de madera colocados en vertical crean un juego sutil de luces y sombras. Un revestimiento de madera cálido y contemporáneo para darle protagonismo a una pared, un respaldo o una fachada.
              </p>

              <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
                {details.map((detail) => (
                  <article key={detail.number} className="grid grid-cols-[3rem_1fr] gap-3 py-5 sm:grid-cols-[4rem_1fr]">
                    <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-[#ff665e]">{detail.number}</span>
                    <div>
                      <h3 className="text-lg font-semibold">{detail.title}</h3>
                      <p className="mt-1.5 max-w-lg text-sm leading-6 text-white/60">{detail.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <a href="#contacto" className="button-primary mt-9 inline-flex">
                Consultar por el revestimiento <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 border-b border-stone-200 pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">De la idea al espacio</p>
              <h2 className="section-title mt-4 max-w-2xl">
                Revestimiento alistonado para interior y exterior.
              </h2>
            </div>
            <p className="section-copy max-w-md sm:pb-1">
              ¿Dónde te gustaría verlo? Una pared de living, un dormitorio, un local o un patio que pide un poco más de calidez. Contanos qué tenés en mente.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-7xl gap-4 sm:grid-cols-3">
            {useCases.map((useCase) => (
              <article key={useCase.title} className="group overflow-hidden rounded-2xl bg-[#f5f3ef]">
                <div className="relative aspect-[1.4] overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-stone-900">{useCase.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{useCase.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="guia" className="scroll-mt-24 bg-[#f5f3ef] px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Guía rápida</p>
              <h2 className="section-title mt-4">¿Qué es el revestimiento alistonado?</h2>
              <p className="section-copy mt-5 max-w-lg">
                Es un revestimiento de madera formado por listones paralelos que se fijan sobre la pared o el techo. También se lo conoce como palillería, panel alistonado o pared de listones. Su ritmo vertical estiliza los ambientes y genera profundidad con cada cambio de luz.
              </p>
            </div>
            <div className="divide-y divide-stone-300/70 border-y border-stone-300/70">
              {guide.map((item) => (
                <article key={item.title} className="py-6">
                  <h3 className="text-lg font-semibold text-stone-900">
                    <Link href={`/revestimiento-alistonado/${item.slug}`} className="transition hover:text-[#c71e2c]">
                      {item.title} <span aria-hidden="true">→</span>
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";

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

const useCases = [
  {
    title: "Exterior",
    description: "Revestimiento alistonado en un patio contemporáneo.",
    image: "/images/usecases/euca-2.png",
    alt: "Patio exterior con revestimiento alistonado e iluminación",
  },
  {
    title: "Dormitorio",
    description: "Una propuesta cálida para sumar textura al ambiente.",
    image: "/images/usecases/dorm.png",
    alt: "Dormitorio con revestimiento alistonado e iluminación cálida",
  },
  {
    title: "Living",
    description: "Una pared protagonista en un ambiente integrado.",
    image: "/images/usecases/living.png",
    alt: "Living amplio con pared revestida en listones de madera",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGallery />

        <section id="producto" className="scroll-mt-24 bg-[#211d1a] px-5 py-20 text-white sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-[1.5rem] lg:order-1">
              <Image
                src="/images/product_tradicional_detail.jpg"
                alt="Detalle del ritmo y la textura vertical del revestimiento alistonado"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                El detalle hace la diferencia
              </span>
            </div>

            <div className="order-1 lg:order-2">
              <p className="eyebrow text-[#ff665e]">Diseño que se siente</p>
              <h2 className="section-title mt-4 text-white">
                Una pared con carácter, sin recargar el ambiente.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                Las líneas alistonadas crean un juego sutil de luces y sombras. Un recurso cálido y contemporáneo para darle protagonismo a una pared.
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
                ¿Dónde te gustaría verlo?
              </h2>
            </div>
            <p className="section-copy max-w-md sm:pb-1">
              Una pared de estar, un dormitorio o ese rincón que pide un poco más de calidez. Contanos qué tenés en mente.
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

        <ContactSection />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

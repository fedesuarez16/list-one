import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { articulos } from "@/lib/articulos";
import { siteName, siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return articulos.map((articulo) => ({ slug: articulo.slug }));
}

export async function generateMetadata({ params }: PageProps<"/articulos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const articulo = articulos.find((item) => item.slug === slug);
  if (!articulo) return {};

  const path = `/articulos/${articulo.slug}`;

  return {
    title: articulo.title,
    description: articulo.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "es_AR",
      url: path,
      siteName,
      title: articulo.title,
      description: articulo.description,
      publishedTime: articulo.published,
      images: [{ url: articulo.image, alt: articulo.imageAlt }],
    },
  };
}

export default async function ArticuloPage({ params }: PageProps<"/articulos/[slug]">) {
  const { slug } = await params;
  const articulo = articulos.find((item) => item.slug === slug);
  if (!articulo) notFound();

  const url = `${siteUrl}/articulos/${articulo.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: articulo.title,
        description: articulo.description,
        image: `${siteUrl}${articulo.image}`,
        datePublished: articulo.published,
        inLanguage: "es-AR",
        mainEntityOfPage: url,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: siteName, item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Artículos", item: `${siteUrl}/#articulos` },
          { "@type": "ListItem", position: 3, name: articulo.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <section className="slat-pattern-bg bg-[#f4f1eb] px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <nav aria-label="Ruta de navegación" className="text-xs font-medium text-stone-500">
                <Link href="/" className="transition hover:text-[#c71e2c]">Inicio</Link>
                <span className="px-2 text-stone-300">/</span>
                <Link href="/#articulos" className="transition hover:text-[#c71e2c]">Artículos</Link>
              </nav>
              <h1 className="mt-6 text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.05em] text-[#211d1a] sm:text-5xl lg:text-[3.5rem]">
                {articulo.title}
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">{articulo.intro}</p>
            </div>
            <div className="relative aspect-[4/5] max-h-[560px] overflow-hidden rounded-[1.4rem]">
              <Image src={articulo.image} alt={articulo.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
          <ol className="mx-auto max-w-3xl divide-y divide-stone-200 border-y border-stone-200">
            {articulo.steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-3 py-8 sm:grid-cols-[4rem_1fr]">
                <span className="pt-1.5 text-xs font-semibold tracking-[0.16em] text-[#c71e2c]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">{step.title}</h2>
                  {step.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-base leading-7 text-stone-600">{paragraph}</p>
                  ))}
                  {step.bullets && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-7 text-stone-600 marker:text-[#c71e2c]">
                      {step.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {step.closing && <p className="mt-3 text-base leading-7 text-stone-600">{step.closing}</p>}
                </div>
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3">
            <a href="#contacto" className="button-primary inline-flex">
              Consultar por tu proyecto <span aria-hidden="true">↗</span>
            </a>
            <Link href="/#productos" className="button-secondary inline-flex">Ver la colección</Link>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

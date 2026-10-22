import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteName, siteUrl } from "@/lib/site";
import { usos } from "@/lib/usos";

export const dynamicParams = false;

export function generateStaticParams() {
  return usos.map((uso) => ({ uso: uso.slug }));
}

export async function generateMetadata({ params }: PageProps<"/revestimiento-alistonado/[uso]">): Promise<Metadata> {
  const { uso: slug } = await params;
  const uso = usos.find((item) => item.slug === slug);
  if (!uso) return {};

  const path = `/revestimiento-alistonado/${uso.slug}`;

  return {
    title: uso.title,
    description: uso.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: path,
      siteName,
      title: uso.title,
      description: uso.description,
      images: [{ url: uso.image, alt: uso.imageAlt }],
    },
  };
}

export default async function UsoPage({ params }: PageProps<"/revestimiento-alistonado/[uso]">) {
  const { uso: slug } = await params;
  const uso = usos.find((item) => item.slug === slug);
  if (!uso) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: siteName, item: siteUrl },
      { "@type": "ListItem", position: 2, name: uso.keyword, item: `${siteUrl}/revestimiento-alistonado/${uso.slug}` },
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
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <nav aria-label="Ruta de navegación" className="text-xs font-medium text-stone-500">
                <Link href="/" className="transition hover:text-[#c71e2c]">Inicio</Link>
                <span className="px-2 text-stone-300">/</span>
                <span>{uso.keyword}</span>
              </nav>
              <h1 className="mt-6 text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.05em] text-[#211d1a] sm:text-5xl lg:text-[3.5rem]">
                {uso.title}
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">{uso.intro}</p>
              <a href="#contacto" className="button-primary mt-8 inline-flex">
                Pedir presupuesto <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="relative aspect-[1.4] overflow-hidden rounded-[1.4rem]">
              <Image src={uso.image} alt={uso.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="section-title max-w-2xl">¿Dónde usar el {uso.keyword.toLowerCase()}?</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {uso.points.map((point) => (
                <article key={point.title} className="rounded-2xl bg-[#f5f3ef] p-6">
                  <h3 className="text-lg font-semibold text-stone-900">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{point.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-3 text-sm">
              <Link href="/#productos" className="button-secondary">Ver la colección completa</Link>
              {usos
                .filter((item) => item.slug !== uso.slug)
                .map((item) => (
                  <Link key={item.slug} href={`/revestimiento-alistonado/${item.slug}`} className="button-secondary">
                    {item.keyword}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

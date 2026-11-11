import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ProductDetailViewer from "@/components/ProductDetailViewer";
import { categoryTitle, getProduct, getRecommended, productImage, productTitle, products, type Product } from "@/lib/productos";
import { siteName, siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

function describe(product: Product) {
  const title = productTitle(product);
  const led = product.images.led ? " Disponible también con iluminación LED integrada entre los listones." : "";
  return `Revestimiento alistonado de ${title}, de la línea ${categoryTitle(product.category)} de Listone.${led} Consultá medidas, terminaciones y disponibilidad en Argentina.`;
}

export async function generateMetadata({ params }: PageProps<"/productos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const title = `Revestimiento alistonado de ${productTitle(product)}`;
  const description = describe(product);
  const path = `/productos/${product.slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: path,
      siteName,
      title,
      description,
      images: [{ url: productImage(product), alt: title }],
    },
  };
}

export default async function ProductPage({ params }: PageProps<"/productos/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const title = productTitle(product);
  const url = `${siteUrl}/productos/${product.slug}`;
  const recommended = getRecommended(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: `Revestimiento alistonado de ${title}`,
        description: describe(product),
        category: categoryTitle(product.category),
        image: Object.values(product.images).map((image) => `${siteUrl}/images/catalog/${image}`),
        brand: { "@id": `${siteUrl}/#organization` },
        url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: siteName, item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Productos", item: `${siteUrl}/#productos` },
          { "@type": "ListItem", position: 3, name: title, item: url },
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
        <section className="slat-pattern-bg bg-[#f4f1eb] px-5 py-10 sm:px-8 sm:py-14">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Ruta de navegación" className="text-xs font-medium text-stone-500">
              <Link href="/" className="transition hover:text-[#c71e2c]">Inicio</Link>
              <span className="px-2 text-stone-300">/</span>
              <Link href="/#productos" className="transition hover:text-[#c71e2c]">Productos</Link>
              <span className="px-2 text-stone-300">/</span>
              <span>{title}</span>
            </nav>

            <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div className="mx-auto w-full max-w-xl lg:max-w-none">
                <ProductDetailViewer product={product} />
              </div>

              <div className="lg:sticky lg:top-32">
                <p className="eyebrow">{categoryTitle(product.category)}</p>
                <h1 className="mt-4 text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.05em] text-[#211d1a] sm:text-5xl lg:text-[3.5rem]">
                  {product.name}
                </h1>
                <p className="mt-2 text-lg text-stone-500">{product.detail}</p>
                <p className="mt-6 max-w-lg text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">{describe(product)}</p>

                <dl className="mt-8 max-w-lg divide-y divide-stone-300/70 border-y border-stone-300/70 text-sm">
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-stone-500">Línea</dt>
                    <dd className="font-semibold text-stone-900">{categoryTitle(product.category)}</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-stone-500">Terminación</dt>
                    <dd className="font-semibold text-stone-900">{product.tag}</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-stone-500">Iluminación LED</dt>
                    <dd className="font-semibold text-stone-900">{product.images.led ? "Disponible" : "Consultar"}</dd>
                  </div>
                </dl>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contacto" className="button-primary inline-flex">
                    Consultar por {product.name} <span aria-hidden="true">↗</span>
                  </a>
                  <Link href="/instalacion" className="button-secondary inline-flex">Cómo se instala</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {recommended.length > 0 && (
          <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-4 border-b border-stone-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">También te puede interesar</p>
                  <h2 className="section-title mt-4">Productos recomendados</h2>
                </div>
                <Link href="/#productos" className="text-sm font-semibold text-[#c71e2c] sm:pb-1">
                  Ver toda la colección <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-6">
                {recommended.map((item) => (
                  <ProductCard key={item.slug} product={item} headingLevel="h3" />
                ))}
              </div>
            </div>
          </section>
        )}

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

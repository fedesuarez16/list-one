import Image from "next/image";
import Link from "next/link";
import { articulos } from "@/lib/articulos";

export default function ArticlesSection() {
  return (
    <section id="articulos" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-stone-200 pb-8 sm:pb-10">
          <p className="eyebrow">Artículos</p>
          <h2 className="section-title mt-4 max-w-2xl">Ideas y guías para tu revestimiento.</h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articulos.map((articulo) => (
            <article key={articulo.slug} className="group relative overflow-hidden rounded-2xl bg-[#f5f3ef]">
              <div className="relative aspect-[1.4] overflow-hidden">
                <Image
                  src={articulo.image}
                  alt={articulo.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold tracking-tight text-stone-900">
                  {/* El ::after extiende el link a toda la tarjeta. */}
                  <Link href={`/articulos/${articulo.slug}`} className="after:absolute after:inset-0 group-hover:text-[#c71e2c]">
                    {articulo.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{articulo.intro}</p>
                <p className="mt-4 text-sm font-semibold text-[#c71e2c]">
                  Leer artículo <span aria-hidden="true">→</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

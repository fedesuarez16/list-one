import Image from "next/image";

const products = [
  { name: "Eucalipto", detail: "Ranura fina", image: "eucalipto-ranura-fina.png", tag: "Ranura fina" },
  { name: "Eucalipto", detail: "Versión iluminada", image: "eucalipto-led.png", tag: "Con LED" },
  { name: "Freijó", detail: "Veta natural", image: "freijo.png", tag: "Madera" },
  { name: "Freijó", detail: "Veta alternativa", image: "freijo-veta-alternativa.png", tag: "Madera" },
  { name: "Guatambú", detail: "Madera natural", image: "guatambu.png", tag: "Madera" },
  { name: "Guatambú", detail: "Iluminación", image: "guatambu-iluminado.png", tag: "Iluminado" },
  { name: "Guatambú", detail: "Iluminación con cobertor", image: "guatambu-cobertor-led.png", tag: "Con LED" },
  { name: "Guayubira", detail: "Iluminación LED", image: "guayubira-led.png", tag: "Con LED" },
  { name: "Guayubira", detail: "Versión iluminada", image: "guayubira-iluminada.png", tag: "Iluminado" },
  { name: "Paraíso", detail: "Con LED", image: "paraiso-led.png", tag: "Con LED" },
  { name: "Paraíso", detail: "Iluminación LED", image: "paraiso-iluminacion-led.png", tag: "Con LED" },
  { name: "Pino", detail: "Base negra", image: "pino-base-negra.png", tag: "Base negra" },
  { name: "Pino", detail: "Base negra iluminada", image: "pino-base-negra-led.png", tag: "Con LED" },
  { name: "Pino", detail: "Finger", image: "pino-finger.png", tag: "Finger" },
  { name: "Pino", detail: "Impregnado CCA", image: "pino-impregnado-cca.png", tag: "CCA" },
];

export default function ProductGallery() {
  return (
    <section id="productos" className="slat-pattern-bg scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-b border-stone-200 pb-8 sm:flex-row sm:items-end sm:justify-between sm:pb-10">
          <div>
            <p className="eyebrow">La colección Listone</p>
            <h2 className="section-title mt-4">Maderas, perfiles y luz.</h2>
          </div>
          <p className="section-copy max-w-lg sm:pb-1">
            Explorá las distintas vetas y terminaciones. Algunas opciones suman iluminación para darle otra dimensión a la pared.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-6">
          {products.map((product) => (
            <article key={product.image} className="group min-w-0">
              <div className="relative aspect-[0.88] overflow-hidden rounded-2xl bg-[#f2eee8]">
                <Image
                  src={`/images/catalog/${product.image}`}
                  alt={`${product.name}, revestimiento alistonado ${product.detail.toLowerCase()}`}
                  fill
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 22vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                />
                <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-2.5 py-1.5 text-[10px] font-semibold tracking-wide text-stone-700 shadow-sm backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
                  {product.tag}
                </span>
              </div>
              <div className="px-1 pt-3 sm:px-2 sm:pt-4">
                <h3 className="truncate text-sm font-semibold text-stone-900 sm:text-base">{product.name}</h3>
                <p className="mt-1 truncate text-xs text-stone-500 sm:text-sm">{product.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

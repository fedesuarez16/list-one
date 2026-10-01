import LightTransition from "@/components/LightTransition";

export default function Hero() {
  return (
    <section id="inicio" className="slat-pattern-bg overflow-hidden bg-[#f4f1eb] px-5 py-6 sm:px-8 sm:py-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
        <div className="py-5 sm:py-8 lg:py-12">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-[#c71e2c]" />
            Revestimientos alistonados
          </p>
          <h1 className="mt-6 max-w-xl text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.055em] text-[#211d1a] sm:text-6xl lg:text-[4.25rem]">
            Madera que transforma tus espacios.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
            Descubrí la colección Listone: distintas maderas, perfiles y opciones con iluminación para darle protagonismo a tus paredes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#productos" className="button-primary">
              Explorar productos <span aria-hidden="true">↓</span>
            </a>
            <a href="#luz" className="button-secondary">
              Ver el efecto de la luz
            </a>
          </div>
          <div className="mt-9 flex items-center gap-3 text-xs font-medium tracking-wide text-stone-500">
            <span className="h-px w-8 bg-stone-300" />
            Maderas <span className="text-[#c71e2c]">·</span> perfiles <span className="text-[#c71e2c]">·</span> iluminación
          </div>
        </div>

        <div id="luz" className="scroll-mt-28">
          <LightTransition />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#211d1a] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <a href="#inicio" aria-label="Listone, volver al inicio" className="inline-flex w-fit rounded bg-white p-2">
          <Image
            src="/images/listone-isologo.png"
            alt="Listone — revestimientos alistonados"
            width={6329}
            height={1902}
            sizes="180px"
            className="h-auto w-[180px]"
          />
        </a>
        <nav aria-label="Navegación del pie" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/65">
          <a href="#productos" className="transition hover:text-white">Productos</a>
          <a href="#luz" className="transition hover:text-white">La luz</a>
          <a href="#contacto" className="transition hover:text-white">Contacto</a>
        </nav>
        <p className="text-xs text-white/45">© {new Date().getFullYear()} Listone</p>
      </div>
    </footer>
  );
}

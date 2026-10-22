import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#211d1a] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/#inicio" aria-label="Listone, volver al inicio" className="inline-flex w-fit rounded bg-white p-2">
          <Image
            src="/images/listone-isologo.png"
            alt="Listone — revestimientos alistonados"
            width={6329}
            height={1902}
            sizes="180px"
            className="h-auto w-[180px]"
          />
        </Link>
        <nav aria-label="Navegación del pie" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/65">
          <Link href="/#productos" className="transition hover:text-white">Productos</Link>
          <Link href="/#luz" className="transition hover:text-white">La luz</Link>
          <Link href="/#guia" className="transition hover:text-white">Guía</Link>
          <Link href="/#preguntas" className="transition hover:text-white">Preguntas frecuentes</Link>
          <Link href="#contacto" className="transition hover:text-white">Contacto</Link>
        </nav>
        <p className="text-xs text-white/45">© {new Date().getFullYear()} Listone</p>
      </div>
    </footer>
  );
}

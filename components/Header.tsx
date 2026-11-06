import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#productos", label: "Productos" },
  { href: "/#producto", label: "La luz" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#fcfbf9]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:h-[88px] sm:px-8">
        <Link href="/#inicio" aria-label="Listone, inicio" className="shrink-0">
          <Image
            src="/images/listone-isologo.png"
            alt="Listone — revestimientos alistonados"
            width={6329}
            height={1902}
            priority
            sizes="(max-width: 640px) 164px, 224px"
            className="h-auto w-[164px] sm:w-[210px]"
          />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-stone-600 transition hover:text-[#c71e2c]">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="#contacto" className="rounded-full bg-[#c71e2c] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#a91622] sm:px-5 sm:text-sm">
          <span className="sm:hidden">Consultar</span>
          <span className="hidden sm:inline">Hablemos de tu proyecto</span>
        </Link>
      </div>
    </header>
  );
}

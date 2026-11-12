export type Category = "enchapados" | "macizas" | "particulados";

export type Variant = "solo" | "led";

export type Product = {
  slug: string;
  name: string;
  detail: string;
  tag: string;
  category: Category;
  // Foto por variante (en /images/catalog). Si falta una, esa opción del selector queda deshabilitada.
  images: Partial<Record<Variant, string>>;
};

export const variants: { id: Variant; label: string }[] = [
  { id: "solo", label: "Solo" },
  { id: "led", label: "Con LED" },
];

// Orden de render de los carruseles.
export const categories: { id: Category; title: string }[] = [
  { id: "enchapados", title: "Enchapados Naturales" },
  { id: "macizas", title: "Maderas Macizas" },
  { id: "particulados", title: "Particulados" },
];

// Regla: lo que antes era "Especiales" o "Exterior" va a "macizas".
// `slug` define la URL /productos/{slug}: no cambiarlo una vez publicado.
export const products: Product[] = [
  { slug: "eucalipto-ranura-fina", name: "Eucalipto", detail: "Ranura fina", tag: "Ranura fina", category: "macizas", images: { solo: "eucalipto-ranura-fina.webp", led: "eucalipto-led.webp" } },
  { slug: "pino-impregnado-cca", name: "Pino", detail: "Impregnado CCA", tag: "CCA", category: "macizas", images: { solo: "pino-impregnado-cca.webp" } },
  { slug: "freijo", name: "Freijó", detail: "Veta natural", tag: "Madera", category: "enchapados", images: { solo: "freijo.webp" } },
  { slug: "guatambu", name: "Guatambú", detail: "Madera natural", tag: "Madera", category: "enchapados", images: { solo: "guatambu.webp", led: "guatambu-cobertor-led.webp" } },
  { slug: "guayubira", name: "Guayubira", detail: "Madera natural", tag: "Madera", category: "enchapados", images: { led: "guayubira-led.webp" } },
  { slug: "paraiso", name: "Paraíso", detail: "Madera natural", tag: "Madera", category: "enchapados", images: { led: "paraiso-led.webp" } },
  { slug: "itauba", name: "Itaúba", detail: "Madera natural", tag: "Madera", category: "enchapados", images: { solo: "itauba.webp" } },
  { slug: "roble-americano", name: "Roble americano", detail: "Madera natural", tag: "Madera", category: "enchapados", images: { solo: "roble-americano.webp", led: "roble-americano-led.webp" } },
  { slug: "pino-base-negra", name: "Pino", detail: "Base negra", tag: "Base negra", category: "macizas", images: { solo: "pino-base-negra.webp", led: "pino-base-negra-led.webp" } },
  { slug: "pino-finger", name: "Pino", detail: "Finger", tag: "Finger", category: "macizas", images: { solo: "pino-finger.webp" } },
  { slug: "mdf-sin-pintar", name: "MDF", detail: "Sin pintar", tag: "MDF", category: "particulados", images: { solo: "mdf-sin-pintar.webp" } },
  { slug: "mdf-pintado", name: "MDF", detail: "Pintado", tag: "MDF", category: "particulados", images: { solo: "mdf-pintado.webp" } },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function categoryTitle(category: Category) {
  return categories.find((item) => item.id === category)?.title ?? "";
}

/** Nombre completo: "Roble americano", "Pino base negra", "MDF sin pintar". */
export function productTitle(product: Product) {
  return product.detail === "Madera natural" ? product.name : `${product.name} ${product.detail.toLowerCase()}`;
}

export function defaultVariant(product: Product): Variant {
  return product.images.solo ? "solo" : "led";
}

export function productImage(product: Product, variant = defaultVariant(product)) {
  return `/images/catalog/${product.images[variant]}`;
}

/** Misma categoría primero (en orden de catálogo), luego el resto, sin el producto actual. */
export function getRecommended(product: Product, count = 4) {
  const others = products.filter((item) => item.slug !== product.slug);
  const sameCategory = others.filter((item) => item.category === product.category);
  const rest = others.filter((item) => item.category !== product.category);
  return [...sameCategory, ...rest].slice(0, count);
}

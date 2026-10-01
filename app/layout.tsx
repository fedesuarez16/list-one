import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Listone | Revestimientos alistonados",
  description:
    "Revestimientos alistonados Listone. Descubrí cómo la textura y la luz transforman tus espacios.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Revestimiento alistonado de madera para paredes | Listone",
    template: "%s | Listone",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "revestimiento alistonado",
    "revestimientos alistonados",
    "revestimiento alistonado de madera",
    "listones de madera para pared",
    "pared de listones",
    "panel alistonado",
    "palillería",
    "revestimiento de madera interior",
    "revestimiento de madera exterior",
    "revestimiento alistonado con LED",
    "revestimiento alistonado eucalipto",
    "revestimiento alistonado pino",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName,
    title: "Revestimiento alistonado de madera para paredes | Listone",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Revestimiento alistonado de madera para paredes | Listone",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "construcción y decoración",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}

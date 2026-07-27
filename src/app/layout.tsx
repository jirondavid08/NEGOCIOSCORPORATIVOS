import type { Metadata } from "next";

import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/800.css";
import "@fontsource/playfair-display/900.css";
import "@fontsource/tangerine/400.css";
import "@fontsource/tangerine/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Negocios Corporativos | Bienes Raíces Comerciales e Industriales",
  description:
    "Negocios Corporativos ofrece soluciones inmobiliarias comerciales, industriales y logísticas en Ecuador. Venta, renta y gestión de bodegas, oficinas, terrenos y parques industriales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

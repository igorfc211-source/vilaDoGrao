import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://viladograo.com.br"),
  title: "Vila do Grão | Alimentação saudável premium em Campinas",
  description:
    "Vila do Grão é uma experiência premium de alimentação saudável em Campinas, com unidades no Taquaral, Viracopos e Guarulhos.",
  keywords: [
    "alimentação saudável Campinas",
    "cafeteria premium Campinas",
    "comida saudável Taquaral",
    "alimentação natural Campinas",
    "café saudável Campinas",
    "restaurante saudável premium",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vila do Grão | Alimentação saudável premium em Campinas",
    description:
      "Natureza sofisticada, bem-estar e conveniência em uma experiência gastronômica saudável.",
    url: "https://viladograo.com.br",
    siteName: "Vila do Grão",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 400,
        height: 400,
        alt: "Vila do Grão",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${inter.variable}
          ${playfair.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}

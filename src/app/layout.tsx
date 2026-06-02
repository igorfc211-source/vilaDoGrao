import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Vila do Grão | Cafeteria e Restaurante saudável em Campinas",
  description: "Conheça a Vila do Grão, cafeteria e espaço para eventos em Campinas e mais. Ambiente sofisticado, cafés especiais e experiências únicas.",
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
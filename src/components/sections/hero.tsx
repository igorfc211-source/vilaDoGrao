"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  CreditCard,
  MapPin,
  MenuSquare,
} from "lucide-react";
import { SiIfood, SiWhatsapp } from "react-icons/si";
import {
  DIGITAL_MENU_PAGE_URL,
  IFOOD_URL,
  WHATSAPP_URL,
} from "../../lib/brand-links";

const images = [
  "/images/hero/imagemHero1.webp",
  "/images/hero/imagemHero2.webp",
  "/images/hero/imagemHero3.webp",
  "/images/hero/imagemHero4.webp",
];

const quickLinks = [
  {
    href: DIGITAL_MENU_PAGE_URL,
    label: "Cardápio",
    description: "Unidade Taquaral",
    icon: MenuSquare,
    external: true,
  },
  {
    href: "#beneficios",
    label: "VR & VA",
    description: "Bandeiras aceitas",
    icon: CreditCard,
  },
  {
    href: "#localizacoes",
    label: "Localizações",
    description: "Ver unidades",
    icon: MapPin,
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-[#1B2B1B] text-[#FAFAF7]"
    >
      <div className="absolute inset-0 bg-[#1B2B1B] lg:inset-y-0 lg:left-0 lg:right-auto lg:w-[65%]" />

      <div className="absolute inset-0 overflow-hidden lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[55%]">
      {images.map((image, index) => (
  <Image
    key={image}
    src={image}
    alt=""
    fill
    sizes="(min-width:1024px) 55vw, 100vw"
    className={`
      object-cover
      transition-opacity
      duration-[1800ms]
      absolute
      inset-0
      ${index === currentImage
        ? "opacity-100"
        : "opacity-0"}
    `}
  />
))}

        <div className="absolute inset-0 bg-[#1B2B1B]/75 lg:bg-black/20" />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-[45%] hidden w-[30%] lg:block"
        style={{
          background: `
            linear-gradient(
              90deg,
              #1B2B1B 0%,
              #1B2B1B 25%,
              rgba(27,43,27,.95) 40%,
              rgba(27,43,27,.80) 55%,
              rgba(27,43,27,.50) 70%,
              rgba(27,43,27,.15) 85%,
              transparent 100%
            )
          `,
        }}
      />

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pr-[42%]">
        <div className="max-w-3xl">
          <div
            
            className="mb-7 sm:mb-8"
          >
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-10 bg-[#A4EA4F]" />
              <span className="text-[11px] font-semibold uppercase text-[#A4EA4F] sm:text-xs">
                Alimentação saudável premium
              </span>
            </div>
          </div>

          <h1
    
            className="font-display text-4xl font-light leading-[1.05] text-[#FAFAF7] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Seu novo ritual
            <span className="block text-[#A4EA4F]">
              saudável em experiência
            </span>
          </h1>

          <p
        
            className="mt-7 max-w-xl text-base leading-relaxed text-[#F1F0E7] sm:mt-8 sm:text-lg"
          >
            Ingredientes selecionados, ambiente sofisticado e refeições
            pensadas para quem valoriza bem-estar, qualidade e uma experiência
            gastronômica única.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:gap-4"
          >
            <a
              href={IFOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#A4EA4F] px-7 py-4 font-semibold text-[#1B2B1B] transition duration-500 hover:scale-[1.03] hover:bg-[#EA1D2C] hover:text-white hover:shadow-[0_20px_60px_rgba(234,29,44,.28)]"
            >
              <SiIfood size={22} />
              Pedir no iFood
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-7 py-4 font-medium text-[#FAFAF7] bg-white/10 transition duration-300 hover:scale-[1.03] hover:bg-[#dcf8c6] hover:text-[#1B2B1B]"
            >
              <SiWhatsapp size={18} />
              Falar no WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-10 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-3 lg:mt-16"
          >
            {quickLinks.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className="absolute inset-y-0 -left-20 w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-[120%]" />
                  <div className="relative z-10 ">
                    <div className="flex items-center gap-2 font-semibold text-[#A4EA4F]">
                      <Icon size={18} />
                      {item.label}
                    </div>
                    <p className="mt-1 text-sm text-[#F1F0E7]/70">
                      {item.description}
                    </p>
                  </div>
                </>
              );

              return item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.07] px-5 py-4 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#A4EA4F]/40"
                >
                  {content}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.07] px-5 py-4 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#A4EA4F]/40"
                >
                  {content}
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden xl:block">
        <div className="rounded-lg border border-white/10 bg-white/[0.07] p-7 bg-white">
          <p className="text-sm uppercase text-[#A4EA4F]">Vila do Grão</p>
          <p className="mt-3 text-xl text-[#FAFAF7]">
            Alimentação saudável
            <br />
            com experiência premium.
          </p>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{  repeat: 4, duration: 2 }}
        className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 sm:block"
      >
        <ChevronDown size={28} className="text-[#A4EA4F]" />
      </motion.div>
    </section>
  );
}

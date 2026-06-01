"use client";

import {
    MapPin,
    MenuSquare,
    CreditCard
  } from "lucide-react";
import { SiIfood, SiWhatsapp  } from "react-icons/si";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

const images = [
  "/images/hero/imagemHero1.png",
  "/images/hero/imagemHero2.png",
  "/images/hero/imagemHero3.png",
  "/images/hero/imagemHero4.png",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1B2B1B]">
      {/* BACKGROUND ESQUERDA */}
      <div className="absolute inset-y-0 left-0 w-[65%] bg-[#1B2B1B]" />

      {/* IMAGEM DIREITA */}
      <div className="absolute inset-y-0 right-0 w-[55%] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
       <Image
  src={images[currentImage]}
  alt="Vila do Grão"
  fill
  priority
  onLoad={() => console.log("Imagem carregada")}
  onError={() => console.log("Erro ao carregar")}
  className="object-cover"
/>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* DIVISÃO SUAVE */}
      <div
        className="
          absolute
          inset-y-0
          left-[45%]
          w-[30%]
          pointer-events-none
        "
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

      {/* CONTEÚDO */}
      <div className="relative z-20 mx-auto flex right-10 min-h-screen max-w-7xl items-center px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* MINI BANNER */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-10 bg-[#A4EA4F]" />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.4em]
                  text-[#A4EA4F]
                "
              >
                Alimentação Saudável Premium
              </span>
            </div>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="
              text-5xl
              font-light
              leading-[1.05]
              text-[#FAFAF7]
              md:text-7xl
            "
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            Seu novo ritual
            <span className="block text-[#A4EA4F]">
              saudável em Campinas
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="
              mt-8
              max-w-xl
              text-lg
              leading-relaxed
              text-[#F1F0E7]
            "
          >
            Ingredientes selecionados, ambiente sofisticado
            e refeições pensadas para quem valoriza
            bem-estar, qualidade e uma experiência
            gastronômica única.
          </motion.p>

          {/* BOTÕES */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#ifood"
              className="
                group
                flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#A4EA4F]
                px-8
                py-4
                font-medium
                text-[#1B2B1B]
                transition-all
                duration-500
                hover:scale-105
                hover:bg-[#EA1D2C]
                hover:text-white
                hover:shadow-[0_20px_60px_rgba(234,29,44,.35)]
              "
            >
              <SiIfood
                width={22}
                height={22}
                className="object-contain"
              />

              Pedir no iFood

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </a>

            <a
              href="#whatsapp"
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/20
                bg-white/5
                px-8
                py-4
                text-[#FAFAF7]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#dcf8c6]
                hover:text-black
              "
            >
              <SiWhatsapp size={18} />
              Falar no WhatsApp
            </a>
          </motion.div>

        {/* ACESSOS RÁPIDOS */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 1,
    duration: 1,
  }}
  className="
    mt-16
    flex
    flex-wrap
    gap-4
  "
>
  {/* CARDÁPIO */}
  <a
    href="LINK_CARDAPIO_TAQUARAL"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      relative
      overflow-hidden
      rounded-2xl
      px-6
      py-4
      backdrop-blur-xl
      transition-all
      duration-500

      bg-gradient-to-r
      from-white/[0.08]
      via-white/[0.04]
      to-transparent

      hover:-translate-y-1
      hover:shadow-[0_15px_40px_rgba(164,234,79,0.08)]
    "
  >
    {/* Borda Premium */}
    <div
      className="
        absolute
        inset-0
        rounded-2xl
        border
        border-[#A4EA4F]/30
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
      "
    />

    {/* Shine Effect */}
    <div
      className="
        absolute
        inset-y-0
        -left-20
        w-20
        bg-gradient-to-r
        from-transparent
        via-white/15
        to-transparent
        transition-all
        duration-700
        group-hover:left-[120%]
      "
    />

    <div className="relative z-10">
      <div className="flex items-center gap-2 text-[#A4EA4F] font-medium">
        <MenuSquare size={18} />
        Cardápio
      </div>

      <p className="mt-1 text-sm text-[#F1F0E7]/70">
        Unidade Taquaral
      </p>
    </div>
  </a>

  {/* VR VA */}
  <a
    href="LINK_VR_VA"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      relative
      overflow-hidden
      rounded-2xl
      px-6
      py-4
      backdrop-blur-xl
      transition-all
      duration-500

      bg-gradient-to-r
      from-white/[0.08]
      via-white/[0.04]
      to-transparent

      hover:-translate-y-1
      hover:shadow-[0_15px_40px_rgba(164,234,79,0.08)]
    "
  >
    <div
      className="
        absolute
        inset-0
        rounded-2xl
        border
        border-[#A4EA4F]/30
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
      "
    />

    <div
      className="
        absolute
        inset-y-0
        -left-20
        w-20
        bg-gradient-to-r
        from-transparent
        via-white/15
        to-transparent
        transition-all
        duration-700
        group-hover:left-[120%]
      "
    />

    <div className="relative z-10">
      <div className="flex items-center gap-2 text-[#A4EA4F] font-medium">
        <CreditCard size={18} />
        VR & VA
      </div>

      <p className="mt-1 text-sm text-[#F1F0E7]/70">
        Bandeiras aceitas
      </p>
    </div>
  </a>

  {/* LOCALIZAÇÕES */}
  <a
    href="#localizacoes"
    className="
      group
      relative
      overflow-hidden
      rounded-2xl
      px-6
      py-4
      backdrop-blur-xl
      transition-all
      duration-500

      bg-gradient-to-r
      from-white/[0.08]
      via-white/[0.04]
      to-transparent

      hover:-translate-y-1
      hover:shadow-[0_15px_40px_rgba(164,234,79,0.08)]
    "
  >
    <div
      className="
        absolute
        inset-0
        rounded-2xl
        border
        border-[#A4EA4F]/30
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
      "
    />

    <div
      className="
        absolute
        inset-y-0
        -left-20
        w-20
        bg-gradient-to-r
        from-transparent
        via-white/15
        to-transparent
        transition-all
        duration-700
        group-hover:left-[120%]
      "
    />

    <div className="relative z-10">
      <div className="flex items-center gap-2 text-[#A4EA4F] font-medium">
        <MapPin size={18} />
        Localizações
      </div>

      <p className="mt-1 text-sm text-[#F1F0E7]/70">
        Ver unidades
      </p>
    </div>
  </a>
</motion.div>
        </div>
      </div>

      {/* CARD FLOUTING */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        
        <div
          className="
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-2xl
          "
        >
          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-[#A4EA4F]
            "
          >
            Vila do Grão
          </p>

          <p className="mt-3 text-xl text-[#FAFAF7]">
            Alimentação saudável
            <br />
            com experiência premium.
          </p>
        </div>
      </div>

      {/* SCROLL */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          z-30
          -translate-x-1/2
        "
      >
        <ChevronDown
          size={28}
          className="text-[#A4EA4F]"
        />
      </motion.div>
    </section>
  );
}
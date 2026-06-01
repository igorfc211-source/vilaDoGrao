"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import {
  Menu,
  X,
  Instagram,
  MessageCircle,
} from "lucide-react";

import {
  SiSpotify,
  SiIfood,
} from "react-icons/si";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`
          fixed
          top-0
          left-0
          z-50
          w-full
          transition-all
          duration-500
          ${
            scrolled
            ? "border-b border-white/10 bg-[#1B2B1B]/90 backdrop-blur-[32px]"
            : "bg-[#1B2B1B]/20 backdrop-blur-[12px]"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-24
            max-w-7xl
            items-center
            justify-between
            px-6
            lg:px-12
          "
        >
          {/* MENU ESQUERDA */}
          <nav
            className="
              hidden
              flex-1
              justify-end
              gap-8
              lg:flex
            "
          >
            <Link
              href="#sobre"
              className="
  rounded-full

  p-2.5
  text-white/80
  backdrop-blur-xl
  transition-all
  duration-300
  hover:scale-110
  hover:bg-[#A4EA4F]/10
  hover:text-[#A4EA4F]
"
            >
              Sobre
            </Link>

            <Link
              href="#sobre"
              className="
  rounded-full

  p-2.5
  text-white/80
  backdrop-blur-xl
  transition-all
  duration-300
  hover:scale-110
  hover:bg-[#A4EA4F]/10
  hover:text-[#A4EA4F]
"
            >
              Cardápio
            </Link>

            <Link
              href="#sobre"
              className="
  rounded-full

  p-2.5
  text-white/80
  backdrop-blur-xl
  transition-all
  duration-300
  hover:scale-110
  hover:bg-[#A4EA4F]/10
  hover:text-[#A4EA4F]
"
            >
              Unidades
            </Link>
          </nav>

          {/* LOGO */}
      <motion.div
  whileHover={{ scale: 1.03 }}
  className="mx-8"
>
            <Link href="/">
            <Image
  src="/images/logo.png"
  alt="Vila do Grão"
  width={220}
  height={70}
  priority
  className="
    h-auto
    max-h-[70px]
    w-auto
    object-contain
    
  "
/>
            </Link>
          </motion.div>

          {/* MENU DIREITO */}
          <nav
            className="
              hidden
              flex-1
              items-center
              gap-8
              lg:flex
            "
          >
             <Link
              href="#sobre"
              className="
  rounded-full

  p-2.5
  text-white/80
  backdrop-blur-xl
  transition-all
  duration-300
  hover:scale-110
  hover:bg-[#A4EA4F]/10
  hover:text-[#A4EA4F]
"
            >
              Benefícios
            </Link>

            <Link
              href="#sobre"
              className="
  rounded-full

  p-2.5
  text-white/80
  backdrop-blur-xl
  transition-all
  duration-300
  hover:scale-110
  hover:bg-[#A4EA4F]/10
  hover:text-[#A4EA4F]
"
            >
              Playlist
            </Link>

            <Link
              href="#sobre"
              className="
  rounded-full

  p-2.5
  text-white/80
  backdrop-blur-xl
  transition-all
  duration-300
  hover:scale-110
  hover:bg-[#A4EA4F]/10
  hover:text-[#A4EA4F]
"
            >
              Contato
            </Link>
          </nav>

          {/* REDES */}
          <div
            className="
              hidden
              items-center
              gap-3
              lg:flex
            "
          >
            <a
              href="#instagram"
              className="
                text-white/60
                transition
                hover:text-[#A4EA4F]
              "
            >
              <Instagram size={18} />
            </a>

            <a
              href="#spotify"
              className="
                text-white/60
                transition
                hover:text-[#A4EA4F]
              "
            >
              <SiSpotify size={17} />
            </a>

            <a
              href="#ifood"
              className="
                text-white/60
                transition
                hover:text-[#EA1D2C]
              "
            >
              <SiIfood size={17} />
            </a>

            <a
              href="#whatsapp"
              className="
                rounded-full
                bg-[#A4EA4F]
                p-2.5
                text-[#1B2B1B]
                transition-all
                hover:scale-110
              "
            >
              <MessageCircle size={16} />
            </a>

            {/* CTA */}
            <a
              href="#ifood"
              className="
                ml-2
                rounded-full
                bg-[#A4EA4F]
                px-5
                py-3
                text-sm
                font-medium
                text-[#1B2B1B]
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white
              "
            >
              Pedir Agora
            </a>
          </div>

          {/* MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="
              ml-auto
              text-white
              lg:hidden
            "
          >
            <Menu size={30} />
          </button>
        </div>
      </motion.header>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-[#1B2B1B]
            "
          >
            <div className="p-6">
              <button
                onClick={() => setOpen(false)}
                className="text-white"
              >
                <X size={32} />
              </button>
            </div>

            <div
              className="
                flex
                h-full
                flex-col
                items-center
                justify-center
                gap-8
              "
            >
             <Image
  src="/images/logo.png"
  alt="Vila do Grão"
  width={260}
  height={80}
  className="
    h-auto
    max-h-[72px]
    w-auto
    rounded-2xl
  "
/>

              <Link href="#sobre">Sobre</Link>
              <Link href="#cardapio">Cardápio</Link>
              <Link href="#unidades">Unidades</Link>
              <Link href="#beneficios">Benefícios</Link>
              <Link href="#spotify">Playlist</Link>
              <Link href="#contato">Contato</Link>

              <div className="flex gap-6 mt-4">
                <Instagram />
                <SiSpotify />
                <SiIfood />
                <MessageCircle />
              </div>

              <a
                href="#ifood"
                className="
                  mt-6
                  rounded-full
                  bg-[#A4EA4F]
                  px-8
                  py-4
                  font-medium
                  text-[#1B2B1B]
                "
              >
                Pedir Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
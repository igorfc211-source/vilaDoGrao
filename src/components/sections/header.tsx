"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { SiIfood, SiSpotify } from "react-icons/si";
import {
  IFOOD_URL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
} from "../../lib/brand-links";

const leftLinks = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#localizacoes", label: "Unidades" },
];

const rightLinks = [
  { href: "#beneficios", label: "Benefícios" },
  { href: INSTAGRAM_URL, label: "Instagram", external: true },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`
          fixed left-0 top-0 z-50 w-full
          transition-all duration-500
          ${
            scrolled
              ? "border-b border-white/10 bg-[#1B2B1B]/90 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
              : "bg-[#1B2B1B]/25 backdrop-blur-md"
          }
        `}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:h-24 sm:px-6 lg:px-10 xl:px-12">
          <nav className="hidden flex-1 justify-end gap-3 lg:flex xl:gap-6">
            {leftLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition duration-300 hover:bg-white/[0.08] hover:text-[#A4EA4F]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex shrink-0 justify-center lg:mx-4 xl:mx-8"
          >
            <Link href="/" aria-label="Ir para o início">
              <Image
                src="/images/logo.png"
                alt="Vila do Grão"
                width={76}
                height={76}
                priority
                className="h-14 w-14 object-contain sm:h-[70px] sm:w-[70px]"
              />
            </Link>
          </motion.div>

          <nav className="hidden flex-1 items-center gap-3 lg:flex xl:gap-6">
            {rightLinks.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition duration-300 hover:bg-white/[0.08] hover:text-[#A4EA4F]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition duration-300 hover:bg-white/[0.08] hover:text-[#A4EA4F]"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Instagram da Vila do Grão"
              className="rounded-lg p-2 text-white/60 transition hover:bg-white/[0.08] hover:text-[#d88be0]"
            >
              <Instagram size={18} />
            </a>

            <a
              href="#contato"
              aria-label="Ver canais de contato"
              className="rounded-lg p-2 text-white/60 transition hover:bg-white/[0.08] hover:text-[#A4EA4F]"
            >
              <SiSpotify size={17} />
            </a>

            <a
              href={IFOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir Vila do Grão no iFood"
              className="rounded-lg p-2 text-white/60 transition hover:bg-white/[0.08] hover:text-[#EA1D2C]"
            >
              <SiIfood size={18} />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a Vila do Grão no WhatsApp"
              className="rounded-full bg-[#A4EA4F] p-2.5 text-[#1B2B1B] transition duration-300 hover:scale-105 hover:bg-[#96C549]"
            >
              <MessageCircle size={16} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="ml-auto rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#1B2B1B] text-[#FAFAF7]"
          >
            <div className="flex min-h-[100dvh] flex-col px-6 py-6">
              <div className="flex items-center justify-between">
                <Image
                  src="/images/logo.png"
                  alt="Vila do Grão"
                  width={72}
                  height={72}
                  className="h-16 w-16 object-contain"
                />

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="rounded-lg p-2 text-white transition hover:bg-white/10"
                >
                  <X size={30} />
                </button>
              </div>

              <nav className="mt-14 flex flex-1 flex-col justify-center gap-5">
                {[...leftLinks, ...rightLinks.filter((item) => !item.external)].map(
                  (item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-white/10 py-4 text-2xl font-light"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <a
                  href={IFOOD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#A4EA4F] px-6 py-4 font-semibold text-[#1B2B1B]"
                >
                  <SiIfood size={20} />
                  Pedir no iFood
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 font-semibold text-white"
                >
                  <MessageCircle size={19} />
                  WhatsApp
                </a>
              </div>

              <div className="mt-8 flex justify-center gap-5 pb-4 text-white/70">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
                <a href="#contato" aria-label="Playlist">
                  <SiSpotify size={24} />
                </a>
                <a
                  href={IFOOD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="iFood"
                >
                  <SiIfood size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

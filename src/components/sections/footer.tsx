"use client";

import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";
import { SiIfood, SiSpotify } from "react-icons/si";
import {
  IFOOD_URL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
} from "../../lib/brand-links";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="relative overflow-hidden bg-[#1B2B1B] pt-20 pb-10 text-[#FAFAF7] sm:pt-24 lg:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #FAFAF7 1px, transparent 1px), linear-gradient(#FAFAF7 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.3fr_2fr_0.8fr] lg:gap-14 lg:px-12">
        <div>
          <Image
            src="/images/logo.png"
            alt="Vila do Grão"
            width={110}
            height={110}
            className="h-24 w-24 object-contain"
          />

          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-[#F1F0E7]/70">
            Alimentação saudável com ingredientes selecionados, ambiente
            acolhedor e uma experiência criada para quem valoriza bem-estar,
            qualidade e sofisticação.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#A4EA4F] px-6 py-4 font-semibold text-[#1B2B1B] transition duration-300 hover:scale-[1.03] hover:bg-[#96C549]"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a
              href={IFOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 font-semibold text-[#FAFAF7] transition duration-300 hover:scale-[1.03] hover:bg-white/[0.08]"
            >
              <SiIfood size={19} />
              iFood
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-medium text-white">
            Nossas unidades
          </h3>

          <div className="mt-6 grid gap-7 sm:grid-cols-3 lg:gap-8">
            <div>
              <h4 className="font-semibold text-[#A4EA4F]">Taquaral</h4>
              <p className="mt-3 text-sm leading-relaxed text-[#F1F0E7]/70">
                Rua Soldado Percílio Neto, 77
                <br />
                Campinas, SP
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#F1F0E7]/50">
                Seg, 08h30 às 22h
                <br />
                Ter a Sáb, 07h às 22h
                <br />
                Dom, 07h às 20h
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#A4EA4F]">
                Aeroporto de Guarulhos
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-[#F1F0E7]/70">
                Rod. Hélio Smidt, s/nº
                <br />
                Guarulhos, SP
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#F1F0E7]/50">
                Todos os dias
                <br />
                06h às 22h
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#A4EA4F]">
                Aeroporto Viracopos
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-[#F1F0E7]/70">
                Jardim Aeroporto
                <br />
                Campinas, SP
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#F1F0E7]/50">
                Seg a Sex, 24h
                <br />
                Sáb, até 22h
                <br />
                Dom, a partir das 06h
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-medium text-white">
            Conecte-se
          </h3>

          <div className="mt-6 flex flex-col gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#F1F0E7]/70 transition hover:text-[#d88be0]"
            >
              <Instagram size={18} />
              Instagram
            </a>

            <a
              href="#contato"
              className="flex items-center gap-3 text-[#F1F0E7]/70 transition hover:text-[#A4EA4F]"
            >
              <SiSpotify size={18} />
              Spotify
            </a>

            <a
              href={IFOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#F1F0E7]/70 transition hover:text-[#EA1D2C]"
            >
              <SiIfood size={18} />
              iFood
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#F1F0E7]/70 transition hover:text-[#A4EA4F]"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 h-px max-w-7xl bg-white/10 sm:mt-20" />

      <div className="relative z-10 mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center text-sm text-[#F1F0E7]/50 sm:px-8 md:flex-row lg:px-12">
        <p>© 2026 Vila do Grão. Todos os direitos reservados.</p>
        <p>Experiência saudável, sofisticada e acolhedora.</p>
      </div>
    </footer>
  );
}

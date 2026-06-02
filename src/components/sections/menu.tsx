"use client";

import { ArrowRight } from "lucide-react";
import {
  DIGITAL_MENU_PAGE_URL,
  DIGITAL_MENU_URL,
} from "../../lib/brand-links";

export default function Menu() {
  return (
    <section
      id="cardapio"
      className="relative overflow-hidden bg-[#FAFAF7] py-24 sm:py-32 lg:py-44"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "radial-gradient(#1B2B1B 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1450px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div className="order-2 flex justify-center lg:order-1">
          <div className="relative mx-auto w-full max-w-[950px] rounded-lg border-8 border-[#1B2B1B] bg-[#1B2B1B] shadow-[0_42px_120px_rgba(0,0,0,0.14)] lg:border-[14px]">
            <iframe
              title="Cardápio digital Vila do Grão"
              src={DIGITAL_MENU_URL}
              className="h-[520px] w-full rounded-md sm:h-[700px] lg:h-[850px]"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="order-1 block max-w-xl lg:order-2">
          <div className="inline-flex items-center gap-4 text-[11px] font-semibold uppercase text-[#6F9139] sm:text-xs">
            <span className="h-px w-10 bg-[#6F9139]" />
            Cardápio digital
          </div>

          <h2 className="font-display mt-7 text-4xl font-light leading-[1.06] text-[#1B2B1B] sm:text-5xl lg:mt-8 lg:text-6xl">
            Escolhas que unem
            <span className="block">sabor e bem-estar</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#64705F] sm:mt-8 sm:text-xl">
            Bowls, cafés, refeições e opções saudáveis preparadas com equilíbrio
            entre sabor, frescor e sofisticação.
          </p>

          <p className="mt-5 max-w-lg leading-relaxed text-[#7A8076] sm:mt-6">
            Um cardápio criado para quem valoriza alimentação consciente sem
            abrir mão da experiência gastronômica.
          </p>

          <a
            href={DIGITAL_MENU_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-4 rounded-full bg-[#1B2B1B] px-7 py-4 font-semibold text-white transition duration-500 hover:scale-[1.03] hover:bg-[#314D31] hover:shadow-[0_20px_60px_rgba(27,43,27,.25)] sm:mt-12 sm:px-8 sm:py-5"
          >
            Explorar cardápio
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

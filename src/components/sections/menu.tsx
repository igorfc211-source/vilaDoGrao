"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Menu() {
  return (
    <section
    id="cardapio"
    className="
      relative
      overflow-hidden
  
      bg-[#FAFAF7]
  
      py-44
    "
  >
    {/* TEXTURA */}
    <div
      className="
        absolute
        inset-0
  
        opacity-[0.02]
        pointer-events-none
      "
      style={{
        backgroundImage:
          "radial-gradient(#1B2B1B 1px, transparent 1px)",
        backgroundSize: "34px 34px",
      }}
    />
  
    {/* GLOW */}
    <div
      className="
        absolute
        left-[-200px]
        top-20
  
        h-[500px]
        w-[500px]
  
        rounded-full
  
        bg-[#A4EA4F]/10
  
        blur-[180px]
      "
    />
  
    <div
      className="
        relative
        z-10
  
        mx-auto
        grid
        max-w-[1450px]
        items-center
        gap-24
  
        px-6
  
        lg:grid-cols-[1fr_1.1fr]
      "
    >
      {/* MOCKUP */}
      <div
        className="
          relative
  
          flex
          justify-center
        "
      >
        {/* SOMBRA */}
        <div
          className="
            absolute
  
            bottom-0
  
            h-[300px]
            w-[300px]
  
            rounded-full
  
            bg-[#A4EA4F]/10
  
            blur-[120px]
          "
        />
  
        <div
           className="
           relative
       
           mx-auto
       
           w-full
           max-w-[950px]
       
           rounded-[48px]
       
           border-[14px]
           border-[#1B2B1B]
       
           bg-[#1B2B1B]
       
           shadow-[0_50px_140px_rgba(0,0,0,0.15)]
         "
        >
         <iframe
    src="https://heyzine.com/flip-book/a6b314e321.html"
    className="
      h-[850px]
      w-full
      

      rounded-[32px]"
    allowFullScreen
  />
        </div>
      </div>
  
      {/* TEXTO */}
      <div className="max-w-xl">
        <div
          className="
            inline-flex
            items-center
            gap-4
  
            text-xs
            uppercase
            tracking-[0.35em]
  
            text-[#7A9D3B]
          "
        >
          <span className="h-px w-10 bg-[#7A9D3B]" />
  
          Cardápio Digital
        </div>
  
        <h2
          className="
            mt-8
  
            text-6xl
            font-light
            leading-[1.05]
  
            text-[#1B2B1B]
          "
          style={{
            fontFamily: "Playfair Display",
          }}
        >
          Escolhas que unem
          <span className="block">
            sabor e bem-estar
          </span>
        </h2>
  
        <p
          className="
            mt-8
  
            text-xl
            leading-relaxed
  
            text-[#64705F]
          "
        >
          Bowls, cafés, refeições e opções
          saudáveis preparadas com equilíbrio
          entre sabor, frescor e sofisticação.
        </p>
  
        <p
          className="
            mt-6
  
            max-w-lg
  
            leading-relaxed
  
            text-[#7A8076]
          "
        >
          Um cardápio criado para quem valoriza
          alimentação consciente sem abrir mão
          da experiência gastronômica.
        </p>
  
        <a
          href="https://heyzine.com/flip-book/a6b314e321.html#page/1"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
  
            mt-12
            inline-flex
            items-center
            gap-4
  
            rounded-full
  
            bg-[#1B2B1B]
  
            px-8
            py-5
  
            text-white
  
            transition-all
            duration-500
  
            hover:scale-[1.03]
            hover:bg-[#314D31]
            hover:shadow-[0_20px_60px_rgba(27,43,27,.25)]
          "
        >
          Explorar Cardápio
  
          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
  
              group-hover:translate-x-1
            "
          />
        </a>
      </div>
    </div>
  </section>

  );}
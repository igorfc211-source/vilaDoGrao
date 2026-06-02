"use client";

import Image from "next/image";
import {
  Instagram,
  MessageCircle,
} from "lucide-react";

import {
  SiSpotify,
  SiIfood,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden

        bg-[#1B2B1B]
        text-[#FAFAF7]

        pt-28
        pb-10
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-0

          h-[500px]
          w-[500px]

          -translate-x-1/2

          rounded-full
          bg-[#A4EA4F]/10

          blur-[180px]
          pointer-events-none
        "
      />

      {/* TOPO */}
      <div
        className="
          relative
          z-10

          mx-auto
          grid
          max-w-7xl
          gap-16

          px-6

          lg:grid-cols-[1.5fr_1fr_1fr_1fr]
        "
      >
        {/* BRAND */}
        <div>
          <Image
            src="/images/logo.png"
            alt="Vila do Grão"
            width={220}
            height={60}
            className="w-auto"
          />

          <p
            className="
              mt-8
              max-w-md

              text-[15px]
              leading-relaxed

              text-[#F1F0E7]/70
            "
          >
            Alimentação saudável com ingredientes
            selecionados, ambiente acolhedor e uma
            experiência criada para quem valoriza
            bem-estar, qualidade e sofisticação.
          </p>

          <a
            href="#whatsapp"
            className="
              mt-8
              inline-flex
              items-center
              gap-3

              rounded-full

              bg-[#A4EA4F]
              px-6
              py-4

              font-medium
              text-[#1B2B1B]

              transition-all
              duration-300

              hover:scale-105
            "
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>

      {/* UNIDADES */}
<div className="lg:col-span-2">
  <h3
    className="
      text-lg
      font-medium
      text-white
    "
    style={{
      fontFamily: "Playfair Display",
    }}
  >
    Nossas Unidades
  </h3>

  <div
    className="
      mt-6
      grid
      gap-8
      md:grid-cols-3
    "
  >
    {/* TAQUARAL */}
    <div>
      <h4
        className="
          text-[#A4EA4F]
          font-medium
        "
      >
        Taquaral
      </h4>

      <p
        className="
          mt-3
          text-sm
          leading-relaxed
          text-[#F1F0E7]/70
        "
      >
        Av. Heitor Penteado, 1450
        <br />
        Campinas • SP
      </p>

      <p
        className="
          mt-4
          text-sm
          text-[#F1F0E7]/50
        "
      >
        Seg • 08h30 às 22h
        <br />
        Ter a Sáb • 07h às 22h
        <br />
        Dom • 07h às 20h
      </p>
    </div>

    {/* GUARULHOS */}
    <div>
      <h4
        className="
          text-[#A4EA4F]
          font-medium
        "
      >
        Aeroporto de Guarulhos
      </h4>

      <p
        className="
          mt-3
          text-sm
          leading-relaxed
          text-[#F1F0E7]/70
        "
      >
        Rod. Hélio Smidt, s/n°
        <br />
        Guarulhos • SP
      </p>

      <p
        className="
          mt-4
          text-sm
          text-[#F1F0E7]/50
        "
      >
        Todos os dias
        <br />
        06h às 22h
      </p>
    </div>

    {/* VIRACOPOS */}
    <div>
      <h4
        className="
          text-[#A4EA4F]
          font-medium
        "
      >
        Aeroporto Viracopos
      </h4>

      <p
        className="
          mt-3
          text-sm
          leading-relaxed
          text-[#F1F0E7]/70
        "
      >
        Jardim Aeroporto
        <br />
        Campinas • SP
      </p>

      <p
        className="
          mt-4
          text-sm
          text-[#F1F0E7]/50
        "
      >
        Seg a Sex • 24h
        <br />
        Sáb • até 22h
        <br />
        Dom • a partir das 06h
      </p>
    </div>
  </div>
</div>

        {/* REDES */}
        <div>
          <h3
            className="
              text-lg
              font-medium

              text-white
            "
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            Conecte-se
          </h3>

          <div
            className="
              mt-6
              flex
              flex-col
              gap-4
            "
          >
            <a
              href="#instagram"
              className="
                flex
                items-center
                gap-3

                text-[#F1F0E7]/70

                transition
                hover:text-[#c576d4]
              "
            >
              <Instagram size={18} />
              Instagram
            </a>

            <a
              href="#spotify"
              className="
                flex
                items-center
                gap-3

                text-[#F1F0E7]/70

                transition
                hover:text-[#A4EA4F]
              "
            >
              <SiSpotify size={18} />
              Spotify
            </a>

            <a
              href="#ifood"
              className="
                flex
                items-center
                gap-3

                text-[#F1F0E7]/70

                transition
                hover:text-[#EA1D2C]
              "
            >
              <SiIfood size={18} />
              iFood
            </a>

            <a
              href="#whatsapp"
              className="
                flex
                items-center
                gap-3

                text-[#F1F0E7]/70

                transition
                hover:text-[#A4EA4F]
              "
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* DIVISÃO */}
      <div
        className="
          mx-auto
          mt-20

          h-px
          max-w-7xl

          bg-white/10
        "
      />

      {/* COPYRIGHT */}
      <div
        className="
          mx-auto
          mt-8

          flex
          max-w-7xl

          flex-col
          items-center
          justify-between

          gap-4

          px-6

          text-center
          text-sm

          text-[#F1F0E7]/50

          md:flex-row
        "
      >
        <p>
          © 2026 Vila do Grão. Todos os direitos reservados.
        </p>

        <p>
          Desenvolvido para uma experiência
          saudável, sofisticada e acolhedora.
        </p>
      </div>
    </footer>
  );
}
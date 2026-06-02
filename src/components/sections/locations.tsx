"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Clock3,
} from "lucide-react";
import { MdOutlineModeOfTravel } from "react-icons/md";


export default function Locations() {
  const [active, setActive] = useState<number | null>(null);

  const units = [
    {
      name: "Taquaral",
      subtitle: "O refúgio saudável do Taquaral",
      description:
        "Um espaço criado para transformar refeições em momentos de pausa, equilíbrio e bem-estar.",
      address:
        "Av. Heitor Penteado, 1450 - Campinas",
      hours:
        "segunda-feira • 08:30h às 22h, terça a sábado • 07h às 22h • domingo 07 ás 20h",
      map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.12949228871!2d-47.04898000000001!3d-22.8716744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c5b68525fb25%3A0x544c5968d5118006!2sGrain%20Village!5e0!3m2!1sen!2sbr!4v1780363019588!5m2!1sen!2sbr",
    },

    {
      name: "Aeroporto de Guarulhos",
      subtitle:
        "Bem-estar no maior aeroporto do Brasil",
      description:
        "Ambiente acolhedor, ingredientes frescos e uma experiência pensada para acompanhar sua rotina.",
      address:
        "Rod. Hélio Smidt, s/nº - Aeroporto, Guarulhos - SP",
      hours:
        "Todos os dias • 06h às 22h",
      map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14643.596783697454!2d-46.48192945!3d-23.4280083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8af96f722a25%3A0x8071626c51a7154a!2sAeroporto%20Internacional%20de%20S%C3%A3o%20Paulo%2FGuarulhos%E2%80%93Governador%20Andr%C3%A9%20Franco%20Montoro!5e0!3m2!1spt-BR!2sbr!4v1780363143682!5m2!1spt-BR!2sbr",
    },

    {
      name: "Aeroporto Viracopos",
      subtitle:
        "Natureza e sofisticação na pausa da sua viagem",
      description:
        "Uma experiência gastronômica leve e moderna em um dos.",
      address:
        "R. Quatorze - Jardim Aeroporto de Campinas, Campinas - SP",
      hours:
        "segunda a sexta - 24 horas • sábado até ás 22h • domingo apartir das 06h",
      map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.443244082847!2d-47.15168952468656!3d-23.007492179184307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b53b959c5f63%3A0xa9eba0add29ae747!2sVila%20do%20Gr%C3%A3o%20Viracopos%20l%20%C3%81rea%20de%20Embarque!5e0!3m2!1spt-BR!2sbr!4v1780364284874!5m2!1spt-BR!2sbr",
    },
  ];

  return (
    <section
      id="localizacoes"
      className="
        relative
        overflow-hidden
        py-44

        bg-[#F7F8F3]
      "
    >
      {/* glow */}
      <div
        className="
          absolute
          right-0
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
          max-w-7xl
          px-6
        "
      >
        {/* HEADER */}
        <div className="max-w-3xl">
          <span
            className="
              text-xs
              uppercase
              tracking-[0.4em]
              text-[#7A9D3B]
            "
          >
            Localizações das nossas unidades
          </span>

          <h2
            className="
              mt-6

              text-6xl
              font-light

              text-[#1B2B1B]
            "
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            Encontre seu espaço.
          </h2>

          <p
            className="
              mt-6

              text-xl

              text-[#61705F]
            "
          >
            Cada unidade foi pensada para
            proporcionar uma experiência única
            de bem-estar, sabor e acolhimento.
          </p>
        </div>

        <div
          className="
            mt-20

            grid
            gap-12

            lg:grid-cols-[380px_1fr]
          "
        >
          {/* MENU */}
          <div className="space-y-4">
            {units.map((unit, index) => (
              <button
                key={unit.name}
                onClick={() => setActive(index)}
                className={`
                  w-full
                  rounded-[28px]
                  p-7
                  text-left
                  transition-all

                  ${
                    active === index
                      ? "bg-[#1B2B1B] text-white"
                      : "bg-white text-[#1B2B1B]"
                  }
                `}
              >
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                  "
                >
                  Unidade
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                  "
                >
                  {unit.name}
                </h3>
              </button>
            ))}
          </div>

        {/* CONTEÚDO */}
{active === null ? (
  <div
    className="
      flex
      min-h-[550px]
      flex-col
      items-center
      justify-center

      rounded-[40px]

      border
      border-white/60

      bg-white/60

      px-10
      text-center

      backdrop-blur-xl
    "
  >
    <MapPin
      size={50}
      className="text-[#96C549]"
    />

    <h3
      className="
        mt-8
        text-4xl
        font-light
        text-[#1B2B1B]
      "
      style={{
        fontFamily: "Playfair Display",
      }}
    >
      Escolha uma unidade
    </h3>

    <p
      className="
        mt-5
        max-w-md

        text-lg
        leading-relaxed

        text-[#61705F]
      "
    >
      Selecione uma das unidades ao lado para
      visualizar informações detalhadas e o mapa.
    </p>
  </div>
) : (
  <AnimatePresence mode="wait">
    <motion.div
      key={active}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      className="
        overflow-hidden

        rounded-[40px]

        border
        border-white/60

        bg-white/60

        backdrop-blur-xl
      "
    >
     <motion.div

key={active}

initial={{

  opacity: 0,

  y: 20,

}}

animate={{

  opacity: 1,

  y: 0,

}}

exit={{

  opacity: 0,

}}

className="

  overflow-hidden



  rounded-[40px]



  border

  border-white/60



  bg-white/60



  backdrop-blur-xl

"

>

<div

 className="

 grid

 lg:grid-cols-[1.35fr_1fr]

"

>

  {/* INFO */}

  <div className="p-12 xl:p-14">

    <span

      className="

        text-sm

        uppercase

        tracking-[0.3em]



        text-[#7A9D3B]

      "

    >

      {units[active].name}

    </span>



    <h3

       className="

       mt-5

       max-w-[700px]

   

       text-4xl

       xl:text-5xl

   

       font-light

       leading-[1.08]

   

       text-[#1B2B1B]

     "

      style={{

        fontFamily:

          "Playfair Display",

      }}

    >

      {units[active].subtitle}

    </h3>



    <p

      className="

        mt-6



        text-lg



        text-[#61705F]

      "

    >

      {units[active].description}

    </p>



    <div className="mt-10 space-y-5">

      <div className="flex gap-3">

        <MapPin

          className="

            mt-1

            text-[#96C549]

          "

        />

        <span className="   text-[#354134]">

          {units[active].address}

        </span>

      </div>



      <div className="flex gap-3">

        <Clock3

          className="

            mt-1

            text-[#96C549]

          "

        />

     <span

className="

flex-1

leading-relaxed

text-[#354134]

"

>

          {units[active].hours}

        </span>

      </div>

    </div>



    <div className="mt-10 flex gap-4">

    <a

href="#"

className="

flex

items-center

gap-3



rounded-full



bg-[#96C549]



px-8

py-4



font-medium



text-[#1B2B1B]



transition-all

duration-300



hover:scale-[1.03]

hover:bg-[#A4EA4F]

"

>

<MdOutlineModeOfTravel size={20} />

<span>Como chegar</span>

</a>



<a

href="#"

className="

flex

items-center

gap-3



rounded-full



bg-[#ffffff]



px-8

py-4



font-medium



text-[#1B2B1B]



transition-all

duration-300



hover:scale-[1.03]

hover:bg-[#a5e096]

"

>



<span >Pedir nesta unidade  <ArrowRight size={20}/> </span>

</a>

    </div>

  </div>



  {/* MAPA */}

  <div className="min-h-[550px]">

    <iframe

      src={units[active].map}

      className="

        h-full

        w-full

      "

      loading="lazy"

    />

  </div>

</div>

</motion.div>
    </motion.div>
  </AnimatePresence>
)}
        </div>
      </div>
    </section>
  );
}
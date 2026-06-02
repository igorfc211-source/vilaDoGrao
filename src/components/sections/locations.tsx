"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock3, MapPin } from "lucide-react";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { IFOOD_URL } from "../../lib/brand-links";

const units = [
  {
    name: "Taquaral",
    subtitle: "O refúgio saudável do Taquaral",
    description:
      "Um espaço criado para transformar refeições em momentos de pausa, equilíbrio e bem-estar.",
    address: "Rua Soldado Percílio Neto, 77 - Taquaral, Campinas - SP",
    hours:
      "Segunda, 08h30 às 22h. Terça a sábado, 07h às 22h. Domingo, 07h às 20h.",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua%20Soldado%20Percilio%20Neto%2077%20Taquaral%20Campinas%20SP",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.12949228871!2d-47.04898000000001!3d-22.8716744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c5b68525fb25%3A0x544c5968d5118006!2sGrain%20Village!5e0!3m2!1sen!2sbr!4v1780363019588!5m2!1sen!2sbr",
  },
  {
    name: "Aeroporto de Guarulhos",
    subtitle: "Bem-estar no maior aeroporto do Brasil",
    description:
      "Ambiente acolhedor, ingredientes frescos e uma experiência pensada para acompanhar sua rotina.",
    address: "Rod. Hélio Smidt, s/nº - Aeroporto, Guarulhos - SP",
    hours: "Todos os dias, 06h às 22h.",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Vila%20do%20Grao%20Aeroporto%20de%20Guarulhos",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14643.596783697454!2d-46.48192945!3d-23.4280083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8af96f722a25%3A0x8071626c51a7154a!2sAeroporto%20Internacional%20de%20S%C3%A3o%20Paulo%2FGuarulhos%E2%80%93Governador%20Andr%C3%A9%20Franco%20Montoro!5e0!3m2!1spt-BR!2sbr!4v1780363143682!5m2!1spt-BR!2sbr",
  },
  {
    name: "Aeroporto Viracopos",
    subtitle: "Natureza e sofisticação na pausa da sua viagem",
    description:
      "Uma experiência gastronômica leve e moderna para tornar a rotina de viagem mais confortável.",
    address: "R. Quatorze - Jardim Aeroporto de Campinas, Campinas - SP",
    hours:
      "Segunda a sexta, 24 horas. Sábado até 22h. Domingo a partir das 06h.",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Vila%20do%20Grao%20Viracopos%20Campinas",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.443244082847!2d-47.15168952468656!3d-23.007492179184307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b53b959c5f63%3A0xa9eba0add29ae747!2sVila%20do%20Gr%C3%A3o%20Viracopos%20l%20%C3%81rea%20de%20Embarque!5e0!3m2!1spt-BR!2sbr!4v1780364284874!5m2!1spt-BR!2sbr",
  },
];

export default function Locations() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="localizacoes"
      className="relative overflow-hidden bg-[#F7F8F3] py-24 sm:py-32 lg:py-44"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #1B2B1B 1px, transparent 1px), linear-gradient(#1B2B1B 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="text-[11px] font-semibold uppercase text-[#6F9139] sm:text-xs">
            Localizações das nossas unidades
          </span>

          <h2 className="font-display mt-5 text-4xl font-light leading-[1.08] text-[#1B2B1B] sm:text-5xl lg:mt-6 lg:text-6xl">
            Encontre seu espaço.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-[#61705F] sm:mt-6 sm:text-xl">
            Cada unidade foi pensada para proporcionar uma experiência única de
            bem-estar, sabor e acolhimento.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:mt-16 lg:mt-20 lg:grid-cols-[380px_1fr] lg:gap-12">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
            {units.map((unit, index) => (
              <button
                key={unit.name}
                type="button"
                onClick={() => setActive(index)}
                className={`
                  w-full rounded-lg p-5 text-left transition duration-300 sm:p-6 lg:p-7
                  ${
                    active === index
                      ? "bg-[#1B2B1B] text-white shadow-[0_22px_60px_rgba(27,43,27,0.18)]"
                      : "bg-white text-[#1B2B1B] hover:bg-[#F1F0E7]"
                  }
                `}
              >
                <p className="text-[11px] font-semibold uppercase opacity-70">
                  Unidade
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl">{unit.name}</h3>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden rounded-lg border border-white/60 bg-white/[0.66] backdrop-blur-xl"
            >
              <div className="grid lg:grid-cols-[1.35fr_1fr]">
                <div className="p-6 sm:p-8 lg:p-12 xl:p-14">
                  <span className="text-xs font-semibold uppercase text-[#6F9139]">
                    {units[active].name}
                  </span>

                  <h3 className="font-display mt-5 max-w-[700px] text-3xl font-light leading-[1.08] text-[#1B2B1B] sm:text-4xl xl:text-5xl">
                    {units[active].subtitle}
                  </h3>

                  <p className="mt-5 text-base leading-relaxed text-[#61705F] sm:mt-6 sm:text-lg">
                    {units[active].description}
                  </p>

                  <div className="mt-8 space-y-5 sm:mt-10">
                    <div className="flex gap-3">
                      <MapPin className="mt-1 shrink-0 text-[#96C549]" />
                      <span className="leading-relaxed text-[#354134]">
                        {units[active].address}
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <Clock3 className="mt-1 shrink-0 text-[#96C549]" />
                      <span className="flex-1 leading-relaxed text-[#354134]">
                        {units[active].hours}
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                    <a
                      href={units[active].directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-[#96C549] px-7 py-4 font-semibold text-[#1B2B1B] transition duration-300 hover:scale-[1.03] hover:bg-[#A4EA4F]"
                    >
                      <MdOutlineModeOfTravel size={20} />
                      Como chegar
                    </a>

                    <a
                      href={IFOOD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#1B2B1B]/10 bg-white px-7 py-4 font-semibold text-[#1B2B1B] transition duration-300 hover:scale-[1.03] hover:bg-[#F1F0E7]"
                    >
                      Pedir nesta unidade
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>

                <div className="min-h-[320px] sm:min-h-[420px] lg:min-h-[550px]">
                  <iframe
                    title={`Mapa da unidade ${units[active].name}`}
                    src={units[active].map}
                    className="h-full w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

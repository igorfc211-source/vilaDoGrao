"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "../../lib/brand-links";

const experiences = [
  {
    image: "/images/experience/foto1(1).png",
    title: "Aqui você é o chef",
    description:
      "Na Vila do Grão, temos opções personalizadas para cada paladar, para que você crie refeições que sejam a sua cara.",
  },
  {
    image: "/images/experience/foto2(1).png",
    title: "Trabalhe com o maior conforto",
    description:
      "Ambientes projetados para oferecer conforto e praticidade, seja para uma pausa revigorante ou para trabalhar com tranquilidade durante o dia.",
  },
  {
    image: "/images/experience/foto3(1).png",
    title: "Um refúgio na rotina",
    description:
      "Espaços projetados para desacelerar, relaxar e aproveitar uma pausa de qualidade durante o dia com opções únicas.",
  },
  {
    image: "/images/experience/foto4(1).png",
    title: "Pet Friendly",
    description:
      "Traga seu amigo de quatro patas para desfrutar de momentos especiais na Vila do Grão.",
  },
  {
    image: "/images/experience/foto5(1).png",
    title: "Cardápio completo para o seu bem-estar",
    description:
      "Peça presencialmente, retire ou receba onde estiver com toda comodidade.",
  },
];

const promises = [
  {
    number: "01",
    title: "Ingredientes de origem selecionada",
    desc: "Escolhemos cada ingrediente com rigor para entregar frescor, sabor e qualidade perceptível.",
  },
  {
    number: "02",
    title: "Ambientes para desacelerar",
    desc: "Espaços acolhedores que transformam uma refeição em um momento de pausa e bem-estar.",
  },
  {
    number: "03",
    title: "Conveniência sem compromissos",
    desc: "A mesma experiência premium no salão, retirada ou delivery.",
  },
];

export default function Experience() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % experiences.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="experiencia"
      className="relative overflow-hidden bg-gradient-to-b from-[#DDE8D2] via-[#EAF1E5] to-[#F7F8F3] py-24 sm:py-32 lg:py-44"
    >
      {/* gradiente do topo */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-0 h-[320px] w-full sm:h-[420px]"
        style={{
          background: `linear-gradient(
            to bottom,
            #1B2B1B 0%,
            rgba(27,43,27,.94) 12%,
            rgba(27,43,27,.70) 28%,
            rgba(65,85,58,.34) 58%,
            transparent 100%
          )`,
        }}
      />

      {/* textura de pontos */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(#1B2B1B 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      {/* ── grid principal: imagem + texto ── */}
      <div className="relative z-10 mx-auto grid max-w-[1450px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">

        {/* imagem com slideshow */}
        <div className="relative h-[420px] overflow-hidden rounded-2xl border border-white/60 shadow-[0_36px_110px_rgba(0,0,0,0.10)] sm:h-[560px] lg:h-[760px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <Image
                src={experiences[current].image}
                alt={experiences[current].title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

          {/* badge Instagram flutuante sobre a foto */}
          
        </div>

        {/* coluna de texto */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-4 text-[11px] font-semibold uppercase text-[#6F9139] sm:text-xs">
            <span className="h-px w-10 bg-[#6F9139]" />
            Para a sua experiência
          </div>

          {/* altura fixa garante que o CTA abaixo não se mova entre slides */}
          <div className="min-h-[220px] sm:min-h-[240px] lg:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-display mt-7 text-4xl font-light leading-[1.06] text-[#1B2B1B] sm:mt-8 sm:text-5xl lg:text-6xl">
                  {experiences[current].title}
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-[#5D6759] sm:mt-8 sm:text-xl">
                  {experiences[current].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── CTA Instagram inline (desktop) ── */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conheça nosso Instagram"
            className="
              group mt-10 inline-flex items-center gap-3
              rounded-full
              border border-[#1B2B1B]/12
              bg-white/50 backdrop-blur-sm
              px-6 py-3
              text-sm font-semibold text-[#1B2B1B]
              shadow-[0_2px_16px_rgba(0,0,0,0.06)]
              transition duration-300
              hover:border-[#ee2a7b]/30
              hover:bg-white/80
              hover:shadow-[0_8px_32px_rgba(238,42,123,0.14)]
              sm:mt-12
            "
          >
            {/* avatar do ícone com gradiente */}
            <span className="
              relative flex h-8 w-8 shrink-0 items-center justify-center
              rounded-full bg-[#1B2B1B]/8
              transition duration-300
              group-hover:bg-gradient-to-br
              group-hover:from-[#f9ce34]
              group-hover:via-[#ee2a7b]
              group-hover:to-[#6228d7]
            ">
              <Instagram size={15} className="text-[#1B2B1B] transition duration-300 group-hover:text-white" />
            </span>

            Conheça nosso Instagram

            {/* linha animada */}
            <span className="
              ml-1 h-px w-0 bg-gradient-to-r from-[#ee2a7b] to-[#6228d7]
              transition-all duration-500 group-hover:w-6
            " />
          </a>
        </div>
      </div>

      {/* ── cards de promessas ── */}
      <div
        id="beneficios"
        className="relative z-10 mx-auto mt-20 grid max-w-7xl gap-5 px-5 sm:mt-28 sm:px-8 md:grid-cols-3 lg:mt-32 lg:gap-8"
      >
        {promises.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-lg border border-white/70 bg-white/[0.66] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.04)] backdrop-blur-2xl transition duration-500 sm:p-8 lg:p-10"
          >
            <div className="relative z-10">
              <span className="text-xs font-semibold uppercase text-[#7A9D3B]">
                {item.number}
              </span>

              <h3 className="font-display mt-5 text-2xl font-light leading-tight text-[#1B2B1B] lg:text-[30px]">
                {item.title}
              </h3>

              <p className="mt-5 leading-relaxed text-[#667061]">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
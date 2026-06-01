"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {

    const experiences = [
        {
          image: "/images/experience/experience1.jpg",
          title: "Momentos que alimentam",
          description:
            "Na Vila do Grão, alimentação saudável vai além do prato. Criamos um ambiente acolhedor, sofisticado e natural para transformar refeições em experiências.",
        },
        {
          image: "/images/experience/experience2.jpg",
          title: "Ingredientes que fazem diferença",
          description:
            "Selecionamos cuidadosamente cada ingrediente para entregar sabor, frescor e equilíbrio em cada refeição.",
        },
        {
          image: "/images/experience/experience3.jpg",
          title: "Um refúgio na rotina",
          description:
            "Espaços projetados para desacelerar, relaxar e aproveitar uma pausa de qualidade durante o dia.",
        },
        {
          image: "/images/experience/experience4.jpg",
          title: "Saudável sem abrir mão do prazer",
          description:
            "Receitas criadas para surpreender pelo sabor e valorizar o bem-estar em cada escolha.",
        },
        {
          image: "/images/experience/experience5.jpg",
          title: "Praticidade para acompanhar você",
          description:
            "Peça presencialmente, retire ou receba onde estiver com toda comodidade.",
        },
      ];
      
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
      className="
        bg-[#F8F7F2]
        py-32
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-20
          px-6
          lg:grid-cols-2
        "
      >
        {/* IMAGEM */}
        <div
          className="
            relative
            h-[650px]
            overflow-hidden
            rounded-[40px]
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.2,
              }}
              className="absolute inset-0"
            >
              <Image
                src={experiences[current].image}
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TEXTO */}
        <div>
          <motion.span
            key={`subtitle-${current}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-[#7A9D3B]
            "
          >
            Experiência
          </motion.span>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{
                duration: 0.6,
              }}
            >
              <h2
                className="
                  mt-6
                  text-5xl
                  font-light
                  leading-tight
                  text-[#1B2B1B]
                "
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                {experiences[current].title}
              </h2>

              <p
                className="
                  mt-8
                  max-w-xl
                  text-lg
                  leading-relaxed
                  text-[#4B4B4B]
                "
              >
                {experiences[current].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* CARDS */}
      <div
        className="
          mx-auto
          mt-24
          grid
          max-w-7xl
          gap-6
          px-6
          md:grid-cols-3
        "
      >
        <div
          className="
            rounded-[30px]
            bg-white
            p-8
            shadow-sm
          "
        >
          <h3
            className="
              text-xl
              font-medium
              text-[#1B2B1B]
            "
          >
            Ingredientes Selecionados
          </h3>

          <p className="mt-3 text-[#666]">
            Qualidade e frescor em cada detalhe.
          </p>
        </div>

        <div
          className="
            rounded-[30px]
            bg-white
            p-8
            shadow-sm
          "
        >
          <h3
            className="
              text-xl
              font-medium
              text-[#1B2B1B]
            "
          >
            Ambiente Aconchegante
          </h3>

          <p className="mt-3 text-[#666]">
            Espaços pensados para desacelerar.
          </p>
        </div>

        <div
          className="
            rounded-[30px]
            bg-white
            p-8
            shadow-sm
          "
        >
          <h3
            className="
              text-xl
              font-medium
              text-[#1B2B1B]
            "
          >
            Praticidade Premium
          </h3>

          <p className="mt-3 text-[#666]">
            Peça presencialmente ou receba onde estiver.
          </p>
        </div>
      </div>
    </section>
  );
}
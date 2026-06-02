"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    image: "/images/experience/foto1.png",
    title: "Aqui você é o chef",
    description:
      "Na Vila do Grão, temos opções personalizadas para cada paladar, permitindo que você crie refeições que sejam a sua cara, com ingredientes frescos e de alta qualidade.",
  },
  {
    image: "/images/experience/foto2.png",
    title: "Trabalhe com o maior conforto",
    description:
      "Temos ambientes projetados para oferecer seu conforto e praticidade, seja para uma pausa revigorante ou para trabalhar com tranquilidade durante o dia.",
  },
  {
    image: "/images/experience/foto3.png",
    title: "Um refúgio na rotina",
    description:
      "Espaços projetados para desacelerar, relaxar e aproveitar uma pausa de qualidade durante o dia com opções únicas.",
  },
  {
    image: "/images/experience/foto4.png",
    title: "Pet Friendly",
    description:
      "Traga seu amigo de quatro patas para desfrutar de momentos especiais na Vila do grão.",
  },
  {
    image: "/images/experience/foto5.png",
    title: "Cardápio completo para o seu bem-estar",
    description:
      "Peça presencialmente, retire ou receba onde estiver com toda comodidade.",
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
      className="
        relative
        overflow-hidden
        py-44

        bg-gradient-to-b
        from-[#DDE8D2]
        via-[#EAF1E5]
        to-[#F7F8F3]
      "
    >
      {/* HERO -> EXPERIENCE TRANSITION */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[420px]
          pointer-events-none
          z-0
        "
        style={{
          background: `
            linear-gradient(
              to bottom,
              #1B2B1B 0%,
              rgba(27,43,27,.96) 10%,
              rgba(27,43,27,.82) 20%,
              rgba(27,43,27,.60) 35%,
              rgba(65,85,58,.35) 55%,
              rgba(186,206,176,.18) 78%,
              transparent 100%
            )
          `,
        }}
      />

      {/* ORGANIC TEXTURE */}
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

      {/* GLOW LEFT */}
      <div
        className="
          absolute
          left-[-150px]
          top-[200px]

          h-[500px]
          w-[500px]

          rounded-full
          bg-[#A4EA4F]/10

          blur-[180px]
        "
      />

      {/* GLOW RIGHT */}
      <div
        className="
          absolute
          right-[-200px]
          bottom-[100px]

          h-[600px]
          w-[600px]

          rounded-full
          bg-[#B8D38B]/15

          blur-[200px]
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

          lg:grid-cols-2
        "
      >
        {/* IMAGE */}
        <div
          className="
            relative
            h-[760px]
            overflow-hidden

            rounded-[44px]

            border
            border-white/60

            shadow-[0_50px_140px_rgba(0,0,0,0.10)]
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                scale: 1.06,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              className="absolute inset-0"
            >
              <Image
                src={experiences[current].image}
                alt={experiences[current].title}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/20
              via-transparent
              to-transparent
            "
          />
        </div>

        {/* CONTENT */}
        <div className="max-w-xl">
          {/* FIXO */}
          <div
            className="
              inline-flex
              items-center
              gap-4

              text-xs
              uppercase
              tracking-[0.4em]
              text-[#7A9D3B]
            "
          >
            <span className="h-px w-10 bg-[#7A9D3B]" />
           Para a sua experiência
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -25,
              }}
              transition={{
                duration: 0.7,
              }}
            >
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
                {experiences[current].title}
              </h2>

              <p
                className="
                  mt-8

                  text-xl
                  leading-relaxed

                  text-[#5D6759]
                "
              >
                {experiences[current].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* PROMESSAS */}
      <div
        className="
          relative
          z-10

          mx-auto
          mt-32

          grid
          max-w-7xl
          gap-8

          px-6
          md:grid-cols-3
        "
      >
        {[
          {
            number: "01",
            title: "Ingredientes de Origem Selecionada",
            desc: "Escolhemos cada ingrediente com rigor para entregar frescor, sabor e qualidade perceptível.",
          },
          {
            number: "02",
            title: "Ambientes para Desacelerar",
            desc: "Espaços acolhedores que transformam uma refeição em um momento de pausa e bem-estar.",
          },
          {
            number: "03",
            title: "Conveniência sem Compromissos",
            desc: "A mesma experiência premium no salão, retirada ou delivery.",
          },
        ].map((item) => (
          <motion.div
            key={item.title}
            whileHover={{
              y: -8,
            }}
            className="
              group
              relative
              overflow-hidden

              rounded-[36px]

              border
              border-white/70

              bg-white/60

              p-10

              backdrop-blur-2xl

              shadow-[0_25px_70px_rgba(0,0,0,0.04)]

              transition-all
              duration-500
            "
          >
            <div
              className="
                absolute
                -right-20
                -top-20

                h-48
                w-48

                rounded-full

                bg-[#A4EA4F]/10

                blur-[80px]

                opacity-0

                transition-all
                duration-700

                group-hover:opacity-100
              "
            />

            <div className="relative z-10">
              <span
                className="
                  text-xs
                  tracking-[0.35em]
                  text-[#8AA55A]
                "
              >
                {item.number}
              </span>

              <h3
                className="
                  mt-5

                  text-[30px]
                  font-light
                  leading-tight

                  text-[#1B2B1B]
                "
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-5

                  leading-relaxed

                  text-[#667061]
                "
              >
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
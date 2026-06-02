"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { SiGoogle } from "react-icons/si";

// ─────────────────────────────────────────────────────────────
// AVALIAÇÕES REAIS — edite aqui
//
// Como adicionar uma nova avaliação:
//   1. Copie um dos objetos abaixo
//   2. Preencha: name, badge (ex: "Local Guide"), text, rating (1-5), date
//   3. Salve. A seção atualiza automaticamente.
// ─────────────────────────────────────────────────────────────
const reviews = [
  {
    name: "Manoel Neto",
    badge: "Taquaral",
    text: "Eu adoro a Vila do grão, acho que é um dos restaurantes que eu mais gosto! É um restaurante completo, com café da manhã, almoço, lanche da tarde — você pode vir a qualquer hora que eles vão ter pratos super selecionados.",
    rating: 5,
    date: "3 meses atrás",
  },
  {
    name: "Daniel Velasco",
    badge: "Taquaral",
    text: "O melhor café de Campinas, meu preferido disparado. A tapioca caprese com crosta de parmesão é meu vício e o completo do Vila de salmão muito surreal também.",
    rating: 5,
    date: "6 meses atrás",
  },
  {
    name: "Luciana Canova",
    badge: "Taquaral",
    text: "Que delícia de restaurante, espaçoso e arejado, com um cardápio bem completo e enxuto. Tudo o que comi estava delicioso e equilibrado. Localização perfeita em frente ao parque. Com certeza voltarei.",
    rating: 5,
    date: "4 meses atrás",
  },
  {
    name: "Larissa Querino",
    badge: "Taquaral",
    text: "Acho que é meu lugar preferido de Campinas para curtir o ambiente e comer bem qualquer hora do dia. O cardápio é bem variado e tudo é uma delícia. O fato de poder levar os dogs e eles ficarem bem confortáveis também é um diferencial. Eu amo!",
    rating: 5,
    date: "4 meses atrás",
  },
  {
    name: "Giovana Ermetice",
    badge: "Taquaral",
    text: "Eu amo esse lugar. O gerente Paulo é fantástico. Comida muito boa e o ambiente pra lá de agradável — tanto a parte externa, linda e arborizada, quanto a interna decorada com pinturas da flora e fauna brasileira.",
    rating: 5,
    date: "5 meses atrás",
  },
  {
    name: "Raynara Nicolau Monção",
    badge: "Taquaral",
    text: "Tudo excelente! Ambiente lindo, atendimento de qualidade e a comida uma delíciaaaaa!!! Pedi o cappuccino brownie e o tex mex — os dois incríveis. Os valores do cardápio são razoáveis. Vale muito a pena conhecer. Recomendo!",
    rating: 5,
    date: "10 meses atrás",
  },
  {
    name: "Lucas Moron",
    badge: "",
    text: "Quero deixar registrado o quanto a Valéria fez minha experiência excepcional. Em um mundo onde a maioria só faz o básico, ela vai muito além: é atenciosa, resolve com agilidade e ainda transmite uma simpatia que muda o dia.",
    rating: 5,
    date: "6 meses atrás",
  },
  {
    name: "Célia Maciel",
    badge: "Taquaral",
    text: "O ambiente é muito bonito. Gostei da diversidade do cardápio e dos diversos ambientes. Meu filho e minha neta sempre frequentam.",
    rating: 5,
    date: "4 meses atrás",
  },
  {
    name: "Bárbara Ferreira",
    badge: "Taquaral",
    text: "Passei um mês de férias em Campinas e durante esse período visitei a Vila do Grão várias vezes — e sempre saí de lá muito satisfeita.",
    rating: 5,
    date: "1 ano atrás",
  },
];

// URL para avaliação no Google
const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/place/Vila+do+Gr%C3%A3o/@-22.8716744,-47.04898,17z/data=!4m8!3m7!1s0x94c8c5b68525fb25:0x544c5968d5118006!8m2!3d-22.8716744!4d-47.04898!9m1!1b1!16s%2Fg%2F11shxg71ry?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D";

// ─────────────────────────────────────────────────────────────

// Estrelas com suporte a meia-estrela para exibir 4,4
function StarRowHalf({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const full = i < Math.floor(rating);
        const half = !full && i < rating;
        return (
          <span key={i} className="relative inline-flex">
            {/* base cinza */}
            <Star size={14} className="fill-white/10 text-white/10" />
            {/* preenchimento */}
            {(full || half) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: full ? "100%" : "50%" }}
              >
                <Star size={14} className="fill-[#A4EA4F] text-[#A4EA4F]" />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

function StarRowSmall({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={
            i < rating
              ? "fill-[#A4EA4F] text-[#A4EA4F]"
              : "fill-white/10 text-white/10"
          }
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const doubled = [...reviews, ...reviews];

  return (
    <section
      id="avaliacao"
      className="relative overflow-hidden bg-[#1B2B1B] py-24 sm:py-32 lg:py-40"
    >
     

   
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        {/* ── cabeçalho ── */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-4 text-[11px] font-semibold uppercase text-[#A4EA4F] sm:text-xs"
          >
            <span className="h-px w-10 bg-[#A4EA4F]" />
            O que dizem sobre nós
            <span className="h-px w-10 bg-[#A4EA4F]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mt-7 text-4xl font-light leading-[1.06] text-[#FAFAF7] sm:text-5xl lg:text-6xl"
          >
            Experiências que
            <span className="block text-[#A4EA4F]">falam por si</span>
          </motion.h2>

          {/* badge de média — 4,4 com meia estrela */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 backdrop-blur-sm"
          >
            <SiGoogle size={15} className="shrink-0 text-white/50" />
            <StarRowHalf rating={4.4} />
            <span className="text-sm font-semibold text-[#FAFAF7]">4,4</span>
            <span className="text-sm text-white/40">no Google</span>
          </motion.div>
        </div>

        {/* ── carrossel marquee ── */}
        <div className="relative mt-16 sm:mt-20">
          {/* fades laterais */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#1B2B1B] to-transparent sm:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#1B2B1B] to-transparent sm:w-40" />

          <div className="flex gap-5 overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
              className="flex shrink-0 gap-5"
            >
              {doubled.map((review, i) => (
                <div
                  key={i}
                  className="w-[300px] shrink-0 rounded-2xl border border-white/[0.08] bg-white/[0.05] p-5 backdrop-blur-sm sm:w-[340px]"
                >
                  {/* cabeçalho do card */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* avatar com inicial */}
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#314D31] text-sm font-semibold text-[#A4EA4F]">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-tight text-[#FAFAF7]">
                          {review.name}
                        </p>
                        {review.badge && (
                          <p className="mt-0.5 text-[11px] text-white/35">
                            {review.badge}
                          </p>
                        )}
                      </div>
                    </div>
                    <SiGoogle size={13} className="mt-0.5 shrink-0 text-white/20" />
                  </div>

                  {/* estrelas + data */}
                  <div className="mt-3.5 flex items-center justify-between">
                    <StarRowSmall rating={review.rating} />
                    <span className="text-[11px] text-white/30">{review.date}</span>
                  </div>

                  {/* texto */}
                  <p className="mt-3.5 text-sm leading-relaxed text-white/65">
                    {review.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── CTA avaliar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14 flex flex-col items-center gap-4 sm:mt-16 sm:flex-row sm:justify-center"
        >
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#A4EA4F] px-8 py-4 font-semibold text-[#1B2B1B] transition duration-300 hover:scale-[1.03] hover:bg-[#b8f060] hover:shadow-[0_20px_60px_rgba(164,234,79,0.22)] sm:w-auto"
          >
            <SiGoogle size={17} />
            Avaliar no Google
            <ExternalLink
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <p className="text-sm text-white/35">
            Sua opinião nos ajuda a melhorar cada detalhe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
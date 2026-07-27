"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

type Copy = {
  eyebrow: string;
  titleBefore: string;
  titleAfter: string;
  cta: string;
};

const FLOORS = [
  { width: 210, shade: "bg-nc-navy-800" },
  { width: 210, shade: "bg-nc-slate-700" },
  { width: 190, shade: "bg-nc-navy-800" },
  { width: 190, shade: "bg-nc-slate-700" },
  { width: 170, shade: "bg-nc-navy-800" },
] as const;

function Floor({
  progress,
  index,
  width,
  shade,
}: {
  progress: MotionValue<number>;
  index: number;
  width: number;
  shade: string;
}) {
  const start = 0.06 + index * 0.13;
  const end = start + 0.14;
  const scaleY = useTransform(progress, [start, end], [0, 1]);
  const opacity = useTransform(progress, [start, start + 0.05], [0, 1]);

  return (
    <motion.div
      style={{ width, scaleY, opacity, originY: 1 }}
      className={`relative h-14 sm:h-16 ${shade} border-t-2 border-nc-gold-500/70`}
    >
      <div
        className="absolute inset-0 grid grid-cols-5 gap-2 p-2 opacity-80"
        aria-hidden
      >
        {Array.from({ length: 5 }).map((_, w) => (
          <span key={w} className="rounded-[2px] bg-nc-gold-300/25" />
        ))}
      </div>
    </motion.div>
  );
}

export default function BuildingScrollAnimation({ copy }: { copy: Copy }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const craneOpacity = useTransform(scrollYProgress, [0.75, 0.92], [1, 0]);
  const craneX = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const introOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const finalOpacity = useTransform(scrollYProgress, [0.82, 0.96], [0, 1]);
  const finalY = useTransform(scrollYProgress, [0.82, 0.96], [24, 0]);

  const groundGlow = useTransform(scrollYProgress, [0, 1], [0.15, 0.5]);

  return (
    <section ref={containerRef} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-nc-navy-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-nc-gold-500/20 to-transparent"
          style={{ opacity: groundGlow }}
        />

        {/* Eyebrow shown before construction starts */}
        <motion.p
          style={{ opacity: introOpacity }}
          className="absolute top-[18%] px-6 text-center font-display text-xl text-white/70 sm:text-2xl"
        >
          {copy.eyebrow}
        </motion.p>

        {/* Crane */}
        <motion.div
          style={{ opacity: craneOpacity, x: craneX }}
          className="absolute bottom-[30%] right-[18%] sm:right-[22%]"
          aria-hidden
        >
          <div className="h-40 w-1 bg-nc-gold-500/70 sm:h-56" />
          <div className="absolute -top-1 left-0 h-1 w-28 bg-nc-gold-500/70" />
          <div className="absolute -top-1 right-0 h-10 w-0.5 bg-nc-gold-500/70" />
        </motion.div>

        {/* Building */}
        <div className="relative z-10 flex flex-col-reverse items-center">
          <div className="h-2 w-64 rounded-b-md bg-nc-gold-500/80 sm:w-72" />
          {FLOORS.map((f, i) => (
            <Floor key={i} progress={scrollYProgress} index={i} width={f.width} shade={f.shade} />
          ))}
        </div>

        {/* Final reveal */}
        <motion.div
          style={{ opacity: finalOpacity, y: finalY }}
          className="absolute bottom-[12%] px-6 text-center"
        >
          <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
            {copy.titleBefore} <span className="text-nc-gold-300">{copy.titleAfter}</span>
          </p>
          <p className="mt-2 text-sm uppercase tracking-widest text-white/60">{copy.cta}</p>
        </motion.div>
      </div>
    </section>
  );
}

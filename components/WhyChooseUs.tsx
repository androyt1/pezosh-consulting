"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { whyChooseUs } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { staggerContainer, staggerItem } from "./ui/Reveal";

export function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28"
    >
      <motion.div
        style={reduce ? undefined : { y: bgY }}
        className="absolute inset-0"
      >
        <Image
          src="/images/why-bg.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="scale-[1.15] object-cover object-center opacity-45"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/88 via-navy-950/70 to-navy-950/88" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
      />
      <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-safety-500/20 blur-[130px]" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-safe-green/10 blur-[120px]" />

      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          light
          eyebrow="Why Choose Us"
          title="The trusted choice for HSE training & safety compliance"
          description="Organisations across Nigeria choose PEZOSH because we deliver more than certificates — we deliver real competence, measurable results and a genuine safety partnership."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-safety-400/40 hover:bg-white/[0.07]"
            >
              <span className="absolute right-5 top-4 text-5xl font-black text-white/5 transition-colors group-hover:text-safety-500/20">
                0{i + 1}
              </span>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-safety-500 to-safety-600 text-white shadow-lg">
                <item.icon className="h-7 w-7" strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-200">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-gradient-to-r from-safety-500/15 to-amber-accent/10 p-8 text-center backdrop-blur sm:flex-row sm:justify-between sm:text-left">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-white">
              Ready to raise your safety standards?
            </h3>
            <p className="mt-2 text-navy-100">
              Speak with our coordinator today and find the right HSE program or
              consultation for your team.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" variant="primary" size="lg" withArrow>
              Request HSE Consultation
            </Button>
            <Button href="#contact" variant="ghost" size="lg">
              Contact Coordinator
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

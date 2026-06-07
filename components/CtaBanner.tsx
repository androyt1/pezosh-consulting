"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Phone, ShieldCheck } from "lucide-react";
import { Button } from "./ui/Button";
import { site } from "@/lib/site";

export function CtaBanner() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-navy-950 py-24 text-white lg:py-32"
    >
      <motion.div
        style={reduce ? undefined : { y: bgY }}
        className="absolute inset-0"
      >
        <Image
          src="/images/cta-refinery.jpg"
          alt="Oil and gas refinery — high-risk industrial environment requiring HSE compliance"
          fill
          sizes="100vw"
          className="scale-[1.18] object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/72 to-navy-950/30" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        aria-hidden
        className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
      />
      <div className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-safety-500/25 blur-[130px]" />

      <div className="container-px relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-bright backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            Safety Is Not Optional
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.9rem]">
            Protect your people. Stay compliant.{" "}
            <span className="text-gradient-safety">Build a safer site.</span>
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100">
            Whether you operate in oil &amp; gas, construction or manufacturing,
            PEZOSH equips your team with the training, certification and HSE
            support to work safely — and prove it.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#contact" variant="primary" size="lg" withArrow>
              Request HSE Consultation
            </Button>
            <a
              href={`tel:${site.phone}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

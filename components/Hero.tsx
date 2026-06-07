"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  ShieldCheck,
  Award,
  HardHat,
  Flame,
  HeartPulse,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Button } from "./ui/Button";
import { CountUp } from "./ui/CountUp";
import { stats } from "@/lib/content";

const trustPoints = [
  "Industry-aligned certification",
  "Hands-on practical training",
  "Nationwide corporate delivery",
];

const floatingCards = [
  { icon: Flame, label: "Fire Safety", className: "left-3 -top-11", delay: 0.2 },
  {
    icon: HeartPulse,
    label: "First Aid",
    className: "right-3 -top-11",
    delay: 0.4,
  },
  {
    icon: HardHat,
    label: "Construction",
    className: "left-10 -bottom-10",
    delay: 0.6,
  },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden bg-navy-950 pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Background photo + overlays (parallax) */}
      <motion.div
        style={reduce ? undefined : { y: bgY }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Construction workers in safety helmets and high-visibility PPE on an active site"
          fill
          priority
          sizes="100vw"
          className="scale-[1.18] object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-navy-950/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/60 to-navy-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/25" />
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div
        aria-hidden
        className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
      />
      <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-safety-500/20 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-[26rem] w-[26rem] rounded-full bg-safe-green/15 blur-[120px]" />
      <div className="absolute right-1/3 top-1/4 h-72 w-72 rounded-full bg-amber-accent/10 blur-[100px]" />

      <div className="container-px relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-bright backdrop-blur"
          >
            <Award className="h-4 w-4" />
            Trusted HSE Training in Nigeria
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Professional HSE Training &{" "}
            <span className="text-gradient-safety">Safety Certification</span>{" "}
            Programs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100"
          >
            Build competence, confidence, and credibility with our professional
            safety training and certification programs, designed to meet industry
            and regulatory standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              withArrow
              className="cta-pulse"
            >
              Enroll for Training
            </Button>
            <Button href="#contact" variant="green" size="lg">
              Request HSE Consultation
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
          >
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm font-medium text-navy-100"
              >
                <CheckCircle2 className="h-4 w-4 text-safe-green-light" />
                {point}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Main certificate-style card */}
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-safety-500 to-safety-600">
                  <ShieldCheck className="h-7 w-7 text-white" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">
                    Certified Safety
                  </p>
                  <p className="text-xs text-navy-200">PEZOSH Consulting</p>
                </div>
              </div>
              <span className="rounded-full bg-safe-green/20 px-3 py-1 text-xs font-bold text-safe-green-light">
                Verified
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {[
                { label: "HSE Levels 1, 2 & 3", val: 100 },
                { label: "Oil & Gas Safety", val: 92 },
                { label: "Risk Assessment", val: 88 },
              ].map((row, i) => (
                <div key={row.label}>
                  <div className="mb-1 flex justify-between text-xs font-medium text-navy-100">
                    <span>{row.label}</span>
                    <span className="text-amber-bright">{row.val}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${row.val}%` }}
                      transition={{
                        duration: 1.1,
                        delay: 0.6 + i * 0.15,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-safety-500 to-amber-accent"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/[0.06] p-4">
              <div className="flex items-center gap-1 text-amber-bright">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-xs font-medium text-navy-100">
                Rated by 5,000+ trainees
              </p>
            </div>
          </div>

          {/* Floating mini cards */}
          {floatingCards.map(({ icon: Icon, label, className, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.5, delay },
                scale: { duration: 0.5, delay },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                },
              }}
              className={`absolute z-10 hidden items-center gap-2 rounded-2xl border border-white/15 bg-navy-900/80 px-3.5 py-2.5 shadow-xl backdrop-blur sm:flex ${className}`}
            >
              <Icon className="h-5 w-5 text-safety-400" />
              <span className="text-xs font-semibold text-white">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="container-px relative mx-auto mt-16 max-w-7xl lg:mt-20"
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-navy-900/60 px-6 py-7 text-center backdrop-blur"
            >
              <CountUp
                value={s.value}
                className="font-display block text-3xl font-bold text-white lg:text-4xl"
              />
              <p className="mt-1 text-sm font-medium text-navy-200">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Signature hazard-stripe edge */}
      <div
        aria-hidden
        className="hazard-stripe hazard-stripe-animated absolute inset-x-0 bottom-0 z-20 h-2.5"
      />
    </section>
  );
}

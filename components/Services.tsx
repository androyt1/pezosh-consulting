"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { services } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { Reveal, staggerContainer, staggerItem } from "./ui/Reveal";

const intro = [
  "Site-specific HSE plans & documentation",
  "Certified PPE and safety equipment supply",
  "Audits, advisory & ongoing compliance",
];

export function Services() {
  return (
    <section id="services" className="relative bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        {/* Editorial intro with feature image */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -right-3 -top-4 h-24 w-24 rounded-2xl border-[6px] border-safety-100" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-card">
                <Image
                  src="/images/services-welder.jpg"
                  alt="HSE professional performing hot work safely in protective PPE and welding helmet"
                  width={760}
                  height={620}
                  className="aspect-[5/4] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-navy-950/70 p-4 backdrop-blur">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-safety-500 text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-medium text-white">
                    From planning to PPE — one accountable safety partner.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col items-start">
            <SectionHeading
              align="left"
              eyebrow="HSE Consulting Services"
              title="Beyond training — complete HSE consultancy & procurement"
              description="PEZOSH is your end-to-end safety partner. We design HSE plans, source certified safety equipment and PPE, and provide the advisory support that keeps your workplace compliant."
            />

            <ul className="mt-7 grid gap-3">
              {intro.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-navy-800 sm:text-base"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-safe-green/15 text-safe-green-dark">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Reveal delay={0.15}>
              <div className="mt-8">
                <Button href="#contact" variant="primary" size="lg" withArrow>
                  Request HSE Consultation
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Service cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-3xl border border-navy-100 bg-gradient-to-br from-white to-navy-50/40 p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-start gap-5">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-safety-500 to-safety-600 text-white shadow-[0_12px_28px_-10px_rgba(249,97,10,0.7)] transition-transform duration-300 group-hover:scale-105">
                  <service.icon className="h-8 w-8" strokeWidth={1.9} />
                </span>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-400">
                    0{i + 1}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-navy-900">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-navy-600">
                {service.description}
              </p>

              <ul className="mt-5 grid gap-2.5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-sm font-medium text-navy-800"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-safe-green/15 text-safe-green-dark">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

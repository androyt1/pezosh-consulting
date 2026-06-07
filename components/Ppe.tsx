"use client";

import { motion } from "framer-motion";
import {
  PackageCheck,
  BadgeCheck,
  Truck,
  Wallet,
  ShieldCheck,
} from "lucide-react";
import { ppeItems } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { Reveal, staggerContainer, staggerItem } from "./ui/Reveal";

const benefits = [
  { icon: BadgeCheck, title: "Genuine & Standard-Rated", text: "Only certified, standard-compliant safety products from trusted brands." },
  { icon: Wallet, title: "Competitive Pricing", text: "Fair, transparent rates with bulk and corporate supply options." },
  { icon: Truck, title: "Reliable Supply", text: "Dependable sourcing and timely delivery for projects of any size." },
];

export function Ppe() {
  return (
    <section id="ppe" className="relative bg-navy-50 py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Safety Equipment & PPE Procurement"
              title="Genuine PPE & safety equipment, sourced for you"
              description="From head-to-toe personal protective equipment to fire extinguishers, gas detectors and site signage, PEZOSH handles your PPE procurement and safety equipment procurement end to end."
            />

            <div className="mt-8 grid gap-4">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.1}>
                  <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-card">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-safe-green/10 text-safe-green-dark">
                      <b.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-bold text-navy-900">{b.title}</h3>
                      <p className="mt-1 text-sm text-navy-600">{b.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8">
                <Button href="#contact" variant="green" size="lg" withArrow>
                  Request a PPE Quote
                </Button>
              </div>
            </Reveal>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3"
          >
            {ppeItems.map((item) => (
              <motion.div
                key={item.name}
                variants={staggerItem}
                className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-safe-green/40 hover:shadow-glow"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-white transition-colors duration-300 group-hover:bg-safe-green">
                  <PackageCheck className="h-5 w-5" />
                </span>
                <p className="mt-4 text-[0.7rem] font-bold uppercase tracking-wide text-safety-600">
                  {item.category}
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug text-navy-900">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Reveal>
          <div className="mt-12 flex items-center justify-center gap-3 rounded-2xl border border-navy-100 bg-white px-6 py-5 text-center shadow-card">
            <ShieldCheck className="h-6 w-6 shrink-0 text-safe-green" />
            <p className="text-sm font-medium text-navy-700">
              Can&apos;t find what you need? We source any certified safety device or
              gear on request — just ask our procurement team.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

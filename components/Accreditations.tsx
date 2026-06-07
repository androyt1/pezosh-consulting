"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { standards } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";

export function Accreditations() {
  return (
    <section className="relative bg-navy-50 py-20 lg:py-24">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Standards & Frameworks"
          title="Built on globally recognised safety standards"
          description="Our programmes are structured around and benchmarked against the international occupational health & safety standards and frameworks employers trust — so your certification carries real weight."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {standards.map((s) => (
            <motion.div
              key={s.abbr}
              variants={staggerItem}
              className="group flex flex-col items-center justify-center rounded-2xl border border-navy-100 bg-white px-4 py-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-glow"
            >
              <BadgeCheck className="h-5 w-5 text-safe-green" />
              <p className="font-display mt-3 text-lg font-bold tracking-tight text-navy-900">
                {s.abbr}
              </p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-navy-400">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-xs text-navy-400">
          Standards and frameworks our curricula are aligned with and benchmarked
          against. Logos and names are the property of their respective bodies.
        </p>
      </div>
    </section>
  );
}

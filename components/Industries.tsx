"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";

export function Industries() {
  return (
    <section id="industries" className="relative bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Safety expertise across high-risk industries"
          description="Our HSE training and consulting is trusted across Nigeria's most safety-critical sectors, with programs tailored to the real hazards of each industry."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={staggerItem}
              className="group flex items-center gap-4 rounded-2xl border border-navy-100 bg-navy-50/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-safety-200 hover:bg-white hover:shadow-card"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-white p-3 text-navy-700 shadow-sm transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-white">
                <industry.icon className="h-6 w-6" strokeWidth={1.9} />
              </span>
              <span className="text-sm font-bold text-navy-900 sm:text-base">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

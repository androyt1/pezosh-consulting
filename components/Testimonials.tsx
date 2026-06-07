"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";

function initials(name: string) {
  return name
    .replace(/(Engr\.|Dr\.|Mr\.|Mrs\.|Ms\.)/g, "")
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

export function Testimonials() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by professionals & organisations"
          description="Hear from the teams and individuals who have strengthened their safety culture with PEZOSH CONSULTING."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              className="relative flex flex-col rounded-3xl border border-navy-100 bg-gradient-to-br from-white to-navy-50/40 p-8 shadow-card transition-shadow duration-300 hover:shadow-glow"
            >
              <Quote className="absolute right-7 top-7 h-10 w-10 text-safety-100" />
              <div className="flex items-center gap-1 text-amber-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[0.97rem] leading-relaxed text-navy-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-navy-100 pt-5">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-navy-900 to-navy-700 text-sm font-bold text-white">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="font-bold text-navy-900">{t.name}</p>
                  <p className="text-sm text-navy-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

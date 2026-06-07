"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { courses } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { staggerContainer, staggerItem } from "./ui/Reveal";

export function Courses() {
  return (
    <section id="courses" className="relative bg-navy-50 py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Training Courses"
          title="Accredited HSE training courses & certifications"
          description="From foundation HSE levels to specialist oil and gas safety, choose from a complete catalogue of occupational health and safety training designed to meet industry and regulatory standards."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {courses.map((course) => (
            <motion.article
              key={course.title}
              variants={staggerItem}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-safety-200 hover:shadow-glow"
            >
              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={course.image}
                  alt={`${course.title} — HSE training course`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent" />

                {course.popular && (
                  <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-safety-500 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    Popular
                  </span>
                )}

                <span className="absolute -bottom-6 left-6 z-10 grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-gradient-to-br from-navy-900 to-navy-700 text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <course.icon className="h-7 w-7" strokeWidth={2} />
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-7 pt-9">
                <h3 className="text-xl font-bold text-navy-900">
                  {course.title}
                </h3>

                <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <span className="rounded-full bg-navy-50 px-2.5 py-1 text-navy-700">
                    {course.level}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-safe-green/10 px-2.5 py-1 text-safe-green-dark">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </span>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
                  {course.description}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-safety-600 transition-colors hover:text-safety-700"
                >
                  Enroll for this course
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-3xl border border-navy-100 bg-white p-8 text-center shadow-card sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-navy-900">
              Need a tailored or corporate training plan?
            </h3>
            <p className="mt-1 text-sm text-navy-600">
              We deliver on-site group training scheduled around your operations.
            </p>
          </div>
          <Button href="#contact" variant="primary" size="lg" withArrow>
            Enroll for Training
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, CalendarDays } from "lucide-react";
import { schedule } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { Reveal, staggerContainer, staggerItem } from "./ui/Reveal";

export function Schedule() {
  return (
    <section id="schedule" className="relative bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="2026 Training Calendar"
          title="Upcoming open-enrolment schedule"
          description="Reserve your seat in our next open batches, or request an in-house date that fits your team. New batches run every month across classroom, online and hybrid formats."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 flex flex-col gap-3"
        >
          {schedule.map((s) => (
            <motion.li
              key={`${s.month}-${s.day}-${s.course}`}
              variants={staggerItem}
              className="group flex flex-col gap-4 rounded-2xl border border-navy-100 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-glow sm:flex-row sm:items-center sm:gap-5 sm:p-5"
            >
              {/* Date chip */}
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-white">
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-safe-green-light">
                  {s.month}
                </span>
                <span className="font-display text-2xl font-bold leading-none">
                  {s.day}
                </span>
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-navy-900 sm:text-lg">
                  {s.course}
                </h3>
                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <span className="inline-flex items-center gap-1 rounded-full bg-navy-50 px-2.5 py-1 text-navy-700">
                    <Clock className="h-3 w-3" />
                    {s.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-safe-green/10 px-2.5 py-1 text-safe-green-dark">
                    <MapPin className="h-3 w-3" />
                    {s.mode}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Button
                href="#contact"
                variant="outline"
                size="md"
                className="shrink-0 sm:self-center"
              >
                Reserve a Seat
              </Button>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-2xl border border-navy-100 bg-navy-50 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-white">
                <CalendarDays className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium text-navy-700">
                Need a different date, location or a dedicated in-house batch?
                We&apos;ll build the calendar around your team.
              </p>
            </div>
            <Button href="#contact" variant="primary" size="md" withArrow>
              Request a Date
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

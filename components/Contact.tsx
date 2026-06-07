"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { site } from "@/lib/site";
import { courses } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const interests = [
  "General Enquiry",
  ...courses.map((c) => c.title),
  "HSE Plan Design",
  "PPE / Safety Equipment Procurement",
  "Safety Advisory & Compliance",
];

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with our coordinator",
    href: site.whatsapp,
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Nationwide — Nigeria",
    href: undefined,
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: interests[0],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `HSE Enquiry: ${form.interest} — ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterest: ${form.interest}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-safety-500 focus:outline-none focus:ring-4 focus:ring-safety-500/15";

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div
        aria-hidden
        className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
      />
      <div className="absolute -left-20 top-1/3 hidden h-80 w-80 rounded-full bg-safety-500/20 blur-[130px] sm:block" />

      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left: info */}
          <div className="text-white">
            <SectionHeading
              light
              align="left"
              eyebrow="Get In Touch"
              title="Enroll, request a quote or book a consultation"
              description="Speak with our coordinator about training schedules, certification, HSE consulting or PPE procurement. We respond quickly and are ready to help."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card, i) => {
                const inner = (
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition-colors duration-300 hover:border-safety-400/40 hover:bg-white/[0.08]">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-safety-500 to-safety-600 text-white">
                      <card.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-amber-bright">
                        {card.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-white">
                        {card.value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <Reveal key={card.label} delay={i * 0.08}>
                    {card.href ? (
                      <a
                        href={card.href}
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
                <Clock className="h-6 w-6 shrink-0 text-safe-green-light" />
                <p className="text-sm text-navy-100">
                  <span className="font-semibold text-white">
                    Mon – Sat, 8:00am – 6:00pm.
                  </span>{" "}
                  Flexible scheduling available for corporate group training.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white p-7 shadow-2xl sm:p-9">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-safe-green/15 text-safe-green-dark">
                    <CheckCircle2 className="h-9 w-9" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-navy-900">
                    Thank you!
                  </h3>
                  <p className="mt-2 max-w-sm text-navy-600">
                    Your email app should now open with your enquiry ready to
                    send. Prefer to talk now? Call us on{" "}
                    <a
                      href={`tel:${site.phone}`}
                      className="font-semibold text-safety-600"
                    >
                      {site.phoneDisplay}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-semibold text-safety-600 hover:text-safety-700"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-navy-900">
                    Send us a message
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-semibold text-navy-800"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-semibold text-navy-800"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="e.g. 0805 993 8598"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-navy-800"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="mb-1.5 block text-sm font-semibold text-navy-800"
                    >
                      I&apos;m interested in
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {interests.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold text-navy-800"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your training or consulting needs…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-safety-500 px-7 py-3.5 text-base font-semibold text-white shadow-[0_12px_30px_-10px_rgba(249,97,10,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-safety-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-safety-500/40"
                  >
                    Send Enquiry
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-xs text-navy-400">
                    By submitting, your message opens in your email app addressed
                    to our coordinator.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

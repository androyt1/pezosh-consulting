import Image from "next/image";
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Parallax } from "./ui/Parallax";
import { CountUp } from "./ui/CountUp";
import { Button } from "./ui/Button";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To build a safer Nigerian workforce through accessible, practical and standard-aligned HSE training and consulting.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the most trusted safety training and HSE consulting partner across every high-risk industry we serve.",
  },
];

const highlights = [
  { icon: Award, label: "Certified Programs" },
  { icon: Users, label: "Expert Trainers" },
  { icon: ShieldCheck, label: "Compliance Focused" },
  { icon: TrendingUp, label: "Proven Results" },
];

export function About() {
  return (
    <section id="about" className="relative bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Visual side */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative px-2 sm:px-6 lg:px-2">
              <div className="absolute -left-3 -top-4 h-24 w-24 rounded-2xl border-[6px] border-navy-100" />
              <div className="absolute -bottom-5 -right-3 h-28 w-28 rounded-full bg-navy-100/60" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card">
                <Parallax distance={28} className="absolute inset-0">
                  <Image
                    src="/images/about-site.jpg"
                    alt="HSE safety team in hard hats and hi-vis vests during an on-site briefing"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="scale-[1.15] object-cover"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-navy-950/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-safe-green-light backdrop-blur">
                  <ShieldCheck className="h-4 w-4" />
                  Safety First, Always
                </span>
              </div>

              {/* Floating stat badges */}
              <div className="absolute -right-1 top-10 flex items-center gap-3 rounded-2xl border border-navy-100 bg-white/95 p-4 shadow-glow backdrop-blur sm:right-2">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-safe-green/15 text-safe-green-dark">
                  <Users className="h-6 w-6" />
                </span>
                <div>
                  <CountUp
                    value="5,000+"
                    className="font-display block text-xl font-bold text-navy-900"
                  />
                  <p className="text-xs text-navy-500">Professionals trained</p>
                </div>
              </div>

              <div className="absolute -left-1 bottom-10 flex items-center gap-3 rounded-2xl border border-navy-100 bg-white/95 p-4 shadow-glow backdrop-blur sm:left-2">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-white">
                  <TrendingUp className="h-6 w-6" />
                </span>
                <div>
                  <CountUp
                    value="98%"
                    className="font-display block text-xl font-bold text-navy-900"
                  />
                  <p className="text-xs text-navy-500">Pass &amp; satisfaction</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy side */}
          <div className="order-1 flex flex-col items-start lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="About PEZOSH Consulting"
              title="Your dedicated partner in workplace safety & HSE excellence"
              description="PEZOSH CONSULTING is a professional HSE training and safety consulting company helping organisations and individuals across Nigeria work safer, stay compliant and build a lasting culture of safety. We combine accredited, industry-aligned training with practical, real-world expertise."
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-shadow hover:shadow-glow">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-white">
                      <p.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-navy-900">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {highlights.map((h) => (
                  <span
                    key={h.label}
                    className="flex items-center gap-2 text-sm font-semibold text-navy-800"
                  >
                    <h.icon className="h-5 w-5 text-navy-700" />
                    {h.label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-9">
                <Button href="#contact" variant="secondary" size="lg" withArrow>
                  Contact Coordinator
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

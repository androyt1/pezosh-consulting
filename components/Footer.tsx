import Link from "next/link";
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import { site, nav } from "@/lib/site";
import { courses } from "@/lib/content";
import { Logo } from "./ui/Logo";

const socials = [
  { icon: Facebook, href: site.social.facebook, label: "Facebook" },
  { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: site.social.instagram, label: "Instagram" },
  { icon: Twitter, href: site.social.twitter, label: "Twitter" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div
        aria-hidden
        className="hazard-stripe hazard-stripe-animated h-2 w-full"
      />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        aria-hidden
        className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
      />
      <div className="container-px relative mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Logo tone="onDark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
              Professional HSE training and safety consulting in Nigeria —
              building competence, confidence and credibility through
              industry-aligned certification, consultancy and PPE procurement.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-navy-200 transition-colors hover:border-safety-400/40 hover:bg-safety-500 hover:text-white"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-navy-300 transition-colors hover:text-safety-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Top Courses
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {courses.slice(0, 6).map((c) => (
                <li key={c.title}>
                  <Link
                    href="#courses"
                    className="text-navy-300 transition-colors hover:text-safety-400"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-start gap-3 text-navy-300 transition-colors hover:text-safety-400"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-safety-400" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 break-all text-navy-300 transition-colors hover:text-safety-400"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-safety-400" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-navy-300">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-safety-400" />
                Nationwide service across Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-navy-400 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-safe-green-light" />
            Building a safer Nigerian workforce.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Button } from "./ui/Button";
import { Logo } from "./ui/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-100 bg-white/95 backdrop-blur-lg shadow-[0_6px_24px_-16px_rgba(10,24,52,0.4)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-px mx-auto flex h-[72px] max-w-7xl items-center justify-between"
        aria-label="Primary"
      >
        <Logo tone={scrolled ? "onLight" : "onDark"} />

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-navy-700 hover:bg-navy-50 hover:text-safety-600"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phone}`}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? "text-navy-800 hover:text-safety-600" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Button href="#contact" variant="primary" size="md" withArrow>
            Enroll Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`grid h-11 w-11 place-items-center rounded-xl transition-colors lg:hidden ${
            scrolled ? "text-navy-900 hover:bg-navy-50" : "text-white hover:bg-white/10"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-navy-100 bg-white lg:hidden"
          >
            <ul className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-navy-800 hover:bg-navy-50 hover:text-safety-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3 flex flex-col gap-3 px-1">
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-2 px-3 text-sm font-semibold text-navy-800"
                >
                  <Phone className="h-4 w-4 text-safety-600" />
                  {site.phoneDisplay}
                </a>
                <Button href="#contact" variant="primary" size="lg" withArrow>
                  Enroll for Training
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

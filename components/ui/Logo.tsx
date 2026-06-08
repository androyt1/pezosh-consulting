import Link from "next/link";

type LogoProps = {
  tone?: "onLight" | "onDark";
  href?: string;
  className?: string;
};

/**
 * Custom PEZOSH CONSULTING logo: a hexagon "safety badge" mark enclosing a
 * shield + checkmark, paired with the display-font wordmark.
 */
export function Logo({ tone = "onDark", href = "#home", className = "" }: LogoProps) {
  const onDark = tone === "onDark";

  return (
    <Link
      href={href}
      aria-label="PEZOSH CONSULTING — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center">
        <svg
          viewBox="0 0 48 48"
          className="h-10 w-10 drop-shadow-[0_8px_16px_rgba(22,163,74,0.35)] transition-transform duration-300 group-hover:-rotate-6"
          aria-hidden
        >
          <defs>
            <linearGradient id="pezosh-mark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#32d583" />
              <stop offset="0.55" stopColor="#16a34a" />
              <stop offset="1" stopColor="#15803d" />
            </linearGradient>
          </defs>
          {/* Hexagon safety badge */}
          <path
            d="M24 1.8 43.2 12.9V35.1L24 46.2 4.8 35.1V12.9Z"
            fill="url(#pezosh-mark)"
          />
          <path
            d="M24 1.8 43.2 12.9V35.1L24 46.2 4.8 35.1V12.9Z"
            fill="none"
            stroke="#6ee7b7"
            strokeWidth="1.4"
            strokeOpacity="0.6"
          />
          {/* Inner shield */}
          <path
            d="M24 11.5 33.5 15.6V24.4C33.5 30.7 29.3 35 24 37.1 18.7 35 14.5 30.7 14.5 24.4V15.6Z"
            fill="#0a1834"
          />
          {/* Checkmark */}
          <path
            d="M19.2 24.2 22.7 27.8 29 19.7"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-bold tracking-tight ${
            onDark ? "text-white" : "text-navy-900"
          }`}
        >
          PEZOSH
        </span>
        <span
          className={`text-[0.62rem] font-semibold uppercase tracking-[0.3em] ${
            onDark ? "text-safe-green-light" : "text-safety-600"
          }`}
        >
          Consulting
        </span>
      </span>
    </Link>
  );
}

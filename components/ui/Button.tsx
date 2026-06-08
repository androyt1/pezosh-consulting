import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "green";
type Size = "md" | "lg";

const base =
  "group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-safety-500/40 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-safety-500 text-white shadow-[0_12px_30px_-10px_rgba(22,163,74,0.7)] hover:bg-safety-600 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_rgba(22,163,74,0.8)]",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 hover:-translate-y-0.5 shadow-[0_12px_30px_-12px_rgba(10,24,52,0.8)]",
  green:
    "bg-safe-green text-white hover:bg-safe-green-dark hover:-translate-y-0.5 shadow-[0_12px_30px_-12px_rgba(22,163,74,0.7)]",
  outline:
    "border-2 border-navy-200 text-navy-900 hover:border-safety-500 hover:text-safety-600 bg-white/60",
  ghost:
    "border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  withArrow = false,
  external = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const filled =
    variant === "primary" || variant === "secondary" || variant === "green";
  const content = (
    <>
      {filled && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-3/4 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[280%]"
        />
      )}
      <span className="relative inline-flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

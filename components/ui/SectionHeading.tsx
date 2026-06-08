import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
            light
              ? "border-white/20 bg-white/10 text-safe-green-light"
              : "border-safety-200 bg-safety-50 text-safety-700"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-safety-500" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.7rem] ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={`text-base leading-relaxed sm:text-lg ${
              light ? "text-navy-100" : "text-navy-600"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

import {
  ShieldCheck,
  Award,
  Users,
  HardHat,
  ClipboardCheck,
  Flame,
  HeartPulse,
  Factory,
} from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Industry-Aligned Certification" },
  { icon: Users, label: "Experienced HSE Trainers" },
  { icon: ClipboardCheck, label: "Hands-On Practical Drills" },
  { icon: HardHat, label: "Construction Safety" },
  { icon: Flame, label: "Fire Safety & Warden Training" },
  { icon: HeartPulse, label: "First Aid Certification" },
  { icon: Factory, label: "Oil, Gas & Manufacturing" },
  { icon: Award, label: "Nationwide Corporate Delivery" },
];

export function Marquee() {
  const track = [...items, ...items];

  return (
    <section
      aria-label="What we deliver"
      className="relative overflow-hidden border-y border-white/10 bg-navy-900 py-5"
    >
      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-900 to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-10 pr-10 pause-on-hover">
        {track.map((item, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <item.icon className="h-5 w-5 shrink-0 text-amber-bright" />
            <span className="text-sm font-semibold tracking-wide text-navy-100">
              {item.label}
            </span>
            <span className="ml-7 h-1.5 w-1.5 rounded-full bg-white/30" />
          </div>
        ))}
      </div>
    </section>
  );
}

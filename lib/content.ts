import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  HeartPulse,
  Flame,
  ClipboardCheck,
  MoveVertical,
  Box,
  Users,
  Fuel,
  HardHat,
  Forklift,
  FileCog,
  ShoppingCart,
  ShieldAlert,
  ScrollText,
  Building2,
  Factory,
  Ship,
  Hammer,
  Zap,
  Pickaxe,
  Hospital,
  Truck,
  Glasses,
  Ear,
  Wind,
  Shirt,
  Hand,
  Footprints,
  Anchor,
  FireExtinguisher,
  BriefcaseMedical,
  Radar,
  TrafficCone,
} from "lucide-react";

export type Course = {
  title: string;
  level: string;
  duration: string;
  description: string;
  icon: LucideIcon;
  image: string;
  popular?: boolean;
};

export const courses: Course[] = [
  {
    title: "HSE Levels 1, 2 & 3",
    level: "Foundation → Advanced",
    duration: "Flexible",
    description:
      "Complete occupational health and safety training pathway covering hazard identification, control measures, and HSE management systems aligned with industry and regulatory standards.",
    icon: ShieldCheck,
    image: "/images/course-hse.jpg",
    popular: true,
  },
  {
    title: "First Aid Training",
    level: "Certification",
    duration: "2–3 Days",
    description:
      "Hands-on first aid certification: CPR, wound care, shock management and emergency response to keep your workforce ready for any incident.",
    icon: HeartPulse,
    image: "/images/course-firstaid.jpg",
    popular: true,
  },
  {
    title: "Fire Safety Training",
    level: "Certification",
    duration: "1–2 Days",
    description:
      "Practical fire safety training — prevention, extinguisher use, evacuation planning and fire warden responsibilities for compliant, prepared workplaces.",
    icon: Flame,
    image: "/images/course-fire.jpg",
  },
  {
    title: "Risk Assessment",
    level: "Professional",
    duration: "2 Days",
    description:
      "Master structured risk assessment training: identify hazards, evaluate risk, and implement effective controls that protect people and operations.",
    icon: ClipboardCheck,
    image: "/images/course-risk.jpg",
  },
  {
    title: "Working at Height",
    level: "Certification",
    duration: "1–2 Days",
    description:
      "Safe systems of work for elevated tasks — fall protection, scaffolding safety, harness use and rescue planning to eliminate fall hazards.",
    icon: MoveVertical,
    image: "/images/course-height.jpg",
  },
  {
    title: "Confined Space",
    level: "Certification",
    duration: "2 Days",
    description:
      "Confined space entry training covering atmospheric testing, permit-to-work, ventilation and emergency rescue procedures.",
    icon: Box,
    image: "/images/course-confined.jpg",
  },
  {
    title: "Safety Supervision & Leadership",
    level: "Advanced",
    duration: "3 Days",
    description:
      "Develop safety leaders who drive a strong safety culture, lead toolbox talks, manage compliance and influence behaviour on site.",
    icon: Users,
    image: "/images/course-leadership.jpg",
  },
  {
    title: "Oil & Gas Safety Management",
    level: "Specialist",
    duration: "3–5 Days",
    description:
      "Industry-specific oil and gas safety training: process safety, permit systems, H2S awareness and offshore/onshore HSE best practice.",
    icon: Fuel,
    image: "/images/cta-refinery.jpg",
    popular: true,
  },
  {
    title: "Construction Safety",
    level: "Certification",
    duration: "2–3 Days",
    description:
      "Construction safety training tailored to Nigerian sites — excavation, scaffolding, plant safety, PPE and site hazard management.",
    icon: HardHat,
    image: "/images/why-bg.jpg",
  },
  {
    title: "Forklift Training",
    level: "Operator Certification",
    duration: "1–3 Days",
    description:
      "Certified forklift safety training and operator assessment covering safe loading, manoeuvring, inspection and warehouse safety.",
    icon: Forklift,
    image: "/images/course-forklift.jpg",
  },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

export const services: Service[] = [
  {
    title: "HSE Plan Design & Development",
    description:
      "Bespoke HSE plans and management systems built around your operations, risk profile and regulatory obligations.",
    icon: FileCog,
    points: [
      "Site-specific HSE plans",
      "Policy & procedure development",
      "Audit-ready documentation",
    ],
  },
  {
    title: "Procurement of Safety Devices",
    description:
      "Sourcing of certified safety devices and detection equipment from trusted manufacturers at competitive rates.",
    icon: ShoppingCart,
    points: ["Gas & fire detectors", "Signage & barriers", "Quality-assured supply"],
  },
  {
    title: "PPE & Safety Gear Procurement",
    description:
      "End-to-end PPE procurement — from helmets and gloves to coveralls and respiratory protection for any industry.",
    icon: ShieldAlert,
    points: ["Head-to-toe PPE", "Bulk & corporate supply", "Genuine, standard-rated gear"],
  },
  {
    title: "Safety Advisory & Compliance",
    description:
      "Ongoing safety advisory and workplace compliance support to keep your business aligned with HSE regulations.",
    icon: ScrollText,
    points: ["Compliance audits", "On-site safety advisory", "Regulatory guidance"],
  },
];

export type Industry = {
  name: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  { name: "Oil & Gas", icon: Fuel },
  { name: "Construction", icon: Hammer },
  { name: "Manufacturing", icon: Factory },
  { name: "Maritime & Ports", icon: Ship },
  { name: "Power & Energy", icon: Zap },
  { name: "Mining & Quarrying", icon: Pickaxe },
  { name: "Healthcare", icon: Hospital },
  { name: "Logistics & Warehousing", icon: Truck },
  { name: "Real Estate & Facilities", icon: Building2 },
];

export type Ppe = {
  name: string;
  category: string;
  icon: LucideIcon;
};

export const ppeItems: Ppe[] = [
  { name: "Safety Helmets & Hard Hats", category: "Head Protection", icon: HardHat },
  { name: "Safety Goggles & Face Shields", category: "Eye & Face", icon: Glasses },
  { name: "Ear Plugs & Defenders", category: "Hearing", icon: Ear },
  { name: "Respirators & Dust Masks", category: "Respiratory", icon: Wind },
  { name: "Hi-Vis Vests & Coveralls", category: "Body Protection", icon: Shirt },
  { name: "Safety Gloves", category: "Hand Protection", icon: Hand },
  { name: "Safety Boots", category: "Foot Protection", icon: Footprints },
  { name: "Fall Arrest Harnesses", category: "Height Safety", icon: Anchor },
  { name: "Fire Extinguishers", category: "Fire Safety", icon: FireExtinguisher },
  { name: "First Aid Kits", category: "Medical", icon: BriefcaseMedical },
  { name: "Gas Detectors", category: "Detection", icon: Radar },
  { name: "Safety Signage & Barriers", category: "Site Control", icon: TrafficCone },
];

export type WhyItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyChooseUs: WhyItem[] = [
  {
    title: "Accredited, Industry-Aligned Training",
    description:
      "Our programs meet recognised industry and regulatory standards, giving your certificates real credibility.",
    icon: ShieldCheck,
  },
  {
    title: "Experienced HSE Professionals",
    description:
      "Learn from seasoned trainers with real field experience across oil & gas, construction and manufacturing.",
    icon: Users,
  },
  {
    title: "Practical, Hands-On Approach",
    description:
      "Beyond theory — drills, simulations and scenario-based learning that build genuine competence.",
    icon: ClipboardCheck,
  },
  {
    title: "End-to-End Safety Partner",
    description:
      "From training to HSE plans, PPE procurement and compliance — one trusted partner for all your safety needs.",
    icon: FileCog,
  },
];

export const stats = [
  { value: "5,000+", label: "Professionals Trained" },
  { value: "10+", label: "Specialised Courses" },
  { value: "98%", label: "Pass & Satisfaction Rate" },
  { value: "9+", label: "Industries Served" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "PEZOSH transformed our site safety culture. The HSE Level 3 training was practical, well-structured and immediately applicable. Incident rates dropped within months.",
    name: "Engr. Tunde Bakare",
    role: "Project Manager",
    company: "Construction Firm, Lagos",
  },
  {
    quote:
      "Their oil and gas safety management course is the best we've used. The trainers truly understand the field, and the certification gave our crew the confidence to operate safely.",
    name: "Grace Okafor",
    role: "HSE Coordinator",
    company: "Energy Services Company",
  },
  {
    quote:
      "From PPE procurement to a full HSE plan, PEZOSH handled everything professionally. Genuine equipment, fair pricing and excellent advisory support.",
    name: "Mr. Ibrahim Sani",
    role: "Operations Director",
    company: "Manufacturing Group",
  },
  {
    quote:
      "We enrolled our entire team for first aid and fire safety training. Engaging, hands-on and thorough. Our staff finally feel ready for emergencies.",
    name: "Dr. Amaka Nwosu",
    role: "Facility Manager",
    company: "Healthcare Provider",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What HSE training courses does PEZOSH CONSULTING offer?",
    answer:
      "We offer a full range of HSE training in Nigeria including HSE Levels 1, 2 & 3, first aid certification, fire safety training, risk assessment, working at height, confined space, safety supervision and leadership, oil and gas safety management, construction safety and forklift training.",
  },
  {
    question: "Are your HSE certifications recognised?",
    answer:
      "Yes. Our training programs are designed to meet recognised industry and regulatory standards, so your certification carries credibility with employers, clients and regulators across multiple sectors.",
  },
  {
    question: "Do you offer on-site or corporate group training?",
    answer:
      "Absolutely. We deliver in-house and on-site corporate training tailored to your operations and schedule, as well as open enrolment classes for individuals. Contact our coordinator to arrange group training.",
  },
  {
    question: "Can PEZOSH help with PPE and safety equipment procurement?",
    answer:
      "Yes. Beyond training, we handle PPE procurement and safety equipment procurement — from helmets, gloves and coveralls to fire extinguishers, gas detectors and signage — sourcing genuine, standard-rated products at competitive prices.",
  },
  {
    question: "Do you provide HSE consultancy and plan development?",
    answer:
      "We design site-specific HSE plans, develop policies and procedures, conduct compliance audits and provide ongoing safety advisory to keep your workplace aligned with HSE regulations.",
  },
  {
    question: "Will I receive a verifiable certificate?",
    answer:
      "Yes. On successful completion and assessment, you receive a verifiable certificate of competence that employers and clients can confirm directly with us — proof of the standards your training was benchmarked against.",
  },
  {
    question: "How do I enrol or request a consultation?",
    answer:
      "Simply use the contact form, call us on +234 805 993 8598 or email oukhuriegbe@gmail.com. Our coordinator will guide you on schedules, fees and the best program for your needs.",
  },
];

export type Standard = {
  abbr: string;
  label: string;
};

// Internationally recognised OH&S standards and frameworks our programmes are
// structured around and benchmarked against (not direct accreditation claims).
export const standards: Standard[] = [
  { abbr: "ISO 45001", label: "OH&S Management" },
  { abbr: "NEBOSH", label: "Exam-aligned" },
  { abbr: "IOSH", label: "Managing Safely" },
  { abbr: "OSHA", label: "US OSH Standards" },
  { abbr: "WSO", label: "World Safety Org." },
  { abbr: "ISPON", label: "Nigeria HSE Body" },
  { abbr: "ISO 14001", label: "Environmental" },
  { abbr: "First Aid / CPR", label: "Emergency Response" },
];

export type Session = {
  month: string;
  day: string;
  course: string;
  duration: string;
  mode: string;
};

// Upcoming open-enrolment batches (update each month / replace with live calendar).
export const schedule: Session[] = [
  {
    month: "JUN",
    day: "23",
    course: "HSE Levels 1, 2 & 3",
    duration: "5 Days",
    mode: "Classroom & Online",
  },
  {
    month: "JUL",
    day: "07",
    course: "First Aid & CPR Certification",
    duration: "2 Days",
    mode: "Classroom",
  },
  {
    month: "JUL",
    day: "14",
    course: "Fire Safety & Warden Training",
    duration: "2 Days",
    mode: "Classroom",
  },
  {
    month: "JUL",
    day: "21",
    course: "Working at Height",
    duration: "2 Days",
    mode: "Classroom",
  },
  {
    month: "AUG",
    day: "04",
    course: "Oil & Gas Safety Management",
    duration: "5 Days",
    mode: "Hybrid",
  },
  {
    month: "AUG",
    day: "18",
    course: "Confined Space Entry",
    duration: "2 Days",
    mode: "Classroom",
  },
];

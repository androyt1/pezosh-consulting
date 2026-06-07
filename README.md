# PEZOSH CONSULTING — HSE Training & Safety Consulting Website

A modern, premium, production-ready marketing website for **PEZOSH CONSULTING**, a professional HSE training and safety consulting company in Nigeria.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## ✨ Features

- **Fully responsive, mobile-first** premium corporate design (deep navy, safety orange, amber & green accents)
- **Smooth animations** with Framer Motion (scroll reveals, staggered grids, animated hero)
- **SEO optimised**: rich metadata, Open Graph, JSON-LD `ProfessionalService` schema, `robots.txt`, `sitemap.xml`, PWA manifest, semantic HTML & alt text
- **Accessible**: keyboard focus states, ARIA attributes, reduced-motion support
- **Clean, reusable components** with centralised content in `lib/`

### Sections

Hero · About · Training Courses · Services · Why Choose Us · Industries Served · PPE / Safety Equipment Procurement · Testimonials · FAQ · Contact (with working mailto form) · Footer + floating WhatsApp / back-to-top CTA.

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

### Build & run production

```bash
npm run build
npm start
```

## 🛠 Editing content

All copy and data live in plain TypeScript files — no CMS needed:

- `lib/site.ts` — company name, phone, email, WhatsApp, nav links
- `lib/content.ts` — courses, services, industries, PPE items, testimonials, FAQs, stats

Update the contact details, courses or testimonials there and every section stays in sync.

## 📞 Contact details (configured)

- **Phone:** +234 805 993 8598
- **Email:** oukhuriegbe@gmail.com

> The contact form opens the visitor's email client pre-filled and addressed to the
> coordinator. To capture submissions server-side instead, wire `handleSubmit` in
> `components/Contact.tsx` to an API route or a service such as Formspree / Resend.

## ☁️ Deployment

Deploy in one click on **Vercel** (recommended for Next.js), or any Node host:

1. Push the project to a Git repository.
2. Import it into Vercel.
3. Set the production domain and update `site.url` in `lib/site.ts` so canonical URLs,
   the sitemap and JSON-LD use the correct address.

## 📁 Project structure

```
app/            App Router pages, layout, global CSS, SEO routes (robots, sitemap, manifest)
components/     Section components + reusable UI (Button, SectionHeading, Reveal)
lib/            Centralised site config and content data
public/         Favicon and static assets
```

---

© PEZOSH CONSULTING. Building a safer Nigerian workforce.

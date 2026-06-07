import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Courses } from "@/components/Courses";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Industries } from "@/components/Industries";
import { CtaBanner } from "@/components/CtaBanner";
import { Ppe } from "@/components/Ppe";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Courses />
        <Services />
        <WhyChooseUs />
        <Industries />
        <CtaBanner />
        <Ppe />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}

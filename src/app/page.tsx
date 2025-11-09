// src/app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import AboutUs from "@/components/AboutUs";
import PracticeAreas from "@/components/PracticeAreas";
import OurTeam from "@/components/OurTeam";
import Insights from "@/components/Insights";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <TrustSignals />

        <AnimatedSection id="tentang">
          <AboutUs />
        </AnimatedSection>

        <AnimatedSection id="layanan" className="bg-gray-50">
          <PracticeAreas />
        </AnimatedSection>

        <AnimatedSection id="tim">
          <OurTeam />
        </AnimatedSection>

        <AnimatedSection id="wawasan" className="bg-gray-50">
          <Insights />
        </AnimatedSection>

        <AnimatedSection id="kontak">
          <ContactForm />
        </AnimatedSection>
      </main>

      <Footer />
    </>
  );
}

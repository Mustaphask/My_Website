import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CompaniesStrip } from "@/components/CompaniesStrip";
import { Services } from "@/components/Services";
import { WorkHighlights } from "@/components/WorkHighlights";
import { SkillsPoll } from "@/components/SkillsPoll";
import { Values } from "@/components/Values";
import { ContactCards } from "@/components/ContactCards";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <div className="noise" aria-hidden />
      <Navbar />

      <main id="main-content" role="main">
        <Hero />
        <CompaniesStrip />

        <div className="section-divider" />
        <Services />

        <div className="section-divider" />
        <WorkHighlights />

        <div className="section-divider" />
        <SkillsPoll />

        <div className="section-divider" />
        <Values />

        <div className="section-divider" />
        <ContactCards />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          © {new Date().getFullYear()} Mustafa Skaiki. All rights reserved.
        </p>
      </footer>

      {/* Back to top button */}
      <BackToTop />
    </>
  );
}

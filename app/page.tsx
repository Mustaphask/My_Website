import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { Services } from "@/components/Services";
import { SelectedWork } from "@/components/SelectedWork";
import { SkillsChart } from "@/components/SkillsChart";
import { ExperienceSnapshot } from "@/components/ExperienceSnapshot";
import { Values } from "@/components/Values";
import { Contact } from "@/components/Contact";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <div className="noise" aria-hidden />
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <ProofStrip />
        <Services />
        <SelectedWork />
        <SkillsChart />
        <ExperienceSnapshot />
        <Values />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}

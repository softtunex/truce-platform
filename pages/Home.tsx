import React from "react";
import { Hero } from "../components/Hero.tsx";
import { PartnerLogos } from "../components/PartnerLogos.tsx";
import { TrustStats } from "../components/TrustStats.tsx";
import { DiverseWaysSection } from "../components/DiverseWaysSection.tsx";
import { AgreementSection } from "../components/AgreementSection.tsx";

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <AgreementSection />
      <TrustStats />
      <DiverseWaysSection />
    </>
  );
};

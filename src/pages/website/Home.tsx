import React from "react";
import { Hero } from "../../components/marketing/Hero.tsx";
import { PartnerLogos } from "../../components/marketing/PartnerLogos.tsx";
import { TrustStats } from "../../components/marketing/TrustStats.tsx";
import { DiverseWaysSection } from "../../components/marketing/DiverseWaysSection.tsx";
import { AgreementSection } from "../../components/marketing/AgreementSection.tsx";

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

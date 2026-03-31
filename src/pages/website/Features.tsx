import React from "react";
import { Steps } from "../../components/marketing/Steps";
// import { OfferSection } from "../../components/marketing/OfferSection";
import { AgreementSection } from "../../components/marketing/AgreementSection";
import { DiverseWaysSection } from "@/src/components/marketing/DiverseWaysSection";

export const Features: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white">
      {/* --- HERO BANNER SECTION --- */}
      <div
        className="relative w-full h-[480px] lg:h-[550px] overflow-hidden bg-no-repeat bg-cover bg-center sm:bg-right"
        style={{
          backgroundImage: `url('/images/feature_hero.png')`,
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-full relative flex items-center">
          {/* --- Typography Overlay --- */}
          <div className="relative z-20 max-w-xl flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[1000] text-[#0D1B3E] leading-[1.05] tracking-tight mb-6">
              Safe transactions <br />
              Starts with Truce Smart <br />
              Agreement
            </h1>

            {/* Lime Green Rectangle Accent */}
            <div className="w-24 h-2.5 bg-[#84cc16] mb-6"></div>

            <p className="text-gray-600 font-bold text-lg sm:text-xl tracking-tight">
              Monies move, only when your terms are met
            </p>
          </div>
        </div>
      </div>

      {/* --- Rest of the Page --- */}
      <div className="bg-[#F8F9FB]">
        <Steps />
        <AgreementSection />
        <DiverseWaysSection />
      </div>
    </div>
  );
};

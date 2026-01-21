import React from "react";
import { PageHeader } from "../components/PageHeader.tsx";
import { AgreementSection } from "../components/AgreementSection.tsx";
import { TruceDealSection } from "../components/TruceDealSection.tsx";
import { FarmProduceSection } from "../components/FarmProduceSection.tsx";
import { ProtectionLayerSection } from "../components/ProtectionLayerSection.tsx";

export const Transactions: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Transaction Hub"
        subtitle="Secure every deal, from farm produce to property. The ultimate protection layer for your digital commerce."
        theme="navy"
      />

      {/* Prime focus: Creating an agreement */}
      <AgreementSection />

      {/* Use Cases */}
      <div className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-2">
            Explore Use Cases
          </p>
          <div className="h-0.5 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
      </div>

      <TruceDealSection />
      <FarmProduceSection />
      <ProtectionLayerSection />
    </div>
  );
};

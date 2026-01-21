import React from "react";
import { PageHeader } from "../components/PageHeader.tsx";
import { Steps } from "../components/Steps.tsx";
import { OfferSection } from "../components/OfferSection.tsx";
import { AgreementSection } from "../components/AgreementSection.tsx";

export const Features: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Features & Process"
        subtitle="Understand the smart digital contracts that turn trust into a tangible product. We bridge the gap between promises and fulfillment."
        theme="emerald"
      />
      <Steps />
      <OfferSection />
      <div className="bg-[#f8fafc] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0D1B3E]">
              Ready to start?
            </h2>
            <p className="text-slate-500 mt-4">
              Create your first Truce agreement in seconds.
            </p>
          </div>
          <AgreementSection />
        </div>
      </div>
    </div>
  );
};

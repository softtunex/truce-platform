import React from "react";
import { AgreementSection } from "../components/AgreementSection";
import { TruceDealSection } from "../components/TruceDealSection";
import { FarmProduceSection } from "../components/FarmProduceSection";
import { ProtectionLayerSection } from "../components/ProtectionLayerSection";

export const Transactions: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white font-sans">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[500px] lg:h-[550px] overflow-hidden">
        {/* 1. Background Image Layer */}
        {/* Positioned absolute, covering the right side primarily */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/truce-woman-blue.png"
            alt="Trust Infrastructure"
            className="w-full h-full object-cover object-[center_top] lg:object-right"
            onError={(e) => {
              // Fallback image resembling the reference
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1600";
            }}
          />
        </div>

        {/* 2. Gradient Overlay (Left to Right Fade) */}
        {/* 
            This creates the text area background. 
            Starts solid white/light-green on left, fades to transparent on right.
        */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#F0FDF4] via-[#F5FBF7] via-50% to-transparent sm:from-white sm:via-white/90"></div>

        {/* 3. Text Content Area */}
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl space-y-5 pt-8">
            {/* Headline - Scaled down to match Features page (text-5xl) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-[900] text-[#003366] leading-[1.05] tracking-tight">
              Don’t Deal, if you <br />
              Can’t Truce
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl font-bold text-black tracking-tight leading-tight">
              We're not selling transactions —{" "}
              <span className="text-[#00CC66]">we simply sell Trust</span>
            </p>

            {/* Paragraph Description */}
            <div className="space-y-4 max-w-lg pt-2">
              <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                We're building the infrastructure that lets people transact
                safely with anyone, anywhere — without needing to trust them
                first.
              </p>
              <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                With Truce, every agreement between a buyer and a seller becomes
                a digital contract that holds funds invisibly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- AGREEMENT FORM SECTION --- */}
      {/* Shifted up slightly to overlap or sit right below hero */}
      <div className="relative z-30 -mt-10 lg:-mt-16 px-4 sm:px-0">
        <AgreementSection />
      </div>

      {/* --- SEPARATOR --- */}
      <div className="bg-slate-50 py-16 border-t border-gray-100 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0D1B3E] opacity-40">
            Explore Use Cases
          </p>
          <div className="h-1 w-16 bg-[#0F5935] mx-auto rounded-full"></div>
        </div>
      </div>

      {/* --- CONTENT SECTIONS --- */}
      <TruceDealSection />
      {/* <FarmProduceSection />
      <ProtectionLayerSection /> */}
    </div>
  );
};

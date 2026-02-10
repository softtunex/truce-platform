import React from "react";
import { Steps } from "../components/Steps";
import { OfferSection } from "../components/OfferSection";
import { AgreementSection } from "../components/AgreementSection";

export const Features: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white">
      {/* --- BANNER HERO SECTION --- */}
      {/* Fixed height, not full screen. Linear gradient background. */}
      <div className="relative w-full h-[550px] lg:h-[600px] bg-gradient-to-r from-[#F5F7FA] via-[#D8DEE6] to-[#6B7C8C] overflow-hidden">
        <div className="max-w-[1150px] mx-auto px-6 h-full relative">
          <div className="flex items-center h-full">
            {/* --- Typography (Left) --- */}
            <div className="relative z-10 max-w-3xl pt-10">
              <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-[900] text-black leading-[0.95] tracking-tight mb-6">
                Safe transactions <br />
                Starts with Truce Smart <br />
                Agreement
              </h1>

              {/* Lime Green Rectangle Accent */}
              <div className="w-24 h-3 bg-[#A3E635] mb-5"></div>

              <p className="text-gray-600 font-medium text-lg sm:text-xl tracking-tight">
                Monies move, only when your terms are met
              </p>
            </div>

            {/* --- Image (Right - Anchored to bottom/right) --- */}
            <div className="absolute right-[-50px] lg:right-[-100px] bottom-0 h-[85%] lg:h-[95%] w-auto z-0 hidden sm:block">
              <img
                src="/images/truce-man-with-phone.png"
                alt="Safe Transactions"
                className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
                onError={(e) => {
                  // Fallback to prevent broken layout if image is missing
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- Rest of the Page --- */}
      <div>
        <Steps />
        <OfferSection />

        <div className="bg-[#f8fafc] py-20 border-t border-gray-100">
          <div className="max-w-[1150px] mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-5xl font-[900] text-[#0D1B3E] tracking-tight">
                Ready to start?
              </h2>
              <p className="text-gray-500 font-medium text-base md:text-lg">
                Create your first Truce agreement in seconds.
              </p>
            </div>
            {/* Agreement Section */}
            <div className="transform scale-95 lg:scale-100 origin-top">
              <AgreementSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

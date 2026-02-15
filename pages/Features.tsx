import React from "react";
import { Steps } from "../components/Steps";
import { OfferSection } from "../components/OfferSection";
import { AgreementSection } from "../components/AgreementSection";

export const Features: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white">
      {/* --- HERO BANNER SECTION --- */}
      {/* Background Gradient: Light Grey -> Greyish Blue -> Dark Teal on Right */}
      <div className="relative w-full h-[450px] lg:h-[480px] bg-[linear-gradient(90deg,#F5F7FA_0%,#E2E8F0_45%,#39555A_100%)] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 h-full relative flex items-center">
          {/* --- Typography (Left) --- */}
          <div className="relative z-20 max-w-xl flex flex-col justify-center">
            <h1 className="text-4xl sm:text-4xl lg:text-5xl 2xl:text-5xl font-[1000] leading-[1.05] tracking-tight mb-5">
              Safe transactions <br />
              Starts with Truce Smart <br />
              Agreement
            </h1>

            {/* Lime Green Rectangle Accent */}
            <div className="w-24 h-2.5 bg-[#84cc16] mb-5"></div>

            <p className="text-gray-500 font-medium text-base sm:text-lg tracking-tight">
              Monies move, only when your terms are met
            </p>
          </div>

          {/* --- Image Area (Right) --- */}
          {/* 
              FIX APPLIED:
              1. Anchored to 'top-10' (instead of bottom) to show the head.
              2. 'h-[135%]' creates the Zoom effect.
              3. 'overflow-hidden' on container cuts off the legs automatically.
          */}
          <div className="absolute right-[-40px] lg:right-[-20px] top-0 h-full w-1/2 hidden sm:flex justify-end pointer-events-none">
            {/* Dark Shadow/Glow behind the character */}
            <div className="absolute right-10 top-20 w-[400px] h-[400px] bg-black/20 blur-[90px] rounded-full z-0"></div>

            {/* The Man Image */}
            <img
              src="/images/truce-man-with-phone.png"
              alt="Safe Transactions"
              // top-10 pushes the head down slightly so it's not touching the edge
              // h-[135%] makes it big (Zoomed)
              // object-top ensures the scaling respects the top of the image (Head)
              className="absolute top-[-50px] right-0 h-[135%] w-auto object-contain object-top drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-10"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </div>

      {/* --- Rest of the Page --- */}
      <div className="bg-[#F8F9FB]">
        <Steps />
        <AgreementSection />

        <OfferSection />

        {/* Agreement Section Container */}
        {/* <div className="py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2 px-6">
            <h2 className="text-3xl lg:text-4xl font-[900] text-[#0D1B3E] tracking-tight">
              Ready to start?
            </h2>
            <p className="text-gray-500 text-sm">
              Create your first Truce agreement in seconds.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

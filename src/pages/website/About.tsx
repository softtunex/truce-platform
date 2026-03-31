import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* --- SECTION 1: HERO (Matches about_hero.png) --- */}
      <section
        className="relative w-full h-[500px] lg:h-[600px] overflow-hidden bg-no-repeat bg-cover bg-center sm:bg-right"
        style={{
          backgroundImage: `url('/images/about_hero.png')`,
          backgroundColor: "#050A30", // Fallback deep navy
        }}
      >
        {/* Alignment Container */}
        <div className="max-w-[1280px] mx-auto px-6 h-full relative flex items-center">
          {/* Typography Overlay: White and Vibrant Green for dark BG contrast */}
          <div className="relative z-20 max-w-2xl flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[1000] text-white leading-[1.05] tracking-tight mb-6">
              Track. Control. Resolve. <br />
              Every Agreement in <br />
              One Place
            </h1>

            {/* Vibrant Green Subtitle to match your image asset */}
            <h2 className="text-[#4ADE80] text-xl sm:text-2xl font-bold mb-4">
              Absolute protection for every transaction
            </h2>

            {/* Lime Green Rectangle Accent */}
            <div className="w-24 h-2.5 bg-[#84cc16] mb-8"></div>

            <p className="text-gray-300 font-medium text-lg sm:text-xl tracking-tight">
              Monies move, only when your terms are met.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: BUYER & SELLER TRUCE (Zig Zag Layout) --- */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {/* Block A: BUYER TRUCE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gray-50 rounded-[40px] transform -rotate-2 transition-transform group-hover:rotate-0"></div>
              <img
                src="/images/truce_laptop2.png"
                alt="Laptop Interface"
                className="relative rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#0F5935] text-white px-8 py-4 rounded-2xl font-bold shadow-xl">
                Safe & Verified
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl lg:text-5xl font-[900] text-[#0D1B3E]">
                  Buyer Truce
                </h2>
                <h3 className="text-[#0F5935] text-xl font-bold mt-2">
                  Pay With Confidence
                </h3>
              </div>

              <div className="border-l-4 border-[#4ADE80] pl-6 py-2">
                <p className="text-xl font-bold text-gray-800">
                  Receive Exactly What You Agreed — Or Recall Your Money Back
                </p>
              </div>

              <p className="text-gray-500 text-lg leading-relaxed">
                With Truce, your payment isn't released until the seller
                delivers exactly as promised. If the agreed terms aren't met,
                you can recall your funds — no battles, no stress, no losses.
              </p>

              <div className="space-y-4 pt-4">
                <h4 className="font-black text-[#0D1B3E] uppercase text-xs tracking-widest">
                  Why Buyers Trust Truce
                </h4>
                {[
                  "Funds held securely until you confirm satisfaction",
                  "Only release payment when terms are fulfilled",
                  "Full transaction visibility from start to finish",
                  "Ability to recall your money if the agreement is breached",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded-md">
                      <Check
                        className="w-4 h-4 text-[#0F5935]"
                        strokeWidth={4}
                      />
                    </div>
                    <span className="text-gray-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Block B: SELLER TRUCE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Side (Appears first on desktop via grid order) */}
            <div className="order-2 lg:order-1 space-y-6">
              <div>
                <h2 className="text-4xl lg:text-5xl font-[900] text-[#0D1B3E]">
                  Seller Truce
                </h2>
                <h3 className="text-[#0F5935] text-xl font-bold mt-2">
                  Deliver With Trust
                </h3>
              </div>

              <div className="border-l-4 border-[#4ADE80] pl-6 py-2">
                <p className="text-xl font-bold text-gray-800">
                  See the Buyer's commitment before you transact and get paid
                  without disputes.
                </p>
              </div>

              <p className="text-gray-500 text-lg leading-relaxed">
                Serious buyers commit funds upfront to a secure Truce account
                proving they're ready to pay. Once you meet the agreed terms,
                payment is released to you — fast and securely.
              </p>

              <div className="space-y-4 pt-4">
                <h4 className="font-black text-[#0D1B3E] uppercase text-xs tracking-widest">
                  Why Sellers Choose Truce
                </h4>
                {[
                  "Verified buyer commitment before you deliver",
                  "Protection from payment fraud and chargebacks",
                  "Clear terms that prevent misunderstandings",
                  "Guaranteed payout when obligations are met",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded-md">
                      <Check
                        className="w-4 h-4 text-[#0F5935]"
                        strokeWidth={4}
                      />
                    </div>
                    <span className="text-gray-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-blue-50 rounded-[40px] transform rotate-2 transition-transform group-hover:rotate-0"></div>
              <img
                src="/images/truce_laptop1.png"
                alt="Seller Interface"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TRUCE ADVANTAGE --- */}
      <section className="py-24 bg-[#F8F9FB] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Circular Visuals */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-10">
              <div className="relative w-80 h-80 sm:w-[450px] sm:h-[450px]">
                <div className="absolute blur-[80px] opacity-20 translate-x-10 translate-y-10"></div>
                <img
                  src="/images/t6.png"
                  alt="Truce Community"
                  className="w-full h-full object-contain rounded-full shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] relative z-10"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-[1000] text-[#0D1B3E] leading-tight">
                  Built to protect <br /> your Money
                </h2>
                <p className="text-gray-500 font-medium text-lg max-w-md mx-auto lg:mx-0">
                  We're building the infrastructure that lets people transact
                  safely with anyone, from anywhere.
                </p>
              </div>
            </div>

            {/* Right: Detailed Content */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-[900] text-[#0F5935] tracking-tight">
                  Truce Advantage
                </h2>
                <h3 className="text-2xl font-bold text-[#0D1B3E] leading-snug">
                  Truce secures your payment until promises are kept — <br />
                  and returns your money if they're not.
                </h3>
              </div>

              <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
                <p>
                  Truce acts as a neutral digital escrow between both parties —
                  holding funds safely while the transaction is completed under
                  agreed conditions.
                </p>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-4">
                  <h4 className="font-bold text-[#0D1B3E] flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    If conditions are not met:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm font-medium">
                      <span className="text-[#0F5935]">●</span>
                      Buyers can recall their money immediately.
                    </li>
                    <li className="flex gap-3 text-sm font-medium">
                      <span className="text-[#0F5935]">●</span>
                      Sellers are guaranteed payment only upon delivery.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-5 pt-6">
                <Link
                  to="/"
                  className="bg-[#0F5935] text-white px-10 py-4 rounded-full font-bold hover:bg-[#0b4629] transition-all shadow-xl shadow-green-900/20"
                >
                  Create Truce Agreement
                </Link>
                <Link
                  to="/login"
                  className="px-10 py-4 rounded-full font-bold text-[#0D1B3E] border-2 border-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white transition-all"
                >
                  My Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

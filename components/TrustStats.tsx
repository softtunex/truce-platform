import React from "react";
import { MOCK_DATA } from "../data/mockData.ts";

export const TrustStats: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-6 items-stretch">
        {/* Main Green Protected Card */}
        <div className="flex-[2.4] bg-[#064e3b] rounded-[48px] p-8 md:p-14 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden group shadow-2xl shadow-emerald-950/20">
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          {/* Left Visual: Professional Image Placeholder */}
          <div className="flex-1 relative z-10 w-full lg:w-auto">
            <div className="relative animate-float">
              <div className="relative z-10 rounded-[40px] overflow-hidden ">
                <img
                  src="/assets/images/truce-Businessman.png"
                  alt="Professional at work"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Floating Element 1 */}
              {/* <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl animate-float [animation-delay:1s]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-[10px] font-black text-slate-800 uppercase">
                    Secure Lock
                  </span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Content: Typography */}
          <div className="flex-1 space-y-6 z-10">
            <h2 className="md:text-2xl font-black text-white leading-[1.1] tracking-tight">
              Built to Protected Buyers, Sellers and Freelancers
            </h2>

            <div className="space-y-5">
              <p className="text-emerald-50/80 text-xs md:text-xs leading-relaxed font-medium">
                We protect your money and safeguard you from fraudulent
                transactions. ensuring funds are released only when your Truce
                agreement (terms and conditions) are fulfilled by all parties
              </p>

              <p className="text-emerald-400 font-bold leading-relaxed text-xs md:text-xs">
                Every completed Truce builds a record — a trust score, forming
                the world’s first social currency of credibility.
              </p>

              <p className="text-white text-xs md:text-xs font-black uppercase tracking-wider pt-2">
                Join thousands of users who trust us, for safe, verified deals
                every day.
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Commerce Card and Stats */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Commerce Promo Card */}
          <div className="flex-1 bg-slate-50 border border-slate-100 rounded-[40px] p-8 relative overflow-hidden group hover:shadow-xl transition-all flex flex-col justify-center">
            <div className="relative z-10 space-y-4 max-w-[75%]">
              <h3 className="md:text-base font-black text-[#0D1B3E] leading-tight">
                Secure every digital commerce with a Truce!
              </h3>
              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-500 leading-relaxed uppercase tracking-wider opacity-90">
                  With Truce, you can now buy, sell, render services and even
                  give loan to family and friends on your terms without the risk
                  of losing your money
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  Truce keeps all transactions safe, until all parties fulfill
                  their obligations as captured in the Truce agreement
                </p>
              </div>
            </div>

            {/* Delivery/Commerce Illustration Placeholder */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-32 md:w-44 pointer-events-none group-hover:scale-110 transition-transform duration-500">
              <img
                src="/assets/images/truce-delivery.png"
                alt="Delivery"
                className="w-full h-full object-contain rounded-3xl opacity-90"
              />
            </div>
          </div>

          {/* Bottom Statistics Card */}
          <div className="bg-white border border-slate-100 rounded-[40px] p-8 flex items-center justify-between gap-2 shadow-sm">
            {MOCK_DATA.stats.map((stat, i) => (
              <div key={stat.label} className="text-center flex-1">
                <p className="text-xl md:text-2xl font-black text-[#0D1B3E] mb-0.5">
                  {stat.value}
                </p>
                <p className="text-[8px] md:text-[9px] uppercase font-black text-emerald-600 tracking-[0.2em] leading-tight whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

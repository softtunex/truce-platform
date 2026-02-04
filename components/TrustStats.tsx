import React from "react";

// You can keep using your MOCK_DATA, or just hardcode for visual accuracy
const statsData = [
  { value: "$1.3M+", label: "Transactions" },
  { value: "800+", label: "Drive engagement" },
  { value: "32K+", label: "Truce created" },
];

export const TrustStats: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row gap-6 items-stretch">
        {/* --- Left: Main Green Protected Card --- */}
        <div className="flex-[2] bg-[#0F5935] rounded-[40px] p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden shadow-2xl shadow-green-900/20">
          {/* Decorative Pattern (Subtle) */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          {/* Left Visual: Illustration */}
          <div className="w-full sm:w-5/12 relative z-10 flex justify-center sm:justify-start">
            {/* Using the image path you provided */}
            <img
              src="/images/truce-Businessman.png"
              alt="Protected Transaction"
              className="w-full max-w-[240px] h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Right Content: Typography */}
          <div className="w-full sm:w-7/12 space-y-5 z-10 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-[900] text-white leading-tight tracking-tight">
              Built to Protect Buyers, Sellers and Freelancers
            </h2>

            <div className="space-y-4">
              <p className="text-green-100/90 text-xs sm:text-[13px] leading-relaxed font-medium">
                We protect your money and safeguard you from fraudulent
                transactions, ensuring funds are released only when your Truce
                agreement (terms and conditions) are fulfilled by all parties.
              </p>

              <p className="text-[#4ADE80] text-xs sm:text-[13px] font-bold leading-relaxed">
                Every completed Truce builds a record — a trust score, forming
                the world’s first social currency of credibility.
              </p>

              <div className="pt-2 border-t border-white/10">
                <p className="text-white text-[11px] font-black uppercase tracking-wider">
                  Join thousands of users who trust us for safe, verified deals
                  every day.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right: Sidebar Stack --- */}
        <div className="flex-1 flex flex-col gap-6">
          {/* 1. Commerce Promo Card */}
          <div className="flex-1 bg-[#F4F6F8] rounded-[40px] p-8 relative overflow-hidden flex flex-col justify-center">
            <div className="relative z-10 space-y-3 max-w-[70%]">
              <h3 className="text-lg font-[900] text-[#0D1B3E] leading-tight">
                Secure every digital commerce with a Truce! agreement
              </h3>

              <div className="space-y-2">
                <p className="text-[11px] font-medium text-gray-500 leading-relaxed">
                  With Truce, you can now buy, sell, render services and even
                  give loans to family and friends on your terms without the
                  risk of losing your money.
                </p>
                <p className="text-[11px] font-bold text-gray-400 leading-relaxed">
                  Truce keeps all transactions safe, until all parties fulfill
                  their obligations.
                </p>
              </div>
            </div>

            {/* Floating Image Right */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-32">
              {/* Using the image path you provided */}
              <img
                src="/images/truce-delivery.png"
                alt="Delivery"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* 2. Bottom Statistics Card */}
          <div className="bg-white border border-gray-100 rounded-[40px] p-8 flex items-center justify-between shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]">
            {statsData.map((stat, i) => (
              <div
                key={i}
                className="text-center flex-1 first:text-left last:text-right sm:first:text-center sm:last:text-center"
              >
                <p className="text-xl font-[900] text-[#0F5935] mb-1">
                  {stat.value}
                </p>
                <p className="text-[9px] uppercase font-bold text-[#0D1B3E] tracking-tight leading-tight">
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

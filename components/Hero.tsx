import React from "react";

export const Hero: React.FC = () => (
  <section className="relative w-full bg-white overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-24">
    <div className="max-w-[1150px] mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* --- Left Column: Content --- */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E6F3EC] px-3 py-2 sm:px-4 rounded-lg border border-green-100 max-w-full">
            <div className="text-[#006633] flex-shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M18 2H6C3.79 2 2 3.79 2 6v12c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 16H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2zM7 9h10v2H7zm0 4h7v2H7z"
                  opacity="0.3"
                />
                <path d="M7 11h10v-2H7v2zm0 4h7v-2H7v2z" />
              </svg>
            </div>
            {/* Added break-words to prevent overflow and adjusted size */}
            <span className="text-[10px] sm:text-xs font-semibold text-[#0D1B3E] tracking-tight text-left leading-tight">
              Africa’s No.1 Trust infrastructure, built for all transaction
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[900] text-[#0D1B3E] leading-[1.05] tracking-tight">
            Transactions Made <br />
            Simple & Secure
          </h1>

          {/* Paragraph */}
          <p className="text-base text-gray-500 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
            Raise a Truce agreement today, lock the terms, protect your money
            activate trust and make both sides accountable before payment is
            released
          </p>

          {/* Buttons - CHANGED: flex-col on mobile, flex-row on larger screens */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-gray-200 text-[#0D1B3E] font-bold text-sm hover:border-gray-300 hover:bg-gray-50 transition-all whitespace-nowrap">
              Sign in
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0F5935] text-white font-bold text-sm hover:bg-[#0b4629] transition-all shadow-lg shadow-green-900/10 whitespace-nowrap">
              Create Truce Agreement
            </button>
          </div>
        </div>

        {/* --- Right Column: Image & Floaters --- */}
        <div className="relative w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
          {/* Main Image Container */}
          <div className="relative w-full max-w-[400px] aspect-square">
            {/* Image with rounded corners */}
            <div className="relative z-10 overflow-hidden rounded-[40px] shadow-2xl bg-gray-100 w-full h-full animate-float">
              <img
                src="/images/francis-odeyemi-jLKDfxikHzM-unsplash.jpg"
                alt="Secure Transaction"
                className="w-full h-full object-cover object-center scale-x-[-1]"
              />
            </div>

            {/* Float Card 1: Top Left */}
            <div className="absolute top-8 -left-4 sm:-left-16 bg-white p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] z-20 w-[240px] border border-gray-100 hidden sm:block ">
              <h3 className="text-[11px] font-bold text-[#0D1B3E] leading-snug mb-3">
                Premium trust, connecting Businesses in a Network of Trust!
              </h3>

              <div className="flex items-end gap-2 mb-3">
                <span className="text-2xl font-[900] text-[#0D1B3E] leading-none">
                  9.5
                </span>
                <div className="flex text-amber-400 text-[10px] mb-1">
                  ★★★★<span className="text-amber-400/50">★</span>
                </div>
              </div>

              <button className="w-full bg-[#0F5935] text-white text-[10px] font-bold py-2.5 rounded-lg hover:bg-[#0b4629]">
                Join our Truce community
              </button>
            </div>

            {/* Float Card 2: Bottom Right */}
            <div className="absolute -bottom-6 -right-2 sm:-right-8 bg-white p-4 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] z-20 w-[190px] border border-gray-100 flex flex-col items-center text-center">
              <div className="w-full h-16 bg-[#E6F3EC] rounded-xl mb-3 flex items-center justify-center relative overflow-hidden">
                <div className="flex items-center gap-1 text-[#0F5935]">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>

              <p className="text-[10px] font-bold text-[#0D1B3E] leading-tight">
                Join the world’s first <br /> social currency of Trust
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
      }
      @keyframes float-delayed {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      .animate-float-delayed {
        animation: float-delayed 6s ease-in-out infinite;
        animation-delay: 3s;
      }
    `}</style>
  </section>
);

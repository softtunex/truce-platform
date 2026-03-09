import React from "react";

export const TruceDealSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden relative">
      {/* Refined Background Accents - Cleaner Diagonal Stripes as seen in image */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50/50 skew-x-[-25deg] origin-top-right"></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-[70%] bg-emerald-50/30 skew-x-[-20deg] origin-bottom-right"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32 relative z-10">
        {/* Left Side: Organic Blob Masked Image */}
        <div className="flex-1 w-full max-w-[550px] animate-fade-in">
          <div className="relative group">
            {/* Organic "Blob" Shape as requested (not a perfect circle) */}
            <div className="aspect-square rounded-[40%_60%_70%_30%/40%_50%_60%_40%] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.18)] relative transition-all duration-700 group-hover:rounded-[50%_50%_50%_50%]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                alt="Professional focus"
                className="w-full h-full object-cover grayscale-[5%] group-hover:grayscale-0 transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Subtle floating shadow enhancement */}
            <div className="absolute -z-10 inset-10 bg-black/5 blur-[80px] rounded-full"></div>
          </div>
        </div>

        {/* Right Side: Content & Image-based Illustration */}
        <div className="flex-[1.2] space-y-12 relative">
          {/* Floating Illustration Placeholder (Top Right) */}
          <div className="absolute -top-24 -right-10 md:-right-24 w-64 h-64 opacity-0 lg:opacity-100 animate-float pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600"
              alt="Truce Mascot Placeholder"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            {/* Character floating crown & checkmark overlays */}
            {/* <div className="absolute top-4 right-12 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg animate-bounce">
              👑
            </div> */}
            {/* <div className="absolute bottom-12 left-12 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-xl">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div> */}
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-[950] text-[#0D1B3E] leading-[0.9] tracking-tighter">
              Can't Truce it? <br />
              <span className="text-emerald-900/90">Don't deal it</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-black text-emerald-700 tracking-tight border-l-4 border-emerald-500 pl-6">
              Join 10K+ people to protect <br className="hidden md:block" />
              their transactions with Truce
            </h3>
          </div>

          <div className="space-y-8 max-w-xl">
            <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium">
              We're building the infrastructure that lets people transact safely
              with anyone, anywhere — without needing to trust them first. With
              Truce, every agreement between a buyer and a seller becomes a
              digital contract that holds funds invisibly.
            </p>
            <p className="text-[#0D1B3E] font-black text-lg md:text-xl tracking-tight">
              We're not selling transactions — <br />
              <span className="text-emerald-600 italic font-serif">
                we're selling Trust as a Product
              </span>
            </p>
          </div>

          <div className="pt-2">
            {/* Modernized Button Style */}
            <button className="bg-[#064e3b] text-white px-6 py-3 rounded-full flex items-center gap-4 shadow-[0_20px_50px_-10px_rgba(6,78,59,0.3)] hover:shadow-[0_25px_60px_-10px_rgba(6,78,59,0.5)] hover:bg-[#043327] transition-all duration-300 group">
              <span className="text-xs font-black uppercase tracking-[0.2em]">
                Learn more
              </span>
              <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#064e3b] transition-all">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

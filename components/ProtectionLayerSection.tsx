import React from "react";

export const ProtectionLayerSection: React.FC = () => {
  const sampleText =
    "Before using Truce service, I struggled to manage my funds for important payments. With a secure Truce account, I could set targets and confidently save for my obligations. It gave me peace of mind, and I always knew my money was safe until I needed it.";

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden relative border-b border-slate-50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side: Illustration and Primary Message */}
        <div className="flex-1 space-y-10 lg:pr-8 border-r-0 lg:border-r border-slate-200">
          <div className="max-w-[340px] space-y-8">
            {/* Illustration Placeholder */}
            <div className="w-full aspect-[4/3] relative">
              <img
                src="https://images.unsplash.com/photo-1573163231366-419f933f3893?auto=format&fit=crop&q=80&w=800"
                alt="Protection Layer Illustration"
                className="w-full h-full object-contain"
              />
              {/* Checkmark Accent */}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-[950] text-[#0D1B3E] leading-[1.1] tracking-tight">
                Your Protection Layer for <br /> Every Transaction
              </h2>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                "{sampleText}"
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Grid Box */}
        <div className="flex-[2.2] w-full">
          <div className="p-8 md:p-14 ">
            <div className="space-y-12">
              <h3 className="text-2xl md:text-3xl font-black text-[#0D1B3E] tracking-tight">
                Smart, secure, and transparent — powered by Truce
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="space-y-4">
                    <p className="text-slate-400 text-[13px] leading-relaxed font-medium">
                      "{sampleText}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learn More link - Text style as per image but high quality */}
          <div className="flex justify-end pt-8">
            <button className="flex items-center gap-3 group">
              <span className="text-emerald-800 text-sm font-black uppercase tracking-[0.2em]">
                Learn more
              </span>
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-emerald-900 border-b-[6px] border-b-transparent transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

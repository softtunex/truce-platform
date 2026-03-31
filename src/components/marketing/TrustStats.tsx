import React, { useState, useEffect } from "react";

const statsData = [
  { value: "$1.3M+", label: "Transactions" },
  { value: "800+", label: "Drive engagement" },
  { value: "32K+", label: "Truce created" },
];

const testimonials = [
  {
    name: "Amina Okoro",
    role: "Instagram Vendor",
    text: "Selling on Instagram used to be scary because of 'pay on delivery' issues. Now I just send a Truce link and my business is protected.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Oluwatobi Adeyemi",
    role: "Gadget Dealer",
    text: "I sell high-end laptops. Truce gives my customers the confidence to pay upfront, knowing their money is safe until delivery is confirmed.",
    image:
      "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Chidi Nwosu",
    role: "Freelance Designer",
    text: "As a freelance designer, getting clients to pay for milestones was always a struggle. Truce simplified everything and ensures I get paid for my work.",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ebele Uzor",
    role: "Wholesale Trader",
    text: "Truce has removed the 'Trust' barrier in my nationwide deliveries. My customers in the North feel safe paying into a Truce agreement.",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?auto=format&fit=crop&q=80&w=400",
  },
];

export const TrustStats: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds for better reading time
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-6 items-stretch">
        {/* --- LEFT: Wide Infrastructure Card --- */}
        <div className="flex-[2] bg-[#0F5935] rounded-[60px] p-10 sm:p-14 flex flex-col sm:flex-row items-center gap-4 relative overflow-hidden shadow-2xl shadow-green-900/20">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          <div className="w-full sm:w-5/12 relative z-10 flex justify-center sm:justify-start">
            <img
              src="/images/truce-Businessman.png"
              alt="Protected Transaction"
              className="w-full max-w-[280px] h-auto object-contain drop-shadow-2xl"
            />
          </div>

          <div className="w-full sm:w-7/12 space-y-6 z-10 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-[900] text-white leading-[1.1] tracking-tight">
              Building Africa’s Trust <br /> Infrastructure with Truce <br />
              <span className="text-[#4ADE80]">digital trust</span>
            </h2>

            <div className="space-y-4">
              <p className="text-green-100/90 text-[13px] leading-relaxed font-medium">
                We protect your money and safeguard you from fraudulent
                transactions ensuring funds are released only when your Truce
                agreement (terms and conditions) are fulfilled by all parties.
              </p>

              <div className="pl-4 border-l-2 border-[#4ADE80]/40">
                <p className="text-[#4ADE80] text-[13px] font-bold leading-relaxed">
                  Every completed Truce builds a record — a trust score, forming
                  the world’s first social currency of credibility.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-2 justify-center sm:justify-start">
                <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                <p className="text-white text-[10px] font-black uppercase tracking-widest">
                  Join thousands of Nigerians who trust us every day
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT: Refined Testimonials & Stats --- */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex-1 bg-[#F4F6F8]/60 rounded-[45px] p-7 relative overflow-hidden flex flex-col justify-center border border-gray-50">
            <div className="flex items-start gap-6">
              {/* Refined Image Stack (Fixed URLs) */}
              <div className="relative w-24 h-32 flex-shrink-0 mt-1">
                {testimonials.map((t, idx) => {
                  const isActive = idx === activeTestimonial;
                  const offset =
                    (idx - activeTestimonial + testimonials.length) %
                    testimonials.length;

                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out transform rounded-2xl overflow-hidden border-2 border-white shadow-lg bg-gray-200
                        ${
                          isActive
                            ? "z-30 scale-100 opacity-100 translate-x-0"
                            : offset === 1
                              ? "z-20 scale-90 opacity-40 translate-x-6 translate-y-3"
                              : "z-10 scale-75 opacity-0 -translate-x-10"
                        }
                      `}
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        // Fallback handling
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            `https://ui-avatars.com/api/?name=${t.name}&background=0F5935&color=fff`;
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Smaller Content Area */}
              <div className="flex-1 space-y-4">
                <div className="inline-block px-3 py-1 bg-[#0F5935]/10 rounded-full">
                  <span className="text-[10px] font-black uppercase text-[#0F5935] tracking-widest">
                    Testimonials
                  </span>
                </div>

                <div className="relative h-28 overflow-hidden">
                  {testimonials.map((t, idx) => (
                    <div
                      key={idx}
                      className={`transition-all duration-700 absolute inset-0 ${
                        idx === activeTestimonial
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4 pointer-events-none"
                      }`}
                    >
                      <p className="text-[12px] font-medium text-gray-500 leading-relaxed italic">
                        "{t.text}"
                      </p>
                      <div className="mt-4">
                        <p className="text-[12px] font-black text-[#0D1B3E] leading-none">
                          {t.name}
                        </p>
                        <p className="text-[10px] font-bold text-[#0F5935] mt-1 uppercase tracking-tight">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-[40px] p-8 flex items-center justify-between shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)]">
            {statsData.map((stat, i) => (
              <div key={i} className="text-center flex-1">
                <p className="text-xl font-[1000] text-[#0F5935] leading-none mb-2">
                  {stat.value}
                </p>
                <p className="text-[9px] uppercase font-black text-gray-400 tracking-tighter leading-tight">
                  {stat.label.split(" ").map((word, j) => (
                    <span key={j} className="block">
                      {word}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

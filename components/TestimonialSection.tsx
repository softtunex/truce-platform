import React, { useState, useEffect, useRef } from "react";
import { MOCK_DATA } from "../data/mockData.ts";

export const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<number | null>(null);

  const testimonials = MOCK_DATA.testimonials;

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      handleNext();
    }, 7000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 400);
  };

  const handleManualClick = (index: number) => {
    if (index === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
      startTimer();
    }, 400);
  };

  const active = testimonials[activeIndex];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20  overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Image & Testimonial Card */}
        <div className="flex-[1.8] flex flex-col md:flex-row items-center gap-4 w-full relative">
          {/* Main Visual Image - Balanced & Integrated */}
          <div className="relative w-full max-w-[380px] flex-shrink-0 group animate-fade-in">
            <div className="w-full aspect-square rounded-[80px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
              <img
                src="/images/African-family-cartoon.png"
                alt="Truce Community"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Floating Testimonial Card */}
          <div
            onClick={handleNext}
            className={`cursor-pointer w-full max-w-[420px] bg-white rounded-[40px] p-10 md:p-12 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] border border-slate-50 relative transition-all duration-500 transform ${
              isAnimating
                ? "scale-[0.98] opacity-0 blur-sm translate-y-2"
                : "scale-100 opacity-100 blur-0 translate-y-0"
            }`}
          >
            <div className="space-y-10">
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-emerald-100 font-black text-7xl leading-none select-none">
                  “
                </span>
                <p className="relative text-[#0D1B3E] font-medium text-base md:text-[17px] leading-relaxed tracking-tight">
                  {active.quote}
                </p>
              </div>

              <div className="flex items-center gap-5">
                {/* Round Avatar as requested */}
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-md border-2 border-white flex-shrink-0">
                  <img
                    src={active.avatar}
                    alt={active.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-black text-[#0D1B3E] tracking-tight">
                    {active.name}
                  </h4>
                  <p className="text-[10px] font-black text-emerald-600 leading-tight uppercase tracking-widest">
                    {active.subText}
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Progress / Pagination */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleManualClick(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? "w-8 bg-emerald-500"
                      : "w-2 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Better Scaled Headers & Content */}
        <div className="flex-1 space-y-10 text-left">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-3xl font-black text-[#0D1B3E] leading-[1.1] tracking-tighter">
              Secure the Deal with Truce <br />
              <span className="text-emerald-700">Before You Even Pay</span>
            </h2>
            <div className="h-1 w-16 bg-emerald-600 rounded-full" />
            <p className="text-lg md:text-xl text-[#65a30d] font-bold leading-relaxed max-w-lg">
              Our mission is simple: to make Trust the easiest thing to buy,
              sell, and measure.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium opacity-80 max-w-md">
              Truce turns every transaction into a secure, enforceable agreement
              — with instant fund released when terms are met by all parties. It
              keeps both sides accountable.
            </p>
          </div>

          {/* Improved Buttons Style */}
          <div className="flex gap-2 pt-2">
            <button className="bg-[#0D1B3E] text-white px-4 py-4 rounded-full flex items-center justify-center gap-3 shadow-xl hover:bg-slate-800 transition-all group w-fit">
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                Explore Features
              </span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            <button className="bg-[#f8fafc] border border-slate-100 px-8 py-3.5 rounded-full flex items-center justify-center gap-3 w-fit opacity-70 cursor-not-allowed">
              <div className="w-2.5 h-2.5 bg-amber-400 rounded-full" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                Coming Soon
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

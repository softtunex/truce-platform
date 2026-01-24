import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  theme?: "navy" | "emerald" | "gray" | "blue";
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  theme = "navy",
}) => {
  // Sophisticated light-mode gradients for a premium fintech feel
  const themes = {
    navy: "from-[#F8FAFF] via-[#F0F4FF] to-[#E6EEFF] border-b border-blue-100/50",
    emerald:
      "from-[#F7FFF9] via-[#F0FFF4] to-[#E8FFF0] border-b border-emerald-100/50",
    gray: "from-[#FCFCFD] via-[#F8F9FB] to-[#F1F3F6] border-b border-slate-200",
    blue: "from-[#F5F8FF] via-[#EDF2FF] to-[#E1E9FF] border-b border-blue-100",
  };

  // Text colors are now consistently dark for readability on light backgrounds
  const textColors = {
    navy: "text-truce-navy",
    emerald: "text-truce-navy",
    gray: "text-truce-navy",
    blue: "text-truce-navy",
  };

  // Accent colors for the side bars and small details
  const accentColors = {
    navy: "bg-blue-600/10",
    emerald: "bg-emerald-600/10",
    gray: "bg-slate-600/10",
    blue: "bg-blue-600/10",
  };

  // Border accents to separate sections gracefully
  const primaryAccents = {
    navy: "bg-blue-500",
    emerald: "bg-truce-green",
    gray: "bg-slate-400",
    blue: "bg-blue-600",
  };

  return (
    <div
      className={`relative pt-36 pb-16 md:pt-44 md:pb-24 px-6 overflow-hidden bg-gradient-to-r ${themes[theme]} ${textColors[theme]}`}
    >
      {/* Layer 1: Technical Grid Pattern (Subtle) */}
      <div className="absolute inset-0 bg-grid-tech opacity-[0.03] pointer-events-none"></div>

      {/* Layer 2: Hexagonal Pattern - Strategically placed on the right like the reference image */}
      <div
        className={`absolute right-0 top-0 w-full md:w-[55%] h-full bg-hexagon-dark opacity-40 pointer-events-none transform skew-x-[-12deg] translate-x-24`}
      ></div>

      {/* Layer 3: Soft Gradient Glows */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white/60 rounded-full blur-[120px] pointer-events-none"></div>
      <div
        className={`absolute bottom-0 right-1/4 w-[300px] h-[300px] ${theme === "emerald" ? "bg-emerald-100/30" : "bg-blue-100/30"} rounded-full blur-[80px] pointer-events-none animate-pulse-soft`}
      ></div>

      {/* Layer 4: Abstract Tech Illustration (Nodes/Lines) */}
      <svg
        className="absolute top-0 right-0 w-full h-full opacity-[0.04] pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M70,10 L85,25 L85,45 L70,60"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.1"
        />
        <circle cx="70" cy="10" r="0.3" fill="currentColor" />
        <circle cx="85" cy="25" r="0.3" fill="currentColor" />
        <circle cx="85" cy="45" r="0.3" fill="currentColor" />
        <circle cx="70" cy="60" r="0.3" fill="currentColor" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Column: Content Area */}
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-100">
            <div className={`relative flex h-2 w-2`}>
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${primaryAccents[theme]} opacity-40`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${primaryAccents[theme]}`}
              ></span>
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">
              Africa’s No.1 Trust Infrastructure
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[950] tracking-tightest leading-[1.05] text-[#0D1B3E]">
              {title}
            </h1>
            <div
              className={`h-1.5 w-20 rounded-full ${primaryAccents[theme]} opacity-20`}
            ></div>
          </div>

          <div className="max-w-xl">
            <p className="text-base md:text-lg font-medium leading-relaxed text-slate-500/90">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right Column: Decorative Technical Composition */}
        <div className="hidden lg:flex justify-end items-center pr-12 relative">
          <div className="relative">
            {/* Visual Balance Element */}
            <div className="flex flex-col gap-4 items-end">
              <div className="flex gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${primaryAccents[theme]} opacity-10`}
                ></div>
                <div
                  className={`w-3 h-3 rounded-full ${primaryAccents[theme]} opacity-5`}
                ></div>
              </div>
              <div
                className={`w-32 h-[1px] bg-gradient-to-l from-[#0D1B3E]/10 to-transparent`}
              ></div>
              {/* <div className="text-[10px] font-black text-[#0D1B3E]/20 uppercase tracking-[0.5em] transform rotate-90 translate-y-20 origin-right">
                Truce Protocol
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Decorative Sidebar (Signature Detail) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        <div
          className={`h-20 w-1 rounded-r-full ${primaryAccents[theme]} opacity-20`}
        ></div>
        <div
          className={`h-10 w-1 rounded-r-full ${primaryAccents[theme]} opacity-10`}
        ></div>
        <div
          className={`h-6 w-1 rounded-r-full ${primaryAccents[theme]} opacity-5`}
        ></div>
      </div>
    </div>
  );
};

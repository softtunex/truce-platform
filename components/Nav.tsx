import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Nav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Transactions", path: "/transactions" },
    { name: "Features", path: "/features" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between">
      <Link
        to="/"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center">
          <div className="w-4 h-8 bg-[#2563EB] rounded-full mr-1"></div>
          <div className="w-4 h-8 bg-[#006633] rounded-full -ml-2"></div>
        </div>
        <span className="text-2xl font-bold text-[#0D1B3E] tracking-tight">
          Truce
        </span>
      </Link>
      <div className="hidden xl:flex items-center gap-6 text-[13px] font-medium">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`transition-colors uppercase tracking-widest text-[11px] font-black ${
              isActive(item.path)
                ? "text-[#006633] border-b-2 border-[#006633] pb-1"
                : "text-slate-400 hover:text-[#006633]"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <button className="bg-[#006633] text-white px-8 py-2.5 rounded-lg font-bold hover:bg-green-800 transition-all text-sm">
        Sign in
      </button>
    </nav>
  );
};

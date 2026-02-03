import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Nav: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Updated items based on your screenshot
 const navItems = [
    { name: "Home", path: "/" },
    { name: "Transactions", path: "/transactions" },
    { name: "Features", path: "/features" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* --- Left Side: Logo & Language --- */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="flex items-center gap-[2px]">
              {/* Olive Pill */}
              <div className="w-3.5 h-6 bg-[#658a08] rounded-full"></div>
              {/* Blue Pill */}
              <div className="w-3.5 h-7 bg-[#103487] rounded-full"></div>
            </div>
            <span className="text-2xl font-[900] text-[#0D1B3E] tracking-tight">
              Truce
            </span>
          </Link>

          {/* Language Selector Pill */}
          <button className="hidden sm:flex items-center gap-2 bg-[#D1E7D6] px-3 py-1.5 rounded-full border border-green-200 hover:bg-[#c3dec9] transition-colors">
            {/* Globe Icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span className="text-xs font-bold text-[#0D1B3E]">EN</span>
            {/* Chevron Down */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>

        {/* --- Center: Nav Items (Desktop) --- */}
        <div className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-[13px] font-semibold transition-colors ${
                isActive(item.path)
                  ? "text-[#006633]"
                  : "text-gray-600 hover:text-[#006633]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* --- Right Side: Auth Buttons (Desktop) --- */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/signup" className="text-sm font-bold text-[#0D1B3E] hover:text-[#006633] transition-colors">
            Sign up
          </Link>
          <button className="bg-[#006633] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#004d26] transition-all text-sm shadow-md shadow-green-900/10">
            Log in
          </button>
        </div>

        {/* --- Mobile Hamburger Toggle --- */}
        <button 
          className="lg:hidden p-2 text-[#0D1B3E]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-semibold py-2 border-b border-gray-50 ${
                isActive(item.path) ? "text-[#006633]" : "text-gray-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <Link 
              to="/signup" 
              className="text-center text-sm font-bold text-[#0D1B3E] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign up
            </Link>
            <button className="bg-[#006633] text-white w-full py-3 rounded-lg font-bold hover:bg-[#004d26] transition-all text-sm">
              Log in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
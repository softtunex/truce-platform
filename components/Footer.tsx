
import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-white border-t border-slate-100 pt-20 pb-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
      <div className="space-y-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-8 bg-blue-600 rounded-full"></div>
          <div className="w-4 h-8 bg-green-700 rounded-full -ml-2"></div>
          <span className="text-2xl font-bold text-[#0D1B3E]">Truce</span>
        </div>
        <div className="space-y-4 text-slate-500 text-[13px] leading-relaxed">
          <p>Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</p>
          <div className="font-bold text-slate-700">
            <p className="hover:text-blue-600 cursor-pointer">contact@truce.com.ng</p>
            <p>+234 700 000 0000</p>
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-8 text-[#0D1B3E] text-sm uppercase tracking-widest">Products</h4>
        <ul className="space-y-4 text-[13px] text-slate-500 font-medium">
          <li className="hover:text-green-700 cursor-pointer transition-colors">myTruce</li>
          <li className="hover:text-green-700 cursor-pointer transition-colors">Loan Me</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-8 text-[#0D1B3E] text-sm uppercase tracking-widest">Company</h4>
        <ul className="space-y-4 text-[13px] text-slate-500 font-medium">
          <li className="hover:text-green-700 cursor-pointer transition-colors">About</li>
          <li className="hover:text-green-700 cursor-pointer transition-colors">FAQs</li>
          <li className="hover:text-green-700 cursor-pointer transition-colors">Blog</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-8 text-[#0D1B3E] text-sm uppercase tracking-widest">Legal</h4>
        <ul className="space-y-4 text-[13px] text-slate-500 font-medium">
          <li className="hover:text-green-700 cursor-pointer transition-colors">Terms</li>
          <li className="hover:text-green-700 cursor-pointer transition-colors">Privacy</li>
          <li className="hover:text-green-700 cursor-pointer transition-colors">Security</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-10 border-t border-slate-100 text-center space-y-4">
      <p className="text-[11px] text-slate-400 max-w-4xl mx-auto leading-relaxed">
        Truce is a leading online digital trust platform in Nigeria. For years, our customers have securely held and transacted billions of Naira, ensuring their funds are protected until every agreement is fulfilled.
      </p>
      <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">2025 Truce Technologies Limited</p>
    </div>
  </footer>
);

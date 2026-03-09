import React from "react";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  ShieldCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
  Wallet,
  Search,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Overview = () => {
  const { user } = useAuth();

  // MOCK DATA: Recent Agreements
  const recentAgreements = [
    {
      id: "TR-8832",
      title: "Iphone 15 Pro Max - 256GB",
      counterparty: "Gadget World Ltd",
      amount: "1,250,000",
      status: "active", // active, pending, completed, disputed
      date: "Oct 24, 2025",
      type: "buying",
    },
    {
      id: "TR-9921",
      title: "Web Development Service",
      counterparty: "John Doe Design",
      amount: "450,000",
      status: "pending",
      date: "Oct 22, 2025",
      type: "selling",
    },
    {
      id: "TR-7721",
      title: "Macbook Air M2",
      counterparty: "Tech Haven",
      amount: "950,000",
      status: "completed",
      date: "Oct 15, 2025",
      type: "buying",
    },
    {
      id: "TR-1102",
      title: "Consultation Fee",
      counterparty: "Sarah Smith",
      amount: "50,000",
      status: "disputed",
      date: "Sep 30, 2025",
      type: "selling",
    },
  ];

  // Helper for Status Styles (Light & Dark Mode)
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800";
      case "pending":
        return "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800";
      case "completed":
        return "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800";
      case "disputed":
        return "bg-red-50 text-red-700 border-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800";
      default:
        return "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-[900] text-[#0D1B3E] dark:text-white">
            Good Morning, {user?.name.split(" ")[0]} 👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Here's what's happening with your agreements today.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm">
            <Wallet className="w-4 h-4" />{" "}
            <span className="hidden sm:inline">Fund Wallet</span>
          </button>
          <Link
            to="/"
            className="flex items-center gap-2 bg-[#0F5935] dark:bg-[#00C48C] text-white dark:text-[#0D1B3E] px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#0b4629] dark:hover:bg-[#00a374] transition-all shadow-lg shadow-green-900/20 dark:shadow-none"
          >
            <Plus className="w-4 h-4" /> Create New Truce
          </Link>
        </div>
      </div>

      {/* --- STATS GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 1. WALLET CARD (Visual Highlight) */}
        <div className="bg-[#0D1B3E] dark:bg-blue-950 rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[220px] group">
          {/* Background Deco */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity duration-700"></div>

          <div>
            <div className="flex justify-between items-start">
              <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                <Wallet className="w-6 h-6 text-[#00C48C]" />
              </div>
              <span className="bg-[#00C48C]/20 text-[#00C48C] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-[#00C48C]/30">
                Available
              </span>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                Wallet Balance
              </p>
              <h2 className="text-3xl font-[900] mt-1 tracking-tight">
                ₦ 450,200.00
              </h2>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="flex-1 bg-[#00C48C] text-[#0D1B3E] py-2.5 rounded-lg text-xs font-bold hover:bg-[#00b07d] transition-colors flex items-center justify-center gap-2">
              <ArrowDownLeft className="w-3 h-3" /> Deposit
            </button>
            <button className="flex-1 bg-white/10 text-white py-2.5 rounded-lg text-xs font-bold hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
              <ArrowUpRight className="w-3 h-3" /> Withdraw
            </button>
          </div>
        </div>

        {/* 2. ESCROW STATS (Locked Funds) */}
        <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between min-h-[220px]">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <ShieldCheck className="w-6 h-6 text-amber-500 dark:text-amber-400" />
            </div>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <div>
            <p className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-wider">
              Total Value Locked
            </p>
            <h2 className="text-3xl font-[900] text-[#0D1B3E] dark:text-white mt-1 tracking-tight">
              ₦ 1,700,000
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium">
              Held safely in{" "}
              <span className="text-[#0D1B3E] dark:text-white font-bold">
                2 active
              </span>{" "}
              agreements.
            </p>
          </div>

          <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-4 overflow-hidden">
            <div
              className="bg-amber-500 h-full rounded-full"
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>

        {/* 3. ACTIVITY SUMMARY */}
        <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between min-h-[220px]">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Clock className="w-6 h-6 text-blue-500 dark:text-blue-400" />
            </div>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-[#1E293B]"></div>
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white dark:border-[#1E293B]"></div>
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-white dark:border-[#1E293B] flex items-center justify-center text-[10px] font-bold text-gray-500 dark:text-gray-300">
                +4
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-3">
              <p className="text-2xl font-[900] text-[#0D1B3E] dark:text-white">
                12
              </p>
              <p className="text-[10px] uppercase font-bold text-gray-400">
                Total Truces
              </p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-xl p-3">
              <p className="text-2xl font-[900] text-emerald-700 dark:text-emerald-400">
                98%
              </p>
              <p className="text-[10px] uppercase font-bold text-emerald-600/70 dark:text-emerald-500/70">
                Success Rate
              </p>
            </div>
          </div>

          <Link
            to="/dashboard/agreements"
            className="text-xs font-bold text-gray-400 hover:text-[#0F5935] dark:hover:text-[#00C48C] flex items-center gap-1 mt-2 transition-colors"
          >
            View all history <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* --- RECENT AGREEMENTS TABLE --- */}
      <div className="bg-white dark:bg-[#1E293B] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-[900] text-[#0D1B3E] dark:text-white">
              Recent Activity
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
              Monitor your latest transactions and their status.
            </p>
          </div>

          {/* Search/Filter Mockup */}
          <div className="flex gap-2">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search ID..."
                className="pl-10 pr-4 py-2 bg-gray-50 dark:bg-black/20 border-none rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-[#0F5935]/20 outline-none w-full md:w-56"
              />
            </div>
            <button className="p-2 bg-gray-50 dark:bg-black/20 text-gray-500 dark:text-gray-400 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-white/5 text-gray-400 dark:text-gray-500 text-[11px] uppercase tracking-wider border-b border-gray-100 dark:border-gray-800">
                <th className="px-6 py-4 font-bold">Agreement Details</th>
                <th className="px-6 py-4 font-bold">Counterparty</th>
                <th className="px-6 py-4 font-bold">Amount</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {recentAgreements.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          item.type === "buying"
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                            : "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
                        }`}
                      >
                        {item.type === "buying" ? (
                          <ArrowDownLeft className="w-4 h-4" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0D1B3E] dark:text-white group-hover:text-[#0F5935] dark:group-hover:text-[#00C48C] transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400 font-mono mt-0.5">
                          {item.id} • {item.date}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 text-[10px] flex items-center justify-center font-bold text-gray-500 dark:text-gray-300">
                        {item.counterparty.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {item.counterparty}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-[#0D1B3E] dark:text-white">
                      ₦ {item.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border capitalize ${getStatusColor(item.status)}`}
                    >
                      {item.status === "completed" && (
                        <CheckCircle2 className="w-3 h-3" />
                      )}
                      {item.status === "disputed" && (
                        <AlertCircle className="w-3 h-3" />
                      )}
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-[#0D1B3E] dark:hover:text-white transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex justify-center">
          <Link
            to="/dashboard/agreements"
            className="text-xs font-bold text-gray-500 hover:text-[#0F5935] dark:hover:text-[#00C48C] transition-colors"
          >
            View All Transactions
          </Link>
        </div>
      </div>
    </div>
  );
};

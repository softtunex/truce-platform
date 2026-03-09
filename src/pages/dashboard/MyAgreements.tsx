import React, { useState } from "react";
import {
  Search,
  Filter,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle2,
  AlertCircle,
  Shield,
  Calendar,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

export const MyAgreements = () => {
  const [activeTab, setActiveTab] = useState("all");

  // MOCK DATA (Extended)
  const agreements = [
    {
      id: "TR-8832",
      title: "Iphone 15 Pro Max - 256GB",
      counterparty: "Gadget World Ltd",
      amount: "1,250,000",
      status: "active",
      date: "Oct 24, 2025",
      type: "buying",
      description: "Brand new device, sealed in box. Delivery via DHL.",
    },
    {
      id: "TR-9921",
      title: "Web Development Service",
      counterparty: "John Doe Design",
      amount: "450,000",
      status: "pending",
      date: "Oct 22, 2025",
      type: "selling",
      description: "50% upfront for e-commerce website development.",
    },
    {
      id: "TR-7721",
      title: "Macbook Air M2",
      counterparty: "Tech Haven",
      amount: "950,000",
      status: "completed",
      date: "Oct 15, 2025",
      type: "buying",
      description: "Used, good condition. Includes original charger.",
    },
    {
      id: "TR-1102",
      title: "Consultation Fee",
      counterparty: "Sarah Smith",
      amount: "50,000",
      status: "disputed",
      date: "Sep 30, 2025",
      type: "selling",
      description: "Hourly consultation for marketing strategy.",
    },
    {
      id: "TR-4439",
      title: "Nike Air Jordan 1",
      counterparty: "Kicks Store",
      amount: "120,000",
      status: "completed",
      date: "Sep 12, 2025",
      type: "buying",
      description: "Size 43, Red/Black colorway.",
    },
  ];

  // Filtering Logic
  const filteredAgreements =
    activeTab === "all"
      ? agreements
      : agreements.filter((a) => a.status === activeTab);

  // Status Badge Helper
  const getStatusBadge = (status: string) => {
    const styles = {
      active:
        "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800",
      pending:
        "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800",
      completed:
        "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800",
      disputed:
        "bg-red-50 text-red-700 border-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800",
    };

    const icons = {
      active: <Shield className="w-3 h-3" />,
      pending: <Clock className="w-3 h-3" />,
      completed: <CheckCircle2 className="w-3 h-3" />,
      disputed: <AlertCircle className="w-3 h-3" />,
    };

    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border capitalize ${styles[status as keyof typeof styles]}`}
      >
        {icons[status as keyof typeof styles]}
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-[900] text-[#0D1B3E] dark:text-white">
            My Agreements
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Manage and track all your secure transactions.
          </p>
        </div>
        <Link
          to="/"
          className="bg-[#0F5935] dark:bg-[#00C48C] text-white dark:text-[#0D1B3E] px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#0b4629] dark:hover:bg-[#00a374] transition-all shadow-lg shadow-green-900/20 dark:shadow-none flex items-center gap-2"
        >
          Create New Truce
        </Link>
      </div>

      {/* --- FILTERS & SEARCH --- */}
      <div className="bg-white dark:bg-[#1E293B] p-2 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between gap-4">
        {/* Tabs */}
        <div className="flex p-1 bg-gray-50 dark:bg-black/20 rounded-xl overflow-x-auto scrollbar-hide">
          {["all", "active", "pending", "completed", "disputed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-bold capitalize transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "bg-white dark:bg-[#0D1B3E] text-[#0F5935] dark:text-[#00C48C] shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 px-2">
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search title, ID, or user..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-black/20 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0F5935]/20 outline-none text-gray-700 dark:text-gray-200"
            />
          </div>
          <button className="p-2 bg-gray-50 dark:bg-black/20 text-gray-500 dark:text-gray-400 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* --- AGREEMENTS LIST --- */}
      <div className="space-y-4">
        {filteredAgreements.map((item) => (
          <div
            key={item.id}
            className="group bg-white dark:bg-[#1E293B] p-5 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#0F5935]/30 dark:hover:border-[#00C48C]/30 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Left: Icon & Title */}
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl mt-1 ${
                    item.type === "buying"
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                  }`}
                >
                  {item.type === "buying" ? (
                    <ArrowDownLeft className="w-5 h-5" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5" />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-[#0D1B3E] dark:text-white group-hover:text-[#0F5935] dark:group-hover:text-[#00C48C] transition-colors">
                      {item.title}
                    </h3>
                    {getStatusBadge(item.status)}
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-4 mt-2 text-xs font-medium text-gray-400">
                    <span className="flex items-center gap-1">
                      <Shield className="w-3 h-3" /> ID: {item.id}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                    <span className="text-[#0D1B3E] dark:text-gray-300 font-bold">
                      vs. {item.counterparty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Amount & Action */}
              <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto border-t md:border-none border-gray-100 dark:border-gray-800 pt-4 md:pt-0 mt-2 md:mt-0">
                <div className="text-right">
                  <p className="text-xs text-gray-400 uppercase font-bold">
                    Amount Locked
                  </p>
                  <p className="text-xl font-[900] text-[#0D1B3E] dark:text-white">
                    ₦ {item.amount}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button className="p-2 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-400 hover:text-[#0D1B3E] dark:hover:text-white transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-400 hover:text-[#0D1B3E] dark:hover:text-white transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredAgreements.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-[#1E293B] rounded-3xl border border-dashed border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-lg font-bold text-[#0D1B3E] dark:text-white">
              No agreements found
            </h3>
            <p className="text-gray-500 text-sm">
              Try changing the filter or create a new agreement.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

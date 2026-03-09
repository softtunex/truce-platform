import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  ShieldCheck,
  Wallet,
  Settings,
  Users,
  Gavel,
  LogOut,
} from "lucide-react";
import { cn } from "../../lib/utils";

export const Sidebar = () => {
  const { user, logout } = useAuth();
  const isAdmin = user?.role === "admin";

  // Define Menus based on Role
  const userMenu = [
    { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
    { name: "My Agreements", path: "/dashboard/agreements", icon: ShieldCheck },
    { name: "Wallet", path: "/dashboard/wallet", icon: Wallet },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
  ];

  const adminMenu = [
    { name: "Admin Console", path: "/admin", icon: LayoutDashboard },
    { name: "User Management", path: "/admin/users", icon: Users },
    { name: "Disputes", path: "/admin/disputes", icon: Gavel },
    { name: "System Settings", path: "/admin/settings", icon: Settings },
  ];

  const menuItems = isAdmin ? adminMenu : userMenu;

  return (
    <div
      className={cn(
        "h-screen w-64 flex flex-col border-r fixed left-0 top-0 transition-colors duration-300 z-50",
        isAdmin
          ? "bg-[#0D1B3E] text-white border-blue-900"
          : "bg-white text-gray-800 border-gray-200",
      )}
    >
      {/* Brand Logo */}
      <div className="h-20 flex items-center px-8 border-b border-opacity-10 border-gray-500">
        <h1 className="text-2xl font-[900] tracking-tight">
          Truce
          <span className={isAdmin ? "text-blue-400" : "text-[#0F5935]"}>
            .
          </span>
        </h1>
        {isAdmin && (
          <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded ml-2 uppercase font-bold tracking-wider">
            Admin
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-8 px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard" || item.path === "/admin"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all",
                isActive
                  ? isAdmin
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50"
                    : "bg-[#0F5935] text-white shadow-lg shadow-green-900/20"
                  : "hover:bg-gray-100/10 opacity-70 hover:opacity-100",
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* User Footer */}
      <div className="p-4 border-t border-opacity-10 border-gray-500">
        <div className="flex items-center gap-3 mb-4 px-2">
          <img
            src={user?.avatar}
            alt="User"
            className="w-9 h-9 rounded-full bg-gray-200 border-2 border-white/10"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">{user?.name}</p>
            <p className="text-xs opacity-60 truncate">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-opacity-20 border-gray-500 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors text-xs font-bold uppercase tracking-wide"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </div>
  );
};

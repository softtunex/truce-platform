import React, { JSX, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Outlet,
  Navigate,
} from "react-router-dom";

// Contexts
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

// Layouts
import { MainLayout } from "./layouts/WebsiteLayout";
import { UserLayout } from "./layouts/backoffice/UserLayout"; // Updated Layout

// Marketing Pages
import { Home } from "./pages/website/Home";
import { About } from "./pages/website/About";
import { Transactions } from "./pages/website/Transactions";
import { Features } from "./pages/website/Features";
import { Testimonials } from "./pages/website/Testimonials";
import { Contact } from "./pages/website/Contact";

// Auth & Dashboard Pages
import { LoginPage } from "./pages/auth/LoginPage";
import { Overview } from "./pages/dashboard/Overview"; // Real Dashboard
import { MyAgreements } from "./pages/dashboard/MyAgreements";

// Placeholder for Admin (We will build this next)
const AdminOverview = () => (
  <h1 className="text-2xl font-bold text-white">Admin Console</h1>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- LAYOUT WRAPPERS ---

// Wrapper for Marketing Pages (Adds Nav + Footer)
const WebsiteLayoutWrapper = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

// Role Guard
const RoleRoute = ({
  children,
  allowedRole,
}: {
  children: JSX.Element;
  allowedRole: "user" | "admin";
}) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return null; // Or a loading spinner

  if (!user) return <Navigate to="/login" />;

  if (user.role !== allowedRole) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/dashboard"} />;
  }
  return children;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* 1. ThemeProvider wraps everything for Dark Mode */}
      <ThemeProvider>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            {/* --- MARKETING WEBSITE ROUTES --- */}
            <Route element={<WebsiteLayoutWrapper />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/features" element={<Features />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            {/* --- AUTH ROUTES --- */}
            <Route path="/login" element={<LoginPage />} />

            {/* --- USER DASHBOARD ROUTES --- */}
            {/* Uses UserLayout (Sidebar + Header + Dark Mode) */}
            <Route path="/dashboard" element={<UserLayout />}>
              <Route
                index
                element={
                  <RoleRoute allowedRole="user">
                    <Overview />
                  </RoleRoute>
                }
              />
              <Route
                path="agreements"
                element={
                  <RoleRoute allowedRole="user">
                    <MyAgreements />
                  </RoleRoute>
                }
              />
              <Route path="wallet" element={<div>My Wallet</div>} />
              <Route path="settings" element={<div>Settings</div>} />
            </Route>

            {/* --- ADMIN DASHBOARD ROUTES --- */}
            {/* We can use UserLayout here too, or a separate AdminLayout later */}
            <Route path="/admin" element={<UserLayout />}>
              <Route
                index
                element={
                  <RoleRoute allowedRole="admin">
                    <AdminOverview />
                  </RoleRoute>
                }
              />
              <Route path="users" element={<div>User Management</div>} />
              <Route path="disputes" element={<div>Disputes</div>} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

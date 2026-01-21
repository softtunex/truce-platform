import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout.tsx";
import { Home } from "./pages/Home.tsx";
import { Transactions } from "./pages/Transactions.tsx";
import { Features } from "./pages/Features.tsx";
import { Testimonials } from "./pages/Testimonials.tsx";
import { Contact } from "./pages/Contact.tsx";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/features" element={<Features />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

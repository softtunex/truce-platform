
import React, { ReactNode } from 'react';
import { Nav } from '../components/Nav.tsx';
import { Footer } from '../components/Footer.tsx';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

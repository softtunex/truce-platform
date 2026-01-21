import React from "react";
import { PageHeader } from "../components/PageHeader.tsx";
import { TestimonialSection } from "../components/TestimonialSection.tsx";
import { ValueProtectionSection } from "../components/ValueProtectionSection.tsx";

export const Testimonials: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Trust & Stories"
        subtitle="See how Truce is building a public layer of verified human trust across Africa, one secure transaction at a time."
        theme="gray"
      />
      <TestimonialSection />
      <ValueProtectionSection />
    </div>
  );
};

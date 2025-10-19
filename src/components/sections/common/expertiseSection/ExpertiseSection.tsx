// ExpertiseSection.tsx
import React from "react";

interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
}

interface ExpertiseSectionProps {
  title?: string;
  subtitle?: string;
  expertiseItems: ExpertiseItem[];
}

// expertiseSection.ts
export const expertiseSection = {
  section: "py-24 px-[4%] bg-white",
  container: "container mx-auto",
  title: "text-[2.8rem] font-bold text-center text-primary mb-4",
  subtitle: "text-[1.2rem] text-text mb-12 max-w-[900px] text-center mx-auto",
  grid: "grid grid-cols-1 md:grid-cols-2  gap-8 mt-8",
  card: "bg-background p-10 rounded-[12px] border-l-4 border-secondary transition-all duration-300 hover:translate-x-2.5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]",
  number: "text-[0.85rem] font-semibold text-secondary uppercase tracking-[1.5px] mb-2",
  cardTitle: "text-[1.5rem] font-semibold text-primary mb-4",
  cardDescription: "text-[1rem] text-text leading-[1.8]",
};


const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  title = "Our Areas of Expertise",
  subtitle = "Comprehensive technology solutions designed to transform how your business operates",
  expertiseItems,
}) => (
  <section className={expertiseSection.section}>
    <div className={expertiseSection.container}>
      <h2 className={expertiseSection.title}>{title}</h2>
      <p className={expertiseSection.subtitle}>{subtitle}</p>
      <div className={expertiseSection.grid}>
        {expertiseItems.map((item, idx) => (
          <div key={idx} className={expertiseSection.card}>
            <div className={expertiseSection.number}>{item.number}</div>
            <h3 className={expertiseSection.cardTitle}>{item.title}</h3>
            <p className={expertiseSection.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExpertiseSection;

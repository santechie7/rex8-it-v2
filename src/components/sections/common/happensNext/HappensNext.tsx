// HappensNext.tsx
import React from "react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HappensNextProps {
  title?: string;
  description?: string;
  benefits?: Benefit[];
}

// whySectionStyles.ts
export const whySectionStyles = {
  section: "py-[100px] px-[4%] bg-[var(--warm)]",
  container: "max-w-[1200px] mx-auto text-center",
  heading: "text-4xl md:text-5xl font-bold text-[var(--primary)] mb-6",
  description: "text-lg md:text-xl text-[var(--text)] mb-12 leading-relaxed",
  grid: "grid gap-10 md:grid-cols-3",
  card: "bg-white p-10 rounded-xl border border-[var(--border)] transition-all hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] flex flex-col items-center space-y-6",
  icon: "w-[70px] h-[70px] bg-[var(--light)] rounded-full flex items-center justify-center text-2xl mb-6",
  cardTitle: "text-xl font-semibold text-[var(--primary)] mb-2",
  cardDescription: "text-sm text-[var(--text)] leading-[1.7] m-0",
};


const HappensNext: React.FC<HappensNextProps> = ({
  title = "What Happens Next?",
  description = "After you submit your inquiry, here's what you can expect from the Rex Eight IT team:",
  benefits = [],
}) => {
  return (
    <section className={whySectionStyles.section}>
      <div className={whySectionStyles.container}>
        <h2 className={whySectionStyles.heading}>{title}</h2>
        <p className={whySectionStyles.description}>{description}</p>

        <div className={whySectionStyles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={whySectionStyles.card}>
              <div className={whySectionStyles.icon}>{benefit.icon}</div>
              <h4 className={whySectionStyles.cardTitle}>{benefit.title}</h4>
              <p className={whySectionStyles.cardDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappensNext;

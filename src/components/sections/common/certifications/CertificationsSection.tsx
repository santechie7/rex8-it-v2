// CertificationsSection.tsx
import React from "react";

interface Certification {
  title: string;
  description: string;
}

interface CertificationsSectionProps {
  title?: string;
  certifications: Certification[];
}

// certificationsSection.ts
export const certificationsSection = {
  section: "py-20 px-[4%] bg-primary text-white text-center",
  container: "container mx-auto",
  heading: "text-[2.5rem] font-bold mb-12",
  badges: "flex flex-wrap justify-center gap-12",
  badge: "bg-foreground bg-opacity-10 border border-popover rounded-[12px] p-10 min-w-[250px] transition-all duration-300 hover: bg-popover-foreground",
  badgeTitle: "text-[1.5rem] text-secondary font-semibold mb-2",
  badgeDescription: "text-[0.95rem] opacity-90",
};


const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  title = "Certifications & Recognition",
  certifications,
}) => (
  <section className={certificationsSection.section}>
    <div className={certificationsSection.container}>
      <h2 className={certificationsSection.heading}>{title}</h2>
      <div className={certificationsSection.badges}>
        {certifications.map((cert, idx) => (
          <div key={idx} className={certificationsSection.badge}>
            <h3 className={certificationsSection.badgeTitle}>{cert.title}</h3>
            <p className={certificationsSection.badgeDescription}>
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;

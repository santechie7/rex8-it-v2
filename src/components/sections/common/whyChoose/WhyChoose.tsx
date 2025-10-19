import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyChooseProps {
  heading?: string;
  description?: string;
  features: Feature[];
}

const whyChooseStyles = {
  section: "bg-foreground text-white py-24 px-[4%]",
  container: "max-w-[1400px] mx-auto text-center",
  heading: "text-[2.8rem] font-bold mb-6",
  description: "text-[1.2rem] opacity-95 leading-[1.8] max-w-[900px] mx-auto mb-12",
  featuresGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16",
  featureCard: "bg-white/10 p-10 rounded-[12px] border border-white/20 transition-all duration-300 hover:bg-white/15 hover:-translate-y-1",
  featureIcon: "text-[3rem] mb-6 block",
  featureTitle: "text-[1.2rem] font-semibold mb-4",
  featureDescription: "text-[0.95rem] opacity-90 leading-[1.6]",
};

const WhyChoose: React.FC<WhyChooseProps> = ({
  heading,
  description,
  features,
}) => (
  <section className={whyChooseStyles.section} id="about">
    <div className={whyChooseStyles.container}>
      <h2 className={whyChooseStyles.heading}>{heading}</h2>
      <p className={whyChooseStyles.description}>{description}</p>

      <div className={whyChooseStyles.featuresGrid}>
        {features.map((feature, idx) => (
          <div key={idx} className={whyChooseStyles.featureCard}>
            <span className={whyChooseStyles.featureIcon}>{feature.icon}</span>
            <h4 className={whyChooseStyles.featureTitle}>{feature.title}</h4>
            <p className={whyChooseStyles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;

import React from "react";

const missionSection = {
  section: "py-24 px-[4%] bg-white",
  container: "container mx-auto text-center",
  heading: "text-[2.8rem] text-primary font-bold mb-8",
  statement: "text-[1.4rem] bg-background text-text leading-[1.8] p-10 bg-light rounded-[12px] border-l-6 border-secondary italic mb-12",
  description: "text-[1.15rem] text-text leading-[1.9] max-w-[900px] mx-auto",
};

interface MissionSectionProps {
  heading?: string;
  statement: string;
  description: string;
}

const MissionSection: React.FC<MissionSectionProps> = ({
  heading = "Our Mission",
  statement,
  description,
}) => (
  <section className={missionSection.section}>
    <div className={missionSection.container}>
      <h2 className={missionSection.heading}>{heading}</h2>
      <div className={missionSection.statement}>{statement}</div>
      <p className={missionSection.description}>{description}</p>
    </div>
  </section>
);

export default MissionSection;

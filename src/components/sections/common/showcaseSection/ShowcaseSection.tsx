import React from "react";

interface ShowcaseItem {
  caption: string;
  svgContent: React.ReactNode;
}

interface ShowcaseSectionProps {
  headerLabel?: string;
  headerTitle?: string;
  headerDescription?: string;
  items: ShowcaseItem[];
}

const showcaseSection = {
  section: "bg-white py-24 px-[4%]",
  container: "container",
  sectionHeader: "text-center max-w-[800px] mx-auto mb-12",
  sectionLabel: "text-[0.85rem] uppercase tracking-[2px] text-secondary font-semibold mb-4",
  sectionTitle: "text-[2.8rem] font-bold text-primary mb-6 leading-[1.2] tracking-[-0.5px]",
  sectionDescription: "text-[1.15rem] text-text leading-[1.8]",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12",
  item: "relative rounded-[12px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105",
  itemImage: "w-full h-full object-cover block",
  caption: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white py-8 px-4 text-[0.9rem] text-center",
};

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  headerLabel = "Our Work",
  headerTitle = "Real Solutions for Real Businesses",
  headerDescription = "We deliver actionable insights through beautiful, functional dashboards and automated workflows that drive results.",
  items,
}) => (
  <section className={showcaseSection.section}>
    <div className={showcaseSection.container}>
      <div className={showcaseSection.sectionHeader}>
        <div className={showcaseSection.sectionLabel}>{headerLabel}</div>
        <h2 className={showcaseSection.sectionTitle}>{headerTitle}</h2>
        <p className={showcaseSection.sectionDescription}>{headerDescription}</p>
      </div>

      <div className={showcaseSection.grid}>
        {items.map((item, index) => (
          <div key={index} className={showcaseSection.item}>
            <div className={showcaseSection.itemImage}>{item.svgContent}</div>
            <div className={showcaseSection.caption}>{item.caption}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ShowcaseSection;

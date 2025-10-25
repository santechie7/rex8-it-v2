import React from "react";

interface HeroCta {
  text: string;
  href: string;
}

interface HeroDetails {
  imageKey: string | { src: string };
  heading?: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
}

const heroClasses = {
  heroVisual: "relative flex align-center justify-center",
  heroContainer: "container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10 px-4 md:px-0",
  heroContent: "grid grid-cols-1 gap-4 items-center",
  heroTitle: "text-[2.5rem] md:text-[3.5rem] leading-[1.15] text-primary font-bold -tracking-[1px]",
  heroHighlight: "relative inline-block text-secondary",
  heroSubtitle: "text-[1.25rem] text-[var(--text)] leading-[1.7] font-normal",
  heroDescription: "text-[1.05rem] text-[var(--text)] mb-10 leading-[1.8] p-6 bg-background bg-opacity-70 rounded-lg border-l-4 border-[var(--secondary)]",
  heroCTA: "flex gap-6 flex-col md:flex-row items-center",
  heroBefore: "absolute top-[-30%] right-[-15%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(201,163,106,0.12)_0%,transparent_70%)]",

  btnPrimaryClasses :
  "bg-[var(--primary)] text-white px-10 py-4 rounded-[6px] font-semibold text-base border-2 border-[var(--primary)] inline-block transition-all duration-300 transform hover:bg-[var(--dark)] hover:border-[var(--dark)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(45,62,80,0.2)]",

 btnSecondaryClasses :
  "bg-transparent text-[var(--primary)] px-10 py-4 rounded-[6px] font-semibold text-base border-2 border-[var(--primary)] inline-block transition-all duration-300 hover:bg-[var(--primary)] hover:text-white",

};

const HeroSection: React.FC<HeroDetails> = ({
  imageKey,
  heading = "Transform your business with expert Power Platform consulting",
  highlight = "expert Power Platform",
  subtitle = "We are the experts, so you don't have to be!",
  description = `Big companies offer oversimplified "low-code" solutions for small to medium-sized businesses. You and I know it's not that straightforward. Creating reliable, actionable dashboards, apps, and automated processes requires expertise, even with "low-code" tools.`,
  primaryCta = { text: "Schedule Consultation", href: "#contact" },
  secondaryCta = { text: "Explore Services", href: "#services" },
  
  
}) => {
  const [beforeHighlight, afterHighlight] = heading.split(highlight);
  return (
    <section className="relative overflow-hidden py-[60px] px-[4%] bg-[linear-gradient(135deg,var(--warm)_0%,var(--light)_100%)]" id="home">
      <div className={heroClasses.heroContainer}>
        <div className={heroClasses.heroContent}>
          <h1 className={heroClasses.heroTitle} >
            {beforeHighlight}
            <span className={heroClasses.heroHighlight}>{highlight}</span>
            {afterHighlight}
          </h1>
          <p className={heroClasses.heroSubtitle}>
            <strong>{subtitle}</strong>
          </p>
          <div className={heroClasses.heroDescription}>
            <p>{description}</p>
          </div>
          <div className={heroClasses.heroCTA}>
            <a href={primaryCta.href} className={heroClasses.btnPrimaryClasses}>
              {primaryCta.text}
            </a>
            <a href={secondaryCta.href} className={heroClasses.btnSecondaryClasses}>
              {secondaryCta.text}
            </a>
          </div>
        </div>

        <div className={heroClasses.heroVisual} >
          <svg
            className="w-full max-w-[550px] h-auto rounded-[20px] border-8 border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] animate-floatImage"
            viewBox="0 0 500 500"
          >
            {imageKey && (
              <image
                href={typeof imageKey === "string" ? imageKey : imageKey.src}
                x="0"
                y="0"
                width="500"
                height="500"
              />
            )}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

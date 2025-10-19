import React from "react";

interface CtaSectionProps {
  heading?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

const ctaSectionStyles = {
  section: "py-24 px-[4%] text-center bg-gradient-to-tr from-warm to-light",
  container: "max-w-[900px] mx-auto",
  heading: "text-[2.8rem] font-bold text-primary mb-6",
  description: "text-[1.2rem] text-text leading-[1.7] mb-12",
  buttons: "flex justify-center flex-col md:flex-row gap-6",
   btnPrimaryClasses :
  "bg-[var(--primary)] text-white px-10 py-4 rounded-[6px] font-semibold text-base border-2 border-[var(--primary)] inline-block transition-all duration-300 transform hover:bg-[var(--dark)] hover:border-[var(--dark)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(45,62,80,0.2)]",

 btnSecondaryClasses :
  "bg-transparent text-[var(--primary)] px-10 py-4 rounded-[6px] font-semibold text-base border-2 border-[var(--primary)] inline-block transition-all duration-300 hover:bg-[var(--primary)] hover:text-white",

};

const CtaSection: React.FC<CtaSectionProps> = ({
  heading = "Ready to Transform Your Data Into Action?",
  description = "Let's discuss how we can help you unlock the full potential of your business data with Microsoft Power Platform solutions. Schedule a free consultation today.",
  primaryCtaText = "Schedule Free Consultation",
  primaryCtaHref = "/contact",
  secondaryCtaText = "",
  secondaryCtaHref = "",
}) => (
  <section className={ctaSectionStyles.section} id="contact">
    <div className={ctaSectionStyles.container}>
      <h2 className={ctaSectionStyles.heading}>{heading}</h2>
      <p className={ctaSectionStyles.description}>{description}</p>
      <div className={ctaSectionStyles.buttons}>
        <a href={primaryCtaHref} className={ctaSectionStyles.btnPrimaryClasses}>
          {primaryCtaText}
        </a>
        {secondaryCtaHref && <a href={secondaryCtaHref} className={ctaSectionStyles.btnSecondaryClasses}>
          {secondaryCtaText}
        </a>}
      </div>
    </div>
  </section>
);

export default CtaSection;

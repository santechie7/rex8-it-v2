import React from "react";

interface Service {
  id: string;
  label: string;
}

interface TaglineBannerProps {
  headline: string;
  content: string;
  services?: Service[];
}
export const taglineBanner = {
  section:
    "relative overflow-hidden text-white text-center py-[80px] px-[4%] pb-[60px] bg-gradient-to-br from-[var(--primary)] to-[var(--dark)]",
  backgroundCircle:
    "absolute -top-1/2 -right-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,163,106,0.1)_0%,transparent_70%)] rounded-full pointer-events-none select-none z-0",
  heading: "text-[2.5rem] font-bold mb-4 italic",
  paragraph: "text-[1.2rem] opacity-95 max-w-[900px] mx-auto",
  servicesNav: "flex gap-4 justify-center flex-wrap mt-6",
  serviceLink:
    "bg-[rgba(255,255,255,0.1)] text-white px-4 py-2 rounded-md text-sm border border-[rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:translate-y-[-2px]",
};

const TaglineBanner: React.FC<TaglineBannerProps> = ({
  headline,
  content,
  services,
}) => (
  <section className={taglineBanner.section}>
    <span className={taglineBanner.backgroundCircle} />
    <h2 className={taglineBanner.heading}>{headline}</h2>
    <p className={taglineBanner.paragraph}>{content}</p>
    {services && services.length > 0 && (
      <div className={taglineBanner.servicesNav}>
        {services.map((service) => (
          <a
            key={service.id}
            href={`#${service.id}`}
            className={taglineBanner.serviceLink}
          >
            {service.label}
          </a>
        ))}
      </div>
    )}
  </section>
);

export default TaglineBanner;

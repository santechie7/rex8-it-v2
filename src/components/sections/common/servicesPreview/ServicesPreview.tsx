import Link from "next/link";
import React from "react";

interface ServiceBenefit {
  text: string;
}

interface Service {
  id?:string
  number?: string;
  title: string;
  tagline: string;
  description: string;
  benefits: ServiceBenefit[];
}

interface ServicesPreviewProps {
  headerLabel?: string;
  headerTitle?: string;
  headerDescription?: string;
  services: Service[];
}

const servicesPreview = {
  servicesSection: "bg-light py-24 px-[4%]",
  sectionHeader: "text-center max-w-[800px] mx-auto mb-16",
  sectionLabel: "text-[0.85rem] uppercase tracking-[2px] text-secondary font-semibold mb-4",
  sectionTitle: "text-[2.8rem] font-bold text-primary mb-6 leading-[1.2] tracking-[-0.5px]",
  sectionDescription: "text-[1.15rem] text-text leading-[1.8]",
  servicesGrid: "max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10",
  serviceCard: "group bg-white p-12 rounded-[12px] border border-border relative overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:border-secondary",
  serviceCardBefore: "absolute top-0 left-0 w-full h-[4px] bg-secondary scale-x-0 origin-left transition-transform duration-400 ease-in-out group-hover:scale-x-100",
  serviceNumber: "text-[0.85rem] uppercase tracking-[1.5px] text-secondary font-semibold mb-4",
  serviceTitle: "text-[1.5rem] font-semibold text-primary mb-2",
  serviceTagline: "italic text-secondary text-[1.05rem] mb-4",
  serviceDescription: "text-[0.95rem] text-text leading-[1.7] mb-6",
  serviceBenefits: "flex flex-col gap-3 mt-6",
  benefitItem: "flex items-start gap-3 text-[0.9rem] text-text before:content-['✓'] before:text-secondary before:font-bold before:text-[1.1rem] before:flex-shrink-0",
};

const ServicesPreview: React.FC<ServicesPreviewProps> = ({
  headerLabel,
  headerTitle,
  headerDescription,
  services,
}) => (
  <section className={servicesPreview.servicesSection} id="services">
   
    <div className={servicesPreview.sectionHeader}>
      <div className={servicesPreview.sectionLabel}>{headerLabel}</div>
      <h2 className={servicesPreview.sectionTitle}>{headerTitle}</h2>
      <p className={servicesPreview.sectionDescription}>{headerDescription}</p>
    </div>

    <div className={servicesPreview.servicesGrid}>
      {services?.map((service, idx) => (
         <Link
              key={service.id}
              href={`/services?id=${service.id}`}
            >
              <div key={idx} className={servicesPreview.serviceCard}>
          {/* ::before bar */}
          <span className={servicesPreview.serviceCardBefore}></span>

          {/* <div className={servicesPreview.serviceNumber}>{service?.number}</div> */}
          <h3 className={servicesPreview.serviceTitle}>{service?.title}</h3>
          <p className={servicesPreview.serviceTagline}>{service?.tagline}</p>
          <p className={servicesPreview.serviceDescription}>{service?.description}</p>
          <div className={servicesPreview.serviceBenefits}>
            {service && service?.benefits.map((benefit, i) => (
              <div key={i} className={servicesPreview.benefitItem}>
                {benefit.text}
              </div>
            ))}
          </div>
        </div>
            </Link>
        
      ))}
    </div>
  </section>
);

export default ServicesPreview;

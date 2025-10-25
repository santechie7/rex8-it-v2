'use client';

import React, { useEffect } from "react";
// import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface DeliverableCard {
  icon: string;
  title: string;
  description: string;
}

interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  clientValues: ValueItem[];
  deliverables: DeliverableCard[];
  useCases: string[];
}

interface ServicesSectionProps {
  services: Service[];
  highlightedId?: string;
}

export const servicesSection = {
  section: "bg-white container mx-auto px-[4%] py-24",
  serviceDetail: "mb-[120px] scroll-mt-[100px] transition-all duration-300",
  serviceDetailHighlighted: "mb-[120px] scroll-mt-[100px] ring-4 ring-primary/20 rounded-2xl p-8 bg-gradient-to-br from-primary/5 to-transparent",
  header: "text-center max-w-[900px] mx-auto space-y-4",
  number: "text-sm text-secondary font-semibold uppercase tracking-[2px]",
  title: "text-4xl font-bold text-primary leading-tight",
  tagline: "service-tagline italic text-lg text-secondary font-medium",
  description: "service-description text-gray-700 text-base leading-relaxed",

  content: "service-content grid md:grid-cols-2 gap-8 my-10",
  card: "content-card bg-white p-6 rounded-lg shadow space-y-6",
  cardTitle: "text-xl font-semibold mb-3",
  cardDescription: "text-gray-700 leading-relaxed",

  valueList: "value-list space-y-4",
  valueItem: "value-item flex gap-4",
  valueIcon: "value-icon w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-white font-bold text-sm flex-shrink-0 mt-1",
  valueText: "",
  valueTitle: "font-semibold text-primary mb-1 text-base",
  valueDescription: "text-gray-700 text-sm leading-relaxed",

  deliverablesGrid: "deliverables-grid grid gap-4",
  deliverableCard: "deliverable-card flex items-start gap-3 bg-white p-4 rounded-lg border border-border transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md",
  deliverableIcon: "deliverable-icon text-2xl",
  deliverableTitle: "font-semibold text-primary mb-1 text-sm",
  deliverableDescription: "text-gray-700 text-sm leading-relaxed",

  useCasesSection: "use-cases-section bg-white p-6 rounded-lg border-2 border-dashed border-border mt-6",
  useCasesTitle: "text-xl font-semibold mb-3",
  useCasesList: "list-none pl-6 grid md:grid-cols-2 space-y-2 text-gray-700",
  useCasesItem: "relative pl-7 text-text text-[0.95rem] leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-[1.2rem]",
  
  backButton: "mb-8 inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors",
  serviceNav: "sticky top-20 bg-white/95 backdrop-blur-sm border-b border-border py-4 mb-8 z-10",
  serviceNavList: "flex flex-wrap gap-2 justify-center",
  serviceNavItem: "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer",
  serviceNavItemActive: "bg-primary text-white",
  serviceNavItemInactive: "bg-gray-100 text-gray-700 hover:bg-gray-200",
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  services, 
  highlightedId 
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Auto-scroll to highlighted service on mount
  useEffect(() => {
    const id = searchParams.get('id') || highlightedId;
    if (id) {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [searchParams, highlightedId]);

  const scrollToService = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without page reload
      router.push(`/services?id=${id}`, { scroll: false });
    }
  };

  return (
    <section className={servicesSection.section}>
      {/* Back Button */}
      {/* {highlightedId && (
        <Link href="/" className={servicesSection.backButton}>
          <span>←</span>
          <span>Back to Home</span>
        </Link>
      )} */}

      {/* Service Navigation */}
      {/* <nav className={servicesSection.serviceNav}>
        <div className={servicesSection.serviceNavList}>
          {services?.map((service) => (
            <button
              key={service.id}
              onClick={() => scrollToService(service.id)}
              className={`${servicesSection.serviceNavItem} ${
                (searchParams.get('id') || highlightedId) === service.id
                  ? servicesSection.serviceNavItemActive
                  : servicesSection.serviceNavItemInactive
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
      </nav> */}

      {/* Services List */}
      {services?.map((service) => {
        const isHighlighted = (searchParams.get('id') || highlightedId) === service.id;
        
        return (
          <div 
            key={service.id} 
            id={service.id} 
            // className={
            //   isHighlighted
            //     ? servicesSection.serviceDetailHighlighted 
            //     : servicesSection.serviceDetail
            // }
            className={
                 servicesSection.serviceDetail
            }
          >
            {/* Header */}
            <div className={servicesSection.header}>
              <h2 className={servicesSection.title}>{service.title}</h2>
              <p className={servicesSection.tagline}>{service.tagline}</p>
              <p className={servicesSection.description}>{service.description}</p>
            </div>

            {/* Content */}
            <div className={servicesSection.content}>
              {/* Client Value */}
              <div className={servicesSection.card}>
                <h3 className={servicesSection.cardTitle}>Client Value</h3>
                <div className={servicesSection.valueList}>
                  {service?.clientValues?.map((val, i) => (
                    <div key={i} className={servicesSection.valueItem}>
                      <div className={servicesSection.valueIcon}>{val.icon}</div>
                      <div className={servicesSection.valueText}>
                        <strong className={servicesSection.valueTitle}>{val.title}</strong>
                        <p className={servicesSection.valueDescription}>{val.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className={servicesSection.card}>
                <h3 className={servicesSection.cardTitle}>What We Deliver</h3>
                <div className={servicesSection.deliverablesGrid}>
                  {service?.deliverables?.map((del, i) => (
                    <div key={i} className={servicesSection.deliverableCard}>
                      <span className={servicesSection.deliverableIcon}>{del.icon}</span>
                      <div>
                        <h4 className={servicesSection.deliverableTitle}>{del.title}</h4>
                        <p className={servicesSection.deliverableDescription}>{del.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className={servicesSection.useCasesSection}>
              <h4 className={servicesSection.useCasesTitle}>Common Use Cases</h4>
              <ul className={servicesSection.useCasesList}>
                {service?.useCases?.map((useCase, i) => (
                  <li className={servicesSection.useCasesItem} key={i}>{useCase}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ServicesSection;

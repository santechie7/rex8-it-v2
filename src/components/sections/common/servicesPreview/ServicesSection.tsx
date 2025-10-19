import React from "react";

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
}

export const servicesSection = {
  section: "bg-white container mx-auto px-[4%] py-24",
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
  valueText: "", // wrapper div for title+description
  valueTitle: "font-semibold text-primary mb-1 text-base",
  valueDescription: "text-gray-700 text-sm leading-relaxed",

  deliverablesGrid: "deliverables-grid grid gap-4",
  deliverableCard: "deliverable-card flex items-start gap-3 bg-white p-4 rounded-lg border border-border transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md",
  deliverableIcon: "deliverable-icon text-2xl",
  deliverableTitle: "font-semibold text-primary mb-1 text-sm",
  deliverableDescription: "text-gray-700 text-sm leading-relaxed",

  useCasesSection: "use-cases-section bg-white p-6 rounded-lg border-2 border-dashed border-border mt-6",
  useCasesTitle: "text-xl font-semibold mb-3",
  useCasesList: "list-disc pl-6 space-y-2 text-gray-700",
};


const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => (
  <section className={servicesSection.section}>
    {services.map((service) => (
      <div key={service.id} id={service.id} className="service-detail">
        {/* Header */}
        <div className={servicesSection.header}>
          <div className={servicesSection.number}>{service.number}</div>
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
              {service.clientValues.map((val, i) => (
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
              {service.deliverables.map((del, i) => (
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
            {service.useCases.map((useCase, i) => (
              <li key={i}>{useCase}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </section>
);

export default ServicesSection;

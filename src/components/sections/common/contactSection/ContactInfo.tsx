import React from "react";

interface InfoCard {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  note?: string;
}

interface ContactInfoProps {
  heading?: string;
  description?: string;
  infoCards: InfoCard[];
  availabilityTitle?: string;
  availabilityDescription?: React.ReactNode;
  availabilityNote?: React.ReactNode;
}

export const contactInfo = {
  wrapper: "contact-info sm:sticky top-[120px]  mx-auto space-y-6",
  heading: "text-[2.5rem] font-bold text-primary mb-6",
  description: "text-[1.1rem] text-text leading-[1.8] mb-12",

  infoCards: "flex flex-col gap-8",
  card: "info-card bg-background p-8 rounded-xl border-l-4 border-secondary transition-all duration-300 hover:translate-x-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
  cardHeader: "flex items-center gap-4 mb-4",
  icon: "info-icon w-[50px] h-[50px] bg-white rounded-lg flex items-center justify-center text-[1.5rem] flex-shrink-0",
  cardTitle: "text-[1.3rem] font-semibold text-primary",
  cardContent: "text-[1rem] text-text leading-[1.6]",
  cardLink: "text-secondary font-medium transition-colors hover:text-accent",
  cardNote: "mt-2 text-[0.95rem] font-semibold",

  availability: "bg-primary text-white p-8 rounded-xl mt-8",
  availabilityTitle: "text-[1.2rem]  font-semibold",
  availabilityDescription: "text-[0.95rem]",
  availabilityNote: "mt-2 text-[0.95rem] font-semibold",
};


const ContactInfo: React.FC<ContactInfoProps> = ({
  heading = "Get in Touch",
  description = "Whether you need a consultation, have questions about our services, or want to discuss a specific project, we're ready to help. Let's start a conversation about your business goals.",
  infoCards,
  availabilityTitle = "📅 Free Consultation Available",
  availabilityDescription = "Schedule a 30-minute consultation to discuss your project needs, challenges, and how we can help.",
  availabilityNote = <strong>No obligations. Just honest advice.</strong>,
}) => (
 <div className={contactInfo.wrapper}>
  <h2 className={contactInfo.heading}>{heading}</h2>
  <p className={contactInfo.description}>{description}</p>

  <div className={contactInfo.infoCards}>
    {infoCards.map(({ icon, title, content, note }, idx) => (
      <div key={idx} className={contactInfo.card}>
        <div className={contactInfo.cardHeader}>
          <div className={contactInfo.icon}>{icon}</div>
          <h3 className={contactInfo.cardTitle}>{title}</h3>
        </div>
        <p className={contactInfo.cardContent}>{content}</p>
        {note && <p className={contactInfo.cardNote}>{note}</p>}
      </div>
    ))}
  </div>

  <div className={contactInfo.availability}>
    <h4 className={contactInfo.availabilityTitle}>{availabilityTitle}</h4>
    <p className={contactInfo.availabilityDescription}>{availabilityDescription}</p>
    <p className={contactInfo.availabilityNote}>{availabilityNote}</p>
  </div>
</div>

);

export default ContactInfo;

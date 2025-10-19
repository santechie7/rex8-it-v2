import React from "react";

interface OwnerBadgeProps {
  companyName?: string;
  description?: string;
}

const ownerBadgeStyles = {
  section: "bg-primary text-white py-10 px-[4%] text-center",
  content: "max-w-[600px] mx-auto",
  companyName: "text-[1.8rem] text-secondary mb-2",
  description: "text-[1.1rem] opacity-90",
};

const OwnerBadgeSection: React.FC<OwnerBadgeProps> = ({
  companyName = "REX EIGHT L.L.C.",
  description = "Certified Veteran & Woman Owned Business | Empowering Small to Medium Businesses",
}) => (
  <section className={ownerBadgeStyles.section}>
    <div className={ownerBadgeStyles.content}>
      <h3 className={ownerBadgeStyles.companyName}>{companyName}</h3>
      <p className={ownerBadgeStyles.description}>{description}</p>
    </div>
  </section>
);

export default OwnerBadgeSection;

"use client";
import React from "react";

// footerData.ts

export const footerData = {
  brand: {
    name: "REX EIGHT IT",
    description:
      "Empowering small to medium-sized businesses with enterprise-level Power Platform solutions. We specialize in data engineering, business intelligence, and intelligent automation.",
    badge: {
      text: "Rex Eight L.L.C. | Veteran & Woman Owned Business",
    },
  },

  sections: [
    // {
    //   title: "Services",
    //   links: [
    //     { label: "Data Engineering", href: "#services" },
    //     { label: "Business Intelligence", href: "#services" },
    //     { label: "App Development", href: "#services" },
    //     { label: "AI Automation", href: "#services" },
    //     { label: "Cloud Migration", href: "#services" },
    //   ],
    // },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
        // { label: "Case Studies", href: "#showcase" },
        // { label: "Careers", href: "#" },
      ],
    },
    // {
    //   title: "Resources",
    //   links: [
    //     { label: "Blog", href: "#" },
    //     { label: "Documentation", href: "#" },
    //     { label: "Support", href: "#" },
    //   ],
    // },
  ],

  footerBottom:
    "© 2025 Rex Eight L.L.C. All rights reserved. | Privacy Policy | Terms of Service",
};


const footerStyles = {
  section: "bg-primary text-white py-16 px-[4%]",
  container: "container mx-auto  grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 mb-12",
  brandHeading: "text-[1.6rem] font-semibold mb-4",
  brandDescription: "text-white/70 leading-[1.7] mb-6",
  brandBadge: "bg-[#c9a36a1a] px-4 py-2 rounded-[6px] border border-[#c9a36a4d] text-[0.85rem]",
  linksHeading: "text-[1rem] font-semibold text-secondary mb-6",
  link: "text-white/70 hover:text-white transition-colors text-[0.95rem]",
  linkItem: "mb-2",
  bottom: "container mx-auto pt-8 border-t border-white/10 text-center text-white/60 text-[0.9rem]",
};

const Footer: React.FC = () => (
  <footer className={footerStyles.section}>
    <div className={footerStyles.container}>
      {/* Brand Info */}
      <div>
        <h3 className={footerStyles.brandHeading}>{footerData.brand.name}</h3>
        <p className={footerStyles.brandDescription}>{footerData.brand.description}</p>
        <div className={footerStyles.brandBadge}>
          {footerData.brand.badge.text}
        </div>
      </div>

      {/* Footer Link Sections */}
      <>
      {footerData.sections.map((section, idx) => (
        <div key={idx}>
          <h4 className={footerStyles.linksHeading}>{section.title}</h4>
          <ul>
            {section.links.map((link, liIdx) => (
              <li key={liIdx} className={footerStyles.linkItem}>
                <a href={link.href} className={footerStyles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </>
    </div>

    {/* Footer Bottom Text */}
    <div className={footerStyles.bottom}>{footerData.footerBottom}</div>
  </footer>
);

export default Footer;

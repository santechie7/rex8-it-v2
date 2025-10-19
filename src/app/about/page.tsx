"use client";
import WhyChoose from "@/components/sections/common/whyChoose/WhyChoose";
import HEROIMAGE from "@/app/assets/images/rex_eight_it_head.jpg";
import TaglineBanner from "@/components/sections/common/taglineBanner/TaglineBanner";
import MissionSection from "@/components/sections/common/missionSection/MissionSection";
import ProblemSection from "@/components/sections/common/problemSection/ProblemSection";
import CertificationsSection from "@/components/sections/common/certifications/CertificationsSection";
import ExpertiseSection from "@/components/sections/common/expertiseSection/ExpertiseSection";
export default function about() {
  const bannerData = {
    headline: "About Rex Eight IT",
    content: `A veteran and woman-owned business dedicated to empowering small to medium-sized businesses with enterprise-level technology solutions`,
  };

  const missionData = {
    title: "Our Mission",
    statement:
      "Empowering small to medium-sized businesses with enterprise-level Power Platform solutions.",
    description: `At Rex Eight IT, we believe that every business deserves access to powerful technology solutions, regardless of size. We bridge the gap between complex enterprise tools and practical business needs, making advanced data analytics, automation, and AI accessible to organizations that need them most. We're not just consultants—we're partners in your success, committed to delivering solutions that transform how you work.`,
  };

  const whyChooseData = {
    heading: "Why Choose Rex Eight IT?",
    description:
      "We're not a faceless corporation. We're a dedicated team that understands your unique challenges and brings both technical expertise and personalized service to every engagement.",
    features: [
      {
        icon: "🎖️",
        title: "Veteran & Woman Owned",
        description:
          "Discipline, integrity, and diverse perspectives in every project",
      },
      {
        icon: "🎓",
        title: "Microsoft Certified",
        description:
          "Advanced certifications in Power Platform and Azure services",
      },
      {
        icon: "⚡",
        title: "Rapid Delivery",
        description:
          "Solutions in days, not months, with our low-code expertise",
      },
      {
        icon: "🤝",
        title: "True Partnership",
        description:
          "Direct access to our expert team who understand your business",
      },
    ],
  };
  const storySectionData = {
    IMAGE: HEROIMAGE,
    heading: "Our Story",
    paragraphs: [
      "Rex Eight IT was founded on a simple belief: small and medium-sized businesses deserve the same powerful technology solutions as large enterprises—without the complexity, overhead, or impersonal service.",
      "As a veteran and woman-owned business, we bring a unique perspective to technology consulting. Our military background instills discipline, attention to detail, and a mission-focused approach. We understand the importance of clear communication, meeting deadlines, and delivering results that matter.",

      "We've worked with businesses across industries, helping them transform raw data into actionable insights, automate tedious processes, and build custom applications that streamline operations. Our success is measured by our clients' success—when you grow, we grow.",
    ],
    statement: `<strong>We are the experts, so you don't have to be! –</strong> While others sell the promise of "low-code, no-code" simplicity, we bring the real-world expertise needed to turn those tools into reliable business solutions.`,
  };

  const certificationsData = [
    {
      title: "✓ Veteran Owned",
      description:
        "Certified veteran-owned business bringing military discipline and values to every project",
    },
    {
      title: "✓ Woman Owned",
      description:
        "Certified woman-owned business committed to diversity and inclusive excellence",
    },
    {
      title: "✓ Microsoft Certified",
      description:
        "Advanced certifications in Power Platform and Azure cloud services",
    },
  ];

  const expertiseData = [
    {
      number: "Expertise 01",
      title: "Data Engineering & Integration",
      description:
        "We build robust data foundations that connect cloud, on-premise, and application data into a single, reliable source of truth. End data silos and achieve faster reporting through automated pipelines.",
    },
    {
      number: "Expertise 02",
      title: "Business Intelligence & Analytics",
      description:
        "Transform raw data into visual stories that empower smarter decisions. We create dashboards, KPI monitoring systems, and automated insights that give you real-time visibility into your business performance.",
    },
    {
      number: "Expertise 03",
      title: "Application Development & Automation",
      description:
        "Design low-code apps and workflow automations that replace manual tasks with intuitive digital experiences. Reduce bottlenecks and deliver internal tools in days, not months.",
    },
    {
      number: "Expertise 04",
      title: "AI Agents & Intelligent Automation",
      description:
        "Deploy custom AI agents that learn from your data, automate decisions, and assist teams through natural conversation. Build virtual assistants for analytics, CRM, and operations.",
    },
    {
      number: "Expertise 05",
      title: "Cloud Migration & Modernization",
      description:
        "Help organizations migrate, optimize, and modernize their infrastructure across AWS, Azure, and Oracle Cloud. Move with confidence and scale without limits.",
    },
    {
      number: "Complete Support",
      title: "End-to-End Partnership",
      description:
        "From strategy and implementation to training and ongoing support, we're with you every step of the way. Keep your business modern with the latest in technology, AI, and integration.",
    },
  ];
  return (
    <main className="">
      {/* TaglineBanner */}
      <TaglineBanner {...bannerData} />
      {/* MissionSection */}
      <MissionSection {...missionData} />
      {/* WhyChoose */}
      <WhyChoose {...whyChooseData} />
      {/* story SectionData */}
      <ProblemSection {...storySectionData} />

      {/* CertificationsSection */}
      <CertificationsSection certifications={certificationsData} />
      {/* ExpertiseSection */}
      <ExpertiseSection expertiseItems={expertiseData} />
    </main>
  );
}

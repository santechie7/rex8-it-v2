"use server";
import React from "react";
import HEROIMAGE from "@/app/assets/images/rex_eight_it_head.jpg";
import PROBLEMIMAGE from "@/app/assets/images/rex_eight_it_Problem.jpg";
import HeroSection from "@/components/sections/common/heroSection/HeroSection";
import TaglineBanner from "@/components/sections/common/taglineBanner/TaglineBanner";
import ProblemSection from "@/components/sections/common/problemSection/ProblemSection";
import ServicesPreview from "@/components/sections/common/servicesPreview/ServicesPreview";
import ShowcaseSection from "@/components/sections/common/showcaseSection/ShowcaseSection";
import WhyChoose from "@/components/sections/common/whyChoose/WhyChoose";
import OwnerBadgeSection from "@/components/sections/common/ownerBadge/OwnerBadge";
import CtaSection from "@/components/sections/common/ctaSection/CtaSection";

export default async function HomePage() {
  const heroData = {
    IMAGE :HEROIMAGE,
    heading: "Transform your business with expert Power Platform consulting",
    highlight: "expert Power Platform",
    subtitle: "We are the experts, so you don't have to be!",
    description: `Big companies offer oversimplified "low-code" solutions for small to medium-sized businesses. You and I know it's not that straightforward. Creating reliable, actionable dashboards, apps, and automated processes requires expertise, even with "low-code" tools.`,
    primaryCta: { text: "Schedule Consultation", href: "/contact" },
    secondaryCta: { text: "Explore Services", href: "/services" },
  };

  const bannerData = {
    headline: '"Remember when someone claimed the dog ate their homework?"',
    content: `Running a business faces similar hurdles. Sure, it’s not calculus anymore but it’s tedious for you all the same. That’s where we come in – to tackle those challenges when the dog eats your best intentions.`,
  };

  const problemData = {
   IMAGE: PROBLEMIMAGE,
    heading: "Just to avoid doing it?",
    paragraphs: [
      "Running a business faces similar hurdles. Sure, it's not calculus anymore but it's tedious for you all the same.",
      "<strong>That's where we come in –</strong> to tackle those challenges when the dog eats your best intentions.",
     
      "We specialize in solving problems by streamlining operations, automating workflows, and providing data-driven insights. We ensure seamless integration with your existing systems, maximizing efficiency and productivity.",
    ],
  };
  const servicesData = {
    headerLabel: "How can I help your business?",
    headerTitle: "Comprehensive Power Platform Solutions",
    headerDescription:
      "From data engineering to AI automation, we provide end-to-end solutions that transform how your business operates and makes decisions.",
    services: [
      {
        number: "Service 01",
        title: "Data Engineering & Integration",
        tagline: "Unify your data, unlock your business intelligence.",
        description:
          "We build strong data foundations that connect cloud, on-premise, and application data into a single, reliable source of truth.",
        benefits: [
          { text: "End data silos with seamless system integration" },
          { text: "Achieve faster reporting through automated data pipelines" },
          {
            text: "Gain data quality, consistency, and governance across platforms",
          },
        ],
      },
      {
        number: "Service 02",
        title: "Business Intelligence & Analytics",
        tagline: "From numbers to narratives.",
        description:
          "We transform raw data into visual stories that empower smarter decisions through dashboards, KPI monitoring, and automated insights.",
        benefits: [
          { text: "See business performance in real time" },
          { text: "Empower teams with self-service dashboards" },
          { text: "Turn complex analytics into clear, actionable insights" },
        ],
      },
      {
        number: "Service 03",
        title: "Application Development & Automation",
        tagline: "Simplify operations. Accelerate innovation.",
        description:
          "We design low-code apps and workflow automations that replace manual tasks with intuitive digital experiences — all built for scalability.",
        benefits: [
          { text: "Reduce manual effort and process bottlenecks" },
          { text: "Deliver internal tools and portals in days, not months" },
          { text: "Integrate data and workflows seamlessly across systems" },
        ],
      },
      {
        number: "Service 04",
        title: "AI Agents & Intelligent Automation",
        tagline: "Bring intelligence to everyday business.",
        description:
          "We deploy custom AI agents that learn from your data, automate decisions, and assist teams through natural conversation.",
        benefits: [
          {
            text: "Build virtual assistants for analytics, CRM, and operations",
          },
          {
            text: "Automate reporting, forecasting, and customer interactions",
          },
          {
            text: "Create personalized business copilots powered by your data",
          },
        ],
      },
      {
        number: "Service 05",
        title: "Cloud Migration & Modernization",
        tagline: "Move with confidence. Scale without limits.",
        description:
          "We help organizations migrate, optimize, and modernize their infrastructure across AWS, Azure, and Oracle Cloud.",
        benefits: [
          { text: "Migrate legacy systems with minimal downtime" },
          { text: "Modernize data architecture for scalability and speed" },
          {
            text: "Adopt a multi-cloud strategy for flexibility and resilience",
          },
        ],
      },
      {
        number: "What We Offer",
        title: "Complete Support",
        tagline: "End-to-end partnership.",
        description:
          "From strategy and implementation to training and ongoing support, we're with you every step of the way.",
        benefits: [
          {
            text: "Keep your business modern with technology, AI, and integration",
          },
          { text: "Attract new customers and keep existing ones satisfied" },
          { text: "Get noticed with reduced overhead costs" },
        ],
      },
    ],
  };

  const showcaseData = {
    headerLabel: "Our Work",
    headerTitle: "Real Solutions for Real Businesses",
    headerDescription:
      "We deliver actionable insights through beautiful, functional dashboards and automated workflows that drive results.",
    items: [
      {
        caption: "Executive Dashboards",
        svgContent: (
          <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="250" fill="#2d3e50" />
            <text
              x="150"
              y="30"
              fontSize="18"
              fill="white"
              textAnchor="middle"
              fontWeight="bold"
            >
              Project Summary Overview
            </text>

            {/* KPI Cards */}
            <rect x="20" y="50" width="60" height="50" fill="#4a5d6a" rx="3" />
            <text
              x="50"
              y="75"
              fontSize="20"
              fill="#c9a36a"
              textAnchor="middle"
              fontWeight="bold"
            >
              11
            </text>
            <text x="50" y="92" fontSize="8" fill="white" textAnchor="middle">
              Projects
            </text>

            <rect x="90" y="50" width="60" height="50" fill="#4a5d6a" rx="3" />
            <text
              x="120"
              y="75"
              fontSize="20"
              fill="#c9a36a"
              textAnchor="middle"
              fontWeight="bold"
            >
              25
            </text>
            <text x="120" y="92" fontSize="8" fill="white" textAnchor="middle">
              Hours
            </text>

            <rect x="160" y="50" width="60" height="50" fill="#4a5d6a" rx="3" />
            <text
              x="190"
              y="75"
              fontSize="20"
              fill="#c9a36a"
              textAnchor="middle"
              fontWeight="bold"
            >
              8
            </text>
            <text x="190" y="92" fontSize="8" fill="white" textAnchor="middle">
              Issues
            </text>

            <rect x="230" y="50" width="60" height="50" fill="#4a5d6a" rx="3" />
            <text
              x="260"
              y="75"
              fontSize="20"
              fill="#c9a36a"
              textAnchor="middle"
              fontWeight="bold"
            >
              67
            </text>
            <text x="260" y="92" fontSize="8" fill="white" textAnchor="middle">
              Tasks
            </text>

            {/* Charts */}
            <rect
              x="20"
              y="120"
              width="80"
              height="110"
              fill="#3a4d5a"
              rx="3"
            />
            <rect x="25" y="200" width="15" height="20" fill="#5a9fd4" />
            <rect x="45" y="185" width="15" height="35" fill="#5a9fd4" />
            <rect x="65" y="175" width="15" height="45" fill="#5a9fd4" />
            <rect x="85" y="190" width="15" height="30" fill="#5a9fd4" />

            <rect
              x="110"
              y="120"
              width="80"
              height="110"
              fill="#3a4d5a"
              rx="3"
            />
            <rect x="115" y="200" width="15" height="20" fill="#8b7355" />
            <rect x="135" y="180" width="15" height="40" fill="#8b7355" />
            <rect x="155" y="190" width="15" height="30" fill="#8b7355" />
            <rect x="175" y="170" width="15" height="50" fill="#8b7355" />

            <rect
              x="200"
              y="120"
              width="80"
              height="110"
              fill="#3a4d5a"
              rx="3"
            />
            <rect x="205" y="195" width="15" height="25" fill="#c9a36a" />
            <rect x="225" y="185" width="15" height="35" fill="#c9a36a" />
            <rect x="245" y="180" width="15" height="40" fill="#c9a36a" />
            <rect x="265" y="190" width="15" height="30" fill="#c9a36a" />
          </svg>
        ),
      },
      {
        caption: "Health Analytics",
        svgContent: (
          <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="250" fill="white" />
            <text
              x="150"
              y="30"
              fontSize="18"
              fill="#2d3e50"
              textAnchor="middle"
              fontWeight="bold"
            >
              Weight Loss Progress
            </text>

            {/* Line chart */}
            <line
              x1="30"
              y1="220"
              x2="270"
              y2="220"
              stroke="#e0d5c7"
              strokeWidth="2"
            />
            <line
              x1="30"
              y1="60"
              x2="30"
              y2="220"
              stroke="#e0d5c7"
              strokeWidth="2"
            />

            {/* Data points and line */}
            <polyline
              points="40,180 70,160 100,140 130,130 160,120 190,115 220,110 250,108"
              fill="none"
              stroke="#e74c3c"
              strokeWidth="3"
            />

            {/* Points */}
            <circle cx="40" cy="180" r="5" fill="#e74c3c" />
            <circle cx="70" cy="160" r="5" fill="#e74c3c" />
            <circle cx="100" cy="140" r="5" fill="#e74c3c" />
            <circle cx="130" cy="130" r="5" fill="#e74c3c" />
            <circle cx="160" cy="120" r="5" fill="#e74c3c" />
            <circle cx="190" cy="115" r="5" fill="#e74c3c" />
            <circle cx="220" cy="110" r="5" fill="#e74c3c" />
            <circle cx="250" cy="108" r="5" fill="#e74c3c" />

            {/* Pie charts */}
            <circle
              cx="80"
              cy="90"
              r="30"
              fill="none"
              stroke="#c9a36a"
              strokeWidth="20"
              strokeDasharray="94 188"
              transform="rotate(-90 80 90)"
            />
            <circle
              cx="220"
              cy="90"
              r="30"
              fill="none"
              stroke="#5a9fd4"
              strokeWidth="20"
              strokeDasharray="141 188"
              transform="rotate(-90 220 90)"
            />
          </svg>
        ),
      },
      {
        caption: "Sales Analytics",
        svgContent: (
          <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="250" fill="#f5f1ea" />
            <text
              x="150"
              y="30"
              fontSize="18"
              fill="#2d3e50"
              textAnchor="middle"
              fontWeight="bold"
            >
              Retail Sales Portfolio Evaluation
            </text>

            {/* Stacked bars */}
            <rect x="30" y="60" width="30" height="150" fill="#5a9fd4" />
            <rect x="70" y="80" width="30" height="130" fill="#5a9fd4" />
            <rect x="110" y="100" width="30" height="110" fill="#5a9fd4" />
            <rect x="150" y="90" width="30" height="120" fill="#5a9fd4" />
            <rect x="190" y="70" width="30" height="140" fill="#5a9fd4" />
            <rect x="230" y="85" width="30" height="125" fill="#5a9fd4" />

            <rect x="30" y="50" width="30" height="10" fill="#c9a36a" />
            <rect x="70" y="60" width="30" height="20" fill="#c9a36a" />
            <rect x="110" y="80" width="30" height="20" fill="#c9a36a" />
            <rect x="150" y="70" width="30" height="20" fill="#c9a36a" />
            <rect x="190" y="55" width="30" height="15" fill="#c9a36a" />
            <rect x="230" y="65" width="30" height="20" fill="#c9a36a" />

            {/* Pie chart */}
            <circle cx="230" cy="150" r="40" fill="#2d3e50" />
            <path
              d="M 230 110 A 40 40 0 0 1 270 150 L 230 150 Z"
              fill="#c9a36a"
            />
            <path
              d="M 270 150 A 40 40 0 0 1 230 190 L 230 150 Z"
              fill="#5a9fd4"
            />
            <path
              d="M 230 190 A 40 40 0 0 1 190 150 L 230 150 Z"
              fill="#8b7355"
            />

            <text
              x="150"
              y="235"
              fontSize="10"
              fill="#2d3e50"
              textAnchor="middle"
            >
              Monthly Revenue Trends
            </text>
          </svg>
        ),
      },
      {
        caption: "Custom Apps",
        svgContent: (
          <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="250" fill="white" />

            {/* Header */}
            <rect x="0" y="0" width="300" height="40" fill="#2d3e50" />
            <text x="20" y="25" fontSize="14" fill="white" fontWeight="bold">
              Employee Portal
            </text>

            {/* Navigation */}
            <rect x="20" y="50" width="80" height="25" fill="#c9a36a" rx="3" />
            <text x="60" y="67" fontSize="10" fill="white" textAnchor="middle">
              Dashboard
            </text>

            <rect x="110" y="50" width="80" height="25" fill="#e0d5c7" rx="3" />
            <text
              x="150"
              y="67"
              fontSize="10"
              fill="#2d3e50"
              textAnchor="middle"
            >
              Time Off
            </text>

            <rect x="200" y="50" width="80" height="25" fill="#e0d5c7" rx="3" />
            <text
              x="240"
              y="67"
              fontSize="10"
              fill="#2d3e50"
              textAnchor="middle"
            >
              Benefits
            </text>

            {/* Content cards */}
            <rect x="20" y="90" width="120" height="70" fill="#f5f1ea" rx="5" />
            <text
              x="80"
              y="110"
              fontSize="11"
              fill="#2d3e50"
              textAnchor="middle"
              fontWeight="bold"
            >
              Your Tasks
            </text>
            <rect x="30" y="120" width="100" height="8" fill="#5a9fd4" rx="2" />
            <rect x="30" y="135" width="100" height="8" fill="#c9a36a" rx="2" />
            <rect x="30" y="150" width="100" height="8" fill="#8b7355" rx="2" />

            <rect
              x="160"
              y="90"
              width="120"
              height="70"
              fill="#f5f1ea"
              rx="5"
            />
            <text
              x="220"
              y="110"
              fontSize="11"
              fill="#2d3e50"
              textAnchor="middle"
              fontWeight="bold"
            >
              Announcements
            </text>
            <rect
              x="170"
              y="120"
              width="100"
              height="8"
              fill="#e0d5c7"
              rx="2"
            />
            <rect x="170" y="135" width="80" height="8" fill="#e0d5c7" rx="2" />
            <rect x="170" y="150" width="90" height="8" fill="#e0d5c7" rx="2" />

            <rect
              x="20"
              y="175"
              width="260"
              height="60"
              fill="#f5f1ea"
              rx="5"
            />
            <text
              x="150"
              y="195"
              fontSize="11"
              fill="#2d3e50"
              textAnchor="middle"
              fontWeight="bold"
            >
              Recent Activity
            </text>
            <circle cx="35" cy="215" r="8" fill="#c9a36a" />
            <rect x="50" y="210" width="200" height="4" fill="#e0d5c7" rx="1" />
            <rect x="50" y="220" width="150" height="4" fill="#e0d5c7" rx="1" />
          </svg>
        ),
      },
    ],
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

  const ownerBadgeData = {
    companyName: "REX EIGHT L.L.C.",
    description:
      "Certified Veteran & Woman Owned Business | Empowering Small to Medium Businesses",
  };

  const ctaData = {
    heading: "Ready to Transform Your Data Into Action?",
    description:
      "Let's discuss how we can help you unlock the full potential of your business data with Microsoft Power Platform solutions. Schedule a free consultation today.",
    primaryCtaText: "Schedule Free Consultation",
    primaryCtaHref: "/contact",
    // primaryCtaHref: "mailto:info@rexeightit.com",
    secondaryCtaText: "View All Services",
    secondaryCtaHref: "/services",
  };

  return (
    <main className="">
      <HeroSection {...heroData} />

      {/* Tagline Banner */}
      <TaglineBanner {...bannerData} />

      {/* Problem Section */}
      <ProblemSection {...problemData} />

      {/* Services Preview */}
      <ServicesPreview {...servicesData} />

      {/* Showcase Section */}
      <ShowcaseSection
        headerLabel={showcaseData.headerLabel}
        headerTitle={showcaseData.headerTitle}
        headerDescription={showcaseData.headerDescription}
        items={showcaseData.items}
      />

      {/* Why Choose Us */}
      {/* <WhyChoose {...whyChooseData} /> */}

      {/* Owner Badge */}
      {/* <OwnerBadgeSection {...ownerBadgeData} /> */}

      {/* Call to Action */}
      <CtaSection {...ctaData} />
    </main>
  );
}

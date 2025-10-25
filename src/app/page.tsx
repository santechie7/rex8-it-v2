"use server";
import React from "react";
import HeroSection from "@/components/sections/common/heroSection/HeroSection";
import TaglineBanner from "@/components/sections/common/taglineBanner/TaglineBanner";
import ProblemSection from "@/components/sections/common/problemSection/ProblemSection";
import ServicesPreview from "@/components/sections/common/servicesPreview/ServicesPreview";
import ShowcaseSection from "@/components/sections/common/showcaseSection/ShowcaseSection";
import CtaSection from "@/components/sections/common/ctaSection/CtaSection";
import { getHome } from "@/lib/getHome";

export default async function HomePage() {

  const {heroData, banner, problem, services, showcaseData, whyChooseData, ownerBadgeData, ctaData} = await getHome()



  return (
    <main className="">
      <HeroSection {...heroData} />

      {/* Tagline Banner */}
      <TaglineBanner {...banner} />

      {/* Problem Section */}
      <ProblemSection {...problem} />

      {/* Services Preview */}
      <ServicesPreview {...services} />

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

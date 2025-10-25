
import WhyChoose from "@/components/sections/common/whyChoose/WhyChoose";

import TaglineBanner from "@/components/sections/common/taglineBanner/TaglineBanner";
import MissionSection from "@/components/sections/common/missionSection/MissionSection";
import ProblemSection from "@/components/sections/common/problemSection/ProblemSection";
import CertificationsSection from "@/components/sections/common/certifications/CertificationsSection";
import ExpertiseSection from "@/components/sections/common/expertiseSection/ExpertiseSection";
import { getAboutUs } from "@/lib/getAboutUs";
export default async function about() {

     const { banner, mission, whyChoose, storySection, certifications, expertise} = await getAboutUs();

  return (
    <main className="">
      {/* TaglineBanner */}
      <TaglineBanner {...banner} />
      {/* MissionSection */}
      <MissionSection {...mission} />
      {/* WhyChoose */}
      <WhyChoose {...whyChoose} />
      {/* story SectionData */}
      <ProblemSection {...storySection} />
      {/* CertificationsSection */}
      <CertificationsSection certifications={certifications} />
      {/* ExpertiseSection */}
      <ExpertiseSection expertiseItems={expertise} />
    </main>
  );
}

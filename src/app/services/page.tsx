import TaglineBanner from "@/components/sections/common/taglineBanner/TaglineBanner";
import ServicesSection from "@/components/sections/common/servicesPreview/ServicesSection";
import CtaSection from "@/components/sections/common/ctaSection/CtaSection";
import { getServices } from "@/lib/getServices";

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  const { services, banners, ctaSection } = await getServices();
  const params = await searchParams; // Await searchParams
  const serviceId = params.id;

  return (
    <main className="">
      <TaglineBanner {...banners} />
      <ServicesSection services={services} highlightedId={serviceId}/>
      <CtaSection {...ctaSection} />
    </main>
  );
}

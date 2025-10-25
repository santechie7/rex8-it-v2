
import TaglineBanner from "@/components/sections/common/taglineBanner/TaglineBanner";
import HappensNext from "@/components/sections/common/happensNext/HappensNext";
import ContactSection from "@/components/sections/common/contactSection/ContactSection";
import { getContact } from "@/lib/getContact";


export default async function ContactPage() {

  const {banner, contactCards,parentBenefits, contactFormContent} = await getContact()
  
  return (
    <main className="">
      {/* Tagline Banner */}
      <TaglineBanner {...banner} />
      {/* Contact Section */}
      <ContactSection contactCards={contactCards} contactFormContent={contactFormContent} />
      {/* Happens Next */}
      <HappensNext
        title="What Happens Next?"
        description="After you submit your inquiry, here’s what you can expect from the Rex Eight IT team:"
        benefits={parentBenefits}
      />
    </main>
  );
}

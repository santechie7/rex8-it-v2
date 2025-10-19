"use client";
import TaglineBanner from "@/components/sections/common/taglineBanner/TaglineBanner";
import HappensNext from "@/components/sections/common/happensNext/HappensNext";
import ContactSection from "@/components/sections/common/contactSection/ContactSection";

const bannerData = {
  headline: "Let's Talk About Your Project",
  content: `Whether you need a consultation, have questions about our services, or want to discuss a specific project, we're ready to help. Let's start a conversation about your business goals.`,
};

const parentBenefits = [
  {
    icon: "1️⃣",
    title: "Quick Response",
    description:
      "We'll review your message and respond within 24 hours (typically much sooner) to acknowledge receipt and schedule a conversation.",
  },
  {
    icon: "2️⃣",
    title: "Discovery Call",
    description:
      "We'll schedule a 30-minute consultation to understand your needs, challenges, and goals in detail. No sales pressure, just honest advice.",
  },
  {
    icon: "3️⃣",
    title: "Tailored Proposal",
    description:
      "Based on our conversation, we'll prepare a customized proposal outlining our recommended approach, timeline, and investment.",
  },
];

const contactCards = [
  {
    icon: "📧",
    title: "Email Us",
    content: <a href="mailto:info@rexeightit.com">info@rexeightit.com</a>,
    note: "We typically respond within 24 hours",
  },
  {
    icon: "📞",
    title: "Call Us",
    content: <a href="tel:+15555551234">(555) 555-1234</a>,
    note: "Monday - Friday, 9 AM - 6 PM EST",
  },
  {
    icon: "📍",
    title: "Location",
    content: "Serving businesses nationwide",
    note: "Remote consultations available",
  },
  {
    icon: "💼",
    title: "Company",
    content: <strong>Rex Eight L.L.C.</strong>,
    note: "Veteran & Woman Owned Business",
  },
];

// contactFormContent.ts

export const contactFormContent = {
  header: {
    title: "Send Us a Message",
    description:
      "Fill out the form below and we'll get back to you as soon as possible. All fields marked with an asterisk (*) are required.",
  },

  labels: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    company: "Company Name",
    service: "Service Interest",
    budget: "Project Budget (Optional)",
    timeline: "Desired Timeline",
    message: "Tell Us About Your Project",
  },

  messages: {
    messagePlaceholder:
      "Describe your current challenges, goals, and what you're looking to achieve with Power Platform solutions...",
    messageNote:
      "The more details you provide, the better we can understand your needs and prepare for our conversation.",
  },

  checkbox: {
    label:
      "I agree to receive communications from Rex Eight IT regarding my inquiry",
  },

  button: {
    text: "Send Message",
  },

  privacy: {
    note:
      "We respect your privacy. Your information will never be shared with third parties.",
    linkText: "View our Privacy Policy",
    linkHref: "#",
  },
};


export default function AboutPage() {
  return (
    <main className="">
      {/* Tagline Banner */}
      <TaglineBanner {...bannerData} />
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

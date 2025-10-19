import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SuccessPopup from "@/components/ui/successPopup/SuccessPopup";
import Loading from "@/components/ui/loading/Loading";

interface InfoCard {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  note?: string;
}

interface ContactSectionProps {
  contactCards: InfoCard[];
  contactFormContent: ContactFormContent;
}

export const contactSection = {
  section: "py-24 px-[4%] bg-white",
  container:
    "container mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-24 items-start",
};
// Use NEXT_PUBLIC_ prefix for env variables accessible in the browser
const ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY;
const ContactSection: React.FC<ContactSectionProps> = ({
  contactCards,
  contactFormContent,
}) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    agreeToCommunications: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    let fieldValue: string | boolean = value;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      fieldValue = e.target.checked;
    }
    setFormState((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     if (!ACCESS_KEY) {
      console.error("Missing ACCESS_KEY");
      return;
    }
    const formData = new FormData(e.target as HTMLFormElement);
formData.append("access_key", ACCESS_KEY);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
    setIsLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
      } else {
        console.error("Form submission error:", result);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Network error:", error);
    } finally {
      setIsLoading(false); // end loading
    }

    setFormState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
      agreeToCommunications: false,
    });
  };
  return (
    <section className={contactSection.section}>
      <div className={contactSection.container}>
        <ContactInfo infoCards={contactCards} />
        <ContactForm
          formState={formState}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          contactFormContent={contactFormContent}
        />
        <Loading isOpen={isLoading} />
        <SuccessPopup
          isOpen={showSuccess}
          onClose={() => setShowSuccess(false)}
        />
      </div>
    </section>
  );
};

export default ContactSection;

import React from "react";

export interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  timeline: string;
  message: string;
  agreeToCommunications: boolean;
}

export const contactFormStyles = {
  wrapper: "bg-[var(--light)] p-12 rounded-xl border border-border max-w-[800px] mx-auto shadow-lg",
  
  header: "mb-10",
  heading: "text-3xl font-semibold text-primary mb-2",
  description: "text-sm text-text leading-[1.7]",

  form: "space-y-6",
  formRow: "grid md:grid-cols-2 gap-6",
  formGroup: "flex flex-col mb-8",
  label: "block mb-2 font-semibold text-[var(--primary)] text-sm",
  required: "text-[var(--secondary)]",
  input: "w-full p-4 border-2 border-[var(--border)] rounded-lg bg-white text-base font-inherit transition-all focus:outline-none focus:border-[var(--secondary)] focus:shadow-[0_0_0_3px_rgba(201,163,106,0.1)]",
  textarea: "resize-none min-h-[150px]",
  note: "text-sm text-[var(--text)] mt-2 opacity-80",

  checkboxWrapper: "flex items-center gap-2",
  checkbox: "w-4 h-4",
  checkboxLabel: "text-sm font-semibold",

  submitButton: "w-full md:w-auto py-3 px-6 bg-[var(--primary)] text-white font-semibold text-lg rounded-lg hover:bg-[var(--dark)] transition-all transform hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(45,62,80,0.3)] active:translate-y-0",

  privacyNote: "mt-4 text-sm text-[var(--text)]  text-center opacity-80",
  privacyLink: "underline text-[var(--secondary)]",
};

export interface ContactFormProps {
  formState: ContactFormState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  contactFormContent:any;
}

interface CommonSelectProps {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  note?: string;
}


const CommonSelect: React.FC<CommonSelectProps> = ({
  id,
  label,
  required = false,
  value,
  options,
  onChange,
  note,
}) => (
  <div className={contactFormStyles.formGroup}>
    <label htmlFor={id} className={contactFormStyles.label}>
      {label} {required && <span className={contactFormStyles.required}>*</span>}
    </label>
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required={required}
      className={contactFormStyles.input}
    >
      <option value="">Select an option...</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    {note && <p className={contactFormStyles.note}>{note}</p>}
  </div>
);



const ContactForm: React.FC<ContactFormProps> = ({ formState, handleChange, handleSubmit, contactFormContent }) => {
  const serviceOptions = [
    { value: "data-engineering", label: "Data Engineering & Integration" },
    { value: "business-intelligence", label: "Business Intelligence & Analytics" },
    { value: "app-development", label: "Application Development & Automation" },
    { value: "ai-automation", label: "AI Agents & Intelligent Automation" },
    { value: "cloud-migration", label: "Cloud Migration & Modernization" },
    { value: "consulting", label: "Strategy & Consulting" },
    { value: "other", label: "Other / Not Sure" },
  ];

  const budgetOptions = [
    { value: "under-10k", label: "Under $10,000" },
    { value: "10k-25k", label: "$10,000 - $25,000" },
    { value: "25k-50k", label: "$25,000 - $50,000" },
    { value: "50k-100k", label: "$50,000 - $100,000" },
    { value: "over-100k", label: "$100,000+" },
    { value: "not-sure", label: "Not Sure Yet" },
  ];

  const timelineOptions = [
    { value: "asap", label: "As soon as possible" },
    { value: "1-3-months", label: "1-3 months" },
    { value: "3-6-months", label: "3-6 months" },
    { value: "6-12-months", label: "6-12 months" },
    { value: "flexible", label: "Flexible / Planning Phase" },
  ];

  return (
    <div className={contactFormStyles.wrapper}>
      <div className={contactFormStyles.header}>
        <h3 className={contactFormStyles.heading}>Send Us a Message</h3>
        <p className={contactFormStyles.description}>
          {contactFormContent.header.description}
        </p>
      </div>

      <form id="contactForm" onSubmit={handleSubmit} className={contactFormStyles.form}>
        <div className={contactFormStyles.formRow}>
          <div className={contactFormStyles.formGroup}>
            <label htmlFor="firstName" className={contactFormStyles.label}>
             {contactFormContent.labels.firstName}{" "} <span className={contactFormStyles.required}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formState.firstName}
              onChange={handleChange}
              className={contactFormStyles.input}
            />
          </div>

          <div className={contactFormStyles.formGroup}>
            <label htmlFor="lastName" className={contactFormStyles.label}>
              {contactFormContent.labels.lastName}{" "} <span className={contactFormStyles.required}>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formState.lastName}
              onChange={handleChange}
              className={contactFormStyles.input}
            />
          </div>
        </div>

        <div className={contactFormStyles.formRow}>
          <div className={contactFormStyles.formGroup}>
            <label htmlFor="email" className={contactFormStyles.label}>
               {contactFormContent.labels.email}{" "}<span className={contactFormStyles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              className={contactFormStyles.input}
            />
          </div>

          <div className={contactFormStyles.formGroup}>
            <label htmlFor="phone" className={contactFormStyles.label}>{contactFormContent.labels.phone}{" "}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className={contactFormStyles.input}
            />
          </div>
        </div>

        <div className={contactFormStyles.formGroup}>
          <label htmlFor="company" className={contactFormStyles.label}>{contactFormContent.labels.company}{" "}</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            className={contactFormStyles.input}
          />
        </div>

        <CommonSelect
          id="service"
          label={contactFormContent.labels.service}
          required
          value={formState.service}
          options={serviceOptions}
          onChange={handleChange}
        />

        <div className={contactFormStyles.formRow}>
          <CommonSelect
            id="budget"
             label={contactFormContent.labels.budget}
            value={formState.budget || ""}
            options={budgetOptions}
            onChange={handleChange}
          />
          <CommonSelect
            id="timeline"
              label={contactFormContent.labels.timeline}
            required
            value={formState.timeline}
            options={timelineOptions}
            onChange={handleChange}
          />
        </div>

        <div className={contactFormStyles.formGroup}>
          <label htmlFor="message" className={contactFormStyles.label}>
{contactFormContent.labels.message} {" "} <span className={contactFormStyles.required}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
              placeholder={contactFormContent.messages.messagePlaceholder}
            value={formState.message}
            onChange={handleChange}
            className={`${contactFormStyles.input} ${contactFormStyles.textarea}`}
          />
          <p className={contactFormStyles.note}>
          {contactFormContent.messages.messageNote}
          </p>
        </div>

        <div className={contactFormStyles.checkboxWrapper}>
          <input
            type="checkbox"
            required
            checked={formState.agreeToCommunications}
            onChange={handleChange}
            name="agreeToCommunications"
            className={contactFormStyles.checkbox}
          />
          <label className={contactFormStyles.checkboxLabel}>
              {contactFormContent.checkbox.label}{" "} <span className={contactFormStyles.required}>*</span>
          </label>
        </div>

        <button type="submit" className={contactFormStyles.submitButton}>{contactFormContent.button.text}</button>

        <p className={contactFormStyles.privacyNote}>
         {contactFormContent.privacy.note}{" "}
          <a href="#" className={contactFormStyles.privacyLink}>{contactFormContent.privacy.linkText}</a>.
        </p>
      </form>
    </div>
  );
};
export default ContactForm;

interface Header {
  title: string;
  description: string;
}

interface Labels {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

interface Messages {
  messagePlaceholder: string;
  messageNote: string;
}

interface Checkbox {
  label: string;
}

interface Button {
  text: string;
}

interface Privacy {
  note: string;
  linkText: string;
  linkHref: string;
}

// Main interface for contactFormContent
interface ContactFormContent {
  header: Header;
  labels: Labels;
  messages: Messages;
  checkbox: Checkbox;
  button: Button;
  privacy: Privacy;
}

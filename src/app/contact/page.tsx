"use client";
import { useState } from "react";
import "./contact.css";

export default function AboutPage() {
   const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    agreeToCommunications: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let fieldValue: string | boolean = value;
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
      fieldValue = e.target.checked;
    }
    setFormState(prev => ({
      ...prev,
      [name]: fieldValue
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you for your message! We will get back to you within 24 hours.

Your inquiry is important to us, and we look forward to discussing how we can help transform your business.`);
    setFormState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      timeline: '',
      message: '',
      agreeToCommunications: false,
    });
  };
  return (
    <main className="">
       <section className="page-header">
        <div className="page-header-content">
          <h1>Let's Talk About Your Project</h1>
          <p>{"Ready to transform your business with expert Power Platform solutions? We're here to help you unlock the full potential of your data and operations."}</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>{"Whether you need a consultation, have questions about our services, or want to discuss a specific project, we're ready to help. Let's start a conversation about your business goals."}</p>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon">📧</div>
                  <h3>Email Us</h3>
                </div>
                <p><a href="mailto:info@rexeightit.com">info@rexeightit.com</a></p>
                <p className="form-note">We typically respond within 24 hours</p>
              </div>

              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon">📞</div>
                  <h3>Call Us</h3>
                </div>
                <p><a href="tel:+15555551234">(555) 555-1234</a></p>
                <p className="form-note">Monday - Friday, 9 AM - 6 PM EST</p>
              </div>

              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon">📍</div>
                  <h3>Location</h3>
                </div>
                <p>Serving businesses nationwide</p>
                <p className="form-note">Remote consultations available</p>
              </div>

              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon">💼</div>
                  <h3>Company</h3>
                </div>
                <p><strong>Rex Eight L.L.C.</strong></p>
                <p className="form-note">Veteran & Woman Owned Business</p>
              </div>
            </div>

            <div className="availability">
              <h4>📅 Free Consultation Available</h4>
              <p>Schedule a 30-minute consultation to discuss your project needs, challenges, and how we can help.</p>
              <p style={{ marginTop: "1rem" }}><strong>No obligations. Just honest advice.</strong></p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-header">
              <h3>Send Us a Message</h3>
              <p>{"Fill out the form below and we'll get back to you as soon as possible. All fields marked with an asterisk (*) are required."}</p>
            </div>

            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name <span className="required">*</span></label>
                  <input type="text" id="firstName" name="firstName" required value={formState.firstName} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                  <input type="text" id="lastName" name="lastName" required value={formState.lastName} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input type="email" id="email" name="email" required value={formState.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formState.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" name="company" value={formState.company} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interest <span className="required">*</span></label>
                <select id="service" name="service" required value={formState.service} onChange={handleChange}>
                  <option value="">Select a service...</option>
                  <option value="data-engineering">Data Engineering & Integration</option>
                  <option value="business-intelligence">Business Intelligence & Analytics</option>
                  <option value="app-development">Application Development & Automation</option>
                  <option value="ai-automation">AI Agents & Intelligent Automation</option>
                  <option value="cloud-migration">Cloud Migration & Modernization</option>
                  <option value="consulting">Strategy & Consulting</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Project Budget (Optional)</label>
                <select id="budget" name="budget" value={formState.budget} onChange={handleChange}>
                  <option value="">Select a budget range...</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">$100,000+</option>
                  <option value="not-sure">Not Sure Yet</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="timeline">Desired Timeline <span className="required">*</span></label>
                <select id="timeline" name="timeline" required value={formState.timeline} onChange={handleChange}>
                  <option value="">Select a timeline...</option>
                  <option value="asap">As soon as possible</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="flexible">Flexible / Planning Phase</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell Us About Your Project <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Describe your current challenges, goals, and what you're looking to achieve with Power Platform solutions..."
                  value={formState.message}
                  onChange={handleChange}
                />
                <p className="form-note">The more details you provide, the better we can understand your needs and prepare for our conversation.</p>
              </div>

              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    required
                    style={{ width: "auto", display: "inline-block", marginRight: "0.5rem" }}
                    checked={formState.agreeToCommunications}
                    onChange={handleChange}
                    name="agreeToCommunications"
                  />
                  I agree to receive communications from Rex Eight IT regarding my inquiry <span className="required">*</span>
                </label>
              </div>

              <button type="submit" className="submit-button">Send Message</button>

              <p className="privacy-note">
                We respect your privacy. Your information will never be shared with third parties.{" "}
                <a href="#">View our Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-container">
          <h2>What Happens Next?</h2>
          <p>{"After you submit your inquiry, here's what you can expect from the Rex Eight IT team:"}</p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">1️⃣</div>
              <h4>Quick Response</h4>
              <p>{"We'll review your message and respond within 24 hours (typically much sooner) to acknowledge receipt and schedule a conversation."}</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">2️⃣</div>
              <h4>Discovery Call</h4>
              <p>{"We'll schedule a 30-minute consultation to understand your needs, challenges, and goals in detail. No sales pressure, just honest advice."}</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">3️⃣</div>
              <h4>Tailored Proposal</h4>
              <p>{"Based on our conversation, we'll prepare a customized proposal outlining our recommended approach, timeline, and investment."}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

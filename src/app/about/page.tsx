"use client";
import "./about.css";
import HEROIMAGE from "@/app/assets/images/rex_eight_it_head.jpg"
export default function about() {

  return (
    <main className="">
      <section className="page-header">
        <h1>About Rex Eight IT</h1>
        <p>A veteran and woman-owned business dedicated to empowering small to medium-sized businesses with enterprise-level technology solutions</p>
    </section>

    <section className="mission-section">
        <div className="mission-container">
            <h2>Our Mission</h2>
            <div className="mission-statement">
                "Empowering small to medium-sized businesses with enterprise-level Power Platform solutions."
            </div>
            <p className="mission-description">
               {" At Rex Eight IT, we believe that every business deserves access to powerful technology solutions, regardless of size. We bridge the gap between complex enterprise tools and practical business needs, making advanced data analytics, automation, and AI accessible to organizations that need them most. We're not just consultants—we're partners in your success, committed to delivering solutions that transform how you work."}
            </p>
        </div>
    </section>

    <section className="values-section">
        <div className="values-container">
            <h2 className="section-title">Why Choose Rex Eight IT?</h2>
            <p className="section-subtitle">
                We bring a unique combination of technical expertise, military discipline, and personalized service to every engagement
            </p>
            <div className="values-grid">
                <div className="value-card">
                    <span className="value-icon">🎖️</span>
                    <h3>Veteran & Woman Owned</h3>
                    <p>Built on principles of discipline, integrity, and diverse perspectives. We bring military precision and dedication to every project we undertake.</p>
                </div>
                
                <div className="value-card">
                    <span className="value-icon">🎓</span>
                    <h3>Microsoft Certified</h3>
                    <p>{"Advanced certifications in Power Platform and Azure services. Our expertise is validated by Microsoft's rigorous certification programs."}</p>
                </div>
                
                <div className="value-card">
                    <span className="value-icon">⚡</span>
                    <h3>Rapid Delivery</h3>
                    <p>Solutions in days, not months. Our low-code expertise enables us to deliver functional applications and dashboards quickly without compromising quality.</p>
                </div>
                
                <div className="value-card">
                    <span className="value-icon">🤝</span>
                    <h3>True Partnership</h3>
                    <p>Direct access to our expert team who understand your business. No layers of account managers—you work directly with the people building your solutions.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="story-section">
        <div className="story-container">
            <div className="story-visual">
                <svg className="story-image" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    {/* <!-- Background --> */}
                   <image
      href={HEROIMAGE.src}
      x="0"
      y="0"
      width="500"
      height="500"
      preserveAspectRatio="xMidYMid slice"
    />
                </svg>
            </div>
            <div className="story-content">
                <h2>Our Story</h2>
                <p>
                    Rex Eight IT was founded on a simple belief: small and medium-sized businesses deserve the same powerful technology solutions as large enterprises—without the complexity, overhead, or impersonal service.
                </p>
                <p>
                    As a veteran and woman-owned business, we bring a unique perspective to technology consulting. Our military background instills discipline, attention to detail, and a mission-focused approach. We understand the importance of clear communication, meeting deadlines, and delivering results that matter.
                </p>
                <p>
                    {"We've worked with businesses across industries, helping them transform raw data into actionable insights, automate tedious processes, and build custom applications that streamline operations. Our success is measured by our clients' success—when you grow, we grow."}
                </p>
                <div className="story-highlight">
                    <p><strong>{"We are the experts, so you don't have to be!"}</strong> While others sell the promise of "low-code, no-code" simplicity, we bring the real-world expertise needed to turn those tools into reliable business solutions.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="certifications-section">
        <div className="certifications-container">
            <h2>Certifications & Recognition</h2>
            <div className="cert-badges">
                <div className="cert-badge">
                    <h3>✓ Veteran Owned</h3>
                    <p>Certified veteran-owned business bringing military discipline and values to every project</p>
                </div>
                <div className="cert-badge">
                    <h3>✓ Woman Owned</h3>
                    <p>Certified woman-owned business committed to diversity and inclusive excellence</p>
                </div>
                <div className="cert-badge">
                    <h3>✓ Microsoft Certified</h3>
                    <p>Advanced certifications in Power Platform and Azure cloud services</p>
                </div>
            </div>
        </div>
    </section>

    <section className="expertise-section">
        <div className="expertise-container">
            <h2 className="section-title">Our Areas of Expertise</h2>
            <p className="section-subtitle">
                Comprehensive technology solutions designed to transform how your business operates
            </p>
            <div className="expertise-grid">
                <div className="expertise-card">
                    <div className="expertise-number">Expertise 01</div>
                    <h3>Data Engineering & Integration</h3>
                    <p>We build robust data foundations that connect cloud, on-premise, and application data into a single, reliable source of truth. End data silos and achieve faster reporting through automated pipelines.</p>
                </div>

                <div className="expertise-card">
                    <div className="expertise-number">Expertise 02</div>
                    <h3>Business Intelligence & Analytics</h3>
                    <p>Transform raw data into visual stories that empower smarter decisions. We create dashboards, KPI monitoring systems, and automated insights that give you real-time visibility into your business performance.</p>
                </div>

                <div className="expertise-card">
                    <div className="expertise-number">Expertise 03</div>
                    <h3>Application Development & Automation</h3>
                    <p>Design low-code apps and workflow automations that replace manual tasks with intuitive digital experiences. Reduce bottlenecks and deliver internal tools in days, not months.</p>
                </div>

                <div className="expertise-card">
                    <div className="expertise-number">Expertise 04</div>
                    <h3>AI Agents & Intelligent Automation</h3>
                    <p>Deploy custom AI agents that learn from your data, automate decisions, and assist teams through natural conversation. Build virtual assistants for analytics, CRM, and operations.</p>
                </div>

                <div className="expertise-card">
                    <div className="expertise-number">Expertise 05</div>
                    <h3>Cloud Migration & Modernization</h3>
                    <p>Help organizations migrate, optimize, and modernize their infrastructure across AWS, Azure, and Oracle Cloud. Move with confidence and scale without limits.</p>
                </div>

                <div className="expertise-card">
                    <div className="expertise-number">Complete Support</div>
                    <h3>End-to-End Partnership</h3>
                    <p>{"From strategy and implementation to training and ongoing support, we're with you every step of the way. Keep your business modern with the latest in technology, AI, and integration."}</p>
                </div>
            </div>
        </div>
    </section>
    </main>
  );
}

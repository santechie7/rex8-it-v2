"use server";
import React from "react";
import "./home.css";
import HEROIMAGE from "@/app/assets/images/rex_eight_it_head.jpg"
import PROBLEMIMAGE from "@/app/assets/images/rex_eight_it_Problem.jpg"

export default async function HomePage() {
  return (
    <main className="">
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Transform your business with{" "}
              <span className="highlight">expert Power Platform</span>{" "}
              consulting
            </h1>
            <p className="hero-subtitle">
              <strong>{"We are the experts, so you don't have to be!"}</strong>
            </p>
            <div className="hero-description">
              <p>
                Big companies offer oversimplified &quot;low-code&quot;
                solutions for small to medium-sized businesses. You and I know
                it&apos;s not that straightforward. Creating reliable,
                actionable dashboards, apps, and automated processes requires
                expertise, even with &quot;low-code&quot; tools.
              </p>
            </div>
            <div className="hero-cta">
              <a href="#contact" className="btn-primary">
                Schedule Consultation
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </div>
          </div>
         <div className="hero-visual">
  <svg
    className="hero-image"
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
  >
    <image
      href={HEROIMAGE.src}
      x="0"
      y="0"
      width="500"
      height="500"
      preserveAspectRatio="xMidYMid slice"
    />
    {/* Other SVG elements */}
  </svg>
</div>



        </div>
      </section>

      {/* Tagline Banner */}
      <section className="tagline-banner">
        <h2>"Remember when someone claimed the dog ate their homework?"</h2>
        <p>
          Running a business faces similar hurdles. Sure, it&apos;s not calculus
          anymore but it&apos;s tedious for you all the same. That&apos;s where
          we come in &ndash; to tackle those challenges when the dog eats your
          best intentions.
        </p>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="problem-container">
          <div>
            <svg
              className="problem-image"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background with torn papers */}
               <image
      href={PROBLEMIMAGE.src}
      x="0"
      y="0"
      width="400"
      height="400"
      preserveAspectRatio="xMidYMid slice"
    />
            </svg>
          </div>
          <div className="problem-content">
            <h2>Just to avoid doing it?</h2>
            <p>
              Running a business faces similar hurdles. Sure, it&apos;s not
              calculus anymore but it&apos;s tedious for you all the same.
            </p>
            <p>
              <strong>That&apos;s where we come in</strong> – to tackle those
              challenges when the dog eats your best intentions.
            </p>
            <p>
              We specialize in solving problems by streamlining operations,
              automating workflows, and providing data-driven insights. We
              ensure seamless integration with your existing systems, maximizing
              efficiency and productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview" id="services">
        <div className="section-header">
          <div className="section-label">How can I help your business?</div>
          <h2>Comprehensive Power Platform Solutions</h2>
          <p>
            From data engineering to AI automation, we provide end-to-end
            solutions that transform how your business operates and makes
            decisions.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-number">Service 01</div>
            <h3>Data Engineering & Integration</h3>
            <p className="service-tagline">
              Unify your data, unlock your business intelligence.
            </p>
            <p>
              We build strong data foundations that connect cloud, on-premise,
              and application data into a single, reliable source of truth.
            </p>
            <div className="service-benefits">
              <div className="benefit-item">
                End data silos with seamless system integration
              </div>
              <div className="benefit-item">
                Achieve faster reporting through automated data pipelines
              </div>
              <div className="benefit-item">
                Gain data quality, consistency, and governance across platforms
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-number">Service 02</div>
            <h3>Business Intelligence & Analytics</h3>
            <p className="service-tagline">From numbers to narratives.</p>
            <p>
              We transform raw data into visual stories that empower smarter
              decisions through dashboards, KPI monitoring, and automated
              insights.
            </p>
            <div className="service-benefits">
              <div className="benefit-item">
                See business performance in real time
              </div>
              <div className="benefit-item">
                Empower teams with self-service dashboards
              </div>
              <div className="benefit-item">
                Turn complex analytics into clear, actionable insights
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-number">Service 03</div>
            <h3>Application Development & Automation</h3>
            <p className="service-tagline">
              Simplify operations. Accelerate innovation.
            </p>
            <p>
              We design low-code apps and workflow automations that replace
              manual tasks with intuitive digital experiences — all built for
              scalability.
            </p>
            <div className="service-benefits">
              <div className="benefit-item">
                Reduce manual effort and process bottlenecks
              </div>
              <div className="benefit-item">
                Deliver internal tools and portals in days, not months
              </div>
              <div className="benefit-item">
                Integrate data and workflows seamlessly across systems
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-number">Service 04</div>
            <h3>AI Agents & Intelligent Automation</h3>
            <p className="service-tagline">
              Bring intelligence to everyday business.
            </p>
            <p>
              We deploy custom AI agents that learn from your data, automate
              decisions, and assist teams through natural conversation.
            </p>
            <div className="service-benefits">
              <div className="benefit-item">
                Build virtual assistants for analytics, CRM, and operations
              </div>
              <div className="benefit-item">
                Automate reporting, forecasting, and customer interactions
              </div>
              <div className="benefit-item">
                Create personalized business copilots powered by your data
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-number">Service 05</div>
            <h3>Cloud Migration & Modernization</h3>
            <p className="service-tagline">
              Move with confidence. Scale without limits.
            </p>
            <p>
              We help organizations migrate, optimize, and modernize their
              infrastructure across AWS, Azure, and Oracle Cloud.
            </p>
            <div className="service-benefits">
              <div className="benefit-item">
                Migrate legacy systems with minimal downtime
              </div>
              <div className="benefit-item">
                Modernize data architecture for scalability and speed
              </div>
              <div className="benefit-item">
                Adopt a multi-cloud strategy for flexibility and resilience
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-number">What We Offer</div>
            <h3>Complete Support</h3>
            <p className="service-tagline">End-to-end partnership.</p>
            <p>
              {
                "From strategy and implementation to training and ongoing support, we're with you every step of the way."
              }
            </p>
            <div className="service-benefits">
              <div className="benefit-item">
                Keep your business modern with technology, AI, and integration
              </div>
              <div className="benefit-item">
                Attract new customers and keep existing ones satisfied
              </div>
              <div className="benefit-item">
                Get noticed with reduced overhead costs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="showcase-section">
        <div className="showcase-container">
          <div className="section-header">
            <div className="section-label">Our Work</div>
            <h2>Real Solutions for Real Businesses</h2>
            <p>
              We deliver actionable insights through beautiful, functional
              dashboards and automated workflows that drive results.
            </p>
          </div>

          <div className="showcase-grid">
            <div className="showcase-item">
              <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="250" fill="#2d3e50" />
                <text
                  x="150"
                  y="30"
                  font-size="18"
                  fill="white"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  Project Summary Overview
                </text>

                {/* <!-- KPI Cards --> */}
                <rect
                  x="20"
                  y="50"
                  width="60"
                  height="50"
                  fill="#4a5d6a"
                  rx="3"
                />
                <text
                  x="50"
                  y="75"
                  font-size="20"
                  fill="#c9a36a"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  11
                </text>
                <text
                  x="50"
                  y="92"
                  font-size="8"
                  fill="white"
                  text-anchor="middle"
                >
                  Projects
                </text>

                <rect
                  x="90"
                  y="50"
                  width="60"
                  height="50"
                  fill="#4a5d6a"
                  rx="3"
                />
                <text
                  x="120"
                  y="75"
                  font-size="20"
                  fill="#c9a36a"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  25
                </text>
                <text
                  x="120"
                  y="92"
                  font-size="8"
                  fill="white"
                  text-anchor="middle"
                >
                  Hours
                </text>

                <rect
                  x="160"
                  y="50"
                  width="60"
                  height="50"
                  fill="#4a5d6a"
                  rx="3"
                />
                <text
                  x="190"
                  y="75"
                  font-size="20"
                  fill="#c9a36a"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  8
                </text>
                <text
                  x="190"
                  y="92"
                  font-size="8"
                  fill="white"
                  text-anchor="middle"
                >
                  Issues
                </text>

                <rect
                  x="230"
                  y="50"
                  width="60"
                  height="50"
                  fill="#4a5d6a"
                  rx="3"
                />
                <text
                  x="260"
                  y="75"
                  font-size="20"
                  fill="#c9a36a"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  67
                </text>
                <text
                  x="260"
                  y="92"
                  font-size="8"
                  fill="white"
                  text-anchor="middle"
                >
                  Tasks
                </text>

                {/* <!-- Charts --> */}
                <rect
                  x="20"
                  y="120"
                  width="80"
                  height="110"
                  fill="#3a4d5a"
                  rx="3"
                />
                <rect x="25" y="200" width="15" height="20" fill="#5a9fd4" />
                <rect x="45" y="185" width="15" height="35" fill="#5a9fd4" />
                <rect x="65" y="175" width="15" height="45" fill="#5a9fd4" />
                <rect x="85" y="190" width="15" height="30" fill="#5a9fd4" />

                <rect
                  x="110"
                  y="120"
                  width="80"
                  height="110"
                  fill="#3a4d5a"
                  rx="3"
                />
                <rect x="115" y="200" width="15" height="20" fill="#8b7355" />
                <rect x="135" y="180" width="15" height="40" fill="#8b7355" />
                <rect x="155" y="190" width="15" height="30" fill="#8b7355" />
                <rect x="175" y="170" width="15" height="50" fill="#8b7355" />

                <rect
                  x="200"
                  y="120"
                  width="80"
                  height="110"
                  fill="#3a4d5a"
                  rx="3"
                />
                <rect x="205" y="195" width="15" height="25" fill="#c9a36a" />
                <rect x="225" y="185" width="15" height="35" fill="#c9a36a" />
                <rect x="245" y="180" width="15" height="40" fill="#c9a36a" />
                <rect x="265" y="190" width="15" height="30" fill="#c9a36a" />
              </svg>
              <div className="showcase-caption">Executive Dashboards</div>
            </div>

            <div className="showcase-item">
              <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="250" fill="white" />
                <text
                  x="150"
                  y="30"
                  font-size="18"
                  fill="#2d3e50"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  Weight Loss Progress
                </text>

                {/* <!-- Line chart --> */}
                <line
                  x1="30"
                  y1="220"
                  x2="270"
                  y2="220"
                  stroke="#e0d5c7"
                  stroke-width="2"
                />
                <line
                  x1="30"
                  y1="60"
                  x2="30"
                  y2="220"
                  stroke="#e0d5c7"
                  stroke-width="2"
                />

                {/* <!-- Data points and line --> */}
                <polyline
                  points="40,180 70,160 100,140 130,130 160,120 190,115 220,110 250,108"
                  fill="none"
                  stroke="#e74c3c"
                  stroke-width="3"
                />

                {/* <!-- Points --> */}
                <circle cx="40" cy="180" r="5" fill="#e74c3c" />
                <circle cx="70" cy="160" r="5" fill="#e74c3c" />
                <circle cx="100" cy="140" r="5" fill="#e74c3c" />
                <circle cx="130" cy="130" r="5" fill="#e74c3c" />
                <circle cx="160" cy="120" r="5" fill="#e74c3c" />
                <circle cx="190" cy="115" r="5" fill="#e74c3c" />
                <circle cx="220" cy="110" r="5" fill="#e74c3c" />
                <circle cx="250" cy="108" r="5" fill="#e74c3c" />

                {/* <!-- Pie charts --> */}
                <circle
                  cx="80"
                  cy="90"
                  r="30"
                  fill="none"
                  stroke="#c9a36a"
                  stroke-width="20"
                  stroke-dasharray="94 188"
                  transform="rotate(-90 80 90)"
                />
                <circle
                  cx="220"
                  cy="90"
                  r="30"
                  fill="none"
                  stroke="#5a9fd4"
                  stroke-width="20"
                  stroke-dasharray="141 188"
                  transform="rotate(-90 220 90)"
                />
              </svg>
              <div className="showcase-caption">Health Analytics</div>
            </div>

            <div className="showcase-item">
              <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="250" fill="#f5f1ea" />
                <text
                  x="150"
                  y="30"
                  font-size="18"
                  fill="#2d3e50"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  Retail Sales Portfolio Evaluation
                </text>

                {/* <!-- Stacked bars --> */}
                <rect x="30" y="60" width="30" height="150" fill="#5a9fd4" />
                <rect x="70" y="80" width="30" height="130" fill="#5a9fd4" />
                <rect x="110" y="100" width="30" height="110" fill="#5a9fd4" />
                <rect x="150" y="90" width="30" height="120" fill="#5a9fd4" />
                <rect x="190" y="70" width="30" height="140" fill="#5a9fd4" />
                <rect x="230" y="85" width="30" height="125" fill="#5a9fd4" />

                <rect x="30" y="50" width="30" height="10" fill="#c9a36a" />
                <rect x="70" y="60" width="30" height="20" fill="#c9a36a" />
                <rect x="110" y="80" width="30" height="20" fill="#c9a36a" />
                <rect x="150" y="70" width="30" height="20" fill="#c9a36a" />
                <rect x="190" y="55" width="30" height="15" fill="#c9a36a" />
                <rect x="230" y="65" width="30" height="20" fill="#c9a36a" />

                {/* <!-- Pie chart --> */}
                <circle cx="230" cy="150" r="40" fill="#2d3e50" />
                <path
                  d="M 230 110 A 40 40 0 0 1 270 150 L 230 150 Z"
                  fill="#c9a36a"
                />
                <path
                  d="M 270 150 A 40 40 0 0 1 230 190 L 230 150 Z"
                  fill="#5a9fd4"
                />
                <path
                  d="M 230 190 A 40 40 0 0 1 190 150 L 230 150 Z"
                  fill="#8b7355"
                />

                <text
                  x="150"
                  y="235"
                  font-size="10"
                  fill="#2d3e50"
                  text-anchor="middle"
                >
                  Monthly Revenue Trends
                </text>
              </svg>
              <div className="showcase-caption">Sales Analytics</div>
            </div>

            <div className="showcase-item">
              <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="250" fill="white" />

                {/* <!-- Header --> */}
                <rect x="0" y="0" width="300" height="40" fill="#2d3e50" />
                <text
                  x="20"
                  y="25"
                  font-size="14"
                  fill="white"
                  font-weight="bold"
                >
                  Employee Portal
                </text>

                {/* <!-- Navigation --> */}
                <rect
                  x="20"
                  y="50"
                  width="80"
                  height="25"
                  fill="#c9a36a"
                  rx="3"
                />
                <text
                  x="60"
                  y="67"
                  font-size="10"
                  fill="white"
                  text-anchor="middle"
                >
                  Dashboard
                </text>

                <rect
                  x="110"
                  y="50"
                  width="80"
                  height="25"
                  fill="#e0d5c7"
                  rx="3"
                />
                <text
                  x="150"
                  y="67"
                  font-size="10"
                  fill="#2d3e50"
                  text-anchor="middle"
                >
                  Time Off
                </text>

                <rect
                  x="200"
                  y="50"
                  width="80"
                  height="25"
                  fill="#e0d5c7"
                  rx="3"
                />
                <text
                  x="240"
                  y="67"
                  font-size="10"
                  fill="#2d3e50"
                  text-anchor="middle"
                >
                  Benefits
                </text>

                {/* <!-- Content cards --> */}
                <rect
                  x="20"
                  y="90"
                  width="120"
                  height="70"
                  fill="#f5f1ea"
                  rx="5"
                />
                <text
                  x="80"
                  y="110"
                  font-size="11"
                  fill="#2d3e50"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  Your Tasks
                </text>
                <rect
                  x="30"
                  y="120"
                  width="100"
                  height="8"
                  fill="#5a9fd4"
                  rx="2"
                />
                <rect
                  x="30"
                  y="135"
                  width="100"
                  height="8"
                  fill="#c9a36a"
                  rx="2"
                />
                <rect
                  x="30"
                  y="150"
                  width="100"
                  height="8"
                  fill="#8b7355"
                  rx="2"
                />

                <rect
                  x="160"
                  y="90"
                  width="120"
                  height="70"
                  fill="#f5f1ea"
                  rx="5"
                />
                <text
                  x="220"
                  y="110"
                  font-size="11"
                  fill="#2d3e50"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  Announcements
                </text>
                <rect
                  x="170"
                  y="120"
                  width="100"
                  height="8"
                  fill="#e0d5c7"
                  rx="2"
                />
                <rect
                  x="170"
                  y="135"
                  width="80"
                  height="8"
                  fill="#e0d5c7"
                  rx="2"
                />
                <rect
                  x="170"
                  y="150"
                  width="90"
                  height="8"
                  fill="#e0d5c7"
                  rx="2"
                />

                <rect
                  x="20"
                  y="175"
                  width="260"
                  height="60"
                  fill="#f5f1ea"
                  rx="5"
                />
                <text
                  x="150"
                  y="195"
                  font-size="11"
                  fill="#2d3e50"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  Recent Activity
                </text>
                <circle cx="35" cy="215" r="8" fill="#c9a36a" />
                <rect
                  x="50"
                  y="210"
                  width="200"
                  height="4"
                  fill="#e0d5c7"
                  rx="1"
                />
                <rect
                  x="50"
                  y="220"
                  width="150"
                  height="4"
                  fill="#e0d5c7"
                  rx="1"
                />
              </svg>
              <div className="showcase-caption">Custom Apps</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose" id="about">
        <div className="why-container">
          <h2>Why Choose Rex Eight IT?</h2>
          <p>
            {
              "We're not a faceless corporation. We're a dedicated team that understands your unique challenges and brings both technical expertise and personalized service to every engagement."
            }
          </p>
          <div className="why-features">
            <div className="feature-card">
              <span className="feature-icon">🎖️</span>
              <h4>Veteran & Woman Owned</h4>
              <p>
                Discipline, integrity, and diverse perspectives in every project
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🎓</span>
              <h4>Microsoft Certified</h4>
              <p>
                Advanced certifications in Power Platform and Azure services
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <h4>Rapid Delivery</h4>
              <p>Solutions in days, not months, with our low-code expertise</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🤝</span>
              <h4>True Partnership</h4>
              <p>
                Direct access to our expert team who understand your business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Badge */}
      <section className="owner-badge-section">
        <div className="owner-badge-content">
          <h3>REX EIGHT L.L.C.</h3>
          <p>
            Certified Veteran & Woman Owned Business | Empowering Small to
            Medium Businesses
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section" id="contact">
        <div className="cta-container">
          <h2>Ready to Transform Your Data Into Action?</h2>
          <p>
            {
              "Let's discuss how we can help you unlock the full potential of your business data with Microsoft Power Platform solutions. Schedule a free consultation today."
            }
          </p>
          <div className="cta-buttons">
            <a href="mailto:info@rexeightit.com" className="btn-primary">
              Schedule Free Consultation
            </a>
            <a href="#services" className="btn-secondary">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

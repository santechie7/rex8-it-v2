"use client";
import "./services.css";
export default function ServicesPage() {
  

  return (
    <main className="">
       <section className="page-header">
        <div className="page-header-content">
          <h1>Our Services</h1>
          <p>Comprehensive Power Platform solutions designed to transform your business operations, unlock data insights, and accelerate digital transformation.</p>

          <div className="services-nav">
            <a href="#data-engineering">Data Engineering</a>
            <a href="#business-intelligence">Business Intelligence</a>
            <a href="#app-development">App Development</a>
            <a href="#ai-automation">AI Automation</a>
            <a href="#cloud-migration">Cloud Migration</a>
          </div>
        </div>
      </section>

      <section className="services-section">
        {/* <!-- Service 1: Data Engineering --> */}
        <div className="service-detail" id="data-engineering">
            <div className="service-header">
                <div className="service-number">Service 01</div>
                <h2>Data Engineering & Integration</h2>
                <p className="service-tagline">Unify your data, unlock your business intelligence.</p>
                <p className="service-description">We build strong data foundations that connect cloud, on-premise, and application data into a single, reliable source of truth. Our data engineering services ensure your business has accurate, consistent, and accessible data across all platforms.</p>
            </div>

            <div className="service-content">
                <div className="content-card">
                    <h3>Client Value</h3>
                    <div className="value-list">
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>End data silos with seamless system integration</strong>
                                <p>Connect disparate systems across your entire organization for a unified data view</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>Achieve faster reporting through automated data pipelines</strong>
                                <p>Eliminate manual data processes with intelligent ETL/ELT automation</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>Gain data quality, consistency, and governance</strong>
                                <p>Ensure data accuracy and compliance across all platforms and departments</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-card">
                    <h3>What We Deliver</h3>
                    <div className="deliverables-grid">
                        <div className="deliverable-card">
                            <span className="deliverable-icon">🔄</span>
                            <h4>ETL/ELT Pipelines</h4>
                            <p>Automated data extraction, transformation, and loading processes</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">🗄️</span>
                            <h4>Data Warehousing</h4>
                            <p>Scalable cloud data warehouses on Azure, AWS, or Oracle</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">🔗</span>
                            <h4>API Integration</h4>
                            <p>Connect disparate systems and third-party platforms seamlessly</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">✅</span>
                            <h4>Data Quality</h4>
                            <p>Validation, cleansing, and quality assurance processes</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="use-cases-section">
                <h4>Common Use Cases</h4>
                <ul>
                    <li>Consolidating data from Dynamics 365, Salesforce, and legacy systems</li>
                    <li>Building real-time data pipelines for operational reporting</li>
                    <li>Creating enterprise data warehouses for analytics</li>
                    <li>Implementing master data management strategies</li>
                </ul>
            </div>
        </div>

        {/* <!-- Service 2: Business Intelligence --> */}
        <div className="service-detail" id="business-intelligence">
            <div className="service-header">
                <div className="service-number">Service 02</div>
                <h2>Business Intelligence & Analytics</h2>
                <p className="service-tagline">From numbers to narratives.</p>
                <p className="service-description">We transform raw data into visual stories that empower smarter decisions through dashboards, KPI monitoring, and automated insights. Our Power BI expertise helps you see beyond the data and understand what drives your business.</p>
            </div>

            <div className="service-content">
                <div className="content-card">
                    <h3>Client Value</h3>
                    <div className="value-list">
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>See business performance in real time</strong>
                                <p>Interactive dashboards with live metrics and KPI tracking</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>Empower teams with self-service dashboards</strong>
                                <p>Intuitive interfaces that anyone can use and understand</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>Turn complex analytics into clear, actionable insights</strong>
                                <p>Data visualizations that drive better business decisions</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-card">
                    <h3>What We Deliver</h3>
                    <div className="deliverables-grid">
                        <div className="deliverable-card">
                            <span className="deliverable-icon">📊</span>
                            <h4>Power BI Dashboards</h4>
                            <p>Custom interactive dashboards with drill-down capabilities</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">📈</span>
                            <h4>KPI Tracking</h4>
                            <p>Real-time performance monitoring and alerting systems</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">🎨</span>
                            <h4>Custom Visuals</h4>
                            <p>Tailored data visualizations for your specific needs</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">📱</span>
                            <h4>Mobile Reports</h4>
                            <p>Access insights anywhere on any device</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="use-cases-section">
                <h4>Common Use Cases</h4>
                <ul>
                    <li>Executive dashboards for C-suite decision-making</li>
                    <li>Sales performance tracking and forecasting</li>
                    <li>Financial reporting and budget analysis</li>
                    <li>Operations monitoring and process optimization</li>
                </ul>
            </div>
        </div>

        {/* <!-- Service 3: App Development --> */}
        <div className="service-detail" id="app-development">
            <div className="service-header">
                <div className="service-number">Service 03</div>
                <h2>Application Development & Automation</h2>
                <p className="service-tagline">Simplify operations. Accelerate innovation.</p>
                <p className="service-description">We design low-code apps and workflow automations that replace manual tasks with intuitive digital experiences — all built for scalability. Leverage Power Apps and Power Automate to transform how your team works.</p>
            </div>

            <div className="service-content">
                <div className="content-card">
                    <h3>Client Value</h3>
                    <div className="value-list">
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>Reduce manual effort and process bottlenecks</strong>
                                <p>Intelligent automation that eliminates repetitive tasks</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>Deliver internal tools and portals in days, not months</strong>
                                <p>Rapid low-code development for faster time-to-value</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>Integrate data and workflows seamlessly</strong>
                                <p>Connect all your business systems in one unified platform</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-card">
                    <h3>What We Deliver</h3>
                    <div className="deliverables-grid">
                        <div className="deliverable-card">
                            <span className="deliverable-icon">📱</span>
                            <h4>Power Apps</h4>
                            <p>Custom mobile and web applications with native integration</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">⚡</span>
                            <h4>Power Automate</h4>
                            <p>Workflow automation and business process optimization</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">🔌</span>
                            <h4>Connectors</h4>
                            <p>Integration with 500+ cloud services and platforms</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">🎯</span>
                            <h4>Portals</h4>
                            <p>Customer and employee self-service portals</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="use-cases-section">
                <h4>Common Use Cases</h4>
                <ul>
                    <li>Expense approval and invoice processing workflows</li>
                    <li>Customer onboarding and service request apps</li>
                    <li>Inventory management and field service tools</li>
                    <li>Employee directory and internal communication platforms</li>
                </ul>
            </div>
        </div>

        {/* <!-- Service 4: AI Automation --> */}
        <div className="service-detail" id="ai-automation">
            <div className="service-header">
                <div className="service-number">Service 04</div>
                <h2>AI Agents & Intelligent Automation</h2>
                <p className="service-tagline">Bring intelligence to everyday business.</p>
                <p className="service-description">We deploy custom AI agents that learn from your data, automate decisions, and assist teams through natural conversation. Harness the power of AI copilots, chatbots, and intelligent automation to scale your business operations.</p>
            </div>

            <div className="service-content">
                <div className="content-card">
                    <h3>Client Value</h3>
                    <div className="value-list">
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>Build virtual assistants for analytics, CRM, and operations</strong>
                                <p>Natural language AI that understands your business context</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>Automate reporting, forecasting, and customer interactions</strong>
                                <p>Intelligent systems that work 24/7 without supervision</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>Create personalized business copilots powered by your data</strong>
                                <p>AI assistants trained on your specific processes and knowledge</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-card">
                    <h3>What We Deliver</h3>
                    <div className="deliverables-grid">
                        <div className="deliverable-card">
                            <span className="deliverable-icon">🤖</span>
                            <h4>AI Copilots</h4>
                            <p>Context-aware assistants for Power BI and business systems</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">💬</span>
                            <h4>Chatbots</h4>
                            <p>Customer service and internal support automation</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">🧠</span>
                            <h4>ML Models</h4>
                            <p>Predictive analytics and forecasting algorithms</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">📝</span>
                            <h4>Document AI</h4>
                            <p>Intelligent document processing and summarization</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="use-cases-section">
                <h4>Common Use Cases</h4>
                <ul>
                    <li>AI copilot for querying Power BI data with natural language</li>
                    <li>Automated email categorization and response suggestions</li>
                    <li>Predictive maintenance and anomaly detection systems</li>
                    <li>Document extraction and contract analysis automation</li>
                </ul>
            </div>
        </div>

        {/* <!-- Service 5: Cloud Migration --> */}
        <div className="service-detail" id="cloud-migration">
            <div className="service-header">
                <div className="service-number">Service 05</div>
                <h2>Cloud Migration & Modernization</h2>
                <p className="service-tagline">Move with confidence. Scale without limits.</p>
                <p className="service-description">We help organizations migrate, optimize, and modernize their infrastructure across AWS, Azure, and Oracle Cloud — ensuring security, performance, and cost efficiency. Our cloud expertise ensures smooth transitions with zero business disruption.</p>
            </div>

            <div className="service-content">
                <div className="content-card">
                    <h3>Client Value</h3>
                    <div className="value-list">
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>Migrate legacy systems with minimal downtime</strong>
                                <p>Proven migration strategies that keep your business running</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>Modernize data architecture for scalability and speed</strong>
                                <p>Future-proof infrastructure built for growth</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div>
                                <strong>Adopt a multi-cloud strategy for flexibility and resilience</strong>
                                <p>Reduce vendor lock-in and optimize costs across platforms</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-card">
                    <h3>What We Deliver</h3>
                    <div className="deliverables-grid">
                        <div className="deliverable-card">
                            <span className="deliverable-icon">☁️</span>
                            <h4>Cloud Migration</h4>
                            <p>End-to-end migration planning and execution</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">🔧</span>
                            <h4>Infrastructure Optimization</h4>
                            <p>Performance tuning and cost optimization strategies</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">🔒</span>
                            <h4>Security & Compliance</h4>
                            <p>Enterprise-grade security architecture and governance</p>
                        </div>
                        <div className="deliverable-card">
                            <span className="deliverable-icon">🌐</span>
                            <h4>Multi-Cloud Setup</h4>
                            <p>Azure, AWS, and Oracle Cloud integration</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="use-cases-section">
                <h4>Common Use Cases</h4>
                <ul>
                    <li>Migrating on-premise SQL databases to Azure SQL or AWS RDS</li>
                    <li>Modernizing legacy applications for cloud-native architecture</li>
                    <li>Setting up disaster recovery and backup solutions</li>
                    <li>Implementing hybrid cloud for regulated industries</li>
                </ul>
            </div>
        </div>
    </section>
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Get Started?</h2>
          <p>{"Let's discuss which services are right for your business. Schedule a free consultation to explore how we can help you achieve your goals with Microsoft Power Platform."}</p>
          <a href="/contact" className="btn-primary">Schedule Free Consultation</a>
        </div>
      </section>

    </main>
  );
}

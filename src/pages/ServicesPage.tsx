import React from 'react';
import { EngineCardVideo } from '../components/EngineCardVideo';
import { FaqSection } from '../components/FaqSection';
import { CtaSection } from '../components/CtaSection';
import { ParticleMeshCanvas } from '../components/motion/ParticleMeshCanvas';
import { MotionReveal } from '../components/motion/MotionReveal';
import { CardSpotlight } from '../components/motion/CardSpotlight';
import { LaserFlowBeam } from '../components/motion/LaserFlowBeam';

export const ServicesPage: React.FC = () => {
  return (
    <div className="services-page-container">
      {/* Main Unified Services Page Content */}
      <section className="services-section page-hero" id="engines" style={{ position: 'relative', overflow: 'hidden' }}>
        <ParticleMeshCanvas className="hero-particle-mesh" particleCount={40} interactive={true} />

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <MotionReveal direction="up" className="section-head center">
            <div className="custom-badge">
              <span className="badge-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" className="badge-svg" aria-hidden="true">
                  <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                  <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
                </svg>
              </span>
              <span className="badge-text">What we deliver</span>
            </div>
            <h1 className="page-title">
              Three services. <span className="text-gradient">One accountable team.</span>
            </h1>
            <p className="page-lead">
              Workflow automation, AI vision, and finance operations, designed around the systems
              you already run and supported long after go-live.
            </p>
          </MotionReveal>

          <div className="engines-grid">
            {/* Engine Card 1 */}
            <MotionReveal direction="up" delay={0.1}>
              <CardSpotlight className="engine-card" enableTilt={true}>
                <EngineCardVideo
                  src="/assets/images/rpa-workflow.mp4"
                  poster="/assets/images/services-rpa-workflow.webp"
                  badgeText="Workflow Bot"
                  altText="RPA & Workflow Re-engineering"
                />

                <div className="engine-card-body">
                  <div className="engine-header-row">
                    <span className="engine-number">01</span>
                    <div className="engine-icon-wrapper">
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>
                  </div>
                  <h3 className="engine-card-title">RPA &amp; Workflow Re-engineering</h3>
                  <p className="engine-card-desc">
                    Software bots take over the repetitive steps in your existing apps, so transactions
                    move in seconds instead of hours. We audit each process first and remove the waste
                    before we automate it.
                  </p>

                  <hr className="engine-divider" />

                  <ul className="engine-features">
                    <li>Cross-system data synchronization architecture</li>
                    <li>UiPath &amp; Microsoft Power Automate deployment</li>
                    <li>Lean Six Sigma process footprint modernization</li>
                  </ul>
                </div>
              </CardSpotlight>
            </MotionReveal>

            {/* Engine Card 2 */}
            <MotionReveal direction="up" delay={0.2}>
              <CardSpotlight className="engine-card" enableTilt={true}>
                <div className="engine-card-media">
                  <img
                    src="/assets/images/services-ai-security.webp"
                    alt="AI Camera Security Monitoring"
                    className="engine-media-element"
                    loading="lazy"
                  />
                  <div className="engine-media-overlay"></div>
                  <div className="engine-media-badge">
                    <span className="engine-badge-pulse"></span>
                    <span>AI Detection</span>
                  </div>
                </div>

                <div className="engine-card-body">
                  <div className="engine-header-row">
                    <span className="engine-number">02</span>
                    <div className="engine-icon-wrapper">
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                  </div>
                  <h3 className="engine-card-title">AI Camera Security &amp; Loss Prevention</h3>
                  <p className="engine-card-desc">
                    Computer vision that plugs into the cameras you already have. It identifies
                    concealment behavior in real time and alerts your floor team with an instant video clip,
                    so shrinkage is prevented as it happens.
                  </p>

                  <hr className="engine-divider" />

                  <ul className="engine-features">
                    <li>Advanced in-aisle gesture classification models</li>
                    <li>Instant on-floor smart alerts with short proof clips</li>
                    <li>100% face-free, anonymous behavioral profiling</li>
                  </ul>
                </div>
              </CardSpotlight>
            </MotionReveal>

            {/* Engine Card 3 */}
            <MotionReveal direction="up" delay={0.3}>
              <CardSpotlight className="engine-card" enableTilt={true}>
                <div className="engine-card-media">
                  <img
                    src="/assets/images/services-financial-reporting.webp"
                    alt="Accounting, Bookkeeping & Reporting"
                    className="engine-media-element"
                    loading="lazy"
                  />
                  <div className="engine-media-overlay"></div>
                  <div className="engine-media-badge">
                    <span className="engine-badge-pulse"></span>
                    <span>Finance Ops</span>
                  </div>
                </div>

                <div className="engine-card-body">
                  <div className="engine-header-row">
                    <span className="engine-number">03</span>
                    <div className="engine-icon-wrapper">
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                  </div>
                  <h3 className="engine-card-title">Accounting, Bookkeeping &amp; Reporting</h3>
                  <p className="engine-card-desc">
                    Reliable day-to-day bookkeeping, automated bank feed reconciliation, and statutory
                    financial reporting led by qualified Chartered Accountants (CAs). Keep your numbers
                    audit-ready and aligned with Australian standards.
                  </p>

                  <hr className="engine-divider" />

                  <ul className="engine-features">
                    <li>Daily reconciliation &amp; cloud setups (Xero, MYOB)</li>
                    <li>Full AASB &amp; IFRS statement compliance frameworks</li>
                    <li>Live budget variances, job costing &amp; automated CFO panels</li>
                  </ul>
                </div>
              </CardSpotlight>
            </MotionReveal>
          </div>
        </div>

        <LaserFlowBeam color="#00d2ff" duration={3.5} />
      </section>

      {/* Services FAQ */}
      <FaqSection />

      {/* Call to Action */}
      <CtaSection />
    </div>
  );
};

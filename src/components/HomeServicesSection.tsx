import React from 'react';
import { Link } from 'react-router-dom';
import { MotionReveal } from './motion/MotionReveal';
import { CardSpotlight } from './motion/CardSpotlight';

export const HomeServicesSection: React.FC = () => {
  return (
    <section className="home-services-section" id="services-overview">
      <div className="section-container">
        <MotionReveal direction="up" className="section-head center">
          <div className="custom-badge">
            <span className="badge-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="badge-svg" aria-hidden="true">
                <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
              </svg>
            </span>
            <span className="badge-text">Core Capabilities</span>
          </div>
          <h2 className="section-title">
            Three Core Services. <span className="text-gradient">One Accountable Team.</span>
          </h2>
          <p className="section-subtitle">
            Robotic automation, AI vision, and financial engineering designed around the software your business already runs.
          </p>
        </MotionReveal>

        <div className="home-services-grid">
          {/* Service Card 1: RPA */}
          <MotionReveal direction="up" delay={0.1}>
            <CardSpotlight className="home-service-card" enableTilt={true}>
              <div className="home-service-icon-box">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3>RPA &amp; Workflow Re-Engineering</h3>
              <p>
                Software bots take over the repetitive steps across your existing business apps, so transactions move in
                seconds instead of hours. We apply Lean Six Sigma audits first to eliminate waste before automating.
              </p>
              <ul className="home-service-bullets">
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Cross-system data synchronization architecture</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>UiPath &amp; Microsoft Power Automate deployment</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Lean Six Sigma process footprint optimization</span>
                </li>
              </ul>
              <Link to="/services#engines" className="btn btn-outline btn-sm">
                Explore RPA Services &rarr;
              </Link>
            </CardSpotlight>
          </MotionReveal>

          {/* Service Card 2: AI Vision */}
          <MotionReveal direction="up" delay={0.2}>
            <CardSpotlight className="home-service-card" enableTilt={true}>
              <div className="home-service-icon-box">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3>AI Camera Security &amp; Loss Prevention</h3>
              <p>
                Computer vision that integrates with the cameras you already have. It identifies concealment behavior in
                real time and alerts your floor team with an instant video clip, so losses are prevented as they happen.
              </p>
              <ul className="home-service-bullets">
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Advanced in-aisle gesture classification models</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Instant on-floor smart alerts with short proof clips</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>100% face-free, anonymous behavioral profiling</span>
                </li>
              </ul>
              <Link to="/services#engines" className="btn btn-outline btn-sm">
                Explore AI Vision &rarr;
              </Link>
            </CardSpotlight>
          </MotionReveal>

          {/* Service Card 3: Financial Ops */}
          <MotionReveal direction="up" delay={0.3}>
            <CardSpotlight className="home-service-card" enableTilt={true}>
              <div className="home-service-icon-box">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>Accounting, Bookkeeping &amp; Reporting</h3>
              <p>
                Reliable day-to-day bookkeeping, automated bank feed reconciliation, and statutory financial reporting
                led by qualified Chartered Accountants (CAs). Keep your numbers audit-ready and aligned with Australian standards.
              </p>
              <ul className="home-service-bullets">
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Daily reconciliation &amp; cloud setups (Xero, MYOB)</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Full AASB &amp; IFRS statement compliance frameworks</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Live budget variances, job costing &amp; automated CFO panels</span>
                </li>
              </ul>
              <Link to="/services#engines" className="btn btn-outline btn-sm">
                Explore Financial Services &rarr;
              </Link>
            </CardSpotlight>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

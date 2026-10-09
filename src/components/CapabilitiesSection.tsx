import React from 'react';
import { MotionReveal } from './motion/MotionReveal';
import { CardSpotlight } from './motion/CardSpotlight';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="capabilities-section" id="capabilities">
      <div className="section-container">
        <MotionReveal direction="up" className="custom-badge">
          <span className="badge-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" className="badge-svg">
              <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
              <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
            </svg>
          </span>
          <span className="badge-text">Why iKOREX</span>
        </MotionReveal>
        <MotionReveal direction="up" delay={0.1}>
          <h2 className="section-title">Business Expertise. Intelligent Automation. Measurable Results.</h2>
          <p className="section-subtitle">Built around how your business actually runs.</p>
        </MotionReveal>

        <div className="capabilities-grid">
          {/* Bento Card 1: Industry Experience (span-6) */}
          <MotionReveal direction="up" delay={0.1} className="span-6">
            <CardSpotlight className="capability-card" enableTilt={true}>
              <h3 className="capability-title">Deep Industry Experience</h3>
              <p className="capability-body">
                Built by professionals who understand business operations and the challenges that slow
                them down. We identify where automation delivers the greatest impact.
              </p>
              <div className="card-visual-compact viz viz-orbit" data-viz aria-hidden="true">
                <div className="viz-orbit-ring">
                  <span className="viz-orbit-chip c1">
                    <span>Retail</span>
                  </span>
                  <span className="viz-orbit-chip c2">
                    <span>Manufacturing</span>
                  </span>
                  <span className="viz-orbit-chip c3">
                    <span>Healthcare</span>
                  </span>
                  <span className="viz-orbit-chip c4">
                    <span>Hospitality</span>
                  </span>
                  <span className="viz-orbit-chip c5">
                    <span>Banking</span>
                  </span>
                </div>
                <div className="viz-orbit-core">iKOREX</div>
              </div>
            </CardSpotlight>
          </MotionReveal>

          {/* Bento Card 2: Financial Workflows (span-6) */}
          <MotionReveal direction="up" delay={0.15} className="span-6">
            <CardSpotlight className="capability-card" enableTilt={true}>
              <h3 className="capability-title">Financial Workflows You Can Trust</h3>
              <p className="capability-body">
                Built by a team that includes qualified Chartered Accountants, with accuracy and
                compliance designed into every step of the process.
              </p>
              <div className="card-visual-compact viz viz-audit" data-viz aria-hidden="true">
                <span className="viz-audit-title">Audit trail</span>
                <span className="viz-audit-line">
                  <b>09:02</b> INV-2041 matched to PO-0778 <i>&#10003;</i>
                </span>
                <span className="viz-audit-line">
                  <b>09:02</b> GST validated <i>&#10003;</i>
                </span>
                <span className="viz-audit-line">
                  <b>09:03</b> Approval routed to finance
                </span>
                <span className="viz-audit-line">
                  <b>09:07</b> Approved &middot; posted to ledger <i>&#10003;</i>
                </span>
              </div>
            </CardSpotlight>
          </MotionReveal>

          {/* Bento Card 3: Business-First (span-4) */}
          <MotionReveal direction="up" delay={0.2} className="span-4">
            <CardSpotlight className="capability-card" enableTilt={true}>
              <h3 className="capability-title">Business-First Automation</h3>
              <p className="capability-body">
                Every solution is tailored to your workflows, goals, and challenges because no two
                businesses operate the same way.
              </p>
              <div className="card-visual-compact viz viz-waste" data-viz aria-hidden="true">
                <span className="viz-step">Order received</span>
                <span className="viz-step waste">Re-key into spreadsheet</span>
                <span className="viz-step">Invoice generated</span>
                <span className="viz-step waste">Email PDF, wait for reply</span>
                <span className="viz-step">Payment reconciled</span>
              </div>
            </CardSpotlight>
          </MotionReveal>

          {/* Bento Card 4: Measurable Results (span-4) */}
          <MotionReveal direction="up" delay={0.25} className="span-4">
            <CardSpotlight className="capability-card" enableTilt={true}>
              <h3 className="capability-title">Built for Measurable Results</h3>
              <p className="capability-body">
                Every automation is designed to deliver measurable improvements in productivity,
                efficiency, and operating costs.
              </p>
              <div className="card-visual-compact viz viz-results" data-viz aria-hidden="true">
                <span className="viz-label">Hours saved per week</span>
                <svg viewBox="0 0 260 110" preserveAspectRatio="none">
                  <line x1="0" y1="104" x2="260" y2="104" />
                  <path className="viz-results-line" d="M0 98 L40 92 L80 80 L120 64 L160 48 L200 34 L260 14" />
                </svg>
                <span className="viz-results-chip">Tracked from week one</span>
              </div>
            </CardSpotlight>
          </MotionReveal>

          {/* Bento Column 5: cited industry insights (span-4) */}
          <MotionReveal direction="up" delay={0.3} className="stats-bento-card span-4">
            <CardSpotlight className="stat-card-compact insight-card viz" enableTilt={true} data-viz>
              <span className="insight-label">Cost to process one invoice</span>
              <div className="insight-figures">
                <s>$9.40</s>
                <strong>$2.78</strong>
              </div>
              <div className="insight-bars" aria-hidden="true">
                <span className="bar-old"></span>
                <span className="bar-new"></span>
              </div>
              <p>Average accounts payable team vs best-in-class automated teams: about 70% less.</p>
              <span className="insight-source">Source: Ardent Partners, AP Metrics That Matter in 2025 (USD)</span>
            </CardSpotlight>
            <CardSpotlight className="stat-card-compact insight-card viz" enableTilt={true} data-viz style={{ marginTop: '16px' }}>
              <span className="insight-label">Invoice cycle time</span>
              <div className="insight-figures">
                <s>9.2</s>
                <strong>3.1 days</strong>
              </div>
              <div className="insight-bars" aria-hidden="true">
                <span className="bar-old"></span>
                <span className="bar-new short"></span>
              </div>
              <p>End to end, the average invoice takes 9.2 days. Best-in-class teams finish in 3.1.</p>
              <span className="insight-source">Source: Ardent Partners, AP Metrics That Matter in 2025</span>
            </CardSpotlight>
          </MotionReveal>
        </div>
        <p className="footnote">
          Industry figures are cited from third-party research. Your own outcomes vary by process
          complexity and current baseline, and are scoped during discovery.
        </p>
      </div>
    </section>
  );
};

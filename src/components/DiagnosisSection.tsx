import React from 'react';
import { Link } from 'react-router-dom';
import { MotionReveal } from './motion/MotionReveal';
import { CardSpotlight } from './motion/CardSpotlight';

export const DiagnosisSection: React.FC = () => {
  return (
    <section className="diagnosis-section" id="diagnosis">
      <div className="section-container">
        <MotionReveal direction="up" className="custom-badge">
          <span className="badge-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" className="badge-svg">
              <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
              <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
            </svg>
          </span>
          <span className="badge-text">The challenge</span>
        </MotionReveal>
        <MotionReveal direction="up" delay={0.1}>
          <h2 className="section-title diag-title" data-viz>
            What's <span className="slow-word">slowing</span>
            <br />
            your business down?
          </h2>
          <p className="section-subtitle">Explore the operational challenges we solve every day.</p>
        </MotionReveal>

        <div className="diagnosis-grid">
          {/* Card 1 */}
          <MotionReveal direction="up" delay={0.1}>
            <CardSpotlight className="diagnosis-card" enableTilt={true}>
              <div className="card-glow"></div>
              <div className="card-content">
                <span className="card-pretitle">INTELLIGENT PROCESS AUTOMATION</span>
                <h3 className="card-title">Too Much Time Spent on Repetitive Tasks?</h3>
                <p className="card-body">
                  Manual data entry, invoice processing, approvals, payroll, procurement, and reporting
                  consume valuable hours and increase the risk of costly errors.
                </p>
              </div>

              <div className="card-visual viz viz-tasks" data-viz>
                <span className="viz-label">An example day</span>
                <ul className="viz-task-list">
                  <li>
                    <span>Key invoices into Xero</span>
                    <span>45 min</span>
                  </li>
                  <li>
                    <span>Chase approvals by email</span>
                    <span>30 min</span>
                  </li>
                  <li>
                    <span>Update the stock sheet</span>
                    <span>25 min</span>
                  </li>
                  <li>
                    <span>Build the weekly report</span>
                    <span>40 min</span>
                  </li>
                </ul>
                <span className="viz-sweep" aria-hidden="true"></span>
                <div className="viz-task-done">
                  All four, automated <span>runs while you work</span>
                </div>
              </div>

              <Link to="/services" className="card-link">
                Discover Process Automation <span className="arrow">&rarr;</span>
              </Link>
            </CardSpotlight>
          </MotionReveal>

          {/* Card 2 */}
          <MotionReveal direction="up" delay={0.2}>
            <CardSpotlight className="diagnosis-card" enableTilt={true}>
              <div className="card-glow"></div>
              <div className="card-content">
                <span className="card-pretitle">AI VISION &amp; MONITORING</span>
                <h3 className="card-title">Limited Visibility Into Your Operations?</h3>
                <p className="card-body">
                  Without real-time insights, safety risks, operational inefficiencies, and inventory
                  losses often go unnoticed until they become expensive problems.
                </p>
              </div>

              <div className="card-visual viz viz-floor" data-viz aria-hidden="true">
                <div className="viz-floor-head">
                  <span className="viz-floor-label">Operational map &middot; live observability</span>
                  <span className="viz-floor-sync">Resolving</span>
                </div>
                <div className="viz-telemetry-stack">
                  <div className="viz-telemetry-row t1">
                    <span className="viz-telemetry-node">Zone 01 &middot; Inventory</span>
                    <span className="viz-telemetry-state">Blind spot</span>
                    <span className="viz-telemetry-res">Connecting...</span>
                  </div>
                  <div className="viz-telemetry-row t2">
                    <span className="viz-telemetry-node">Zone 02 &middot; Workflows</span>
                    <span className="viz-telemetry-state">Fragmented</span>
                    <span className="viz-telemetry-res ok">Mapped &check;</span>
                  </div>
                  <div className="viz-telemetry-row t3">
                    <span className="viz-telemetry-node">Zone 03 &middot; Floor operations</span>
                    <span className="viz-telemetry-state">Telemetry linked</span>
                    <span className="viz-telemetry-res ok">Verified &check;</span>
                  </div>
                </div>
                <div className="viz-alert">
                  <strong>Full operational visibility</strong>
                  <span>All dependencies discovered &middot; 100% active</span>
                </div>
              </div>

              <Link to="/solutions#loss-prevention" className="card-link">
                Explore AI Vision Solutions <span className="arrow">&rarr;</span>
              </Link>
            </CardSpotlight>
          </MotionReveal>

          {/* Card 3 */}
          <MotionReveal direction="up" delay={0.3}>
            <CardSpotlight className="diagnosis-card" enableTilt={true}>
              <div className="card-glow"></div>
              <div className="card-content">
                <span className="card-pretitle">AI FINANCIAL INTELLIGENCE</span>
                <h3 className="card-title">Still Waiting Days for Financial Insights?</h3>
                <p className="card-body">
                  Manual reconciliation, reporting, and financial analysis slow decision-making and make
                  it harder to stay ahead.
                </p>
              </div>

              <div className="card-visual viz viz-books" data-viz>
                <div className="viz-books-head">
                  <span className="viz-label">Cash position</span>
                  <span className="viz-live">Updated just now</span>
                </div>
                <svg className="viz-spark" viewBox="0 0 300 70" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 58 L40 52 L80 54 L120 38 L160 42 L200 26 L240 30 L300 10" />
                </svg>
                <div className="viz-feed">
                  <ul className="viz-feed-list">
                    <li>
                      <span>Bank feed &middot; Supplier payment</span>
                      <b>Matched &check;</b>
                    </li>
                    <li>
                      <span>Bank feed &middot; Customer receipt</span>
                      <b>Matched &check;</b>
                    </li>
                    <li>
                      <span>Bank feed &middot; Payroll</span>
                      <b>Matched &check;</b>
                    </li>
                    <li>
                      <span>Bank feed &middot; Card fees</span>
                      <b className="review">Review</b>
                    </li>
                  </ul>
                </div>
              </div>

              <Link to="/solutions#finance" className="card-link">
                See Financial Automation <span className="arrow">&rarr;</span>
              </Link>
            </CardSpotlight>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="comparison-section" id="comparison">
      <div className="section-container">
        <div className="custom-badge">
          <span className="badge-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" className="badge-svg">
              <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
              <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
            </svg>
          </span>
          <span className="badge-text">The difference</span>
        </div>
        <h2 className="section-title">Stop Losing Time to Manual Processes</h2>
        <p className="section-subtitle">The same team. The same business. A smarter way to work.</p>

        <div className="comparison-grid">
          {/* Manual Operations Card */}
          <div className="comparison-card manual card-spotlight">
            <div className="comparison-header">MANUAL OPERATIONS</div>
            <ul className="comparison-list">
              <li>
                <svg className="bullet-icon cross" viewBox="0 0 24 24" width="18" height="18">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" />
                  <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Repetitive tasks consume valuable working hours.</span>
              </li>
              <li>
                <svg className="bullet-icon cross" viewBox="0 0 24 24" width="18" height="18">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" />
                  <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Manual data entry leads to costly errors.</span>
              </li>
              <li>
                <svg className="bullet-icon cross" viewBox="0 0 24 24" width="18" height="18">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" />
                  <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Slow approvals delay business decisions.</span>
              </li>
              <li>
                <svg className="bullet-icon cross" viewBox="0 0 24 24" width="18" height="18">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" />
                  <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Teams spend more time on administration than growth.</span>
              </li>
              <li>
                <svg className="bullet-icon cross" viewBox="0 0 24 24" width="18" height="18">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" />
                  <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Limited visibility into business performance.</span>
              </li>
            </ul>

            {/* Mockup Visual 1: Manual Data Queue */}
            <div className="comparison-visual mockup-visual manual-mockup">
              <div className="queue-card">
                <div className="queue-header">
                  <span className="queue-title">Data Entry Queue</span>
                  <span className="queue-count">3 pending</span>
                </div>
                <div className="queue-list">
                  <div className="queue-row error">
                    <div className="row-info">
                      <span className="row-name">Invoice #2041A</span>
                      <span className="row-details">Manual OCR correction</span>
                    </div>
                    <span className="row-pill error">Data Error</span>
                  </div>
                  <div className="queue-row delayed">
                    <div className="row-info">
                      <span className="row-name">Supplier Contract</span>
                      <span className="row-details">Awaiting manager signoff</span>
                    </div>
                    <span className="row-pill warning">Pending 4h</span>
                  </div>
                  <div className="queue-row pending">
                    <div className="row-info">
                      <span className="row-name">Monthly Report Gen</span>
                      <span className="row-details">Exporting CSV from Xero</span>
                    </div>
                    <span className="row-pill info">Processing</span>
                  </div>
                </div>
              </div>

              {/* Warning stat overlay */}
              <div className="metric-overlay warning-border animate-float">
                <span className="metric-val text-red">4.8 Hours</span>
                <span className="metric-lbl">Avg. process time</span>
              </div>
              <div className="visual-label text-red">Manual processes. Delayed decisions. Higher costs.</div>
            </div>
          </div>

          {/* Intelligent Automation Card */}
          <div className="comparison-card automated card-spotlight">
            <div className="comparison-header">WITH INTELLIGENT AUTOMATION</div>
            <ul className="comparison-list">
              <li>
                <svg className="bullet-icon check" viewBox="0 0 24 24" width="18" height="18">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <polyline
                    points="16 9 11 14 8 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Repetitive processes run automatically, 24/7.</span>
              </li>
              <li>
                <svg className="bullet-icon check" viewBox="0 0 24 24" width="18" height="18">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <polyline
                    points="16 9 11 14 8 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Faster, more accurate workflows with fewer errors.</span>
              </li>
              <li>
                <svg className="bullet-icon check" viewBox="0 0 24 24" width="18" height="18">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <polyline
                    points="16 9 11 14 8 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Approvals and notifications happen in real time.</span>
              </li>
              <li>
                <svg className="bullet-icon check" viewBox="0 0 24 24" width="18" height="18">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <polyline
                    points="16 9 11 14 8 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Your team focuses on high-value work.</span>
              </li>
              <li>
                <svg className="bullet-icon check" viewBox="0 0 24 24" width="18" height="18">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <polyline
                    points="16 9 11 14 8 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Live dashboards provide instant business insights.</span>
              </li>
            </ul>

            {/* Mockup Visual 2: Automated Pipeline Flow */}
            <div className="comparison-visual mockup-visual automated-mockup">
              <div className="pipeline-card">
                <div className="pipeline-nodes">
                  <div className="pipeline-step active">
                    <div className="step-icon-bg">
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                      </svg>
                    </div>
                    <span className="step-lbl">Ingest</span>
                  </div>

                  <div className="pipeline-connector">
                    <div className="glow-signal"></div>
                  </div>

                  <div className="pipeline-step active">
                    <div className="step-icon-bg parse">
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="8" rx="2.18" ry="2.18"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2.18" ry="2.18"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                    </div>
                    <span className="step-lbl">AI Parse</span>
                  </div>

                  <div className="pipeline-connector">
                    <div className="glow-signal delay"></div>
                  </div>

                  <div className="pipeline-step success">
                    <div className="step-icon-bg check">
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="step-lbl">Verified</span>
                  </div>
                </div>

                <div className="pipeline-performance">
                  <div className="perf-stat">
                    <span className="perf-val text-green">100%</span>
                    <span className="perf-lbl">Accuracy</span>
                  </div>
                  <div className="perf-bars">
                    <span style={{ height: '30%' }}></span>
                    <span style={{ height: '60%' }}></span>
                    <span style={{ height: '80%' }}></span>
                    <span className="active" style={{ height: '100%' }}></span>
                  </div>
                </div>
              </div>

              {/* Success stat overlay */}
              <div className="metric-overlay success-border animate-float delay-1">
                <span className="metric-val text-green">3.2 Secs</span>
                <span className="metric-lbl">Total run time</span>
              </div>
              <div className="visual-label text-green">
                Automated workflows. Faster decisions. Better business outcomes.
              </div>
            </div>
          </div>
        </div>

        <div className="comparison-cta">
          <Link to="/contact" className="btn btn-large btn-orange">
            Book Our Free Process Audit &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { solutionsList } from '../data/solutionsData';
import { CtaSection } from '../components/CtaSection';
import { ParticleMeshCanvas } from '../components/motion/ParticleMeshCanvas';
import { MotionReveal } from '../components/motion/MotionReveal';
import { CardSpotlight } from '../components/motion/CardSpotlight';
import { LaserFlowBeam } from '../components/motion/LaserFlowBeam';

export const SolutionsPage: React.FC = () => {
  const scrollToSolution = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="solutions-page-container">
      <section className="solutions-section page-hero" id="solutions" style={{ position: 'relative', overflow: 'hidden' }}>
        <ParticleMeshCanvas className="hero-particle-mesh" particleCount={45} interactive={true} />

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <MotionReveal direction="up" className="section-head center">
            <div className="custom-badge">
              <span className="badge-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" className="badge-svg" aria-hidden="true">
                  <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                  <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
                </svg>
              </span>
              <span className="badge-text">By business process</span>
            </div>
            <h1 className="page-title">
              Fix the processes that <span className="text-gradient">cost you the most.</span>
            </h1>
            <p className="page-lead">
              Four high-risk areas where manual work leaks time and money, each transformed with
              automation and built-in verification.
            </p>
          </MotionReveal>

          {/* Segmented Sticky Nav */}
          <MotionReveal direction="up" delay={0.1}>
            <nav className="segmented-nav" aria-label="Jump to solution">
              <button
                type="button"
                className="segmented-btn"
                onClick={() => scrollToSolution('o2c')}
              >
                Order to Cash
              </button>
              <button
                type="button"
                className="segmented-btn"
                onClick={() => scrollToSolution('p2p')}
              >
                Procure to Pay
              </button>
              <button
                type="button"
                className="segmented-btn"
                onClick={() => scrollToSolution('loss-prevention')}
              >
                Loss Prevention
              </button>
              <button
                type="button"
                className="segmented-btn"
                onClick={() => scrollToSolution('finance')}
              >
                Finance &amp; Accounting
              </button>
            </nav>
          </MotionReveal>

          <div className="solutions-grid">
            {solutionsList.map((sol, index) => (
              <MotionReveal key={sol.id} direction="up" delay={0.1 + index * 0.08}>
                <CardSpotlight className="solution-horizontal-card" id={sol.id} enableTilt={true}>
                  <div className="solution-left">
                    <span className="solution-pill">{sol.pill}</span>
                    <h2 className="solution-card-title">
                      {sol.title} <span className="highlight-blue">{sol.highlight}</span>
                    </h2>
                    <p className="solution-card-desc">
                      <strong>Business Challenge:</strong> {sol.challenge}
                    </p>
                    <p className="solution-card-desc" style={{ marginTop: '10px' }}>
                      <strong>Proposed Approach:</strong> {sol.approach}
                    </p>
                    <div className="solution-considerations">
                      <strong>Implementation Considerations &amp; Prerequisites:</strong>{' '}
                      {sol.considerations}
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <Link
                        to={`/contact?inquiryType=${sol.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        {sol.ctaText}
                      </Link>
                    </div>
                  </div>

                  <div className="solution-right">
                    <ul className="solution-checklist">
                      {sol.checklist.map((item, idx) => (
                        <li key={idx} className="solution-check-item">
                          <div className="solution-check-icon-wrapper">
                            <svg
                              viewBox="0 0 24 24"
                              width="12"
                              height="12"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span className="solution-check-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardSpotlight>
              </MotionReveal>
            ))}
          </div>
        </div>

        <LaserFlowBeam color="#00d2ff" duration={3.5} />
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

import React from 'react';
import { MotionReveal } from './motion/MotionReveal';
import { CardSpotlight } from './motion/CardSpotlight';

export const RiskSection: React.FC = () => {
  return (
    <section className="risk-section" id="risk-removed">
      <div className="section-container">
        <MotionReveal direction="up" className="custom-badge">
          <span className="badge-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" className="badge-svg">
              <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
              <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
            </svg>
          </span>
          <span className="badge-text">Low-risk by design</span>
        </MotionReveal>
        <MotionReveal direction="up" delay={0.1}>
          <h2 className="section-title">Built to Remove the Risk of Automation</h2>
        </MotionReveal>

        <div className="risk-grid">
          {/* Card 1 */}
          <MotionReveal direction="up" delay={0.1}>
            <CardSpotlight className="risk-card" enableTilt={true}>
              <div className="risk-card-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="wireframe-svg"
                >
                  <path d="M 32 12 L 50 22.4 L 32 32.8 L 14 22.4 Z" fill="rgba(0, 180, 255, 0.05)" />
                  <path d="M 14 22.4 L 14 43.2 L 32 53.6 L 32 32.8 Z" />
                  <path d="M 32 32.8 L 32 53.6 L 50 43.2 L 50 22.4 Z" />
                  <path d="M 32 19 L 43 25.4 L 32 31.8 L 21 25.4 Z" strokeDasharray="2 2" />
                  <path d="M 21 25.4 L 21 38 M 32 31.8 L 32 44.2 M 43 25.4 L 43 38" strokeDasharray="2 2" />
                  <path d="M 21 38 L 32 44.2 L 43 38" strokeDasharray="2 2" />
                  <path
                    d="M 32 5 L 56 19 L 56 47 L 32 61 L 8 47 L 8 19 Z"
                    stroke="currentColor"
                    strokeOpacity="0.3"
                    strokeWidth="0.8"
                  />
                </svg>
              </div>
              <h3 className="risk-card-title">Tailored to Your Business</h3>
              <p className="risk-card-body">
                No two businesses operate the same way. Every automation is designed around your
                existing workflows, systems, and business goals, not forced into a generic template.
              </p>
            </CardSpotlight>
          </MotionReveal>

          {/* Card 2 */}
          <MotionReveal direction="up" delay={0.15}>
            <CardSpotlight className="risk-card" enableTilt={true}>
              <div className="risk-card-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="wireframe-svg"
                >
                  <polygon points="32,6 54.5,19 54.5,45 32,58 9.5,45 9.5,19" fill="rgba(0, 180, 255, 0.03)" />
                  <polygon points="32,16 45.8,24 45.8,40 32,48 18.2,40 18.2,24" />
                  <line x1="32" y1="32" x2="32" y2="6" />
                  <line x1="32" y1="32" x2="54.5" y2="19" />
                  <line x1="32" y1="32" x2="54.5" y2="45" />
                  <line x1="32" y1="32" x2="32" y2="58" />
                  <line x1="32" y1="32" x2="9.5" y2="45" />
                  <line x1="32" y1="32" x2="9.5" y2="19" />
                  <circle cx="32" cy="6" r="3" fill="var(--bg-card)" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="54.5" cy="19" r="3" fill="var(--bg-card)" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="54.5" cy="45" r="3" fill="var(--bg-card)" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="32" cy="58" r="3" fill="var(--bg-card)" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="9.5" cy="45" r="3" fill="var(--bg-card)" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="9.5" cy="19" r="3" fill="var(--bg-card)" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="32" cy="32" r="4" fill="var(--accent-blue)" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
              <h3 className="risk-card-title">Works With Your Existing Systems</h3>
              <p className="risk-card-body">
                We integrate with the tools you already use, helping you automate processes without
                replacing the software your team depends on.
              </p>
            </CardSpotlight>
          </MotionReveal>

          {/* Card 3 */}
          <MotionReveal direction="up" delay={0.2}>
            <CardSpotlight className="risk-card" enableTilt={true}>
              <div className="risk-card-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="wireframe-svg"
                >
                  <path d="M 32 10 L 52 21.5 L 32 33 L 12 21.5 Z" />
                  <path d="M 32 20.5 L 42 26.25 L 32 32 L 22 26.25 Z" strokeOpacity="0.5" />
                  <line x1="32" y1="33" x2="32" y2="54" />
                  <line x1="12" y1="21.5" x2="12" y2="42.5" strokeOpacity="0.4" />
                  <line x1="52" y1="21.5" x2="52" y2="42.5" strokeOpacity="0.4" />
                  <path d="M 12 42.5 L 32 54 L 52 42.5" />
                  <line x1="32" y1="10" x2="32" y2="33" strokeDasharray="2 2" />
                  <circle cx="32" cy="20.5" r="3" fill="var(--accent-blue)" stroke="currentColor" strokeWidth="1" />
                  <path d="M 32 10 L 32 6" strokeWidth="1" />
                  <path d="M 12 21.5 L 7 18.6" strokeWidth="1" />
                  <path d="M 52 21.5 L 57 18.6" strokeWidth="1" />
                </svg>
              </div>
              <h3 className="risk-card-title">Built for Accuracy Before Speed</h3>
              <p className="risk-card-body">
                Automation is only valuable when it's reliable. Every workflow is carefully
                designed, tested, and validated before deployment to ensure consistent results.
              </p>
            </CardSpotlight>
          </MotionReveal>

          {/* Card 4 */}
          <MotionReveal direction="up" delay={0.25}>
            <CardSpotlight className="risk-card" enableTilt={true}>
              <div className="risk-card-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="wireframe-svg"
                >
                  <path d="M 16 34 L 36 44 L 56 34 L 36 24 Z" fill="rgba(0, 180, 255, 0.02)" />
                  <path d="M 16 34 L 16 38 L 36 48 L 36 44 M 56 34 L 56 38 L 36 48" />
                  <path d="M 12 20 L 32 30 L 52 20 L 32 10 Z" fill="rgba(0, 180, 255, 0.05)" />
                  <path d="M 12 20 L 12 24 L 32 34 L 32 30 M 52 20 L 52 24 L 32 34" />
                  <line x1="12" y1="20" x2="16" y2="34" strokeDasharray="2 2" strokeOpacity="0.7" />
                  <line x1="32" y1="30" x2="36" y2="44" strokeDasharray="2 2" strokeOpacity="0.7" />
                  <line x1="52" y1="20" x2="56" y2="34" strokeDasharray="2 2" strokeOpacity="0.7" />
                  <line x1="32" y1="10" x2="36" y2="24" strokeDasharray="2 2" strokeOpacity="0.7" />
                </svg>
              </div>
              <h3 className="risk-card-title">Minimal Disruption to Your Team</h3>
              <p className="risk-card-body">
                We implement automation in a structured way that minimizes disruption, allowing your
                team to continue working while improvements are introduced.
              </p>
            </CardSpotlight>
          </MotionReveal>

          {/* Card 5 */}
          <MotionReveal direction="up" delay={0.3}>
            <CardSpotlight className="risk-card" enableTilt={true}>
              <div className="risk-card-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="wireframe-svg"
                >
                  <path d="M 32 10 L 52 20 L 32 30 L 12 20 Z" />
                  <path d="M 12 20 L 12 44 L 32 54 L 32 30 Z" fill="rgba(0, 180, 255, 0.03)" />
                  <path d="M 32 30 L 32 54 L 52 44 L 52 20 Z" />
                  <path d="M 32 23 L 40 27 L 32 31 L 24 27 Z" fill="var(--accent-blue)" opacity="0.3" />
                  <path d="M 24 27 L 24 35 L 32 39 L 32 31 Z" fill="var(--accent-blue)" opacity="0.5" />
                  <path
                    d="M 32 31 L 32 39 L 40 35 L 40 27 Z"
                    fill="var(--accent-blue)"
                    opacity="0.4"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  />
                  <path
                    d="M 32 40 L 44 35 L 44 23 L 32 17 L 20 23 L 20 35 Z"
                    stroke="var(--accent-blue)"
                    strokeWidth="1.5"
                    strokeOpacity="0.8"
                  />
                </svg>
              </div>
              <h3 className="risk-card-title">Secure by Design</h3>
              <p className="risk-card-body">
                Your business data remains protected through secure automation practices, controlled
                access, and enterprise-grade security standards.
              </p>
            </CardSpotlight>
          </MotionReveal>

          {/* Card 6 */}
          <MotionReveal direction="up" delay={0.35}>
            <CardSpotlight className="risk-card" enableTilt={true}>
              <div className="risk-card-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="wireframe-svg"
                >
                  <path d="M 16 38 L 26 43 L 26 53 L 16 48 Z" />
                  <path d="M 16 38 L 26 33 L 36 38 L 26 43 Z" fill="rgba(0, 180, 255, 0.03)" />
                  <path d="M 27 28 L 37 33 L 37 48 L 27 43 Z" />
                  <path d="M 27 28 L 37 23 L 47 28 L 37 33 Z" fill="rgba(0, 180, 255, 0.05)" />
                  <path d="M 38 18 L 48 23 L 48 43 L 38 38 Z" />
                  <path
                    d="M 38 18 L 48 13 L 58 18 L 48 23 Z"
                    fill="rgba(0, 180, 255, 0.08)"
                    stroke="var(--accent-blue)"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M 16 48 C 10 38 20 25 32 20 C 44 15 54 28 48 38"
                    stroke="var(--accent-blue)"
                    strokeWidth="1"
                    strokeDasharray="3 2"
                  />
                  <path d="M 45 35 L 48 38 L 51 35" stroke="var(--accent-blue)" strokeWidth="1" />
                </svg>
              </div>
              <h3 className="risk-card-title">Support Beyond Go-Live</h3>
              <p className="risk-card-body">
                Automation isn't a one-time project. We continue to monitor, optimize, and improve
                your workflows as your business evolves.
              </p>
            </CardSpotlight>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

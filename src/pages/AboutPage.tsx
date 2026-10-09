import React from 'react';
import { Link } from 'react-router-dom';
import { foundersList, teamSpecialists } from '../data/teamData';
import { CtaSection } from '../components/CtaSection';
import { ParticleMeshCanvas } from '../components/motion/ParticleMeshCanvas';
import { MotionReveal } from '../components/motion/MotionReveal';
import { CardSpotlight } from '../components/motion/CardSpotlight';
import { LaserFlowBeam } from '../components/motion/LaserFlowBeam';
import { Global3DNetworkGlobe } from '../components/motion/Global3DNetworkGlobe';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page-container">
      {/* About Hero */}
      <section className="page-hero about-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <ParticleMeshCanvas className="hero-particle-mesh" particleCount={40} interactive={true} />

        <div className="section-container about-hero-grid" style={{ position: 'relative', zIndex: 1 }}>
          <div className="about-hero-copy">
            <MotionReveal direction="up">
              <div className="custom-badge">
                <span className="badge-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" className="badge-svg" aria-hidden="true">
                    <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                    <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
                  </svg>
                </span>
                <span className="badge-text">Est. 2024 &middot; Melbourne, VIC</span>
              </div>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.1}>
              <h1 className="page-title">
                Built by operators,<br />
                <span className="text-gradient">for operators.</span>
              </h1>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.15}>
              <p className="page-lead">
                iKOREX started with a simple observation: the businesses losing the most money to
                inefficiency weren't lacking effort, they were lacking systems. We build automation
                that runs itself, so operations teams get their time back.
              </p>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.2}>
              <ul className="trust-stats">
                <li className="trust-stat">
                  <strong>20+ yrs</strong>
                  <span>process engineering leadership</span>
                </li>
                <li className="trust-stat">
                  <strong>3 CAs</strong>
                  <span>Chartered Accountants on the team</span>
                </li>
                <li className="trust-stat">
                  <strong>Australia-wide</strong>
                  <span>Melbourne team, clients across the country</span>
                </li>
              </ul>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.25}>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  Book a Consultation
                </Link>
                <a href="#team" className="btn btn-outline">
                  Meet the team
                </a>
              </div>
            </MotionReveal>
          </div>

          <aside className="founders-panel card-spotlight" aria-label="Founders">
            <div className="founders-panel-head">
              <span className="panel-label">Founders</span>
              <span className="panel-meta">
                <span className="live-dot"></span>Hands-on in every engagement
              </span>
            </div>
            <div className="founders-grid">
              {foundersList.map(founder => (
                <div key={founder.name} className="founder-card">
                  <div className="founder-img-wrapper">
                    <img src={founder.image} alt={founder.name} className="founder-img" />
                  </div>
                  <div className="founder-card-info">
                    <div className="founder-card-name">{founder.name}</div>
                    <div className="founder-card-role">{founder.role}</div>
                    <div className="founder-card-meta">{founder.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <LaserFlowBeam color="#00d2ff" duration={3.5} />
      </section>

      {/* Story & Values */}
      <section className="about-story">
        <div className="section-container about-story-grid">
          <MotionReveal direction="up" className="about-story-copy">
            <h2 className="section-title">One problem solved well, then the next.</h2>
            <p>
              Founded in 2024 by Yesudas Sebastian and Subin Peter, iKOREX began by bringing
              robotic process automation and WhatsApp-based workflows to Order-to-Cash and
              Procure-to-Pay operations that were bleeding time and money to manual processing.
            </p>
            <p>
              That focus earned trust across industries, and it still shapes how we build today.
              Invoices chased by hand, approvals stuck in email threads, good people spending their
              week on work a machine should be doing: that is the work we take off your team's
              plate.
            </p>
          </MotionReveal>

          <div className="values-list">
            <MotionReveal direction="up" delay={0.1}>
              <div className="value-row">
                <div className="value-icon-box">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="value-card-title">Built for reliability</h3>
                  <p className="value-card-desc">
                    Automation that runs without babysitting: accurate, auditable, and dependable for
                    the processes you can't afford to get wrong.
                  </p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.15}>
              <div className="value-row">
                <div className="value-icon-box">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="value-card-title">Partners, not vendors</h3>
                  <p className="value-card-desc">
                    Every engagement starts with understanding how you actually operate, not with
                    selling a template.
                  </p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.2}>
              <div className="value-row">
                <div className="value-icon-box">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="value-card-title">Engineered to scale</h3>
                  <p className="value-card-desc">
                    What we build for one process extends cleanly to the next, so automation compounds
                    instead of becoming another system to maintain.
                  </p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team" id="team">
        <div className="section-container">
          <MotionReveal direction="up" className="section-head">
            <h2 className="section-title">The specialists behind the automation</h2>
            <p className="section-subtitle">
              Automation engineers and Chartered Accountants who design and build the workflows we
              deliver.
            </p>
          </MotionReveal>

          <div className="team-grid">
            {teamSpecialists.map((member, idx) => (
              <MotionReveal key={member.id} direction="up" delay={0.08 * idx}>
                <CardSpotlight className="team-card" enableTilt={true}>
                  {member.image ? (
                    <img
                      className="team-avatar"
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                    />
                  ) : (
                    <div className="team-avatar team-avatar-initials" aria-hidden="true">
                      {member.initials || 'IK'}
                    </div>
                  )}
                  <div className="team-card-body">
                    <h3 className="team-profile-name">
                      {member.name}{' '}
                      {member.credential && (
                        <span className="credential">{member.credential}</span>
                      )}
                    </h3>
                    <div className="team-profile-role">{member.role}</div>
                    <p className="team-profile-bio">{member.bio}</p>
                  </div>
                </CardSpotlight>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Governance Section */}
      <section className="security-section" id="security" style={{ padding: '90px 0', background: 'var(--bg-secondary)' }}>
        <div className="section-container">
          <MotionReveal direction="up" className="section-head center">
            <div className="custom-badge">
              <span className="badge-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" className="badge-svg" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#00a2ff" />
                </svg>
              </span>
              <span className="badge-text">Trust &amp; Compliance</span>
            </div>
            <h2 className="section-title">
              Security, Reliability &amp; <span className="text-gradient">Responsible AI</span>
            </h2>
            <p className="section-subtitle">
              How we protect your business data, guarantee auditability, and uphold Australian
              privacy standards.
            </p>
          </MotionReveal>

          <div className="home-services-grid" style={{ marginTop: '40px' }}>
            <MotionReveal direction="up" delay={0.1}>
              <CardSpotlight className="home-service-card" enableTilt={true}>
                <div className="home-service-icon-box">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3>Australian Privacy Alignment</h3>
                <p>
                  Strictly adhering to the Privacy Act 1988 (Cth) and Australian Privacy Principles
                  (APPs). In-store AI computer vision relies solely on 100% anonymous behavioural
                  dynamics — absolutely zero facial recognition or biometric profiling is conducted.
                </p>
              </CardSpotlight>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.2}>
              <CardSpotlight className="home-service-card" enableTilt={true}>
                <div className="home-service-icon-box">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3>Enterprise Security &amp; Encryption</h3>
                <p>
                  Zero persistent storage of sensitive customer payroll or transaction payloads. All
                  API transit operates via TLS 1.3 with role-based access tokens, hosted in certified
                  Australian AWS/Azure sovereign cloud regions.
                </p>
              </CardSpotlight>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.3}>
              <CardSpotlight className="home-service-card" enableTilt={true}>
                <div className="home-service-icon-box">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3>Audit Trails &amp; CA Governance</h3>
                <p>
                  Every automated transaction produces an immutable audit timestamp matching AASB and
                  IFRS standards. Supervised by qualified Chartered Accountants (CAs) with deterministic
                  human review queues.
                </p>
              </CardSpotlight>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 3D Global Delivery & Australian Operations Nexus */}
      <section className="global-network-section" style={{ padding: '60px 0 30px', position: 'relative' }}>
        <div className="section-container">
          <MotionReveal direction="up" className="section-head center">
            <div className="custom-badge">
              <span className="badge-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" className="badge-svg">
                  <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                  <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
                </svg>
              </span>
              <span className="badge-text">Interactive 3D Operations</span>
            </div>
            <h2 className="section-title">
              Australian Headquarters. <span className="text-gradient">Connected Global Mesh.</span>
            </h2>
            <p className="section-subtitle">
              Engineered out of Cranbourne, Melbourne with secure API delivery pipelines active across Australian capitals and global financial centers. Drag to rotate in real time.
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.15}>
            <Global3DNetworkGlobe height={440} />
          </MotionReveal>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

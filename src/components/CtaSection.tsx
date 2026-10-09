import React from 'react';
import { Link } from 'react-router-dom';

interface CtaSectionProps {
  secondaryLink?: {
    to: string;
    label: string;
  };
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  secondaryLink = { to: '/solutions', label: 'Explore Use Cases' }
}) => {
  return (
    <section className="cta-section" id="get-started">
      <div className="section-container">
        <div className="cta-card">
          <div className="cta-glow"></div>
          <div className="cta-content">
            <h2 className="cta-title">Ready to Automate Your Operations?</h2>
            <p className="cta-description">
              Let's build custom workflows that eliminate manual overhead, optimize accuracy, and
              save hours of work. Schedule a discovery call with our experts today.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Book a Consultation
              </Link>
              <Link to={secondaryLink.to} className="btn btn-secondary">
                {secondaryLink.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

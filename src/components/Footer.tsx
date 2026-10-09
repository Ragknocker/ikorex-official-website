import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="section-container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <img className="logo-img" src="/logo.png" alt="iKOREX Logo" />
          </Link>
          <p className="brand-desc">
            Enterprise-grade intelligent automation for modern businesses. Empowering teams,
            eliminating manual overhead, and optimizing output.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/company/ikorex/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <div className="social-divider"></div>
            <a
              href="https://x.com/ikorex_official"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
              </svg>
            </a>
            <div className="social-divider"></div>
            <a
              href="https://www.facebook.com/profile.php?id=61592559665178"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <div className="social-divider"></div>
            <a
              href="https://www.instagram.com/ikorex_automation/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Product</h4>
            <Link to="/features">Features</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/pricing">Pricing &amp; Plans</Link>
            <Link to="/dashboard">App Dashboard</Link>
          </div>
          <div className="link-group">
            <h4>Resources</h4>
            <Link to="/blog">Blog &amp; Insights</Link>
            <Link to="/about">About iKOREX</Link>
            <Link to="/contact">Support &amp; Sales</Link>
            <Link to="/privacy">Privacy &amp; Terms</Link>
          </div>
          <div className="link-group">
            <h4>Get in Touch</h4>
            <div className="contact-item">
              <span className="footer-label">Address</span>
              <span>
                U 1/106 Camms Road,
                <br />
                Cranbourne, VIC 3977
              </span>
            </div>
            <div className="contact-item">
              <span className="footer-label">Email</span>
              <a href="mailto:sales@ikorex.com.au">sales@ikorex.com.au</a>
            </div>
            <div className="contact-item">
              <span className="footer-label">Phone</span>
              <a href="tel:1800280626">1800 280 626</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom section-container">
        <p>Copyright &copy; 2026 iKOREX. iKOREX &ndash; Intelligent Process Automation.</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.8, letterSpacing: '0.02em' }}>
          ABN: 88 676 493 628 &nbsp;|&nbsp; ACN: 676 493 628
        </p>
        <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '2px' }}>
          Designed and developed by{' '}
          <a
            href="https://www.ornabyte.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'underline' }}
          >
            ornabyte
          </a>
        </p>
      </div>
    </footer>
  );
};

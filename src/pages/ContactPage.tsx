import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const inquiryParam = searchParams.get('inquiryType') || searchParams.get('inquiry');
    const sourceParam = searchParams.get('source');
    const estHours = searchParams.get('estHours');
    const estSavings = searchParams.get('estSavings');
    const volume = searchParams.get('volume');

    if (inquiryParam) {
      if (['rpa', 'o2c', 'p2p'].includes(inquiryParam)) {
        setFormData(prev => ({ ...prev, inquiryType: 'rpa' }));
      } else if (['ai-security', 'loss-prevention'].includes(inquiryParam)) {
        setFormData(prev => ({ ...prev, inquiryType: 'ai-security' }));
      } else if (['financial', 'finance'].includes(inquiryParam)) {
        setFormData(prev => ({ ...prev, inquiryType: 'financial' }));
      }
    }

    if (sourceParam === 'calculator' && estSavings) {
      setFormData(prev => ({
        ...prev,
        message: prev.message || `Hi iKOREX team,\n\nI modeled our potential automation savings using your calculator:\n- Estimated Annual Savings: $${Number(estSavings).toLocaleString()} AUD\n- Hours Reclaimed: ${estHours} hrs/yr\n- Monthly Volume: ${volume} transactions\n\nI'd like to schedule a discovery audit to confirm this feasibility for our operations.`
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API submission
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <div className="contact-page-container">
      {/* Contact Form Section */}
      <section className="contact-page-section page-hero">
        <div className="section-container">
          <div className="section-head center">
            <div className="custom-badge">
              <span className="badge-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" className="badge-svg" aria-hidden="true">
                  <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                  <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
                </svg>
              </span>
              <span className="badge-text">We usually reply within 2 hours</span>
            </div>
            <h1 className="page-title">
              Let's find what you can <span className="text-gradient">automate first.</span>
            </h1>
            <p className="page-lead">
              Tell us about the manual work slowing your team down. We'll come back with a free
              process audit and a clear next step.
            </p>
          </div>

          <div className="contact-grid">
            {/* Left Column: Direct Info */}
            <div className="contact-info-column">
              {/* Card 1: Phone */}
              <div className="contact-info-card card-spotlight">
                <div className="contact-info-icon-wrapper">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-info-content">
                  <h3>Call Toll Free</h3>
                  <p>
                    <a href="tel:1800280626">1800 280 626</a>
                  </p>
                  <p style={{ fontSize: '0.85rem', marginTop: '4px' }}>Mon - Fri, 9am - 5pm AEST</p>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="contact-info-card card-spotlight">
                <div className="contact-info-icon-wrapper">
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-info-content">
                  <h3>Email Inquiries</h3>
                  <p>
                    <a href="mailto:sales@ikorex.com.au">sales@ikorex.com.au</a>
                  </p>
                  <p style={{ fontSize: '0.85rem', marginTop: '4px' }}>We usually reply within 2 hours</p>
                </div>
              </div>

              {/* Card 3: Address */}
              <div className="contact-info-card card-spotlight">
                <div className="contact-info-icon-wrapper">
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-info-content">
                  <h3>Melbourne Office</h3>
                  <p>
                    Unit 1, 106 Camms Road,
                    <br />
                    Cranbourne, VIC 3977
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="contact-form-card card-spotlight">
              {status === 'success' && (
                <div className="form-notification success" role="status">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Thank you! Your message has been sent successfully. We will be in touch shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="form-notification error" role="alert">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>{errorMessage || 'Something went wrong. Please try again or call us on 1800 280 626.'}</span>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="name"
                      autoComplete="name"
                      className="form-control"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="companyName">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="company"
                      autoComplete="organization"
                      className="form-control"
                      placeholder="Acme Corp"
                      required
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      className="form-control"
                      placeholder="john@company.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      className="form-control"
                      placeholder="0400 000 000"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="inquiryType">
                    What would you like to automate?
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    className="form-control"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select an option...
                    </option>
                    <option value="rpa">RPA &amp; Workflow Automation</option>
                    <option value="ai-security">AI Video Security Monitoring</option>
                    <option value="financial">Financial Workflows &amp; Accounting</option>
                    <option value="consulting">Operational Auditing &amp; Consulting</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Tell us about the manual tasks or workflows you would like to automate..."
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Inquiry &rarr;'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="section-container">
          <div className="map-card card-spotlight">
            <div className="map-header">
              <span className="map-city-pill">Melbourne HQ</span>
              <h3>Headquarters &amp; Delivery Centre</h3>
              <p>Unit 1, 106 Camms Road, Cranbourne, VIC 3977, Australia</p>
            </div>
            <div className="map-embed-wrapper" style={{ minHeight: '320px', borderRadius: '12px', overflow: 'hidden' }}>
              <iframe
                title="iKOREX Melbourne Office"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.3662283084365!2d145.2758117765104!3d-38.09675975001478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6111fc2e95679%3A0xe543fa0df63aeb1a!2s1%2F106%20Camms%20Rd%2C%20Cranbourne%20VIC%203977!5e0!3m2!1sen!2sau!4v1715000000000!5m2!1sen!2sau"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

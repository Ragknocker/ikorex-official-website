import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="privacy-page-container">
      {/* Hero Section */}
      <section
        className="privacy-hero"
        style={{
          padding: '160px 20px 60px 20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(circle at 50% 10%, rgba(0, 136, 255, 0.04) 0%, transparent 60%)',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div className="grid-overlay"></div>
        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ marginBottom: '24px' }}>
            <div className="custom-badge">
              <span className="badge-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" className="badge-svg">
                  <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                  <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
                </svg>
              </span>
              <span className="badge-text">Legal Framework</span>
            </div>
          </div>
          <h1
            className="section-title"
            style={{ margin: '0 auto 20px auto', fontSize: '3.25rem', lineHeight: 1.15, maxWidth: '900px' }}
          >
            Privacy &amp; Data Management Policy
          </h1>
          <p
            className="section-subtitle"
            style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.125rem', lineHeight: 1.6 }}
          >
            Last updated: 13 Jul 2026 &mdash; Effective: 01 Jul 2027
          </p>
        </div>
      </section>

      {/* Content Section */}
      <main className="section-container privacy-layout">
        <div className="privacy-grid">
          {/* Sticky Navigation Sidebar */}
          <aside className="privacy-sidebar">
            <nav className="privacy-nav">
              <a href="#introduction" className="privacy-nav-link active">1. Introduction</a>
              <a href="#information-we-collect" className="privacy-nav-link">2. Personal Information Collected</a>
              <a href="#how-we-collect" className="privacy-nav-link">3. Collection Methods</a>
              <a href="#why-we-collect" className="privacy-nav-link">4. Purpose of Processing</a>
              <a href="#cookies" className="privacy-nav-link">5. Cookies &amp; Analytics</a>
              <a href="#whatsapp" className="privacy-nav-link">6. WhatsApp &amp; Third Parties</a>
              <a href="#disclosure" className="privacy-nav-link">7. Disclosure &amp; Overseas</a>
              <a href="#client-processing" className="privacy-nav-link">8. Processed for Clients</a>
              <a href="#direct-marketing" className="privacy-nav-link">9. Direct Marketing</a>
              <a href="#data-security" className="privacy-nav-link">10. Data Security</a>
              <a href="#data-retention" className="privacy-nav-link">11. Data Retention</a>
              <a href="#access-correction" className="privacy-nav-link">12. Access &amp; Complaints</a>
              <a href="#contact" className="privacy-nav-link">13. Contact Us</a>
              <a href="#childrens-privacy" className="privacy-nav-link">14. Children's Privacy</a>
              <a href="#changes" className="privacy-nav-link">15. Policy Changes</a>
              <a href="#governing-law" className="privacy-nav-link">16. Governing Law</a>
            </nav>
          </aside>

          {/* Main Document Reading Area */}
          <article className="privacy-document">
            {/* Section 1 */}
            <section id="introduction" className="privacy-section">
              <h2>1. Introduction</h2>
              <p>
                ikorex provides intelligent process automation services to businesses, including robotic process automation
                (RPA), WhatsApp-based conversational automation, Order-to-Cash and Procure-to-Pay automation, AI computer
                vision monitoring, and finance and accounting automation (&ldquo;Services&rdquo;).
              </p>
              <p>
                We are committed to protecting personal information in accordance with the Privacy Act 1988 (Cth) and the
                Australian Privacy Principles (APPs). This policy explains what personal information we collect, why we
                collect it, how we use and disclose it, and how you can access, correct, or raise concerns about it.
              </p>
              <p>This policy applies to:</p>
              <ul>
                <li>visitors to our website;</li>
                <li>individuals who submit an enquiry or request a scope valuation;</li>
                <li>contacts at our client and prospective client organisations; and</li>
                <li>job applicants.</li>
              </ul>
              <p>
                It does not replace the separate data processing terms we enter into with clients that govern personal
                information we process on a client's behalf through their deployed automation systems (see Section 8).
              </p>
            </section>

            {/* Section 2 */}
            <section id="information-we-collect" className="privacy-section">
              <h2>2. Personal information we collect</h2>
              <p>Depending on how you interact with us, we may collect:</p>
              <ul>
                <li>
                  <strong>Contact and identity information:</strong> Name, Job title, Company name, Email address, Phone
                  number.
                </li>
                <li>
                  <strong>Enquiry details:</strong> the information you provide in our contact/scope valuation form,
                  including your area of interest and a description of your business's operational context.
                </li>
                <li>
                  <strong>Website usage information:</strong> IP address, browser type, device information, pages visited,
                  and referral source, collected via Google Analytics and cookies (see Section 5).
                </li>
                <li>
                  <strong>Communications:</strong> records of emails, calls, and messages (including WhatsApp messages,
                  where you contact us via WhatsApp) between you and ikorex.
                </li>
                <li>
                  <strong>Job applicant information:</strong> if you apply for a role with us, your resume, cover letter,
                  and any information you provide during recruitment.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="how-we-collect" className="privacy-section">
              <h2>3. How we collect personal information</h2>
              <p>We collect personal information directly from you when you:</p>
              <ul>
                <li>fill out our website contact form or request a scope valuation;</li>
                <li>call, email, or message us (including via WhatsApp);</li>
                <li>connect with us at an event, trade show, or via professional networks such as LinkedIn;</li>
                <li>apply for employment with ikorex.</li>
              </ul>
              <p>
                We may also collect usage information automatically when you browse our website through cookies and web
                analytics tools.
              </p>
            </section>

            {/* Section 4 */}
            <section id="why-we-collect" className="privacy-section">
              <h2>4. Why we collect, hold, use, and disclose personal information</h2>
              <p>We collect and use personal information for the following purposes:</p>
              <ul>
                <li>Responding to enquiries and providing requested proposals or scope valuations;</li>
                <li>Delivering and supporting our automation and consulting services;</li>
                <li>Managing our ongoing client relationships, invoicing, and account management;</li>
                <li>Sending relevant service updates, industry insights, and direct marketing (see Section 9);</li>
                <li>Improving our website performance, layout, and user experience;</li>
                <li>Assessing and processing job applications; and</li>
                <li>Complying with our legal, accounting, tax, and regulatory obligations in Australia.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="cookies" className="privacy-section">
              <h2>5. Cookies and website analytics</h2>
              <p>
                Our website uses cookies and similar tracking technologies to improve site performance and analyse how
                visitors use our site. We use Google Analytics to measure visitor traffic, page views, and engagement.
              </p>
              <p>
                You can manage cookie settings in your browser or opt out of Google Analytics tracking using Google's opt-out
                browser add-on. Disabling cookies will not prevent you from browsing our website or using our forms.
              </p>
            </section>

            {/* Section 6 */}
            <section id="whatsapp" className="privacy-section">
              <h2>6. WhatsApp and third-party communication channels</h2>
              <p>
                Where you contact us via WhatsApp or where a client's workflow integrates WhatsApp messaging:
              </p>
              <ul>
                <li>Messages sent via WhatsApp are processed by Meta Platforms, Inc. in accordance with WhatsApp's privacy policy.</li>
                <li>We only use WhatsApp messages for the purpose of communicating with you or running client-approved workflows.</li>
                <li>We do not sell or share phone numbers collected via WhatsApp for external third-party marketing.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="disclosure" className="privacy-section">
              <h2>7. Disclosure to third parties and overseas recipients</h2>
              <p>
                We do not sell personal information. We may disclose personal information to trusted third-party service
                providers who assist in our business operations, such as cloud hosting (AWS / Microsoft Azure Australia), CRM
                systems, and professional legal/accounting advisers.
              </p>
              <p>
                Where third-party service providers are located outside Australia (such as the United States or Europe), we
                take reasonable steps to ensure they maintain privacy standards equivalent to the Australian Privacy
                Principles.
              </p>
            </section>

            {/* Section 8 */}
            <section id="client-processing" className="privacy-section">
              <h2>8. Personal information processed on behalf of clients</h2>
              <p>
                Where ikorex deploys automation bots, AI vision systems, or finance workflows within a client's environment:
              </p>
              <ul>
                <li>The client remains the data controller for the underlying data processed.</li>
                <li>ikorex acts as a service provider/processor under a written Services Agreement and Non-Disclosure Agreement.</li>
                <li>Computer vision models for loss prevention run 100% anonymous behavioural tracking without facial recognition.</li>
                <li>We do not use client proprietary data or sensitive payloads to train global AI foundation models.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="direct-marketing" className="privacy-section">
              <h2>9. Direct marketing</h2>
              <p>
                We may periodically send business insights, service updates, or event invitations to contacts who have
                expressed interest in our services. Every marketing email contains an easy, immediate unsubscribe link, and
                you can opt out at any time by contacting sales@ikorex.com.au.
              </p>
            </section>

            {/* Section 10 */}
            <section id="data-security" className="privacy-section">
              <h2>10. Data security and storage</h2>
              <p>
                We maintain appropriate technical, physical, and administrative safeguards to protect personal information
                against unauthorized access, modification, or disclosure:
              </p>
              <ul>
                <li>All website traffic and API endpoints are encrypted in transit via TLS 1.3.</li>
                <li>Access to systems containing client information is strictly restricted by role-based authentication and multi-factor authentication (MFA).</li>
                <li>Regular vulnerability scanning and security audits are performed across deployed infrastructure.</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section id="data-retention" className="privacy-section">
              <h2>11. Data retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfil the purposes for which it was collected,
                or as required to comply with statutory legal, tax, and auditing requirements in Australia (typically 7 years
                for financial records). When no longer needed, information is securely destroyed or de-identified.
              </p>
            </section>

            {/* Section 12 */}
            <section id="access-correction" className="privacy-section">
              <h2>12. Access, correction, and complaints</h2>
              <p>
                Under the Australian Privacy Principles, you have the right to request access to personal information we hold
                about you, or request that it be corrected if inaccurate, incomplete, or out of date.
              </p>
              <p>
                To make an access or correction request, or if you have a complaint about how we have handled your personal
                information, please contact our Privacy Officer:
              </p>
              <div className="contact-info-card card-spotlight" style={{ maxWidth: '420px', marginTop: '16px' }}>
                <p>
                  <strong>Privacy Officer &mdash; iKOREX</strong>
                  <br />
                  Email: privacy@ikorex.com.au
                  <br />
                  Phone: 1800 280 626
                  <br />
                  Unit 1, 106 Camms Road, Cranbourne, VIC 3977
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="contact" className="privacy-section">
              <h2>13. Contact us</h2>
              <p>If you have any questions about this Privacy Policy or our data management practices, please reach out to:</p>
              <p>
                <strong>iKOREX</strong>
                <br />
                ABN: 88 676 493 628 | ACN: 676 493 628
                <br />
                Unit 1, 106 Camms Road, Cranbourne, VIC 3977, Australia
                <br />
                Email: sales@ikorex.com.au | Phone: 1800 280 626
              </p>
            </section>

            {/* Section 14 */}
            <section id="childrens-privacy" className="privacy-section">
              <h2>14. Children's privacy</h2>
              <p>
                Our website and Services are intended exclusively for commercial and business audiences. We do not knowingly
                collect personal information from individuals under the age of 18.
              </p>
            </section>

            {/* Section 15 */}
            <section id="changes" className="privacy-section">
              <h2>15. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our operational practices, services,
                or legal obligations. When changes are made, the &ldquo;Last updated&rdquo; date at the top will be updated.
              </p>
            </section>

            {/* Section 16 */}
            <section id="governing-law" className="privacy-section">
              <h2>16. Governing law</h2>
              <p>
                This Privacy Policy is governed by the laws of Victoria, Australia, and the federal laws of the Commonwealth
                of Australia.
              </p>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
};

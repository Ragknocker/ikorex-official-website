import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export const SaaSFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What does the product do?',
      answer: 'iKOREX is an enterprise intelligent automation and workflow orchestration platform. It connects your core ERPs, accounting software, communication channels, and databases to eliminate repetitive manual data entry, perform high-speed invoice 3-way matching, and maintain audit-ready ledgers autonomously.'
    },
    {
      question: 'Who is it designed for?',
      answer: 'It is built specifically for operations leaders, CFOs, financial controllers, and IT systems architects across mid-market and enterprise businesses who need verifiable accuracy, zero ledger drift, and scalable automated workflows without massive custom engineering overhead.'
    },
    {
      question: 'Is there a free plan?',
      answer: 'Yes! We offer a fully functional 14-day free trial on our Starter and Professional plans with zero credit card required up front. You receive immediate access to the full dashboard, pre-built recipes, and live integration sandboxes.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Absolutely. You can upgrade, downgrade, or cancel your subscription at any time directly from the Billing tab in your application dashboard. There are no lock-in contracts or exit penalties.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Security is our highest priority. All data is encrypted using AES-256 at rest and TLS 1.3 in transit. Our infrastructure is architected according to SOC 2 Type II guidelines and hosted within Australian sovereign data centers compliant with local privacy regulations.'
    },
    {
      question: 'Does it integrate with other tools?',
      answer: 'Yes! iKOREX provides verified bi-directional connectors for Xero, MYOB, UiPath, Microsoft Power Automate, Slack, Microsoft Teams, Jira, AWS, Google Cloud, Stripe, and PostgreSQL. We also support custom REST API webhooks for bespoke legacy systems.'
    },
    {
      question: 'How can I contact support?',
      answer: 'You can reach our Melbourne-based support team 24/7 via the in-app chat widget, by emailing support@ikorex.com.au, or by booking an architectural strategy session through our Contact page.'
    }
  ];

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq" style={{ padding: '80px 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="section-container" style={{ maxWidth: '840px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="saas-badge-pill" style={{ marginBottom: '16px' }}>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--text-main)' }}>
            Everything You Need <span className="saas-gradient-text">to Know.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Transparent answers regarding capabilities, security standards, integrations, and pricing policies.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: `1px solid ${isOpen ? 'var(--saas-primary)' : 'var(--border-color)'}`,
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  boxShadow: isOpen ? '0 4px 16px rgba(0, 136, 255, 0.1)' : 'var(--saas-shadow-sm)'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-main)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: 700
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    style={{
                      fontSize: '1.25rem',
                      color: isOpen ? 'var(--saas-primary)' : 'var(--text-muted)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 20px 24px',
                      color: 'var(--text-muted)',
                      fontSize: '0.94rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid rgba(255, 255, 255, 0.04)'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

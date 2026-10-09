import React from 'react';

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const SaaSTestimonialsSection: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      name: 'David Reynolds',
      role: 'Chief Financial Officer',
      company: 'Apex Logistics AU',
      avatar: 'DR',
      quote: 'iKOREX slashed our end-of-month invoice reconciliation cycle from four business days down to under three hours. The zero-error accuracy gives our audit committee complete peace of mind.',
      rating: 5
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Shared Services',
      company: 'Meridian Health Group',
      avatar: 'ER',
      quote: 'We avoided hiring additional administrative personnel during a 60% transaction volume surge. The platform connected directly with Xero and Deputy without any custom coding headaches.',
      rating: 5
    },
    {
      name: 'Liam Henderson',
      role: 'VP of Technology & Systems',
      company: 'Pacific Energy Infrastructure',
      avatar: 'LH',
      quote: 'The telemetry visibility is second to none. We can trace every single automated bank sync and AP exception in real time, with full compliance stamps ready for external regulators.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials" style={{ padding: '80px 0', borderTop: '1px solid var(--border-color)', background: 'rgba(0, 0, 0, 0.015)' }}>
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
          <div className="saas-badge-pill" style={{ marginBottom: '16px' }}>
            <span>TESTED IN THE REAL WORLD</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--text-main)' }}>
            What Operations Leaders <br />
            <span className="saas-gradient-text">Are Saying About iKOREX.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Hear directly from finance controllers and technology leaders who run mission-critical processes on our automation engine.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '18px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--saas-shadow-sm)'
              }}
            >
              <div>
                {/* Rating Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', color: '#f59e0b' }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p style={{ fontSize: '0.98rem', color: 'var(--text-main)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '24px' }}>
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0088ff, #6366f1)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.9rem'
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {t.role} &bull; <strong>{t.company}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

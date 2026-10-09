import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Collaborative process mapping session with your operating leads to document pain points, baseline cycle times, and operational goals.'
  },
  {
    num: '02',
    title: 'Process Assessment',
    desc: 'Lean Six Sigma audit applied to remove redundant handovers and streamline logic before engineering, ensuring we never automate broken processes.'
  },
  {
    num: '03',
    title: 'Solution Design',
    desc: 'Detailed architecture blueprint outlining data schemas, API integration contracts, exception routing, and human-in-the-loop checkpoints.'
  },
  {
    num: '04',
    title: 'Implementation',
    desc: 'Rapid bot development and cognitive model deployment within your existing tech stack (UiPath, Power Automate, Xero, MYOB) without disruption.'
  },
  {
    num: '05',
    title: 'Testing & Verification',
    desc: 'Rigorous regression testing against historical edge cases and live user acceptance testing to guarantee audit-grade precision.'
  },
  {
    num: '06',
    title: 'Ongoing Improvement',
    desc: 'Continuous telemetry monitoring, SLA management, and iterative enhancements as your business processes expand.'
  }
];

export const DeliveryProcessSection: React.FC = () => {
  return (
    <section className="delivery-process-section" id="how-we-work">
      <div className="section-container">
        <div className="section-head center">
          <div className="custom-badge">
            <span className="badge-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="badge-svg" aria-hidden="true">
                <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
              </svg>
            </span>
            <span className="badge-text">Methodology</span>
          </div>
          <h2 className="section-title">
            How We Deliver <span className="text-gradient">Measurable Value</span>
          </h2>
          <p className="section-subtitle">
            A disciplined 6-stage engineering lifecycle designed to eliminate friction before writing
            a single line of automation code.
          </p>
        </div>

        <div className="delivery-steps-grid">
          {steps.map(step => (
            <div key={step.num} className="delivery-step-card card-spotlight">
              <div className="delivery-step-num">{step.num}</div>
              <h3 className="delivery-step-title">{step.title}</h3>
              <p className="delivery-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { faqList } from '../data/faqData';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<'all' | 'integration' | 'security' | 'delivery' | 'governance'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const filteredFaqs = activeTopic === 'all'
    ? faqList
    : faqList.filter(f => f.topic === activeTopic);

  const toggleFaq = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="faqs">
      <div className="section-container">
        <div className="section-head center">
          <div className="custom-badge">
            <span className="badge-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="badge-svg" aria-hidden="true">
                <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
              </svg>
            </span>
            <span className="badge-text">Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">
            Answers to Common <span className="text-gradient">Service Inquiries</span>
          </h2>
          <p className="section-subtitle">
            Key considerations regarding integration, data security, delivery timelines, and ongoing operational support.
          </p>
        </div>

        {/* Interactive FAQ Topic Filter */}
        <div className="faq-filter-bar" role="tablist" aria-label="Filter FAQs by topic">
          <button
            type="button"
            className={`faq-filter-btn ${activeTopic === 'all' ? 'is-active' : ''}`}
            onClick={() => setActiveTopic('all')}
          >
            All Questions
          </button>
          <button
            type="button"
            className={`faq-filter-btn ${activeTopic === 'integration' ? 'is-active' : ''}`}
            onClick={() => setActiveTopic('integration')}
          >
            Systems &amp; ERP
          </button>
          <button
            type="button"
            className={`faq-filter-btn ${activeTopic === 'security' ? 'is-active' : ''}`}
            onClick={() => setActiveTopic('security')}
          >
            Privacy &amp; AI Security
          </button>
          <button
            type="button"
            className={`faq-filter-btn ${activeTopic === 'delivery' ? 'is-active' : ''}`}
            onClick={() => setActiveTopic('delivery')}
          >
            Timelines &amp; Rollout
          </button>
          <button
            type="button"
            className={`faq-filter-btn ${activeTopic === 'governance' ? 'is-active' : ''}`}
            onClick={() => setActiveTopic('governance')}
          >
            Exceptions &amp; Fallbacks
          </button>
        </div>

        <div className="faq-list">
          {filteredFaqs.map(item => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="faq-item" data-topic={item.topic}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => toggleFaq(item.id)}
                >
                  <span>{item.question}</span>
                  <svg
                    className="faq-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {isExpanded && (
                  <div className="faq-answer" style={{ display: 'block' }}>
                    <p>{item.answer}</p>
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

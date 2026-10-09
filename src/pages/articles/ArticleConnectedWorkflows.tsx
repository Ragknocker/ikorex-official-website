import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ArticleConnectedWorkflows: React.FC = () => {
  const [likes, setLikes] = useState(164);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <>
      <main className="article-body">
        <p>AI can write the email.</p>
        <p>It can analyse the document. It can summarise the report. It can classify the request.</p>
        <p>
          <strong>But then what?</strong>
        </p>
        <p>
          Someone still has to copy the output, update the system, notify the next person, trigger the next step, and
          follow up. That is where many AI implementations stop.
        </p>

        <blockquote className="article-quote" style={{ borderLeftColor: 'var(--accent-orange)', fontSize: '1.15rem' }}>
          The AI works.
          <br />
          The workflow doesn&rsquo;t.
          <br />
          <strong>And there is a big difference.</strong>
        </blockquote>

        <div className="article-callout">
          <div className="callout-header">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>The Core Insight</span>
          </div>
          <div className="callout-body">
            Value isn't created when AI generates an answer. Value is created when that answer{' '}
            <strong>moves the business forward</strong> without manual friction.
          </div>
        </div>

        {/* Section 1 */}
        <h2 id="problem-with-individual-tasks">1. The Problem With Adding AI to Individual Tasks</h2>
        <p>A business might introduce AI into several disconnected corners of its daily operation:</p>
        <ul className="article-checklist">
          <li><span className="checklist-icon">&check;</span><span>AI writes customer emails.</span></li>
          <li><span className="checklist-icon">&check;</span><span>AI extracts information from invoices.</span></li>
          <li><span className="checklist-icon">&check;</span><span>AI summarises incoming documents.</span></li>
          <li><span className="checklist-icon">&check;</span><span>AI classifies customer service requests.</span></li>
        </ul>
        <p>Each tool performs its isolated step well. But if humans are still copy-pasting between browser tabs:</p>

        <div className="flow-comparison-box">
          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: '#ef4444', fontWeight: 600 }}>
            The Disconnected AI Bottleneck
          </div>
          <div className="flow-step-row">
            <span className="flow-step-tag good">AI Output</span>
            <span className="workflow-arrow">&rarr;</span>
            <span className="flow-step-tag bad">Copy</span>
            <span className="workflow-arrow">&rarr;</span>
            <span className="flow-step-tag bad">Paste</span>
            <span className="workflow-arrow">&rarr;</span>
            <span className="flow-step-tag bad">Update System</span>
            <span className="workflow-arrow">&rarr;</span>
            <span className="flow-step-tag bad">Follow-Up Email</span>
          </div>
        </div>

        {/* Section 2 & 3 */}
        <h2 id="opportunity-between-tasks">2. The Real Opportunity Is Between the Tasks</h2>
        <p>
          The true bottleneck was never how fast someone could read the PDF. The bottleneck is the handover: waiting
          for someone to notice the email, log in to Xero, check the PO in SAP, approve the amount, and schedule the
          payment.
        </p>

        <h2 id="ai-shouldnt-be-whole-workflow">3. The 4 Pillars of a Connected Workflow</h2>
        <div className="article-bento-grid">
          <div className="article-bento-item">
            <div className="bento-item-title">1. Cognitive AI</div>
            <div className="bento-item-desc">Understands unstructured inputs: text, receipts, security camera video.</div>
          </div>
          <div className="article-bento-item">
            <div className="bento-item-title">2. Automated Execution</div>
            <div className="bento-item-desc">RPA bots that trigger API transactions, format files, and sync ledgers.</div>
          </div>
          <div className="article-bento-item">
            <div className="bento-item-title">3. Business Systems</div>
            <div className="bento-item-desc">Your ERP, CRM, and cloud accounting software (Xero, MYOB, Salesforce).</div>
          </div>
          <div className="article-bento-item">
            <div className="bento-item-title">4. Human Judgement</div>
            <div className="bento-item-desc">Exception handling, threshold sign-offs, and relationship decisions.</div>
          </div>
        </div>

        {/* Section 4 */}
        <h2 id="case-study-invoice-processing">4. Take Invoice Processing: Traditional vs Connected</h2>
        <div style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-color)', color: 'var(--text-main)' }}>
                <th style={{ padding: '12px 16px' }}>Stage</th>
                <th style={{ padding: '12px 16px', color: '#ef4444' }}>Disconnected AI Tool</th>
                <th style={{ padding: '12px 16px', color: 'var(--accent-green)' }}>iKOREX Connected Workflow</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px 16px', fontWeight: 600 }}>1. Ingest</td>
                <td style={{ padding: '12px 16px' }}>Manual upload to AI tool</td>
                <td style={{ padding: '12px 16px' }}>Auto-polled from inbox/WhatsApp</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px 16px', fontWeight: 600 }}>2. Extraction</td>
                <td style={{ padding: '12px 16px' }}>AI extracts text on screen</td>
                <td style={{ padding: '12px 16px' }}>AI extracts &amp; maps to ledger schema</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px 16px', fontWeight: 600 }}>3. PO Match</td>
                <td style={{ padding: '12px 16px' }}>Human opens ERP to check PO</td>
                <td style={{ padding: '12px 16px' }}>Bot auto-matches 3-way in milliseconds</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', fontWeight: 600 }}>4. Posting</td>
                <td style={{ padding: '12px 16px' }}>Human types bill into Xero</td>
                <td style={{ padding: '12px 16px' }}>Direct API posting &amp; Slack signoff</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 5 - 10 */}
        <h2 id="where-automation-becomes-valuable">5. This Is Where Automation Becomes More Valuable</h2>
        <p>
          When systems communicate continuously, cycle times drop from 4.8 hours down to 3 seconds. Staff are no longer
          human copy-paste bridges between isolated software apps.
        </p>

        <h2 id="how-ikorex-delivers">10. The iKOREX Approach to Connected Operations</h2>
        <div className="consultation-feature-card">
          <div style={{ color: 'var(--accent-orange)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
            Connected Operations
          </div>
          <h3>Connect Your Existing Systems</h3>
          <p>
            We don't sell another siloed AI dashboard. We build the connective tissue between your current software stack,
            ensuring data flows securely with zero friction.
          </p>
          <div style={{ marginTop: '20px' }}>
            <Link to="/contact" className="btn btn-primary">
              Book an Architecture Consultation &rarr;
            </Link>
          </div>
        </div>

        {/* Footer Meta & Reactions */}
        <div className="article-footer-meta">
          <div className="article-tags">
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginRight: '6px', alignSelf: 'center' }}>
              Tags:
            </span>
            <span className="article-tag">#ConnectedWorkflows</span>
            <span className="article-tag">#EnterpriseIntegration</span>
            <span className="article-tag">#RPA</span>
            <span className="article-tag">#SystemSync</span>
          </div>

          <div className="article-reaction-row">
            <div>
              <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-main)', marginBottom: '2px' }}>
                Ready to connect your business stack?
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Learn how end-to-end integration eliminates operational drag.
              </div>
            </div>
            <button
              className={`reaction-btn ${hasLiked ? 'liked' : ''}`}
              type="button"
              aria-label="Like this article"
              onClick={handleLike}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill={hasLiked ? '#ef4444' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>Insightful</span>
              <span className="reaction-count">{likes}</span>
            </button>
          </div>

          <div className="author-box-card">
            <div className="team-avatar team-avatar-initials" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #00b4ff, #0055cc)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, flexShrink: 0 }}>
              JJ
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  About Justin John
                </h4>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-orange)', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none' }}
                >
                  Connect on LinkedIn &rarr;
                </a>
              </div>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                Justin John is Head of RPA Engineering at iKOREX. He architects scalable multi-system automations across
                enterprise ERPs, robotic queues, and high-volume data transformation pipelines.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Sidebar */}
      <aside className="article-sidebar">
        <div className="sidebar-widget">
          <div className="widget-title">Table of Contents</div>
          <nav className="toc-list" aria-label="Table of Contents">
            <a href="#problem-with-individual-tasks" className="toc-link">1. Isolated AI Problem</a>
            <a href="#opportunity-between-tasks" className="toc-link">2. Opportunity Between Tasks</a>
            <a href="#ai-shouldnt-be-whole-workflow" className="toc-link">3. The 4 Pillars</a>
            <a href="#case-study-invoice-processing" className="toc-link">4. Traditional vs Connected</a>
            <a href="#where-automation-becomes-valuable" className="toc-link">5. Exponential Value</a>
            <a href="#how-ikorex-delivers" className="toc-link">6. iKOREX Approach</a>
          </nav>
        </div>

        <div className="sidebar-widget" style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-orange)' }}>6 min</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Read Time</div>
          </div>
          <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
          <div>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>1,550</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Words</div>
          </div>
          <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
          <div>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-green)' }}>End-to-End</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Sync</div>
          </div>
        </div>
      </aside>
    </>
  );
};

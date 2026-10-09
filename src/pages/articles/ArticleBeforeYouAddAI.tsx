import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ArticleBeforeYouAddAI: React.FC = () => {
  const [likes, setLikes] = useState(118);
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
        <p>AI is being added to almost every business process.</p>
        <p>Customer support. Finance. Sales. Operations. Reporting.</p>
        <p>
          But there is a fundamental problem with the way many businesses approach it. They start by asking:
        </p>

        <blockquote className="article-quote">&ldquo;Where can we add AI?&rdquo;</blockquote>

        <p>That sounds innovative. But it is not always the right question.</p>
        <p>
          If a workflow already follows the same trigger, the same steps, and the same outcome every single time, adding
          AI may introduce complexity where none is needed.
        </p>
        <p>The smarter question is:</p>

        <blockquote className="article-quote" style={{ borderLeftColor: 'var(--accent-green)' }}>
          &ldquo;Where does intelligence actually improve the workflow?&rdquo;
        </blockquote>

        <div className="article-callout">
          <div className="callout-header">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>The Strategic Perspective</span>
          </div>
          <div className="callout-body">
            Intelligent automation isn't about making every step intelligent. It's about making the{' '}
            <em>right step</em> intelligent. If a workflow already knows what to do, reliable automation may be enough.
          </div>
        </div>

        {/* Section 1 */}
        <h2 id="not-every-problem-needs-ai">1. Not Every Business Problem Needs AI</h2>
        <p>Consider a simple, routine customer request:</p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', color: 'var(--accent-orange)', fontWeight: 500 }}>
          &ldquo;I forgot my password.&rdquo;
        </p>
        <p>The process is predictable. The system already knows what to do:</p>

        <div className="workflow-chain">
          <span className="workflow-step">1. Recognise request</span>
          <span className="workflow-arrow">&rarr;</span>
          <span className="workflow-step">2. Send instructions</span>
          <span className="workflow-arrow">&rarr;</span>
          <span className="workflow-step">3. Update record</span>
          <span className="workflow-arrow">&rarr;</span>
          <span className="workflow-step">4. Mark complete</span>
        </div>

        <p>
          There is no real decision to make. A rules-based automation can execute this workflow consistently,
          instantly, and with zero hallucination risk:
        </p>
        <p>
          <strong>The goal isn't intelligence. The goal is consistency.</strong>
        </p>

        {/* Section 2 */}
        <h2 id="the-two-questions">2. The Question That Separates Automation From AI</h2>
        <div className="article-bento-grid">
          <div className="article-bento-item">
            <div className="bento-item-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <div className="bento-item-title">Question 1: Is the process predictable?</div>
            <div className="bento-item-desc">
              Does it have the same trigger, same steps, and same outcome?
              <div style={{ marginTop: '10px', color: 'var(--accent-orange)', fontWeight: 600 }}>
                &rarr; Traditional workflow automation is the right approach.
              </div>
            </div>
          </div>

          <div className="article-bento-item">
            <div className="bento-item-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
              </svg>
            </div>
            <div className="bento-item-title">Question 2: Does it require interpretation?</div>
            <div className="bento-item-desc">
              Does the system need to understand ambiguous language, extract unstructured data, or recognize anomalous patterns?
              <div style={{ marginTop: '10px', color: 'var(--accent-green)', fontWeight: 600 }}>
                &rarr; Cognitive AI becomes valuable.
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 & 4 */}
        <h2 id="when-ai-is-unnecessary">3. When AI Becomes Unnecessary</h2>
        <p>
          When you use AI where deterministic code works best, you introduce unnecessary cost, latency, and
          probabilistic uncertainty. Keep routine steps rule-based.
        </p>

        <h2 id="change-the-scenario">4. The Double-Billing Example</h2>
        <p>
          Now consider an ambiguous customer email: <em>"You charged me twice for our quarterly retainer, please fix."</em>
        </p>
        <p>
          Here, natural language models classify customer sentiment, identify account IDs, cross-reference invoice
          ledgers, and prepare an audit recommendation for a human finance manager to confirm with one click.
        </p>

        <figure className="article-inline-media">
          <img
            src="/assets/images/blog-ai-decision-matrix.webp"
            alt="AI Decision Matrix"
            className="article-inline-img"
            loading="lazy"
          />
          <figcaption className="article-img-caption">
            Figure 2.0: Decision Matrix — balancing deterministic automation with cognitive AI intelligence.
          </figcaption>
        </figure>

        {/* Section 5 & 6 */}
        <h2 id="ai-handles-uncertainty">5. AI Should Handle the Uncertainty</h2>
        <p>
          AI excels at unstructured inputs: messy supplier invoices, handwritten forms, security video footage, or
          conversational inquiries.
        </p>

        <h2 id="best-workflows-use-both">6. The Best Workflows Use Both (Hybrid Architecture)</h2>
        <p>
          World-class operations combine both: AI extracts and understands the uncertain input, while software bots
          post, reconcile, and sync data into Xero, MYOB, or SAP with audit-grade precision.
        </p>

        <figure className="article-inline-media">
          <img
            src="/assets/images/blog-ai-hybrid-architecture.webp"
            alt="Hybrid Architecture"
            className="article-inline-img"
            loading="lazy"
          />
          <figcaption className="article-img-caption">
            Figure 3.0: Hybrid workflow architecture — AI cognitive ingestion married to deterministic RPA ledger execution.
          </figcaption>
        </figure>

        {/* Section 7 - 10 */}
        <h2 id="better-way-to-design">7. A Better Way to Design AI Workflows</h2>
        <ul className="article-checklist">
          <li><div className="checklist-icon">&check;</div><span>Map the workflow end-to-end first.</span></li>
          <li><div className="checklist-icon">&check;</div><span>Identify the exact points of ambiguity.</span></li>
          <li><div className="checklist-icon">&check;</div><span>Deploy AI strictly at the decision node.</span></li>
          <li><div className="checklist-icon">&check;</div><span>Handle upstream and downstream tasks with automation.</span></li>
          <li><div className="checklist-icon">&check;</div><span>Maintain human-in-the-loop exception gates.</span></li>
        </ul>

        <h2 id="how-ikorex-helps">10. How iKOREX Architects Intelligent Operations</h2>
        <div className="consultation-feature-card">
          <div style={{ color: 'var(--accent-orange)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
            Pragmatic Engineering
          </div>
          <h3>We Never Add AI For The Sake Of It</h3>
          <p>
            At iKOREX, we design operations that are fast, dependable, and verifiable. We separate predictable
            automation from cognitive AI so your business gets peak reliability at minimum cost.
          </p>
          <div style={{ marginTop: '20px' }}>
            <Link to="/contact" className="btn btn-primary">
              Consult With Our Engineers &rarr;
            </Link>
          </div>
        </div>

        {/* Footer Meta & Reactions */}
        <div className="article-footer-meta">
          <div className="article-tags">
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginRight: '6px', alignSelf: 'center' }}>
              Tags:
            </span>
            <span className="article-tag">#AI</span>
            <span className="article-tag">#MachineLearning</span>
            <span className="article-tag">#WorkflowDesign</span>
            <span className="article-tag">#AutomationStrategy</span>
          </div>

          <div className="article-reaction-row">
            <div>
              <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-main)', marginBottom: '2px' }}>
                Was this framework clear?
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Evaluate your processes before spending on heavy AI subscriptions.
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
            <img src="/assets/images/Team/subin_peter.webp" alt="Subin Peter" className="author-box-img" />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  About Subin Peter
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
                Subin Peter is Co-Founder &amp; COO at iKOREX. An enterprise workflow architect who leads delivery and
                operations across Australian businesses, Subin specializes in high-throughput automations with robust
                governance.
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
            <a href="#not-every-problem-needs-ai" className="toc-link">1. Not Every Problem Needs AI</a>
            <a href="#the-two-questions" className="toc-link">2. The 2 Questions</a>
            <a href="#when-ai-is-unnecessary" className="toc-link">3. Unnecessary AI</a>
            <a href="#change-the-scenario" className="toc-link">4. Double-Billing Scenario</a>
            <a href="#ai-handles-uncertainty" className="toc-link">5. Handle Uncertainty</a>
            <a href="#best-workflows-use-both" className="toc-link">6. Hybrid Workflows</a>
            <a href="#better-way-to-design" className="toc-link">7. Design Principles</a>
            <a href="#how-ikorex-helps" className="toc-link">8. How iKOREX Architects</a>
          </nav>
        </div>

        <div className="sidebar-widget" style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-orange)' }}>5 min</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Read Time</div>
          </div>
          <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
          <div>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>1,400</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Words</div>
          </div>
          <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
          <div>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-green)' }}>Pragmatic</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Design</div>
          </div>
        </div>
      </aside>
    </>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ArticleOperationalCost: React.FC = () => {
  const [likes, setLikes] = useState(142);
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
        <p>A task that takes 15 or 20 minutes rarely feels like a business problem.</p>
        <p>
          It feels too small to worry about. You might think, <em>"It's only 20 minutes. We'll just get it done."</em>{' '}
          Once, that may be true.
        </p>
        <p>
          But when the same task is repeated every working day, by multiple employees, throughout the year, the numbers
          change. A 20-minute task repeated across 260 working days equals <strong>5,200 minutes</strong> —
          approximately <strong>87 hours</strong>, or around <strong>11 working days</strong>, for one person. If five
          people perform the same task, that becomes approximately <strong>435 hours</strong>, or{' '}
          <strong>55 working days of labour</strong>.
        </p>
        <p>
          The task didn't become more complicated. It simply happened repeatedly. That is where many businesses
          underestimate the true cost of manual work.
        </p>

        {/* Callout Box */}
        <div className="article-callout">
          <div className="callout-header">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>The Reality of Repetitive Overhead</span>
          </div>
          <div className="callout-body">
            The real cost of repetitive work isn't measured in minutes. It's measured in what those minutes become when
            repeated across your business. Daily cost can look small; annual cost can be significant.
          </div>
        </div>

        {/* Section 1 */}
        <h2 id="problem-not-20-mins">1. The Problem Isn't the 20 Minutes</h2>
        <p>
          When businesses estimate a task, they often measure only the obvious activity:{' '}
          <em>"It takes 15 minutes to update this report."</em>
        </p>
        <p>
          But what actually happens? Someone opens a file, finds the information, switches between systems, checks the
          previous entry, identifies an error, corrects it, updates the record and sends the result.
        </p>
        <p>
          The task isn't really just "15 minutes of updating." It is a sequence of small actions:{' '}
          <strong>finding, switching, checking, correcting, updating and sending</strong>.
        </p>
        <p>
          Businesses often count the doing while overlooking the finding, switching, checking and correcting around it.
          When those actions happen every day, the hidden cost starts to grow.
        </p>

        {/* Section 2 */}
        <h2 id="work-nobody-schedules">2. The Work Nobody Puts on the Schedule</h2>
        <p>
          Businesses schedule meetings, sales calls, projects and customer work. But repetitive operational work often
          happens in the background.
        </p>
        <p>
          Employees may spend part of every day entering data, updating spreadsheets, processing invoices, preparing
          reports, checking records, copying information between systems, updating customer details, sending routine
          emails and processing approvals.
        </p>
        <p>
          None of these tasks necessarily looks significant on its own. But they consume something every business has a
          limited amount of: <strong>human time</strong>.
        </p>
        <div className="article-quote">
          <div className="quote-text">
            "How much time does this process consume across the entire organisation?"
          </div>
          <div className="quote-author">iKOREX Process Diagnostic</div>
        </div>

        {/* Section 3 */}
        <h2 id="small-time-multiplies">3. Small Time Losses Multiply Quickly</h2>
        <p>
          One employee spending 20 minutes every working day on the same manual process uses approximately{' '}
          <strong>87 hours a year</strong>. For five employees, that becomes approximately <strong>435 hours</strong>,
          or <strong>55 working days of labour</strong>.
        </p>
        <p>
          And that calculation considers only the time spent performing the task. It does not include errors, rework,
          delays, interruptions or the value of the work employees could have completed instead.
        </p>

        {/* Section 4 */}
        <h2 id="hidden-costs">4. The Hidden Cost of Manual Work</h2>
        <p>
          Manual work creates far more than a simple time cost. When evaluated end-to-end, it introduces five
          compounding liabilities:
        </p>

        <div className="article-bento-grid">
          <div className="article-bento-item">
            <div className="bento-item-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="bento-item-title">1. Labour Cost</div>
            <div className="bento-item-desc">
              Someone has to perform the task repeatedly, tying up salaried staff on administrative routines.
            </div>
          </div>

          <div className="article-bento-item">
            <div className="bento-item-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 3 21 3 21 8"></polyline>
                <line x1="4" y1="20" x2="21" y2="3"></line>
                <polyline points="21 16 21 21 16 21"></polyline>
                <line x1="15" y1="15" x2="21" y2="21"></line>
                <line x1="4" y1="4" x2="9" y2="9"></line>
              </svg>
            </div>
            <div className="bento-item-title">2. Context Switching</div>
            <div className="bento-item-desc">
              Employees constantly move between email, spreadsheets, accounting platforms and CRMs to complete one workflow.
            </div>
          </div>

          <div className="article-bento-item">
            <div className="bento-item-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <div className="bento-item-title">3. Human Error</div>
            <div className="bento-item-desc">
              Repetitive work creates continuous opportunities for incorrect entries, missed records and outdated data.
            </div>
          </div>

          <div className="article-bento-item">
            <div className="bento-item-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="1 4 1 10 7 10"></polyline>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
              </svg>
            </div>
            <div className="bento-item-title">4. Cost of Rework</div>
            <div className="bento-item-desc">
              When something goes wrong, someone has to investigate, correct, recheck and communicate the change across teams.
            </div>
          </div>
        </div>

        <figure className="article-inline-media">
          <img
            src="/assets/images/blog-context-switching.webp"
            alt="Context switching across enterprise systems"
            className="article-inline-img"
            loading="lazy"
          />
          <figcaption className="article-img-caption">
            Figure 2.0: The hidden cost of context switching—employees moving between spreadsheets, email, and ERP systems.
          </figcaption>
        </figure>

        {/* Section 5 */}
        <h2 id="not-all-tasks-automate">5. Not Every Repetitive Task Needs Automation</h2>
        <p>Strong automation candidates generally share four distinct characteristics:</p>
        <ul className="article-checklist">
          <li>
            <div className="checklist-icon">&check;</div>
            <span><strong>They are repetitive:</strong> The same activity happens again and again in the same pattern.</span>
          </li>
          <li>
            <div className="checklist-icon">&check;</div>
            <span><strong>They are rule-based:</strong> The process follows defined steps, conditions, or logic.</span>
          </li>
          <li>
            <div className="checklist-icon">&check;</div>
            <span><strong>They are frequent:</strong> The task happens daily, weekly, or at high volume.</span>
          </li>
          <li>
            <div className="checklist-icon">&check;</div>
            <span><strong>They are easy to underestimate:</strong> The individual activity looks small, but cumulative impact is significant.</span>
          </li>
        </ul>

        {/* Section 6 */}
        <h2 id="start-with-process">6. Start With the Process, Not the Technology</h2>
        <p>A common mistake is starting with technology: <em>"Where can we use AI?"</em></p>
        <p>A far better question is: <strong>"Where are we repeatedly spending human time?"</strong></p>

        <div className="workflow-chain">
          <span className="workflow-step">Receive Information</span>
          <span className="workflow-arrow">&rarr;</span>
          <span className="workflow-step">Extract Data</span>
          <span className="workflow-arrow">&rarr;</span>
          <span className="workflow-step">Check Rules</span>
          <span className="workflow-arrow">&rarr;</span>
          <span className="workflow-step">Post to System</span>
          <span className="workflow-arrow">&rarr;</span>
          <span className="workflow-step">Audit &amp; Notify</span>
        </div>

        {/* Section 7 */}
        <h2 id="calculate-the-cost">7. Calculate the Cost Before You Automate</h2>
        <div className="calc-formula-card">
          <div className="calc-formula-title">Annual Manual Cost Formula</div>
          <div className="calc-formula-code">
            Annual Manual Time = Time per Task × Tasks per Day × Working Days × Employees
          </div>
          <div className="calc-formula-result">
            <strong>Example:</strong> 20 minutes × 1 task × 260 working days × 5 employees ={' '}
            <strong>26,000 minutes</strong> (~<strong>433 hours</strong> of manual labor).
          </div>
        </div>

        {/* Section 8 */}
        <h2 id="dont-automate-broken">8. Don't Automate a Broken Process</h2>
        <p>
          Automation should not simply make an inefficient process faster. Automating bad steps merely produces errors
          at machine speed. Eliminate unnecessary steps and standardise before engineering automation.
        </p>

        {/* Section 9 */}
        <h2 id="start-with-one">9. Start With One Process</h2>
        <p>
          You don't need to automate your entire business at once. Start with one repetitive process. Measure it.
          Understand it. Calculate its cost. Then evaluate whether automation can improve it.
        </p>

        {/* Section 10 */}
        <h2 id="most-valuable-boring">10. The Most Valuable Process Might Be the Most Boring One</h2>
        <p>
          Some of the highest ROI workflows are ordinary routines: daily reconciliation, vendor invoice matching,
          inventory stock level sync, and standard managerial approval routing.
        </p>

        <figure className="article-inline-media">
          <img
            src="/assets/images/blog-process-pipeline.webp"
            alt="Process pipeline automation"
            className="article-inline-img"
            loading="lazy"
          />
          <figcaption className="article-img-caption">
            Figure 3.0: Transitioning from manual handoffs to automated, rule-based process pipelines.
          </figcaption>
        </figure>

        {/* Section 11 & 12 */}
        <h2 id="more-than-saving-hours">11. Automation Is About More Than Saving Hours</h2>
        <p>
          A well-designed automated workflow eliminates processing bottlenecks, reduces error rates to near zero,
          and allows your team to focus on strategic client-facing deliverables.
        </p>

        <h2 id="how-ikorex-helps">12. How iKOREX Helps Businesses Find These Opportunities</h2>
        <div className="consultation-feature-card">
          <div style={{ color: 'var(--accent-orange)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
            The iKOREX Engagement Framework
          </div>
          <h3>Free Process Consultation &amp; Defined 30-Day Pilot</h3>
          <p>
            The engagement model begins with a <strong>free process consultation</strong>, followed by a{' '}
            <strong>defined 30-day pilot</strong> before moving into paid implementation and ongoing optimisation.
          </p>
          <div style={{ marginTop: '20px' }}>
            <Link to="/contact" className="btn btn-primary">
              Book a Free Process Consultation &rarr;
            </Link>
          </div>
        </div>

        {/* Footer Meta & Reactions */}
        <div className="article-footer-meta">
          <div className="article-tags">
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginRight: '6px', alignSelf: 'center' }}>
              Tags:
            </span>
            <span className="article-tag">#ProcessAutomation</span>
            <span className="article-tag">#RPA</span>
            <span className="article-tag">#OperationalCost</span>
            <span className="article-tag">#WorkflowEfficiency</span>
            <span className="article-tag">#iKOREX</span>
          </div>

          <div className="article-reaction-row">
            <div>
              <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-main)', marginBottom: '2px' }}>
                Did you find this operational breakdown helpful?
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Measure your manual workflows and see what automation can save.
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

          {/* Author Box */}
          <div className="author-box-card">
            <img src="/assets/images/Team/yesudas_sebastian.webp" alt="Yesudas Sebastian" className="author-box-img" />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  About Yesudas Sebastian
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
                Yesudas Sebastian is Co-Founder &amp; CEO at iKOREX. With a Bachelor of Technology in Engineering and
                20+ years of global industry experience in process improvement, Yesudas leads iKOREX in turning manual
                overhead into reliable, measurable automation.
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
            <a href="#problem-not-20-mins" className="toc-link">1. Not Just 20 Minutes</a>
            <a href="#work-nobody-schedules" className="toc-link">2. Unscheduled Work</a>
            <a href="#small-time-multiplies" className="toc-link">3. Time Losses Multiply</a>
            <a href="#hidden-costs" className="toc-link">4. 5 Hidden Costs</a>
            <a href="#not-all-tasks-automate" className="toc-link">5. What to Automate</a>
            <a href="#start-with-process" className="toc-link">6. Process Before Tech</a>
            <a href="#calculate-the-cost" className="toc-link">7. Calculate the Cost</a>
            <a href="#dont-automate-broken" className="toc-link">8. Broken Processes</a>
            <a href="#start-with-one" className="toc-link">9. Start With One</a>
            <a href="#most-valuable-boring" className="toc-link">10. Boring Processes</a>
            <a href="#more-than-saving-hours" className="toc-link">11. Beyond Saving Hours</a>
            <a href="#how-ikorex-helps" className="toc-link">12. How iKOREX Helps</a>
          </nav>
        </div>

        <div className="sidebar-widget" style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-orange)' }}>6 min</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Read Time</div>
          </div>
          <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
          <div>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>1,600</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Words</div>
          </div>
          <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
          <div>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-green)' }}>30-Day</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Pilot</div>
          </div>
        </div>
      </aside>
    </>
  );
};

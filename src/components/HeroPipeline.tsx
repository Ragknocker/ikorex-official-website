import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const HeroPipeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0); // 0, 1, 2, 3
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 4200);
    return () => clearInterval(timer);
  }, [isPaused]);

  const stepLabels = ['Capture', 'Understand', 'Validate', 'Post'];

  return (
    <div
      className="pipeline glass"
      data-pipeline
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <ol className="pipe-steps" aria-label="How an invoice moves through iKOREX">
        {stepLabels.map((label, idx) => (
          <li
            key={label}
            className={`pipe-step ${idx === activeStep ? 'is-active' : ''}`}
            onClick={() => setActiveStep(idx)}
            style={{ cursor: 'pointer' }}
          >
            <span className="pipe-dot">{idx + 1}</span>
            <span>{label}</span>
          </li>
        ))}
      </ol>

      <div className="pipe-progress" aria-hidden="true" style={{ position: 'relative' }}>
        <motion.span
          className="pipe-progress-bar"
          animate={{ width: `${((activeStep + 1) / 4) * 100}%` }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          style={{
            boxShadow: '0 0 12px #00d2ff',
            display: 'block'
          }}
        />
      </div>

      <div className="pipe-stage-area" style={{ position: 'relative', minHeight: '260px' }}>
        <AnimatePresence mode="wait">
          {/* Stage 1: Capture */}
          {activeStep === 0 && (
            <motion.div
              key="stage-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pipe-stage is-active"
            >
              <span className="pipe-kicker">01 &middot; Capture</span>
              <h3 className="pipe-title">Invoices arrive from anywhere</h3>
              <ul className="pipe-sources">
                <li>
                  <span className="pipe-src-icon mail" aria-hidden="true">
                    @
                  </span>
                  Email attachment &middot; INV-2041.pdf
                </li>
                <li>
                  <span className="pipe-src-icon wa" aria-hidden="true">
                    W
                  </span>
                  WhatsApp photo from the site manager
                </li>
                <li>
                  <span className="pipe-src-icon portal" aria-hidden="true">
                    P
                  </span>
                  Supplier portal upload
                </li>
              </ul>
            </motion.div>
          )}

          {/* Stage 2: Understand */}
          {activeStep === 1 && (
            <motion.div
              key="stage-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pipe-stage is-active"
            >
              <span className="pipe-kicker">02 &middot; Understand</span>
              <h3 className="pipe-title">AI reads the fields, not just the text</h3>
              <div className="pipe-doc" data-pipe-doc style={{ position: 'relative' }}>
                <span className="pipe-scan" aria-hidden="true"></span>
                <div>
                  <span>Supplier</span>
                  <b className="pipe-decode-val">Acme Supplies Pty Ltd</b>
                </div>
                <div>
                  <span>Invoice no.</span>
                  <b className="pipe-decode-val">INV-2041</b>
                </div>
                <div>
                  <span>PO reference</span>
                  <b className="pipe-decode-val">PO-0778</b>
                </div>
                <div>
                  <span>Total incl. GST</span>
                  <b className="pipe-decode-val">$4,820.00</b>
                </div>
                <div>
                  <span>Due</span>
                  <b className="pipe-decode-val">30 days</b>
                </div>
                <div>
                  <span>Confidence</span>
                  <b className="pipe-decode-val ok">High (99.8%)</b>
                </div>
              </div>
            </motion.div>
          )}

          {/* Stage 3: Validate */}
          {activeStep === 2 && (
            <motion.div
              key="stage-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pipe-stage is-active"
            >
              <span className="pipe-kicker">03 &middot; Validate</span>
              <h3 className="pipe-title">Checked before anyone has to look</h3>
              <ul className="pipe-checks">
                <li>
                  <span>Matches purchase order PO-0778</span>
                  <b data-status="Pass" style={{ color: 'var(--accent-green)' }}>
                    Pass &check;
                  </b>
                </li>
                <li>
                  <span>Goods receipt recorded</span>
                  <b data-status="Pass" style={{ color: 'var(--accent-green)' }}>
                    Pass &check;
                  </b>
                </li>
                <li>
                  <span>Amount within tolerance</span>
                  <b data-status="Pass" style={{ color: 'var(--accent-green)' }}>
                    Pass &check;
                  </b>
                </li>
                <li>
                  <span>Duplicate check</span>
                  <b data-status="None found" style={{ color: 'var(--accent-green)' }}>
                    None found &check;
                  </b>
                </li>
              </ul>
            </motion.div>
          )}

          {/* Stage 4: Post */}
          {activeStep === 3 && (
            <motion.div
              key="stage-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pipe-stage is-active"
            >
              <span className="pipe-kicker">04 &middot; Post &amp; notify</span>
              <h3 className="pipe-title">Posted to your books, team in the loop</h3>
              <div className="pipe-erp-row">
                <div className="pipe-erp">
                  <span className="pipe-erp-badge">Xero &middot; Draft bill</span>
                  <span>Bill #2041 created, line items coded, PDF attached</span>
                </div>
                <div className="pipe-slack">
                  <span className="pipe-slack-badge">Slack &middot; #finance</span>
                  <span>Invoice #2041 ($4,820.00) ready for approval &middot; matches PO-0778</span>
                </div>
              </div>
              <div className="pipe-footer">
                <span className="pipe-kicker">Audit trail</span>
                <span>Logged with timestamp, source file &amp; confidence scores</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="pipe-ctrls">
        <button
          className="pipe-pause-btn"
          type="button"
          aria-pressed={isPaused}
          onClick={() => setIsPaused(prev => !prev)}
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <span className="pipe-hint">Hover or tap any step to inspect</span>
      </div>
    </div>
  );
};

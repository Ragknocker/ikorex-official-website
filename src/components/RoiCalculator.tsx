import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MotionReveal } from './motion/MotionReveal';
import { CardSpotlight } from './motion/CardSpotlight';

type PresetKey = 'ap' | 'orders' | 'reconcile' | 'custom';

interface PresetData {
  volume: number;
  time: number;
  rate: number;
}

const PRESETS: Record<'ap' | 'orders' | 'reconcile', PresetData> = {
  ap: { volume: 2500, time: 14, rate: 55 },
  orders: { volume: 4200, time: 12, rate: 48 },
  reconcile: { volume: 1600, time: 22, rate: 68 }
};

export const RoiCalculator: React.FC = () => {
  const [activePreset, setActivePreset] = useState<PresetKey>('ap');
  const [volume, setVolume] = useState<number>(2500);
  const [timeMins, setTimeMins] = useState<number>(14);
  const [hourlyRate, setHourlyRate] = useState<number>(55);

  const applyPreset = (key: 'ap' | 'orders' | 'reconcile') => {
    setActivePreset(key);
    const p = PRESETS[key];
    setVolume(p.volume);
    setTimeMins(p.time);
    setHourlyRate(p.rate);
  };

  const handleSliderChange = (setter: React.Dispatch<React.SetStateAction<number>>, val: number) => {
    setActivePreset('custom');
    setter(val);
  };

  const calculations = useMemo(() => {
    const totalManualHoursYear = Math.round((volume * timeMins * 12) / 60);
    const reclaimedHoursYear = Math.round(totalManualHoursYear * 0.85);
    const oversightHoursYear = Math.round(totalManualHoursYear * 0.15);
    const annualCostSavings = Math.round(reclaimedHoursYear * hourlyRate);
    const fteEquiv = (reclaimedHoursYear / 1950).toFixed(1);
    const speedMultiplier = Math.max(12, Math.round((timeMins * 60) / 30));

    let paybackTimeline = '2 - 4 Mo.';
    if (annualCostSavings > 250000) paybackTimeline = '1 - 3 Mo.';
    else if (annualCostSavings <= 100000) paybackTimeline = '3 - 6 Mo.';

    return {
      totalManualHoursYear,
      reclaimedHoursYear,
      oversightHoursYear,
      annualCostSavings,
      fteEquiv,
      speedMultiplier,
      paybackTimeline
    };
  }, [volume, timeMins, hourlyRate]);

  return (
    <section className="calculator-section" id="roi-calculator">
      <div className="section-container">
        <MotionReveal direction="up" className="section-head center">
          <div className="custom-badge">
            <span className="badge-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="badge-svg" aria-hidden="true">
                <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
              </svg>
            </span>
            <span className="badge-text">Interactive Feasibility Tool</span>
          </div>
          <h2 className="section-title">
            Calculate Your Operational <span className="text-gradient">ROI &amp; Reclaimed Hours</span>
          </h2>
          <p className="section-subtitle">
            Adjust your team's operational parameters below to model estimated capacity recovery and
            labor cost reduction for your Australian business.
          </p>
        </MotionReveal>

        <div className="calc-wrapper">
          {/* Left: Interactive Controls */}
          <div className="calc-controls-card card-spotlight">
            <div className="calc-preset-bar">
              <span className="calc-preset-label">Workload Presets:</span>
              <div className="calc-preset-buttons">
                <button
                  type="button"
                  className={`calc-preset-btn ${activePreset === 'ap' ? 'is-active' : ''}`}
                  onClick={() => applyPreset('ap')}
                >
                  Accounts Payable
                </button>
                <button
                  type="button"
                  className={`calc-preset-btn ${activePreset === 'orders' ? 'is-active' : ''}`}
                  onClick={() => applyPreset('orders')}
                >
                  Order Fulfilment
                </button>
                <button
                  type="button"
                  className={`calc-preset-btn ${activePreset === 'reconcile' ? 'is-active' : ''}`}
                  onClick={() => applyPreset('reconcile')}
                >
                  Bank Rec &amp; Ledger
                </button>
                <button
                  type="button"
                  className={`calc-preset-btn ${activePreset === 'custom' ? 'is-active' : ''}`}
                  onClick={() => setActivePreset('custom')}
                >
                  Custom
                </button>
              </div>
            </div>

            {/* Slider 1: Monthly Volume */}
            <div className="calc-field-group">
              <div className="calc-field-header">
                <label htmlFor="calcVolumeRange" className="calc-field-label">
                  Monthly Transaction / Document Volume
                </label>
                <div className="calc-field-value-pill">
                  <span>{volume.toLocaleString('en-AU')}</span>{' '}
                  <span className="calc-unit">docs/mo</span>
                </div>
              </div>
              <input
                type="range"
                id="calcVolumeRange"
                className="calc-range-slider"
                min="200"
                max="20000"
                step="100"
                value={volume}
                aria-label="Monthly Transaction Volume"
                onChange={e => handleSliderChange(setVolume, parseInt(e.target.value, 10))}
              />
              <div className="calc-range-marks">
                <span>200</span>
                <span>5,000</span>
                <span>10,000</span>
                <span>20,000+</span>
              </div>
            </div>

            {/* Slider 2: Manual Handling Minutes */}
            <div className="calc-field-group">
              <div className="calc-field-header">
                <label htmlFor="calcTimeRange" className="calc-field-label">
                  Average Manual Handling Time per Task
                </label>
                <div className="calc-field-value-pill">
                  <span>{timeMins}</span> <span className="calc-unit">mins/item</span>
                </div>
              </div>
              <input
                type="range"
                id="calcTimeRange"
                className="calc-range-slider"
                min="3"
                max="60"
                step="1"
                value={timeMins}
                aria-label="Average Manual Handling Time"
                onChange={e => handleSliderChange(setTimeMins, parseInt(e.target.value, 10))}
              />
              <div className="calc-range-marks">
                <span>3 min (Quick keying)</span>
                <span>15 min (Standard 3-way check)</span>
                <span>60 min (Complex reconciliation)</span>
              </div>
            </div>

            {/* Slider 3: Blended Hourly Rate */}
            <div className="calc-field-group">
              <div className="calc-field-header">
                <label htmlFor="calcRateRange" className="calc-field-label">
                  Blended Operations Hourly Cost (AUD)
                </label>
                <div className="calc-field-value-pill">
                  <span className="calc-unit">$</span>
                  <span>{hourlyRate}</span> <span className="calc-unit">AUD/hr</span>
                </div>
              </div>
              <input
                type="range"
                id="calcRateRange"
                className="calc-range-slider"
                min="35"
                max="150"
                step="5"
                value={hourlyRate}
                aria-label="Blended Hourly Cost in AUD"
                onChange={e => handleSliderChange(setHourlyRate, parseInt(e.target.value, 10))}
              />
              <div className="calc-range-marks">
                <span>$35/hr</span>
                <span>$65/hr</span>
                <span>$100/hr</span>
                <span>$150/hr</span>
              </div>
            </div>
          </div>

          {/* Right: Real-time Output Dashboard */}
          <div className="calc-results-card card-spotlight">
            <div className="calc-results-header">
              <div className="calc-results-kicker">Projected Annual Impact Model</div>
              <div className="calc-confidence-tag">Conservative 85% Automation Footprint</div>
            </div>

            {/* Primary Metric Hero */}
            <div className="calc-primary-hero">
              <span className="calc-primary-label">Estimated Annual Capacity Savings</span>
              <div className="calc-primary-stat">
                <span className="calc-currency">$</span>
                <span>{calculations.annualCostSavings.toLocaleString('en-AU')}</span>
                <span className="calc-cadence">AUD / yr</span>
              </div>
              <p className="calc-primary-note">
                Direct equivalent labour hours freed up for strategic, customer-facing work.
              </p>
            </div>

            {/* Secondary Grid */}
            <div className="calc-metrics-grid">
              <div className="calc-metric-box">
                <span className="calc-metric-sublabel">Hours Reclaimed / Year</span>
                <div className="calc-metric-number">
                  {calculations.reclaimedHoursYear.toLocaleString('en-AU')} hrs
                </div>
                <span className="calc-metric-context">
                  &approx; {calculations.fteEquiv} Full-Time Equivalent Roles Re-allocated
                </span>
              </div>
              <div className="calc-metric-box">
                <span className="calc-metric-sublabel">Speedup Acceleration</span>
                <div className="calc-metric-number">{calculations.speedMultiplier}x Faster</div>
                <span className="calc-metric-context">Turnaround in seconds</span>
              </div>
              <div className="calc-metric-box">
                <span className="calc-metric-sublabel">Audit Accuracy Target</span>
                <div className="calc-metric-number">99.8%</div>
                <span className="calc-metric-context">Eliminating manual keying errors</span>
              </div>
              <div className="calc-metric-box">
                <span className="calc-metric-sublabel">Payback Timeline</span>
                <div className="calc-metric-number">{calculations.paybackTimeline}</div>
                <span className="calc-metric-context">Typical fixed-fee deployment</span>
              </div>
            </div>

            {/* Comparison Progress Bar */}
            <div className="calc-compare-bar-group">
              <div className="calc-compare-labels">
                <span>
                  Manual Baseline:{' '}
                  <strong>{calculations.totalManualHoursYear.toLocaleString('en-AU')} hrs/yr</strong>
                </span>
                <span>
                  With iKOREX:{' '}
                  <strong>{calculations.oversightHoursYear.toLocaleString('en-AU')} hrs oversight</strong>
                </span>
              </div>
              <div className="calc-progress-track">
                <div className="calc-progress-fill-auto" style={{ width: '15%' }}></div>
                <div className="calc-progress-fill-saved" style={{ width: '85%' }}></div>
              </div>
              <div className="calc-progress-legend">
                <span>
                  <span className="legend-dot saved"></span> 85% Automated Straight-Through
                </span>
                <span>
                  <span className="legend-dot auto"></span> 15% Exception Review &amp; Approval
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="calc-cta-footer">
              <Link
                to={`/contact?source=calculator&estHours=${calculations.reclaimedHoursYear}&estSavings=${calculations.annualCostSavings}&volume=${volume}`}
                className="btn btn-primary btn-block"
              >
                Book a Consultation with this Model &rarr;
              </Link>
              <span className="calc-disclaimer-note">
                *Projections are illustrative estimates based on standard RPA &amp; OCR benchmarks.
                Final business case is confirmed during our discovery assessment.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

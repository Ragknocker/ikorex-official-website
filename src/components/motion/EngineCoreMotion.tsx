import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OrbitNode {
  id: string;
  title: string;
  category: string;
  status: string;
  metric: string;
  angle: number; // in degrees
  distance: number; // in px within 400x400 viewBox
  icon: React.ReactNode;
  color: string;
}

const NODES: OrbitNode[] = [
  {
    id: 'ai-doc',
    title: 'AI Document Vision',
    category: 'Cognitive Layer',
    status: 'ACTIVE',
    metric: '99.94% extraction',
    angle: 0,
    distance: 125,
    color: '#00d2ff',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    )
  },
  {
    id: 'rpa-exec',
    title: 'RPA Automation Bot',
    category: 'Execution Engine',
    status: 'DISPATCHING',
    metric: '0.18s cycle',
    angle: 72,
    distance: 130,
    color: '#0088ff',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
      </svg>
    )
  },
  {
    id: 'erp-sync',
    title: 'ERP & Ledger Bridge',
    category: 'Integration Mesh',
    status: 'SYNCED',
    metric: 'Xero / MYOB',
    angle: 144,
    distance: 128,
    color: '#00ffc8',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    )
  },
  {
    id: 'audit-sec',
    title: 'Audit & Compliance',
    category: 'Security Fabric',
    status: 'VERIFIED',
    metric: 'Immutable Log',
    angle: 216,
    distance: 132,
    color: '#38bdf8',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  },
  {
    id: 'auto-heal',
    title: 'Self-Healing Engine',
    category: 'Autonomous Guard',
    status: 'WATCHING',
    metric: '0 Unhandled Flaws',
    angle: 288,
    distance: 125,
    color: '#818cf8',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
      </svg>
    )
  }
];

export const EngineCoreMotion: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeNode, setActiveNode] = useState<OrbitNode | null>(null);
  const [pulseCount, setPulseCount] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const triggerBurst = () => {
    setIsSimulating(true);
    setPulseCount(prev => prev + 1);
    setTimeout(() => {
      setIsSimulating(false);
    }, 1800);
  };

  return (
    <div className={`engine-core-motion-widget ${className}`}>
      {/* Motion Graphic Header / Controls */}
      <div className="engine-motion-header">
        <div className="engine-motion-tag">
          <span className="engine-ping-dot" />
          <span className="engine-ping-text">iKOREX Dynamic Automation Core</span>
        </div>
        <button
          onClick={triggerBurst}
          disabled={isSimulating}
          className="engine-burst-btn"
          type="button"
          aria-label="Trigger high-frequency pipeline burst simulation"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          <span>{isSimulating ? 'Processing Burst...' : 'Trigger Pipeline Burst'}</span>
        </button>
      </div>

      {/* Main Orbital Canvas Stage */}
      <div className="engine-motion-stage">
        {/* Dedicated Responsive Center Viewport */}
        <div className="engine-stage-viewport">
          {/* Ambient Radial Backlight */}
          <div className="engine-ambient-glow" />

          {/* SVG Orbital Geometry & Beams (viewBox is -200 -200 400 400) */}
          <svg
            className="engine-stage-svg"
            viewBox="-200 -200 400 400"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="engine-core-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0066ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0033aa" stopOpacity="0" />
              </radialGradient>

              <linearGradient id="engine-radar-sweep-grad" gradientTransform="rotate(45)">
                <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#0088ff" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              <filter id="engine-glow-filter" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Outer Coordinate Grid Ring */}
            <circle
              cx="0"
              cy="0"
              r="175"
              fill="none"
              stroke="var(--engine-ring-outer, rgba(0, 180, 255, 0.12))"
              strokeWidth="1"
              strokeDasharray="4 8"
            />

            {/* Radar Sweep Cone */}
            <g className="engine-radar-sweep">
              <path
                d="M 0 0 L 175 0 A 175 175 0 0 0 124 -124 Z"
                fill="url(#engine-radar-sweep-grad)"
              />
            </g>

            {/* Middle Orbital Track (Counter-rotating) */}
            <g className="engine-orbit-track-outer">
              <circle
                cx="0"
                cy="0"
                r="130"
                fill="none"
                stroke="var(--engine-ring-mid, rgba(0, 180, 255, 0.22))"
                strokeWidth="1.5"
                strokeDasharray="8 6 2 6"
              />
              <circle cx="130" cy="0" r="3" fill="#00d2ff" filter="url(#engine-glow-filter)" />
              <circle cx="-130" cy="0" r="2.5" fill="#0088ff" />
              <circle cx="0" cy="130" r="2.5" fill="#00ffc8" />
              <circle cx="0" cy="-130" r="2" fill="#38bdf8" />
            </g>

            {/* Inner Fast Orbit Track */}
            <g className="engine-orbit-track-inner">
              <circle
                cx="0"
                cy="0"
                r="85"
                fill="none"
                stroke="var(--engine-ring-inner, rgba(0, 180, 255, 0.35))"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
              <circle cx="85" cy="0" r="2" fill="#00d2ff" />
            </g>

            {/* Burst Wave Ripple Animation */}
            {isSimulating && (
              <>
                <circle
                  key={`wave-1-${pulseCount}`}
                  cx="0"
                  cy="0"
                  r="10"
                  fill="none"
                  stroke="#00ffff"
                  strokeWidth="2.5"
                  className="engine-burst-wave-1"
                />
                <circle
                  key={`wave-2-${pulseCount}`}
                  cx="0"
                  cy="0"
                  r="10"
                  fill="none"
                  stroke="#0088ff"
                  strokeWidth="1.5"
                  className="engine-burst-wave-2"
                />
              </>
            )}

            {/* Connection Laser Filaments to each Node */}
            {NODES.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const nx = Math.cos(rad) * node.distance;
              const ny = Math.sin(rad) * node.distance;
              const isHovered = activeNode?.id === node.id;

              return (
                <g key={`filament-${node.id}`}>
                  <line
                    x1="0"
                    y1="0"
                    x2={nx}
                    y2={ny}
                    stroke={isHovered ? node.color : 'rgba(0, 180, 255, 0.2)'}
                    strokeWidth={isHovered ? 2 : 1}
                    strokeDasharray={isHovered ? 'none' : '4 4'}
                    filter={isHovered ? 'url(#engine-glow-filter)' : undefined}
                  />
                </g>
              );
            })}

            {/* Central Reactor Core Aura */}
            <circle cx="0" cy="0" r="44" fill="url(#engine-core-grad)" />

            {/* Core Octagon Ring */}
            <polygon
              points="22,-9 9,-22 -9,-22 -22,-9 -22,9 -9,22 9,22 22,9"
              fill="none"
              stroke="#00d2ff"
              strokeWidth="1.5"
              className="engine-core-octagon"
            />

            {/* Central iKOREX Chevron Brand Symbol */}
            <g className="engine-core-brand" filter="url(#engine-glow-filter)">
              <path
                d="M -11 -11 L 13 0 L -3 0 L -11 -5 Z"
                fill="url(#engine-core-grad)"
                stroke="#00d2ff"
                strokeWidth="1"
              />
              <path
                d="M -11 11 L 13 0 L -3 0 L -11 5 Z"
                fill="url(#engine-core-grad)"
                stroke="#0088ff"
                strokeWidth="1"
              />
              <circle cx="0" cy="0" r="3" fill="#ffffff" />
            </g>
          </svg>

          {/* HTML / React Interactive Orbiting Satellite Cards in the exact coordinate frame */}
          <div className="engine-nodes-overlay">
            {NODES.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              // Precise 50% + cos(angle) * (distance / 400) * 100%
              const leftPercent = 50 + (Math.cos(rad) * node.distance / 400) * 100;
              const topPercent = 50 + (Math.sin(rad) * node.distance / 400) * 100;
              const isSelected = activeNode?.id === node.id;

              return (
                <motion.div
                  key={node.id}
                  className={`engine-satellite-card ${isSelected ? 'is-selected' : ''}`}
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`
                  }}
                  whileHover={{ scale: 1.08 }}
                  onClick={() => setActiveNode(isSelected ? null : node)}
                  onMouseEnter={() => setActiveNode(node)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${node.title}: ${node.metric}`}
                >
                  <div
                    className="satellite-icon-badge"
                    style={{ borderColor: node.color, color: node.color }}
                  >
                    {node.icon}
                  </div>
                  <div className="satellite-text">
                    <div className="satellite-title">{node.title}</div>
                    <div className="satellite-status" style={{ color: node.color }}>
                      {node.metric}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Telemetry Detail HUD Modal */}
          <AnimatePresence>
            {activeNode && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="engine-telemetry-hud"
              >
                <div className="hud-header">
                  <span className="hud-category">{activeNode.category}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="hud-status" style={{ color: activeNode.color }}>
                      ● {activeNode.status}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveNode(null)}
                      className="hud-close-btn"
                      aria-label="Close telemetry detail"
                    >
                      &times;
                    </button>
                  </div>
                </div>
                <div className="hud-title">{activeNode.title}</div>
                <div className="hud-stats">
                  <div className="hud-stat-item">
                    <span className="hud-stat-label">Performance</span>
                    <span className="hud-stat-val" style={{ color: activeNode.color }}>
                      {activeNode.metric}
                    </span>
                  </div>
                  <div className="hud-stat-item">
                    <span className="hud-stat-label">Verification</span>
                    <span className="hud-stat-val">100% Audit Tracked</span>
                  </div>
                  <div className="hud-stat-item">
                    <span className="hud-stat-label">Latency</span>
                    <span className="hud-stat-val">&lt; 250ms</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Metrics Bar */}
      <div className="engine-motion-footer">
        <div className="engine-footer-stat">
          <span className="engine-stat-label">Throughput</span>
          <span className="engine-stat-val">4,200 tasks/hr</span>
        </div>
        <div className="engine-footer-divider" />
        <div className="engine-footer-stat">
          <span className="engine-stat-label">Uptime SLA</span>
          <span className="engine-stat-val">99.99%</span>
        </div>
        <div className="engine-footer-divider" />
        <div className="engine-footer-stat">
          <span className="engine-stat-label">Architecture</span>
          <span className="engine-stat-val">Zero-Retention Secure Fabric</span>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { HeroPipeline } from './HeroPipeline';
import { Hero3DAutomationNexus } from './motion/Hero3DAutomationNexus';

export const HeroVisualSwitcher: React.FC = () => {
  const [activeView, setActiveView] = useState<'nexus' | 'pipeline'>('nexus');

  return (
    <div className="hero-visual-switcher" style={{ position: 'relative', width: '100%' }}>
      {/* View Switcher Pills */}
      <div
        className="hero-view-toggle"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '14px'
        }}
      >
        <button
          type="button"
          onClick={() => setActiveView('nexus')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 16px',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono, monospace)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            border: activeView === 'nexus' ? '1px solid rgba(0, 210, 255, 0.6)' : '1px solid rgba(255, 255, 255, 0.1)',
            background: activeView === 'nexus' ? 'rgba(0, 180, 255, 0.18)' : 'rgba(15, 23, 42, 0.6)',
            color: activeView === 'nexus' ? '#00d2ff' : 'var(--text-muted, #94a3b8)',
            boxShadow: activeView === 'nexus' ? '0 0 16px rgba(0, 180, 255, 0.3)' : 'none',
            backdropFilter: 'blur(8px)'
          }}
        >
          <span style={{ fontSize: '0.9rem' }}>🌐</span> 3D Automation Nexus
        </button>

        <button
          type="button"
          onClick={() => setActiveView('pipeline')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 16px',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono, monospace)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            border: activeView === 'pipeline' ? '1px solid rgba(0, 210, 255, 0.6)' : '1px solid rgba(255, 255, 255, 0.1)',
            background: activeView === 'pipeline' ? 'rgba(0, 180, 255, 0.18)' : 'rgba(15, 23, 42, 0.6)',
            color: activeView === 'pipeline' ? '#00d2ff' : 'var(--text-muted, #94a3b8)',
            boxShadow: activeView === 'pipeline' ? '0 0 16px rgba(0, 180, 255, 0.3)' : 'none',
            backdropFilter: 'blur(8px)'
          }}
        >
          <span style={{ fontSize: '0.9rem' }}>📋</span> Live Invoice Pipeline
        </button>
      </div>

      {/* Render Active Visual */}
      {activeView === 'nexus' ? <Hero3DAutomationNexus /> : <HeroPipeline />}
    </div>
  );
};

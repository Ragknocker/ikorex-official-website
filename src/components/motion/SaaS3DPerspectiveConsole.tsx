import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface SaaS3DPerspectiveConsoleProps {
  className?: string;
}

export const SaaS3DPerspectiveConsole: React.FC<SaaS3DPerspectiveConsoleProps> = ({
  className = ''
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState({ x: 8, y: -10 });
  const [reflection, setReflection] = useState({ x: 50, y: 50 });
  const [activeTab, setActiveTab] = useState<'stream' | 'metrics' | 'audit'>('stream');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 14;

    setRotation({ x: rotX, y: rotY });
    setReflection({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 6, y: -8 });
    setReflection({ x: 50, y: 50 });
  };

  return (
    <div
      style={{
        perspective: '1400px',
        width: '100%',
        margin: '36px 0'
      }}
      className={className}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s cubic-bezier(0.2, 0, 0, 1)',
          position: 'relative',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(13, 24, 46, 0.95), rgba(6, 12, 24, 0.98))',
          border: '1px solid rgba(0, 180, 255, 0.3)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 180, 255, 0.15)',
          padding: '24px',
          overflow: 'visible'
        }}
      >
        {/* Specular Glare Reflection */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            background: `radial-gradient(600px circle at ${reflection.x}% ${reflection.y}%, rgba(255, 255, 255, 0.12), transparent 60%)`,
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Console Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '16px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            transform: 'translateZ(25px)',
            position: 'relative',
            zIndex: 2
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.76rem',
                color: '#94a3b8',
                marginLeft: '12px'
              }}
            >
              iKOREX Enterprise 3D Orchestrator &middot; v4.2.0
            </span>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              type="button"
              onClick={() => setActiveTab('stream')}
              style={{
                background: activeTab === 'stream' ? 'rgba(0, 180, 255, 0.2)' : 'transparent',
                border: activeTab === 'stream' ? '1px solid #00d2ff' : '1px solid transparent',
                borderRadius: '6px',
                color: activeTab === 'stream' ? '#00d2ff' : '#94a3b8',
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.72rem',
                padding: '4px 10px',
                cursor: 'pointer'
              }}
            >
              Stream
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('metrics')}
              style={{
                background: activeTab === 'metrics' ? 'rgba(0, 180, 255, 0.2)' : 'transparent',
                border: activeTab === 'metrics' ? '1px solid #00d2ff' : '1px solid transparent',
                borderRadius: '6px',
                color: activeTab === 'metrics' ? '#00d2ff' : '#94a3b8',
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.72rem',
                padding: '4px 10px',
                cursor: 'pointer'
              }}
            >
              Metrics
            </button>
          </div>
        </div>

        {/* Central Dashboard Matrix */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px',
            marginTop: '20px',
            transform: 'translateZ(40px)',
            position: 'relative',
            zIndex: 3
          }}
        >
          {/* Card 1: Live Transactions Stream */}
          <div
            style={{
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(0, 180, 255, 0.2)',
              borderRadius: '16px',
              padding: '16px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#f8fafc' }}>
                Live Ingestion Stream
              </span>
              <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.68rem', color: '#00ffc8' }}>
                ● Real-time
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { id: 'INV-8912', vendor: 'Bunnings Trade', amount: '$4,120.50', status: 'Verified & Posted', color: '#22c55e' },
                { id: 'INV-8913', vendor: 'Telstra Enterprise', amount: '$890.00', status: '3-Way Match OK', color: '#00d2ff' },
                { id: 'INV-8914', vendor: 'Officeworks Bulk', amount: '$312.40', status: 'Ledger Synced', color: '#38bdf8' }
              ].map(item => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: '0.72rem'
                  }}
                >
                  <div>
                    <span style={{ color: '#00d2ff', fontWeight: 600 }}>{item.id}</span>
                    <span style={{ color: '#94a3b8', marginLeft: '6px' }}>{item.vendor}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#f8fafc', fontWeight: 600 }}>{item.amount}</div>
                    <div style={{ color: item.color, fontSize: '0.64rem' }}>{item.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Performance Telemetry */}
          <div
            style={{
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(0, 180, 255, 0.2)',
              borderRadius: '16px',
              padding: '16px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#f8fafc' }}>
                  Execution Efficiency
                </span>
                <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.68rem', color: '#38bdf8' }}>
                  99.8% Match Rate
                </span>
              </div>

              {/* Progress bar visual */}
              <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '999px', overflow: 'hidden', margin: '8px 0 16px' }}>
                <div style={{ width: '92%', height: '100%', background: 'linear-gradient(90deg, #0088ff, #00ffc8)', borderRadius: '999px' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div style={{ padding: '8px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.64rem', color: '#94a3b8' }}>Audit Compliance</div>
                  <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.85rem', fontWeight: 700, color: '#22c55e' }}>
                    100% AASB
                  </div>
                </div>
                <div style={{ padding: '8px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.64rem', color: '#94a3b8' }}>Mean Process Time</div>
                  <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.85rem', fontWeight: 700, color: '#00d2ff' }}>
                    1.4 Seconds
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '12px', fontSize: '0.68rem', color: '#64748b', fontFamily: 'var(--font-mono, monospace)' }}>
              UiPath &middot; Microsoft Power Automate &middot; Xero API connected
            </div>
          </div>
        </div>

        {/* Floating 3D Depth Chip (translateZ 70px) */}
        <div
          style={{
            position: 'absolute',
            bottom: '-18px',
            right: '24px',
            transform: 'translateZ(70px)',
            background: 'linear-gradient(135deg, rgba(0, 180, 255, 0.3), rgba(0, 102, 255, 0.5))',
            border: '1px solid rgba(0, 255, 200, 0.6)',
            borderRadius: '999px',
            padding: '6px 16px',
            boxShadow: '0 10px 25px rgba(0, 180, 255, 0.4)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 10
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ffc8', boxShadow: '0 0 8px #00ffc8' }} />
          <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.74rem', fontWeight: 700, color: '#ffffff' }}>
            3D SPATIAL ACCELERATION ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
};

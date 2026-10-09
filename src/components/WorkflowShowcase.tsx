import React, { useState, useEffect } from 'react';
import { workflowScenarios } from '../data/workflowData';

import { MotionReveal } from './motion/MotionReveal';
import { LaserFlowBeam } from './motion/LaserFlowBeam';
import { CardSpotlight } from './motion/CardSpotlight';

export const WorkflowShowcase: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [isAutoStepping, setIsAutoStepping] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);
  const [terminalLogs, setTerminalLogs] = useState<Array<{ time: string; tag: string; msg: string }>>([
    {
      time: '[13:42:00.012]',
      tag: '[READY]',
      msg: 'Workflow daemon initialized. Ready for execution trace.'
    }
  ]);

  const currentScenario = workflowScenarios[selectedScenarioIndex];
  const currentNode = currentScenario.nodes[activeNodeIndex];

  // Auto-stepping loop
  useEffect(() => {
    if (!isAutoStepping) return;
    const interval = setInterval(() => {
      setActiveNodeIndex(prev => (prev + 1) % currentScenario.nodes.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isAutoStepping, currentScenario]);

  // When node changes, append a trace log
  useEffect(() => {
    const now = new Date();
    const timeStr = `[${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}.${String(now.getMilliseconds()).padStart(3, '0')}]`;
    const newLog = {
      time: timeStr,
      tag: `[STEP ${currentNode.step}]`,
      msg: `${currentNode.title} -> ${currentNode.telemetry}`
    };
    setTerminalLogs(prev => [...prev.slice(-12), newLog]);
  }, [activeNodeIndex, currentScenario, currentNode]);

  const handlePrev = () => {
    setActiveNodeIndex(prev => (prev > 0 ? prev - 1 : currentScenario.nodes.length - 1));
  };

  const handleNext = () => {
    setActiveNodeIndex(prev => (prev < currentScenario.nodes.length - 1 ? prev + 1 : 0));
  };

  const selectScenario = (index: number) => {
    setSelectedScenarioIndex(index);
    setActiveNodeIndex(0);
    const now = new Date();
    const timeStr = `[${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}]`;
    setTerminalLogs([
      {
        time: timeStr,
        tag: '[SCENARIO]',
        msg: `Switched context to: ${workflowScenarios[index].name}`
      }
    ]);
  };

  return (
    <section className="showcase-section" id="workflow-showcase">
      <div className="showcase-container">
        <MotionReveal direction="up" className="section-head center">
          <div className="custom-badge">
            <span className="badge-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="badge-svg" aria-hidden="true">
                <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
              </svg>
            </span>
            <span className="badge-text">Interactive Showcase</span>
          </div>
          <h2 className="section-title">
            See Workflow Automation <span className="text-gradient">in Motion</span>
          </h2>
          <p className="section-subtitle">
            Select an operational workflow below to see how inputs, cognitive rules, and system
            connectors execute in seconds.
          </p>
        </MotionReveal>

        {/* Scenario Selector Tabs */}
        <div className="showcase-tabs" role="tablist" aria-label="Workflow Scenarios">
          {workflowScenarios.map((scen, idx) => (
            <button
              key={scen.id}
              className={`showcase-tab-btn ${idx === selectedScenarioIndex ? 'is-active' : ''}`}
              type="button"
              role="tab"
              aria-selected={idx === selectedScenarioIndex}
              onClick={() => selectScenario(idx)}
            >
              <span>{scen.number}</span> {scen.label}
            </button>
          ))}
        </div>

        {/* Main Interactive Console */}
        <div className="showcase-console">
          <div className="showcase-header-bar">
            <div className="showcase-scenario-meta">
              <span className="showcase-scenario-name">{currentScenario.name}</span>
              <span className="showcase-badge-pill">{currentScenario.badge}</span>
            </div>
            <div className="showcase-actions">
              <button
                className="showcase-ctrl-btn"
                type="button"
                aria-label="Previous Step"
                onClick={handlePrev}
              >
                &larr; Prev Step
              </button>
              <button
                className={`showcase-ctrl-btn ${isAutoStepping ? 'active' : ''}`}
                type="button"
                aria-label="Auto Step Simulation"
                onClick={() => setIsAutoStepping(prev => !prev)}
              >
                {isAutoStepping ? '⏸ Pause Auto' : '▶ Auto Step'}
              </button>
              <button
                className="showcase-ctrl-btn"
                type="button"
                aria-label="Next Step"
                onClick={handleNext}
              >
                Next Step &rarr;
              </button>
              <button
                className="showcase-log-toggle"
                type="button"
                aria-expanded={showTerminal}
                onClick={() => setShowTerminal(prev => !prev)}
              >
                📜 Live Execution Trace
              </button>
            </div>
          </div>

          {/* Real-time Data Packet Flow Beam */}
          <LaserFlowBeam color="#00d2ff" duration={4} height={2} />

          {/* 5-Node Interconnected Workflow Track */}
          <div className="workflow-nodes-track" aria-label="Workflow Stages">
            {currentScenario.nodes.map((node, idx) => (
              <CardSpotlight
                key={node.step}
                className={`workflow-node-card ${
                  idx === activeNodeIndex ? 'is-active' : ''
                }`}
                enableTilt={true}
                style={{ cursor: 'pointer' }}
              >
                <div onClick={() => setActiveNodeIndex(idx)}>
                  <div className="workflow-node-step">
                    <span>
                      {node.step} / {node.stageName}
                    </span>
                    <span
                      className="workflow-node-status"
                      aria-hidden="true"
                      style={{
                        background: idx === activeNodeIndex ? 'var(--accent-green)' : 'var(--text-muted)'
                      }}
                    ></span>
                  </div>
                  <h4 className="workflow-node-title">{node.title}</h4>
                  <p className="workflow-node-desc">{node.desc}</p>
                  <div className="workflow-node-telemetry">{node.telemetry}</div>
                </div>
              </CardSpotlight>
            ))}
          </div>

          {/* Telemetry & Metrics Inspection Bar */}
          <div className="showcase-telemetry-panel">
            <div>
              <div className="telemetry-detail-title">{currentNode.detailTitle}</div>
              <p className="telemetry-detail-text">{currentNode.detailText}</p>
            </div>
            <div className="telemetry-metrics-row">
              <div className="telemetry-metric-item">
                <span className="telemetry-metric-val">{currentNode.metricTime}</span>
                <span className="telemetry-metric-lbl">Processing Time</span>
              </div>
              <div className="telemetry-metric-item">
                <span className="telemetry-metric-val">{currentNode.metricAccuracy}</span>
                <span className="telemetry-metric-lbl">Extraction Accuracy</span>
              </div>
            </div>
          </div>

          {/* Terminal Execution Trace Window */}
          {showTerminal && (
            <div
              className="showcase-terminal"
              role="region"
              aria-label="Simulated Live Telemetry Log"
            >
              {terminalLogs.map((log, i) => (
                <div key={i} className="terminal-line">
                  <span className="terminal-time">{log.time}</span>
                  <span className="terminal-tag pass">{log.tag}</span>
                  <span className="terminal-msg">{log.msg}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const LiveTelemetryPill: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [latency, setLatency] = useState<number>(14);
  const [tasksProcessed, setTasksProcessed] = useState<number>(142980);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate micro-fluctuations in low-latency engine
      setLatency(12 + Math.floor(Math.random() * 5));
      setTasksProcessed((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`live-telemetry-pill ${className}`}
    >
      <div className="telemetry-pill-indicator">
        <span className="telemetry-radar-ping" />
        <span className="telemetry-radar-core" />
      </div>
      <div className="telemetry-pill-content">
        <span className="telemetry-status-text">ENGINE LIVE</span>
        <span className="telemetry-separator">/</span>
        <span className="telemetry-val">{latency}ms latency</span>
        <span className="telemetry-separator">/</span>
        <span className="telemetry-val">{tasksProcessed.toLocaleString()} auto-runs</span>
      </div>
    </motion.div>
  );
};

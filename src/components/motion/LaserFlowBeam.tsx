import React from 'react';
import { motion } from 'framer-motion';

interface LaserFlowBeamProps {
  className?: string;
  duration?: number;
  width?: string | number;
  height?: string | number;
  color?: string;
  reverse?: boolean;
}

export const LaserFlowBeam: React.FC<LaserFlowBeamProps> = ({
  className = '',
  duration = 4,
  width = '100%',
  height = 2,
  color = '#00d2ff',
  reverse = false
}) => {
  return (
    <div
      className={`laser-flow-beam-container ${className}`}
      style={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: 'var(--border-color, rgba(0, 180, 255, 0.1))'
      }}
    >
      <motion.div
        animate={{
          x: reverse ? ['100%', '-100%'] : ['-100%', '100%']
        }}
        transition={{
          repeat: Infinity,
          duration,
          ease: 'linear'
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          filter: `drop-shadow(0 0 6px ${color})`
        }}
      />
    </div>
  );
};

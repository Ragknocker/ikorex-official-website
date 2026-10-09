import React from 'react';
import { motion, Variants } from 'framer-motion';

export type MotionDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface MotionRevealProps {
  children: React.ReactNode;
  direction?: MotionDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  scale?: number;
  blur?: boolean;
  once?: boolean;
  style?: React.CSSProperties;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  distance = 28,
  className = '',
  scale = 1,
  blur = false,
  once = true,
  style
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialPos = getInitialPosition();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: initialPos.x,
      y: initialPos.y,
      scale: scale !== 1 ? scale : 1,
      filter: blur ? 'blur(8px)' : 'none'
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // Apple/Vercel smooth cubic bezier
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.12,
  delayChildren = 0.05,
  className = '',
  style
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={containerVariants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, className = '', style }) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className} style={style}>
      {children}
    </motion.div>
  );
};

import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
          setProgress(Math.min(100, Math.max(0, pct)));
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #00b4ff 0%, #0055cc 100%)',
        zIndex: 9999,
        width: `${progress}%`,
        transition: 'width 0.1s ease-out'
      }}
    />
  );
};

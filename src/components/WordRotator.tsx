import React, { useEffect, useState } from 'react';

const words = [
  'invoice processing',
  'approvals routing',
  'payroll reconciliation',
  'procure-to-pay',
  'bank feeds',
  'loss prevention',
  'data synchronization'
];

export const WordRotator: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % words.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="hero-rotator">
      <span className="hero-rotator-label">Automating core business workflows:</span>
      <span className="hero-rotator-chip">
        <span className="hero-rotator-words" data-rotator>
          {words.map((word, index) => (
            <span
              key={word}
              className={`hero-rotator-word ${index === currentIndex ? 'is-active' : ''}`}
            >
              {word}
            </span>
          ))}
        </span>
      </span>
    </p>
  );
};

import React, { useRef, useState, useEffect } from 'react';

interface CardSpotlightProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableTilt?: boolean;
  style?: React.CSSProperties;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  id,
  children,
  className = '',
  spotlightColor = 'rgba(0, 180, 255, 0.12)',
  enableTilt = true,
  style
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isFinePointer, setIsFinePointer] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const media = window.matchMedia('(hover: hover) and (pointer: fine)');
      setIsFinePointer(media.matches);
      const listener = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isFinePointer) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
    setOpacity(1);

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Gentle, subtle tilt
      const rotateX = ((y - centerY) / centerY) * -3.5;
      const rotateY = ((x - centerX) / centerX) * 3.5;
      setTilt({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseEnter = () => {
    if (isFinePointer) setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setTilt({ x: 0, y: 0 });
  };

  const shouldTilt = enableTilt && isFinePointer;

  return (
    <div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`card-spotlight-wrapper ${className}`}
      style={{
        position: 'relative',
        transform: shouldTilt
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : 'none',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.18s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.2s ease',
        willChange: shouldTilt ? 'transform' : 'auto',
        ...style
      }}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="card-spotlight-layer"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          borderRadius: 'inherit',
          opacity,
          transition: 'opacity 0.25s ease',
          background: `radial-gradient(380px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
          zIndex: 1
        }}
      />
      {/* Content wrapper with guaranteed top click layer */}
      <div
        className="card-spotlight-content"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%'
        }}
      >
        {children}
      </div>
    </div>
  );
};

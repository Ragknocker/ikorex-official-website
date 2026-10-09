import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

interface ParticleMeshCanvasProps {
  className?: string;
  particleCount?: number;
  interactive?: boolean;
}

export const ParticleMeshCanvas: React.FC<ParticleMeshCanvasProps> = ({
  className = '',
  particleCount = 50,
  interactive = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 160,
      isHovered: false
    };

    const isDark = theme === 'dark';

    // Theme color palettes
    const palette = {
      node: isDark ? 'rgba(0, 210, 255, ' : 'rgba(0, 110, 220, ',
      line: isDark ? 'rgba(0, 180, 255, ' : 'rgba(0, 100, 200, ',
      mouseLine: isDark ? 'rgba(0, 255, 200, ' : 'rgba(0, 140, 240, ',
      packet: isDark ? '#00ffff' : '#0066ff'
    };

    const particles: Particle[] = [];
    const packets: DataPacket[] = [];
    const MAX_PACKETS = 12;

    const initParticles = () => {
      particles.length = 0;
      packets.length = 0;
      if (width <= 0 || height <= 0) return;

      const count = Math.max(20, Math.min(65, Math.floor((width * height) / 24000) || particleCount));

      for (let i = 0; i < count; i++) {
        const baseR = Math.random() * 1.6 + 1.2;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: baseR,
          baseRadius: baseR,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    };

    const resize = () => {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;

      const prevWidth = width;
      const prevHeight = height;

      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Initialize or scale particles if dimensions change
      if (particles.length === 0 || Math.abs(width - prevWidth) > 80 || Math.abs(height - prevHeight) > 80) {
        initParticles();
      }
    };

    const spawnPacket = (fromIdx: number, toIdx: number) => {
      if (packets.length >= MAX_PACKETS) return;
      packets.push({
        fromNode: fromIdx,
        toNode: toIdx,
        progress: 0,
        speed: Math.random() * 0.014 + 0.008
      });
    };

    // Track mouse via window so clicks on UI are never blocked
    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const inX = e.clientX >= rect.left && e.clientX <= rect.right;
      const inY = e.clientY >= rect.top && e.clientY <= rect.bottom;

      if (inX && inY) {
        mouse.targetX = e.clientX - rect.left;
        mouse.targetY = e.clientY - rect.top;
        mouse.isHovered = true;
      } else {
        mouse.isHovered = false;
        mouse.targetX = -1000;
        mouse.targetY = -1000;
      }
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const connectionDistance = 135;

    const animate = () => {
      if (!isVisible || width <= 0 || height <= 0) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle mouse ambient glow when inside container
      if (mouse.isHovered && mouse.x > 0 && mouse.y > 0) {
        const glowRad = mouse.radius * 1.1;
        const radial = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, glowRad);
        if (isDark) {
          radial.addColorStop(0, 'rgba(0, 210, 255, 0.10)');
          radial.addColorStop(0.5, 'rgba(0, 110, 255, 0.03)');
          radial.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          radial.addColorStop(0, 'rgba(0, 102, 204, 0.07)');
          radial.addColorStop(0.5, 'rgba(0, 160, 255, 0.02)');
          radial.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }
        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, glowRad, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Bounce gently off bounds
        if (p.x < 0) {
          p.x = 0;
          p.vx = Math.abs(p.vx);
        } else if (p.x > width) {
          p.x = width;
          p.vx = -Math.abs(p.vx);
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy = Math.abs(p.vy);
        } else if (p.y > height) {
          p.y = height;
          p.vy = -Math.abs(p.vy);
        }

        // Mouse magnetic deflection
        if (interactive && mouse.isHovered) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius && dist > 1) {
            const force = (1 - dist / mouse.radius) * 0.7;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Subtle radius breathing
        p.pulsePhase += 0.025;
        p.radius = p.baseRadius + Math.sin(p.pulsePhase) * 0.35;
      }

      // Draw connections & determine packet opportunities
      const validPairs: [number, number][] = [];

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Draw line to mouse if close
        if (interactive && mouse.isHovered) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdist = Math.hypot(mdx, mdy);
          if (mdist < mouse.radius) {
            const alpha = (1 - mdist / mouse.radius) * (isDark ? 0.32 : 0.22);
            ctx.strokeStyle = `${palette.mouseLine}${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            const norm = 1 - dist / connectionDistance;
            const alpha = norm * norm * (isDark ? 0.26 : 0.16);
            ctx.strokeStyle = `${palette.line}${alpha})`;
            ctx.lineWidth = norm * 1.1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            validPairs.push([i, j]);
          }
        }
      }

      // Randomly spawn data packet pulse on existing edge
      if (validPairs.length > 0 && Math.random() < 0.035 && packets.length < MAX_PACKETS) {
        const pair = validPairs[Math.floor(Math.random() * validPairs.length)];
        spawnPacket(pair[0], pair[1]);
      }

      // Draw & update traveling data packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const pkt = packets[k];
        pkt.progress += pkt.speed;

        const pA = particles[pkt.fromNode];
        const pB = particles[pkt.toNode];

        if (pkt.progress >= 1 || !pA || !pB) {
          packets.splice(k, 1);
          continue;
        }

        const curX = pA.x + (pB.x - pA.x) * pkt.progress;
        const curY = pA.y + (pB.y - pA.y) * pkt.progress;

        // Packet glow pulse
        ctx.fillStyle = palette.packet;
        ctx.beginPath();
        ctx.arc(curX, curY, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.fillStyle = `${palette.node}${isDark ? 0.85 : 0.75})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        if (p.radius > 2.0 && isDark) {
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    // Performance: Pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.02 }
    );

    observer.observe(container);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      observer.disconnect();
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [theme, particleCount, interactive]);

  return (
    <div
      ref={containerRef}
      className={`particle-mesh-container ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none', // Never intercept clicks
        overflow: 'hidden',
        zIndex: 0
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

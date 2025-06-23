import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Interactive Particle Interface
interface InteractiveParticle {
  id: number;
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  size: number;
  mass: number;
  color: string | undefined;
  opacity: number;
}

// Mouse position hook with smooth tracking
const useMousePosition = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring animation for mouse following
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [x, y]);

  return { x: springX, y: springY };
};

export const InteractiveParticles: React.FC = () => {
  const [particles, setParticles] = useState<InteractiveParticle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { x: mouseX, y: mouseY } = useMousePosition();
  
  // Particle colors for variety
  const colors = [
    'rgba(245, 158, 11, 0.7)',  // amber
    'rgba(217, 119, 6, 0.6)',   // amber-600
    'rgba(251, 191, 36, 0.5)',  // amber-400
    'rgba(146, 64, 14, 0.8)',   // amber-800
    'rgba(92, 38, 7, 0.9)',     // amber-900
  ];

  // Initialize particles
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      const newParticles: InteractiveParticle[] = Array.from({ length: 35 }, (_, i) => {
        const x = Math.random() * dimensions.width;
        const y = Math.random() * dimensions.height;
        
        return {
          id: i,
          x,
          y,
          originalX: x,
          originalY: y,
          size: Math.random() * 4 + 2,
          mass: Math.random() * 0.8 + 0.2, // Mass affects attraction strength
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.3,
        };
      });
      
      setParticles(newParticles);
    }
  }, [dimensions]);

  // Calculate particle physics
  const getParticlePosition = useCallback((particle: InteractiveParticle, mouseXPos: number, mouseYPos: number) => {
    const dx = mouseXPos - particle.originalX;
    const dy = mouseYPos - particle.originalY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Interaction radius
    const maxDistance = 150;
    
    if (distance < maxDistance) {
      // Calculate attraction/repulsion force
      const force = (1 - distance / maxDistance) * particle.mass;
      const angle = Math.atan2(dy, dx);
      
      // Particles get attracted to mouse but with some chaotic movement
      const attractionX = Math.cos(angle) * force * 40;
      const attractionY = Math.sin(angle) * force * 40;
      
      // Add some orbital movement for more organic feel
      const orbitalAngle = (Date.now() * 0.001 + particle.id) * particle.mass;
      const orbitalRadius = force * 15;
      const orbitalX = Math.cos(orbitalAngle) * orbitalRadius;
      const orbitalY = Math.sin(orbitalAngle) * orbitalRadius;
      
      return {
        x: particle.originalX + attractionX + orbitalX,
        y: particle.originalY + attractionY + orbitalY,
        scale: 1 + force * 0.5,
        opacity: particle.opacity + force * 0.4,
      };
    }
    
    // Return to original position with gentle floating
    const floatX = Math.sin((Date.now() * 0.001 + particle.id) * 0.5) * 3;
    const floatY = Math.cos((Date.now() * 0.001 + particle.id) * 0.3) * 2;
    
    return {
      x: particle.originalX + floatX,
      y: particle.originalY + floatY,
      scale: 1,
      opacity: particle.opacity,
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-10"
    >
      {particles.map((particle) => (
        <InteractiveParticle
          key={particle.id}
          particle={particle}
          mouseX={mouseX}
          mouseY={mouseY}
          getPosition={getParticlePosition}
        />
      ))}
    </div>
  );
};

// Individual particle component for performance optimization
interface ParticlePosition {
  x: number;
  y: number;
  scale: number;
  opacity: number;
}

const InteractiveParticle: React.FC<{
    particle: InteractiveParticle;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
    getPosition: (particle: InteractiveParticle, mouseX: number, mouseY: number) => ParticlePosition;
    }> = ({ particle, mouseX, mouseY, getPosition }) => {
    
    const particleX = useTransform<number[], number>(
        [mouseX, mouseY],
        // @ts-ignore
        ([mX, mY]) => getPosition(particle, mX, mY).x
    );

    const particleY = useTransform<number[], number>(
        [mouseX, mouseY],
        // @ts-ignore
        ([mX, mY]) => getPosition(particle, mX, mY).y
    );

    const particleScale = useTransform<number[], number>(
        [mouseX, mouseY],
        // @ts-ignore
        ([mX, mY]) => getPosition(particle, mX, mY).scale
    );

    const particleOpacity = useTransform<number[], number>(
        [mouseX, mouseY],
        // @ts-ignore
        ([mX, mY]) => getPosition(particle, mX, mY).opacity
    );

  return (
    <motion.div
      className="absolute rounded-full blur-[0.5px]"
      style={{
        x: particleX,
        y: particleY,
        scale: particleScale,
        opacity: particleOpacity,
        width: particle.size,
        height: particle.size,
        background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
        boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: particle.opacity, scale: 1 }}
      transition={{ duration: 1, delay: particle.id * 0.05 }}
    />
  );
};

// Particle Trails Effect
export const ParticleTrails: React.FC = () => {
  const [trails, setTrails] = useState<Array<{ id: number; x: number; y: number; timestamp: number }>>([]);
  const trailsRef = useRef<Array<{ id: number; x: number; y: number; timestamp: number }>>([]);

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };
      
      trailsRef.current = [...trailsRef.current, newTrail].slice(-15); // Keep last 15 points
      setTrails([...trailsRef.current]);
    };

    // Clean up old trails
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      trailsRef.current = trailsRef.current.filter(trail => now - trail.timestamp < 1000);
      setTrails([...trailsRef.current]);
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {trails.map((trail, index) => {
        const age = Date.now() - trail.timestamp;
        const opacity = Math.max(0, 1 - age / 1000);
        const scale = Math.max(0.1, 1 - age / 1000);
        
        return (
          <motion.div
            key={trail.id}
            className="absolute rounded-full"
            style={{
              left: trail.x - 3,
              top: trail.y - 3,
              width: 6,
              height: 6,
              background: `radial-gradient(circle, rgba(245, 158, 11, ${opacity * 0.6}) 0%, transparent 70%)`,
              scale,
              opacity,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale, opacity }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        );
      })}
    </div>
  );
};

// Mouse Ripple Effect
export const MouseRipples: React.FC = () => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; timestamp: number }>>([]);

  useEffect(() => {
    let rippleId = 0;
    let lastRippleTime = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      
      // Throttle ripple creation
      if (now - lastRippleTime > 100) {
        const newRipple = {
          id: rippleId++,
          x: e.clientX,
          y: e.clientY,
          timestamp: now,
        };
        
        setRipples(prev => [...prev, newRipple]);
        lastRippleTime = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      setRipples(prev => prev.filter(r => Date.now() - r.timestamp < 2000));
    }, 2000);

    return () => clearInterval(cleanupInterval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {ripples.map((ripple) => {
        const age = Date.now() - ripple.timestamp;
        const progress = age / 2000;
        const opacity = Math.max(0, 1 - progress);
        const scale = 1 + progress * 3;
        
        return (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full border border-amber-400"
            style={{
              left: ripple.x - 25,
              top: ripple.y - 25,
              width: 50,
              height: 50,
              borderColor: `rgba(245, 158, 11, ${opacity * 0.5})`,
              scale,
              opacity: opacity * 0.5,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale, opacity: opacity * 0.5 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
};
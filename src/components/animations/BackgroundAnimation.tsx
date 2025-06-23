'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { cn } from '~/lib/utils';


// Floating Particles Animation (like soot sprites or forest spirits)
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}
export const FloatingParticles: React.FC = () => {
  const {theme} = useTheme();

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 8,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={cn(
            "absolute rounded-full blur-[0.5px] bg-gradient-radial",
            theme === 'light' ? 'bg-amber-900' : 'bg-zinc-200'
          )}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 8, -3, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Floating Leaves Animation
interface Leaf {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  duration: number;
  delay: number;
}
export const FloatingLeaves: React.FC = () => {
  const {theme} = useTheme();
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const newLeaves: Leaf[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10,
      rotation: Math.random() * 360,
      size: Math.random() * 12 + 6,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    }));
    setLeaves(newLeaves);
  }, []);

  const lightLeafColors = [
    'rgba(180, 80, 50, 0.6)',
    'rgba(150, 60, 40, 0.6)',
    'rgba(120, 40, 30, 0.6)',
    'rgba(140, 70, 60, 0.5)',
    'rgba(160, 90, 50, 0.6)'
  ];
  
  const darkLeafColors = [
    'rgba(80, 180, 50, 0.6)',
    'rgba(60, 150, 40, 0.6)',
    'rgba(40, 120, 30, 0.6)',
    'rgba(70, 140, 60, 0.5)',
    'rgba(90, 160, 50, 0.6)'
  ];

  const leafColors = theme === 'light' ? lightLeafColors : darkLeafColors;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf, index) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            width: leaf.size,
            height: leaf.size,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, 25, -15, 30, 0],
            rotate: [leaf.rotation, leaf.rotation + 540],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: "linear",
          }}
        >
          <div 
            className="w-full h-full blur-[0.3px]"
            style={{
              background: leafColors[index % leafColors.length],
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              borderRadius: '20% 0% 20% 0%',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Gentle Wind Waves Animation
export const WindWaves: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(120deg, 
              transparent 15%, 
              rgba(217, 119, 6, 0.03) 35%, 
              rgba(245, 158, 11, 0.06) 50%, 
              rgba(217, 119, 6, 0.03) 65%, 
              transparent 85%)`,
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 30 + i * 8,
            repeat: Infinity,
            delay: i * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Magical Sparkles Animation
interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}
export const MagicalSparkles: React.FC = () => {
  const [sparkles, setSparkles] = useState<Particle[]>([]);

  useEffect(() => {
    const newSparkles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 6 + 3,
      delay: Math.random() * 8,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        >
          <div 
            className="w-full h-full blur-[0.3px]" 
            style={{ 
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.8) 0%, rgba(217, 119, 6, 0.4) 70%, transparent 100%)',
              clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              transform: 'scale(5)'
            }} 
          />
        </motion.div>
      ))}
    </div>
  );
};

// Cloud Movement Animation
interface Cloud {
  id: number;
  size: number;
  y: number;
  duration: number;
  delay: number;
}
export const DriftingClouds: React.FC = () => {
  const clouds: Cloud[] = [
    { id: 1, size: 120, y: 8, duration: 50, delay: 0 },
    { id: 2, size: 90, y: 20, duration: 40, delay: 8 },
    { id: 3, size: 140, y: 5, duration: 60, delay: 15 },
    { id: 4, size: 100, y: 30, duration: 45, delay: 25 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute rounded-full blur-sm"
          style={{
            width: cloud.size,
            height: cloud.size * 0.6,
            top: `${cloud.y}%`,
            left: '-15%',
            background: 'radial-gradient(ellipse, rgba(245, 245, 244, 0.15) 0%, rgba(231, 229, 228, 0.08) 70%, transparent 100%)',
          }}
          animate={{
            x: ["0vw", "115vw"],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            delay: cloud.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Paper Texture Particles - Like old paper or parchment bits
export const PaperTexture: React.FC = () => {
  const { theme } = useTheme();
  const [papers, setPapers] = useState<Particle[]>([]);

  useEffect(() => {
    const newPapers: Particle[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 10,
    }));
    setPapers(newPapers);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {papers.map((paper) => (
        <motion.div
          key={paper.id}
          className={cn(
            "absolute blur-[0.5px]",
            theme === 'light'? 'bg-lime-700' : 'bg-zinc-200'
          )}
          style={{
            width: paper.size,
            height: paper.size,
            left: `${paper.x}%`,
            top: `${paper.y}%`,
            borderRadius: '2px',
          }}
          animate={{
            y: [0, -10, 0],
            x: [0, 5, -3, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 5, -3, 0],
          }}
          transition={{
            duration: paper.duration,
            repeat: Infinity,
            delay: paper.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function BackgroundAnimation() {  
  return (
    <>
      {/* Background Texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.06'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='37' cy='37' r='1'/%3E%3Ccircle cx='52' cy='15' r='1'/%3E%3Ccircle cx='15' cy='52' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.25,
        }}
      />      
      {/* Active Animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="z-0"
      >
        <DriftingClouds />
        <FloatingLeaves />
        <FloatingParticles />
        <MagicalSparkles />
        <WindWaves />
        <PaperTexture />
      </motion.div>
    </>
  );
}
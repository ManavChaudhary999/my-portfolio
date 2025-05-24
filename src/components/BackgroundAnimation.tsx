"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion } from 'framer-motion';

interface Element {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

export default function BackgroundAnimation() {
  const [elements, setElements] = useState<Element[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const colors = useMemo(() => ["#80ced7", "#c2948a", "#6699cc", "#adc178", "#dbd8e3"], []); // Ghibli-esque colors

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  useEffect(() => {
    const createElements = () => {
      const containerWidth = containerRef.current ? containerRef.current.clientWidth : window.innerWidth;
      const containerHeight = containerRef.current ? containerRef.current.clientHeight : window.innerHeight;

      const newElements = Array.from({ length: 10 }, (_, index) => ({
        id: index,
        x: randomInRange(0, containerWidth - 50),
        y: randomInRange(0, containerHeight - 50),
        size: randomInRange(20, 50),
        color: colors[Math.floor(randomInRange(0, colors.length))],
        delay: randomInRange(0, 5),
      }));
      setElements(newElements as Element[]);
    };

    createElements();
    window.addEventListener('resize', createElements);

    return () => {
      window.removeEventListener('resize', createElements);
    };
  }, [colors]);

  const elementVariants = {
    floating: {
      x: ({ x, containerWidth }: { x: number, containerWidth: number }) => [x, randomInRange(0, containerWidth - 50)],
      y: ({ y, containerHeight }: { y: number, containerHeight: number }) => [y, randomInRange(0, containerHeight - 50)],
      scale: [1, randomInRange(0.8, 1.2), 1],
      rotate: [0, randomInRange(-10, 10), 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ overflow: "hidden" }}
    >
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full"
          style={{
            x: element.x,
            y: element.y,
            width: element.size,
            height: element.size,
            backgroundColor: element.color,
            opacity: 0.6,
          }}
          variants={{
            floating: {
              x: [element.x, element.x + 50],
              y: [element.y, element.y + 50],
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
              transition: {
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            },
          }}
          custom={{ containerWidth: containerRef.current ? containerRef.current.clientWidth : window.innerWidth, containerHeight: containerRef.current ? containerRef.current.clientHeight : window.innerHeight, x: element.x, y: element.y }}
          animate="floating"
          transition={{ delay: element.delay }}
        />
      ))}
    </div>
  );
};
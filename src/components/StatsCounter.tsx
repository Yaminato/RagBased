import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}
export function StatsCounter({
  value,
  label,
  suffix = '',
  prefix = '',
  duration = 2
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={
      isInView ?
      {
        opacity: 1,
        y: 0
      } :
      {}
      }
      transition={{
        duration: 0.5,
        ease: 'easeOut'
      }}
      className="text-center">
      
      <div className="inline-flex items-baseline gap-0.5">
        {prefix &&
        <span className="text-2xl md:text-3xl font-bold text-white font-sans">
            {prefix}
          </span>
        }
        <span className="text-4xl md:text-5xl font-bold text-white font-sans tabular-nums">
          {count.toLocaleString()}
        </span>
        {suffix &&
        <span className="text-2xl md:text-3xl font-bold text-white font-sans">
            {suffix}
          </span>
        }
      </div>
      <p className="mt-2 text-sm md:text-base text-white/80 font-sans font-medium uppercase tracking-wider">
        {label}
      </p>
    </motion.div>);

}
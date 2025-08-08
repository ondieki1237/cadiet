import React, { useState, useEffect, useRef } from 'react';

interface ProgressBarProps {
  percentage: number;
  label: string;
  color?: string;
  delay?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  percentage, 
  label, 
  color = 'bg-blue-500',
  delay = 0 
}) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setWidth(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, percentage, delay]);

  return (
    <div ref={barRef} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-cream font-medium">{label}</span>
        <span className="text-accent font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
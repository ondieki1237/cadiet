import React from 'react';
import { Dumbbell, Zap, Target, Trophy } from 'lucide-react';

export const FloatingElements: React.FC = () => {
  const elements = [
    { Icon: Dumbbell, position: 'top-20 left-10' },
    { Icon: Zap, position: 'top-40 right-20' },
    { Icon: Target, position: 'bottom-40 left-20' },
    { Icon: Trophy, position: 'bottom-20 right-10' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map(({ Icon, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-10`}
        >
          <Icon className="w-16 h-16 text-primary" />
        </div>
      ))}
    </div>
  );
};
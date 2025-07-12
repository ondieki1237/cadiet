import React, { useEffect, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage: string;
  className?: string;
  speed?: number;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  backgroundImage,
  className = '',
  speed = 0.5,
}) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${offsetY * speed}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10">{children}</div>
    </section>
  );
};
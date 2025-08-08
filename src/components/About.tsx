import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { ProgressBar } from './ProgressBar';
import { Target, Heart, Trophy, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Every workout is designed with your specific goals in mind.',
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Genuine passion for helping others achieve their best selves.',
    },
    {
      icon: Trophy,
      title: 'Results-Driven',
      description: 'Proven track record of helping clients achieve remarkable transformations.',
    },
    {
      icon: Zap,
      title: 'Energetic',
      description: 'High-energy training sessions that keep you motivated and engaged.',
    },
  ];

  const skills = [
    { name: 'Strength Training', percentage: 95 },
    { name: 'Nutrition Coaching', percentage: 90 },
    { name: 'HIIT Programs', percentage: 88 },
    { name: 'Rehabilitation', percentage: 85 },
    { name: 'Group Training', percentage: 92 },
  ];

  return (
    <section id="about" className="min-h-screen bg-cream relative overflow-hidden py-20">
      {/* Background Pattern with Parallax */}
      <Parallax speed={-15}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23035A52' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </Parallax>

      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Title Section with subtle parallax */}
          <Parallax speed={5}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-in-left font-ibarra">
                About Dickson
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8 animate-scale-in"></div>
            </div>
          </Parallax>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
            {/* Left Column - Bio (fixed while scrolling) */}
            <Parallax speed={-10} className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 animate-slide-in-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 gradient-text font-ibarra">
                  Certified Fitness Professional
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                  With over 18 years of experience in the fitness industry, I've dedicated my career 
                  to helping individuals transform their lives through fitness. My approach combines 
                  scientific training methods with personalized attention to ensure every client 
                  reaches their full potential.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                  I believe that fitness is not just about physical transformation—it's about 
                  building confidence, developing discipline, and creating a sustainable lifestyle 
                  that enhances every aspect of your life.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">NASM Certified Personal Trainer</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Nutrition & Wellness Coach</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Functional Movement Specialist</span>
                  </div>
                </div>
              </div>
            </Parallax>

            {/* Right Column - Skills (scrolling normally) */}
            <div className="space-y-6">
              <Parallax speed={15}>
                <div className="bg-primary p-6 rounded-xl shadow-2xl animate-slide-in-right">
                  <h4 className="text-xl font-bold text-cream mb-4 font-ibarra">Expertise Level</h4>
                  {skills.map((skill, index) => (
                    <ProgressBar
                      key={skill.name}
                      label={skill.name}
                      percentage={skill.percentage}
                      delay={index * 200}
                    />
                  ))}
                </div>
              </Parallax>
            </div>
          </div>

          {/* Values Section with staggered parallax */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Parallax 
                key={index}
                speed={index % 2 === 0 ? -5 : 5} // Alternate directions
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                >
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-primary mb-2 font-ibarra">{value.title}</h4>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{value.description}</p>
                </div>
              </Parallax>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
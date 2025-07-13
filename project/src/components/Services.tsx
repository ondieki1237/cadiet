import React, { useState } from 'react';
import { Dumbbell, Users, Apple, Timer } from 'lucide-react';

export const Services: React.FC = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  const services = [
    {
      icon: Dumbbell,
      title: 'Personal Training',
      description: 'One-on-one customized workout sessions tailored to your specific goals and fitness level.',
      features: ['Custom workout plans', 'Form correction', 'Progress tracking', 'Goal setting'],
      image: '/assets/images/6.jpg',
    },
    {
      icon: Users,
      title: 'Group Training',
      description: 'High-energy group sessions that combine motivation, fun, and effective workouts.',
      features: ['Team motivation', 'Cost-effective', 'Social support', 'Varied workouts'],
      image: '/assets/images/5.jpg',
    },
    {
      icon: Apple,
      title: 'Nutrition Coaching',
      description: 'Comprehensive nutrition guidance to complement your fitness journey and maximize results.',
      features: ['Meal planning', 'Macro tracking', 'Supplement advice', 'Lifestyle coaching'],
      image: '/assets/images/6.jpg',
    },
    {
      icon: Timer,
      title: 'HIIT Programs',
      description: 'High-Intensity Interval Training programs designed for maximum fat burn and conditioning.',
      features: ['Time-efficient', 'Cardio & strength', 'Metabolic boost', 'Results-focused'],
      image: '/assets/images/6.jpg',
    },
  ];

  const handleCardClick = (index: number) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section id="services" className="min-h-screen bg-cream relative overflow-x-hidden py-12 sm:py-16 md:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23035A52' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 font-ibarra relative">
              Training Services
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-accent animate-pulse-glow" />
            </h2>
            <p className="text-lg sm:text-xl text-primary opacity-80 max-w-3xl mx-auto font-glacial">
              Discover fitness solutions crafted to spark your transformation, from beginner to elite.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative perspective-1000 cursor-pointer group"
                onClick={() => handleCardClick(index)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`relative w-full h-[400px] sm:h-[450px] transition-transform duration-500 transform-style-3d ${
                    flipped === index ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front of Card */}
                  <div className="absolute inset-0 glass-effect rounded-xl shadow-2xl group-hover:shadow-3xl backface-hidden neon-border animate-scale-in overflow-hidden">
                    {/* Image with Blur Overlay */}
                    <div className="relative h-[65%] w-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Greenish Blur Overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(to bottom, transparent 0%, rgba(3, 90, 82, 0.6) 100%)',
                          backdropFilter: 'blur(4px)',
                        }}
                      />
                      {/* Icon Overlay */}
                      <div className="absolute top-4 left-4">
                        <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent animate-float" />
                      </div>
                    </div>
                    {/* Text Content (Bottom 35%) */}
                    <div className="h-[35%] p-4 sm:p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 font-ibarra text-center">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base font-glacial text-center line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                      <div className="text-center">
                        <button className="bg-accent text-primary px-4 sm:px-6 py-2 rounded-full font-glacial text-sm sm:text-base hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                          More
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 bg-primary p-6 sm:p-8 rounded-xl shadow-2xl backface-hidden rotate-y-180 neon-border">
                    <h3 className="text-xl sm:text-2xl font-bold text-cream mb-4 font-ibarra text-center">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-cream text-sm sm:text-base font-glacial">
                          <div className="w-2 h-2 bg-accent rounded-full mr-2 sm:mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <button className="bg-accent text-primary px-4 sm:px-6 py-2 rounded-full font-glacial text-sm sm:text-base hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                        Flip Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar'; // adjust path if needed

interface Service {
  title: string;
  description: string;
  features: string[];
  image: string;
  path: string;
}

export const Services: React.FC = () => {
  const [flipped, setFlipped] = useState<number | null>(null);
  const navigate = useNavigate();

  const services: Service[] = [
    {
      title: 'Personal Training',
      description: 'One-on-one customized workout sessions tailored to your specific goals and fitness level.',
      features: ['Custom workout plans', 'Form correction', 'Progress tracking', 'Goal setting'],
      image: '/images/personal.png',
      path: '/services/personal-training',
    },
    {
      title: 'Group Training',
      description: 'High-energy group sessions that combine motivation, fun, and effective workouts.',
      features: ['Team motivation', 'Cost-effective', 'Social support', 'Varied workouts'],
      image: '/images/group.jpg',
      path: '/services/group-training',
    },
    {
      title: 'Nutrition Coaching',
      description: 'Comprehensive nutrition guidance to complement your fitness journey and maximize results.',
      features: ['Meal planning', 'Macro tracking', 'Supplement advice', 'Lifestyle coaching'],
      image: '/images/diet.jpg',
      path: '/services/nutrition-coaching',
    },
    {
      title: 'HIIT Programs',
      description: 'High-Intensity Interval Training programs designed for maximum fat burn and conditioning.',
      features: ['Time-efficient', 'Cardio & strength', 'Metabolic boost', 'Results-focused'],
      image: '/images/hit (2).png',
      path: '/services/hiit-programs',
    },
  ];

  const handleCardClick = (index: number) => {
    setFlipped(flipped === index ? null : index);
  };

  const handleMoreClick = (e: React.MouseEvent, path: string) => {
    e.stopPropagation();
    navigate(path);
  };

  return (
    <>
      <Navbar />
      <section id="services" className="bg-cream relative overflow-x-hidden py-12 sm:py-16 md:py-20">
        {/* decorative background pattern — keep it visually but don't block interactions */}
        <div
          className="absolute inset-0 opacity-5 background-pattern pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#035a52] mb-6 font-ibarra relative">
                Training Services
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-accent animate-pulse-glow" />
              </h2>
              <p className="text-lg sm:text-xl text-[#035a52] max-w-3xl mx-auto font-glacial">
                Discover fitness solutions crafted to spark your transformation, from beginner to elite.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <article
                  key={index}
                  className="relative perspective-1000 cursor-pointer group z-20"
                  onClick={() => handleCardClick(index)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCardClick(index)}
                  role="button"
                  tabIndex={0}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`relative w-full h-[400px] sm:h-[450px] transition-transform duration-500 transform-style-3d ${
                      flipped === index ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front of Card */}
                    <div className="absolute inset-0 bg-[#035a52] rounded-xl shadow-2xl group-hover:shadow-3xl backface-hidden neon-border animate-scale-in overflow-hidden z-10">
                      <div className="relative h-[65%] w-full">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => (e.currentTarget.src = '/images/fallback.png')}
                        />
                        <div className="absolute inset-0 gradient-overlay" />
                      </div>
                      <div className="h-[35%] p-4 sm:p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-ibarra text-center">
                            {service.title}
                          </h3>
                          <p className="text-white text-opacity-80 text-sm sm:text-base font-glacial text-center line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                        <div className="text-center relative z-30">
                          <button
                            onClick={(e) => handleMoreClick(e, service.path)}
                            className="bg-accent text-[#035a52] px-4 sm:px-6 py-2 rounded-full font-glacial text-sm sm:text-base hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                            aria-label={`View more details about ${service.title}`}
                          >
                            More
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div className="absolute inset-0 bg-[#035a52] p-6 sm:p-8 rounded-xl shadow-2xl backface-hidden rotate-y-180 neon-border z-20">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-ibarra text-center">{service.title}</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-white text-opacity-90 text-sm sm:text-base font-glacial">
                            <div className="w-2 h-2 bg-accent rounded-full mr-2 sm:mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(index);
                          }}
                          className="bg-accent text-[#035a52] px-4 sm:px-6 py-2 rounded-full font-glacial text-sm sm:text-base hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                          aria-label={`Flip back to ${service.title} overview`}
                        >
                          Flip Back
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

import React, { useState } from 'react';

// Define Service interface for type safety
interface Service {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const Services: React.FC = () => {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [modalService, setModalService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: 'Personal Training',
      description: 'One-on-one customized workout sessions tailored to your specific goals and fitness level.',
      features: ['Custom workout plans', 'Form correction', 'Progress tracking', 'Goal setting'],
      image: '/images/personal.png', // Fixed: Removed /public
    },
    {
      title: 'Group Training',
      description: 'High-energy group sessions that combine motivation, fun, and effective workouts.',
      features: ['Team motivation', 'Cost-effective', 'Social support', 'Varied workouts'],
      image: '/images/group.jpg', // Fixed: Removed /public
    },
    {
      title: 'Nutrition Coaching',
      description: 'Comprehensive nutrition guidance to complement your fitness journey and maximize results.',
      features: ['Meal planning', 'Macro tracking', 'Supplement advice', 'Lifestyle coaching'],
      image: '/images/diet.jpg', // Fixed: Removed /public
    },
    {
      title: 'HIIT Programs',
      description: 'High-Intensity Interval Training programs designed for maximum fat burn and conditioning.',
      features: ['Time-efficient', 'Cardio & strength', 'Metabolic boost', 'Results-focused'],
      image: '/images/hit (2).png', // Fixed: Removed /public
    },
  ];

  const handleCardClick = (index: number) => {
    setFlipped(flipped === index ? null : index);
  };

  const openModal = (service: Service) => {
    setModalService(service);
    setFlipped(null); // Reset flip state when opening modal
  };

  const closeModal = () => {
    setModalService(null);
  };

  return (
    <section id="services" className="min-h-screen bg-cream relative overflow-x-hidden py-12 sm:py-16 md:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 background-pattern" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
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
                className="relative perspective-1000 cursor-pointer group"
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
                  <div className="absolute inset-0 bg-[#035a52] rounded-xl shadow-2xl group-hover:shadow-3xl backface-hidden neon-border animate-scale-in overflow-hidden">
                    {/* Image with Blur Overlay */}
                    <div className="relative h-[65%] w-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => (e.currentTarget.src = '/images/fallback.png')} // Updated fallback path
                      />
                      <div className="absolute inset-0 gradient-overlay" />
                    </div>
                    {/* Text Content (Bottom 35%) */}
                    <div className="h-[35%] p-4 sm:p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-ibarra text-center">
                          {service.title}
                        </h3>
                        <p className="text-white text-opacity-80 text-sm sm:text-base font-glacial text-center line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                      <div className="text-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card flip on button click
                            openModal(service);
                          }}
                          className="bg-accent text-[#035a52] px-4 sm:px-6 py-2 rounded-full font-glacial text-sm sm:text-base hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                          aria-label={`View more details about ${service.title}`}
                        >
                          More
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 bg-[#035a52] p-6 sm:p-8 rounded-xl shadow-2xl backface-hidden rotate-y-180 neon-border">
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
                          e.stopPropagation(); // Prevent double-click issues
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

      {/* Modal for Service Details */}
      {modalService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#035a52] p-8 rounded-xl max-w-lg w-full">
            <h3 className="text-2xl font-bold text-white mb-4 font-ibarra">{modalService.title}</h3>
            <p className="text-white text-opacity-90 mb-6 font-glacial">{modalService.description}</p>
            <ul className="space-y-3 mb-6">
              {modalService.features.map((feature, index) => (
                <li key={index} className="flex items-center text-white text-opacity-90 font-glacial">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <button
                onClick={closeModal}
                className="bg-accent text-[#035a52] px-6 py-2 rounded-full font-glacial hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                aria-label="Close modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
import React from 'react';
import { Image as LucideImage } from 'lucide-react';

const Pictorials: React.FC = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
  ];

  return (
    <section className="relative py-12 md:py-20 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-ibarra tracking-tight">
            My Visual Diary
          </h2>
          <p className="text-accent text-base sm:text-lg md:text-xl mt-2 md:mt-3">
            A Journey Through Moments
          </p>
        </div>

        {/* Image Grid */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 relative z-10">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)]"
            >
              <div className="aspect-w-4 aspect-h-3 w-full">
                <img
                  src={src}
                  alt={`Visual ${index + 1}`}
                  loading="lazy"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-5">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-base md:text-lg font-semibold">
                    Caption {index + 1}
                  </h3>
                  <p className="text-white text-xs md:text-sm opacity-80 mt-1">
                    Explore the story behind this moment
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10 md:mt-12">
          <button className="inline-flex items-center gap-2 bg-accent text-primary px-5 py-2 md:px-6 md:py-3 rounded-full font-medium md:font-semibold text-base md:text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:shadow-md md:hover:shadow-lg">
            <LucideImage size={18} className="md:size-5" />
            View More
          </button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23035A52' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Orbs - Hidden on mobile */}
      <div className="hidden md:block absolute top-10 right-10 w-20 h-20 bg-accent rounded-full opacity-10 animate-pulse" />
      <div className="hidden md:block absolute bottom-12 left-12 w-16 h-16 bg-primary rounded-full opacity-5 animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Pictorials;
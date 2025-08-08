import React, { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Elias',
      relationship: 'Client',
      content: 'Dickson transformed my relationship with fitness. His personalized approach and constant motivation helped me lose 30 pounds and gain confidence I never thought possible.',
      rating: 5,
      image: '/images/elias.jpg',
    },
    {
      name: 'Caro',
      relationship: 'Client',
      content: 'As someone who was completely new to fitness, Dickson made me feel comfortable and motivated. His expertise in nutrition and training helped me build muscle and improve my overall health.',
      rating: 5,
      image: '/images/caro.jpg',
    },
    {
      name: 'Getrude',
      relationship: 'Client',
      content: 'Working with Dickson has been life-changing. His HIIT programs are challenging but achievable, and his nutritional guidance helped me develop sustainable healthy habits.',
      rating: 5,
      image: '/images/getrude.jpg',
    },
    {
      name: 'John',
      relationship: 'Client',
      content: 'Dickson understands the challenges of a busy lifestyle. He created flexible workout routines that fit my schedule and delivered incredible results in just 3 months.',
      rating: 5,
      image: '/images/fallback.png',
    },
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Scroll to the current index
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * (carouselRef.current.offsetWidth / getVisibleCards()),
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  // Calculate visible cards based on screen size
  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Drag-to-scroll functionality
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grabbing';
    }
  };

  const handleDragEnd = () => {
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-cream to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-accent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-ibarra relative">
            Client Success Stories
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent animate-pulse-glow" />
          </h2>
          <p className="text-lg sm:text-xl text-primary opacity-80 max-w-3xl mx-auto mt-4">
            Hear from real people whose lives were transformed through personalized fitness coaching.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide gap-6 py-4"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            style={{ cursor: 'grab' }}
            role="region"
            aria-label="Testimonials carousel"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full sm:w-1/2 lg:w-1/3 snap-center p-4"
                role="group"
                aria-label={`Testimonial from ${testimonial.name}`}
              >
                <div className="bg-white bg-opacity-95 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
                  <Quote className="w-10 h-10 text-accent mb-4 mx-auto opacity-70 transform group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-base sm:text-lg text-primary opacity-80 leading-relaxed mb-6 italic line-clamp-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent shadow-sm"
                    />
                    <div className="text-left">
                      <h4 className="text-primary font-semibold text-base font-ibarra">{testimonial.name}</h4>
                      <p className="text-primary opacity-70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    {/* <button
                      className="bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                      aria-label={`Learn more about ${testimonial.name}'s experience`}
                    >
                      Learn More
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-accent text-primary p-3 rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-accent text-primary p-3 rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-accent ${
                  index === currentIndex ? 'bg-accent scale-125' : 'bg-primary opacity-50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
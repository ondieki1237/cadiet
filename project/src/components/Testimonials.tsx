import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Executive',
      content: 'Dickson transformed my relationship with fitness. His personalized approach and constant motivation helped me lose 30 pounds and gain confidence I never thought possible.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Mike Rodriguez',
      role: 'Software Engineer',
      content: 'As someone who was completely new to fitness, Dickson made me feel comfortable and motivated. His expertise in nutrition and training helped me build muscle and improve my overall health.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Emma Thompson',
      role: 'Teacher',
      content: 'Working with Dickson has been life-changing. His HIIT programs are challenging but achievable, and his nutritional guidance helped me develop sustainable healthy habits.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'David Chen',
      role: 'Business Owner',
      content: 'Dickson understands the challenges of a busy lifestyle. He created flexible workout routines that fit my schedule and delivered incredible results in just 3 months.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-cream relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23035A52' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 font-ibarra relative">
              Client Success Stories
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-primary animate-pulse-glow" />
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-glacial">
              Real transformations from real people who trusted their fitness journey with me.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-90 rounded-2xl p-8 md:p-12 shadow-2xl neon-border animate-scale-in">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-accent mb-6 mx-auto" />
              
              <div className="text-center">
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 italic font-glacial">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-accent fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-4 mb-6">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-primary shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="text-primary font-semibold text-base sm:text-lg font-ibarra">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 font-glacial text-sm sm:text-base">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>

                <div className="text-center">
                  <button className="bg-accent text-primary px-4 sm:px-6 py-2 rounded-full font-glacial text-sm sm:text-base hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-accent text-primary p-3 sm:p-4 rounded-full transition-all duration-300 hover:bg-yellow-400 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-accent text-primary p-3 sm:p-4 rounded-full transition-all duration-300 hover:bg-yellow-400 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentTestimonial ? 'bg-accent' : 'bg-primary'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
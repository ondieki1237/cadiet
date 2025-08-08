import React from 'react';
import { Footer } from './Footer'; // Adjust path as needed

export const NutritionCoaching: React.FC = () => {
  return (
    <>
      {/* Small Menu with Home Button */}
      <header className="bg-[#035a52] py-4 px-4 sm:px-6 md:px-8 lg:px-12 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto max-w-5xl">
          <nav className="flex justify-start">
            <a
              href="/"
              className="inline-block bg-accent text-[#035a52] font-bold py-2 px-4 sm:px-6 rounded-full hover:bg-[#f7c948] transition-colors duration-300 font-glacial text-sm sm:text-base"
            >
              Home
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-cream relative py-12 sm:py-16 md:py-24 lg:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 background-pattern" />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#035a52] mb-6 font-ibarra relative">
                Nutrition Coaching
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-accent animate-pulse-glow" />
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-[#035a52] max-w-4xl mx-auto font-glacial leading-relaxed">
                Unlock your full potential with personalized nutrition coaching designed to fuel your bodybuilding journey and achieve lasting results.
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              {/* Nutrition Features Card */}
              <div className="bg-[#035a52] rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 neon-border animate-scale-in">
                <img
                  src="/images/diet.jpg"
                  alt="Healthy Nutrition"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg mb-6 transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = '/images/fallback.png')}
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-ibarra">What We Offer</h3>
                <ul className="space-y-4 mb-6">
                  {[
                    { feature: 'Personalized Meal Planning', desc: 'Tailored meal plans to meet your specific bodybuilding goals.' },
                    { feature: 'Macro Tracking & Optimization', desc: 'Precise macronutrient guidance to maximize muscle growth.' },
                    { feature: 'Supplement Recommendations', desc: 'Expert advice on supplements to enhance performance.' },
                    { feature: 'Lifestyle Integration', desc: 'Sustainable nutrition strategies for long-term success.' },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-white text-opacity-90 text-sm sm:text-base font-glacial">
                      <div className="w-3 h-3 bg-accent rounded-full mr-3 mt-1.5" />
                      <div>
                        <strong>{item.feature}</strong>: {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="text-white text-opacity-90 font-glacial leading-relaxed">
                  Our nutrition coaching is designed to empower you with the knowledge and tools to fuel your body effectively. Whether you're bulking, cutting, or maintaining, our experts provide customized plans to support your bodybuilding journey.
                </p>
              </div>

              {/* Kitchen in Bodybuilding Section */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 neon-border animate-scale-in">
                <img
                  src="/images/abs.png"
                  alt="Abbs Kitchen"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg mb-6 transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = '/images/fallback.png')}
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-[#035a52] mb-4 font-ibarra">The Kitchen: Your Bodybuilding Foundation</h3>
                <p className="text-[#035a52] text-opacity-90 font-glacial leading-relaxed mb-4">
                  In bodybuilding, the kitchen is where champions are made. Your nutrition is the cornerstone of muscle growth, recovery, and performance. Our coaching emphasizes meal prepping, cooking techniques, and ingredient selection to ensure you’re fueling your body with precision.
                </p>
                <p className="text-[#035a52] text-opacity-90 font-glacial leading-relaxed">
                  From high-protein recipes to carb-cycling strategies, we teach you how to transform your kitchen into a powerhouse for achieving your physique goals. The image above showcases a real bodybuilder’s kitchen setup, designed for efficiency and results.
                </p>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="text-center bg-gradient-to-r from-[#035a52] to-[#047a70] rounded-2xl shadow-2xl p-8 sm:p-12 neon-border animate-scale-in">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-ibarra">
                Ready to Transform Your Nutrition?
              </h3>
              <p className="text-white text-opacity-90 font-glacial mb-6 max-w-3xl mx-auto">
                Take the first step toward optimizing your diet and unlocking your bodybuilding potential. Our expert coaches are here to guide you every step of the way.
              </p>
              <a
                href="https://wa.me/254710842781"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-[#035a52] font-bold py-3 px-6 sm:px-8 rounded-full hover:bg-[#f7c948] transition-colors duration-300 font-glacial"
              >
                Get Started Today
              </a>
            </div>

            {/* Additional Information Section */}
            <div className="mt-12 sm:mt-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#035a52] mb-6 font-ibarra text-center">Why Nutrition Matters in Bodybuilding</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-[#035a52] mb-3 font-ibarra">Muscle Growth</h4>
                  <p className="text-[#035a52] text-opacity-90 font-glacial">
                    Proper nutrition provides the protein and calories needed to repair and grow muscle tissue after intense workouts.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-[#035a52] mb-3 font-ibarra">Energy & Performance</h4>
                  <p className="text-[#035a52] text-opacity-90 font-glacial">
                    Balanced macros ensure sustained energy levels, allowing you to train harder and recover faster.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-[#035a52] mb-3 font-ibarra">Body Composition</h4>
                  <p className="text-[#035a52] text-opacity-90 font-glacial">
                    Strategic nutrition helps you achieve the perfect balance of muscle gain and fat loss for your ideal physique.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-[#035a52] mb-3 font-ibarra">Long-Term Health</h4>
                  <p className="text-[#035a52] text-opacity-90 font-glacial">
                    A sustainable diet supports overall health, ensuring you stay strong and energized for years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
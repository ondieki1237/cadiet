import React from 'react';
import { Footer } from './Footer'; // Adjust path as needed

export const PersonalTraining: React.FC = () => {
  return (
    <>
      {/* Small Menu with Home Button */}
      <header className="bg-[#035a52] py-4 px-4 sm:px-6 md:px-8 lg:px-12 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto max-w-5xl">
          <nav className="flex justify-start">
            <a
              href="/"
              className="inline-block bg-accent text-[#035a52] font-bold py-2 px-4 sm:px-6 rounded-full hover:bg-[#D8E267] transition-colors duration-300 font-glacial text-sm sm:text-base"
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
                Personal Training
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-accent animate-pulse-glow" />
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-[#035a52] max-w-4xl mx-auto font-glacial leading-relaxed">
                Achieve your fitness goals with one-on-one customized workout sessions tailored to your unique needs and fitness level.
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              {/* Personal Training Features Card */}
              <div className="bg-[#035a52] rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 neon-border animate-scale-in">
                <img
                  src="/images/personal.png"
                  alt="Personal Training Session"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg mb-6 transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = '/images/fallback.png')}
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-ibarra">What We Offer</h3>
                <ul className="space-y-4 mb-6">
                  {[
                    { feature: 'Custom Workout Plans', desc: 'Tailored routines designed for your specific goals.' },
                    { feature: 'Form Correction', desc: 'Expert guidance to ensure safe and effective technique.' },
                    { feature: 'Progress Tracking', desc: 'Detailed metrics to monitor your improvements.' },
                    { feature: 'Goal Setting', desc: 'Personalized strategies to keep you focused and motivated.' },
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
                  Our personal training sessions provide individualized attention to maximize your results. Whether you're a beginner or an advanced athlete, our expert coaches tailor each session to your unique needs.
                </p>
              </div>

              {/* Individualized Coaching Benefits Section */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 neon-border animate-scale-in">
                <img
                  src="/images/image1.jpg"
                  alt="Personal Coaching"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg mb-6 transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = '/images/fallback.png')}
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-[#035a52] mb-4 font-ibarra">The Power of Individualized Coaching</h3>
                <p className="text-[#035a52] text-opacity-90 font-glacial leading-relaxed mb-4">
                  Personal training offers unmatched focus and customization, ensuring every workout is optimized for your goals. Our coaches provide dedicated support to push you to new heights.
                </p>
                <p className="text-[#035a52] text-opacity-90 font-glacial leading-relaxed">
                  From personalized feedback to tailored progress plans, our one-on-one sessions empower you to achieve results efficiently. The image above captures the intensity of a personal training session.
                </p>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="text-center bg-gradient-to-r from-[#035a52] to-[#047a70] rounded-2xl shadow-2xl p-8 sm:p-12 neon-border animate-scale-in">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-ibarra">
                Ready to Transform Your Fitness?
              </h3>
              <p className="text-white text-opacity-90 font-glacial mb-6 max-w-3xl mx-auto">
                Take the first step toward achieving your fitness goals with our expert-led personal training. Contact us today to get started.
              </p>
              <a
                href="https://wa.me/254710842781"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-[#035a52] font-bold py-3 px-6 sm:px-8 rounded-full hover:bg-[#D8E267] transition-colors duration-300 font-glacial"
              >
                Get Started Today
              </a>
            </div>

            {/* Additional Information Section */}
            <div className="mt-12 sm:mt-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#035a52] mb-6 font-ibarra text-center">Why Personal Training Matters</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-[#035a52] mb-3 font-ibarra">Customized Approach</h4>
                  <p className="text-[#035a52] text-opacity-90 font-glacial">
                    Workouts tailored to your unique goals and fitness level.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-[#035a52] mb-3 font-ibarra">Enhanced Technique</h4>
                  <p className="text-[#035a52] text-opacity-90 font-glacial">
                    Expert form correction to maximize results and prevent injuries.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-[#035a52] mb-3 font-ibarra">Accountability</h4>
                  <p className="text-[#035a52] text-opacity-90 font-glacial">
                    Dedicated coaching keeps you motivated and on track.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-[#035a52] mb-3 font-ibarra">Faster Results</h4>
                  <p className="text-[#035a52] text-opacity-90 font-glacial">
                    Personalized plans accelerate your progress toward goals.
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
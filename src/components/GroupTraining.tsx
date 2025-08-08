import React from 'react';
import { Footer } from './Footer'; // Adjust path as needed

export const GroupTraining: React.FC = () => {
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
                Group Training
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-accent animate-pulse-glow" />
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-[#035a52] max-w-4xl mx-auto font-glacial leading-relaxed">
                Experience high-energy group training sessions that combine motivation, fun, and effective workouts to help you achieve your fitness goals.
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              {/* Group Training Features Card */}
              <div className="bg-[#035a52] rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 neon-border animate-scale-in">
                <img
                  src="/images/group.jpg"
                  alt="Group Training Session"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg mb-6 transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = '/images/fallback.png')}
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-ibarra">What We Offer</h3>
                <ul className="space-y-4 mb-6">
                  {[
                    { feature: 'Team Motivation', desc: 'Boost your drive with the energy of a supportive group.' },
                    { feature: 'Cost-Effective', desc: 'Affordable sessions without compromising quality.' },
                    { feature: 'Social Support', desc: 'Build connections in a community-driven environment.' },
                    { feature: 'Varied Workouts', desc: 'Dynamic routines to keep sessions engaging and effective.' },
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
                  Our group training sessions harness the power of community to deliver engaging, affordable, and varied workouts. Stay motivated and achieve your fitness goals in a supportive, high-energy environment.
                </p>
              </div>

              {/* Community Benefits Section */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 neon-border animate-scale-in">
                <img
                  src="/images/gym3.jpg"
                  alt="Group Training Community"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg mb-6 transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = '/images/fallback.png')}
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-[#035a52] mb-4 font-ibarra">The Power of Community</h3>
                <p className="text-[#035a52] text-opacity-90 font-glacial leading-relaxed mb-4">
                  Group training is more than just a workout—it’s a community. Our sessions foster camaraderie, accountability, and shared goals, making fitness fun and sustainable.
                </p>
                <p className="text-[#035a52] text-opacity-90 font-glacial leading-relaxed">
                  Whether you’re a beginner or a seasoned athlete, our group classes offer a welcoming environment to push your limits. The image above captures the vibrant energy of our training community.
                </p>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="text-center bg-gradient-to-r from-[#035a52] to-[#047a70] rounded-2xl shadow-2xl p-8 sm:p-12 neon-border animate-scale-in">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-ibarra">
                Ready to Join the Team?
              </h3>
              <p className="text-white text-opacity-90 font-glacial mb-6 max-w-3xl mx-auto">
                Take the first step toward transforming your fitness with our high-energy group training sessions. Contact us today to get started.
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
              <h3 className="text-2xl sm:text-3xl font-bold text-[#035a52] mb-6 font-ibarra text-center">Why Group Training Matters</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-[#035a52] mb-3 font-ibarra">Motivation Boost</h4>
                  <p className="text-[#035a52] text-opacity-90 font-glacial">
                    Group energy keeps you driven and committed to your goals.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-[#035a52] mb-3 font-ibarra">Affordability</h4>
                  <p className="text-[#035a52] text-opacity-90 font-glacial">
                    Cost-effective sessions make fitness accessible to all.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-[#035a52] mb-3 font-ibarra">Community Support</h4>
                  <p className="text-[#035a52] text-opacity-90 font-glacial">
                    Build lasting connections with like-minded individuals.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-[#035a52] mb-3 font-ibarra">Workout Variety</h4>
                  <p className="text-[#035a52] text-opacity-90 font-glacial">
                    Diverse routines keep sessions fresh and engaging.
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
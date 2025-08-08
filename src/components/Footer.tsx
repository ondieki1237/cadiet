import React from 'react';
import { Dumbbell, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-cream text-primary py-12 sm:py-16 md:py-20 relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23035A52' fill-opacity='0.2'%3E%3Cpath d='M30 10c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 36c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="w-8 h-8 text-emerald-600" />
                <span className="text-xl sm:text-2xl font-bold text-primary font-ibarra">Dickson Cadiet</span>
              </div>
              <p className="text-gray-700 mb-4 font-glacial leading-relaxed text-sm sm:text-base">
                Certified Personal Trainer dedicated to helping you achieve your fitness goals
                through personalized training and nutrition guidance.
              </p>
              <div className="bg-emerald-600 bg-opacity-10 rounded-lg p-3 inline-block">
                <p className="text-sm text-primary font-glacial font-medium">
                  NASM Certified • Nutrition Coach • Functional Movement Specialist
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold text-primary mb-4 font-ibarra border-b border-primary border-opacity-20 pb-2">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['home', 'about', 'services', 'experience', 'testimonials', 'contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={(e) => handleScroll(e, item)}
                      className="text-gray-700 hover:text-emerald-600 transition-all duration-300 flex items-center group font-glacial text-sm sm:text-base cursor-pointer"
                    >
                      <span className="w-2 h-2 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-all duration-300"></span>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold text-primary mb-4 font-ibarra border-b border-primary border-opacity-20 pb-2">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  'Personal Training',
                  'Group Training',
                  'Nutrition Coaching',
                  'HIIT Programs',
                  'Strength Training',
                  'Weight Loss Programs'
                ].map((service) => (
                  <li key={service} className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 font-glacial text-sm sm:text-base">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-primary border-opacity-20 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-700 text-sm sm:text-base font-glacial mb-4 md:mb-0">
                © 2025 Dickson Cadiet. All rights reserved.
              </p>
              <div className="flex items-center text-gray-700 text-sm sm:text-base font-glacial bg-emerald-600 bg-opacity-10 px-3 py-1 rounded-full">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-emerald-600 mx-1 fill-current" />
                <span>for fitness</span>
              </div>
            </div>
            <div className="mt-4 flex justify-center items-center space-x-2">
              <div className="bg-white bg-opacity-80 p-1 rounded-full">
                <img
                  src="/images/smo-logo.png"
                  alt="Seth Logo"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <p className="text-gray-700 text-xs sm:text-sm font-glacial">
                Built and managed by{' '}
                <a
                  href="https://ondieki1237.github.io/sethbellarin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline transition-all duration-300"
                >
                  Seth Bellarin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

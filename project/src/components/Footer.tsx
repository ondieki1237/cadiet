import React from 'react';
import { Dumbbell, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cream text-primary py-12 sm:py-16 md:py-20 relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23035A52' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-2xl neon-border p-6 sm:p-8 animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="w-8 h-8 text-accent" />
                <span className="text-xl sm:text-2xl font-bold text-primary font-ibarra">Dickson Cadiet</span>
              </div>
              <p className="text-gray-600 mb-4 font-glacial leading-relaxed text-sm sm:text-base">
                Certified Personal Trainer dedicated to helping you achieve your fitness goals 
                through personalized training and nutrition guidance.
              </p>
              <p className="text-sm text-gray-600 font-glacial">
                NASM Certified • Nutrition Coach • Functional Movement Specialist
              </p>
              <div className="mt-4">
                <button className="bg-accent text-primary px-4 sm:px-6 py-2 rounded-full font-glacial text-sm sm:text-base hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold text-primary mb-4 font-ibarra">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#home" className="hover:text-accent transition-all duration-300 transform hover:translate-x-2 font-glacial text-sm sm:text-base">Home</a></li>
                <li><a href="#about" className="hover:text-accent transition-all duration-300 transform hover:translate-x-2 font-glacial text-sm sm:text-base">About</a></li>
                <li><a href="#services" className="hover:text-accent transition-all duration-300 transform hover:translate-x-2 font-glacial text-sm sm:text-base">Services</a></li>
                <li><a href="#experience" className="hover:text-accent transition-all duration-300 transform hover:translate-x-2 font-glacial text-sm sm:text-base">Experience</a></li>
                <li><a href="#testimonials" className="hover:text-accent transition-all duration-300 transform hover:translate-x-2 font-glacial text-sm sm:text-base">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-accent transition-all duration-300 transform hover:translate-x-2 font-glacial text-sm sm:text-base">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold text-primary mb-4 font-ibarra">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="font-glacial text-sm sm:text-base">Personal Training</li>
                <li className="font-glacial text-sm sm:text-base">Group Training</li>
                <li className="font-glacial text-sm sm:text-base">Nutrition Coaching</li>
                <li className="font-glacial text-sm sm:text-base">HIIT Programs</li>
                <li className="font-glacial text-sm sm:text-base">Strength Training</li>
                <li className="font-glacial text-sm sm:text-base">Weight Loss Programs</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm sm:text-base font-glacial mb-4 md:mb-0">
                © 2025 Dickson Cadiet. All rights reserved.
              </p>
              <div className="flex items-center text-gray-600 text-sm sm:text-base font-glacial">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-accent mx-1 fill-current" />
                <span>for fitness enthusiasts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
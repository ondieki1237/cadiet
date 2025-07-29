import React from 'react';
import { Play, Star, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23035A52' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold text-primary leading-tight font-ibarra">
                Cadiet{' '}
                <span className="italic font-ibarra creative-your relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary transform -rotate-2">
                  your
                </span>
                <br />
                Fitness Coach
              </h1>
              <p className="text-xl lg:text-2xl text-primary opacity-80 leading-relaxed max-w-lg font-light">
                Through personalized training, expert guidance, and unwavering support, we'll help you transform{' '}
                <span className="italic font-ibarra">your</span> body and achieve your fitness goals.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
<button
  onClick={scrollToAbout}
  className="bg-accent text-primary px-4 py-2 text-base sm:px-8 sm:py-4 sm:text-xl font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg rounded-full"
>
  Get Started
</button>
              <button
                onClick={() => window.open('https://www.youtube.com/@classic254', '_blank')}
                className="flex items-center space-x-2 text-primary hover:text-accent transition-all duration-300 group"
              >
                <div className="bg-primary bg-opacity-10 p-3 rounded-full group-hover:bg-accent group-hover:bg-opacity-20 transition-all duration-300">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <span className="font-medium text-lg">Watch Demo</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <img
                    src="/images/elias.jpg"
                    alt="Elias, happy client"
                    className="w-8 h-8 rounded-full border-2 border-cream object-cover"
                  />
                  <img
                    src="/images/caro.jpg"
                    alt="Caro, happy client"
                    className="w-8 h-8 rounded-full border-2 border-cream object-cover"
                  />
                  <img
                    src="/images/getrude.jpg"
                    alt="Getrude, happy client"
                    className="w-8 h-8 rounded-full border-2 border-cream object-cover"
                  />
                </div>
                <div className="text-primary">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-accent fill-current" />
                    <span className="font-bold">+2k</span>
                  </div>
                  <p className="text-sm opacity-70">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative z-10">
                <img src="/images/hero1.png" alt="Fitness Training" className="w-full" />
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Pills */}
      <div className="absolute bottom-8 md:bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { name: 'Progress Tracking', desc: 'Monitor your fitness journey' },
            { name: 'Customizable', desc: 'Tailored to your needs' },
            { name: 'User-Friendly', desc: 'Intuitive interface' },
            { name: 'Effective', desc: 'Proven results' },
            { name: 'Nutrition', desc: 'Diet plans included' },
          ].map((feature, index) => (
            <div
              key={feature.name}
              className="group relative bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full text-center shadow-lg animate-scale-in hover:bg-opacity-100 transition-all duration-200 cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={feature.desc}
              data-tooltip={feature.desc}
            >
              <span className="text-primary font-medium text-sm relative inline-block">
                {feature.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </span>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                {feature.desc}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
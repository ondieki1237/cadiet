import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY < 20) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[50vw] z-50 transition-all duration-300 rounded-3xl shadow-xl ${
          isScrolled
            ? 'bg-gradient-to-r from-primary to-accent/50 backdrop-blur-lg border border-cream/30'
            : 'bg-gradient-to-r from-primary/90 to-accent/30 backdrop-blur-xl border border-cream/20'
        } ${isVisible ? 'translate-y-0' : '-translate-y-[120%]'}`}
      >
        <div className="px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-12 sm:h-14">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-accent p-2 rounded-lg">
                <Dumbbell className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold text-cream">Cadiet</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 py-2 font-medium text-sm text-cream hover:text-cream hover:scale-105 hover:bg-accent/20 rounded-lg transition-all duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-accent to-yellow-400 text-primary px-5 py-1.5 rounded-lg font-semibold text-sm hover:from-yellow-400 hover:to-yellow-500 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg transition-all duration-200 text-cream hover:text-cream hover:bg-accent/20"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 transition-transform duration-300 scale-100 transform" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300 scale-100 transform" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden absolute top-[3.5rem] left-0 w-[300px] transition-all duration-300 ease-out rounded-2xl overflow-hidden ${
              isMenuOpen ? 'animate-slide-down max-h-[100vh]' : 'animate-slide-up max-h-0'
            }`}
            style={{ left: '0', transform: 'none' }}
          >
            <div className="px-4 pt-4 pb-6 space-y-2 bg-gradient-to-r from-primary/90 to-accent/30 backdrop-blur-lg shadow-lg border border-cream/20 rounded-2xl">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 font-medium text-sm text-cream hover:text-cream hover:scale-105 hover:bg-accent/20 rounded-lg transition-all duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gradient-to-r from-accent to-yellow-400 text-primary py-2 rounded-lg font-semibold text-sm hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
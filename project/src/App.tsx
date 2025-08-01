import React, { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FloatingElements } from './components/FloatingElements';
import { About } from './components/About';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TestimonialVideos } from './components/TestimonialVideo';
import  Pictorials  from './components/Pictorials';

function ErrorBoundary({ children }) {
  return children;
}

function App() {
  useEffect(() => {
    document.title = 'Dickson Cadiet - Personal Trainer & Fitness Coach';
    
    const style = document.createElement('style');
    style.textContent = `
      html { scroll-behavior: smooth; }
      @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
      .delay-200 { animation-delay: 0.2s; }
      .delay-400 { animation-delay: 0.4s; }
      .delay-600 { animation-delay: 0.6s; }
      .delay-800 { animation-delay: 0.8s; }
      body { overflow-x: hidden; }
    `;
    document.head.appendChild(style);
    
    return () => document.head.removeChild(style);
  }, []);

  return (
    <ParallaxProvider>
      <div className="min-h-screen relative overflow-hidden">
        <FloatingElements />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Experience />
          <TestimonialVideos />
          <Testimonials />
          <Contact />
          <ErrorBoundary>
          <Pictorials />
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
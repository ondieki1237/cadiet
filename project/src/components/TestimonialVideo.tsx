import React, { useState, useEffect, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialVideos: React.FC = () => {
  // State to track which videos are playing
  const [playing, setPlaying] = useState<{ [key: number]: boolean }>({ 0: false, 1: false, 2: false });
  const [currentIndex, setCurrentIndex] = useState(0); // Start at Getrude’s index (0) for mobile
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Video data
  const videos = [
    {
      name: 'Getrude',
      description: 'Getrude discusses the impact of nutrition and HIIT on her health journey.',
      videoSrc: '/videos/1.mp4',
      thumbnail: '/images/getrude.jpg',
    },
    {
      name: 'Elias',
      description: 'Elias shares how personalized coaching helped him achieve his fitness goals.',
      videoSrc: '/videos/2.mp4',
      thumbnail: '/images/elias.jpg',
    },
    {
      name: 'Caro',
      description: 'Caro explains how flexible workout plans transformed her busy lifestyle.',
      videoSrc: '/videos/3.mp4',
      thumbnail: '/images/caro.jpg',
    },
  ];

  // Toggle play/pause for a specific video
  const togglePlay = (index: number, videoElement: HTMLVideoElement | null) => {
    if (videoElement) {
      if (playing[index]) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setPlaying((prev) => ({ ...prev, [index]: !prev[index] }));
    }
  };

  // Auto-play Getrude's video (index 0) when section is in view on mobile
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.innerWidth < 640) {
            const getrudeVideo = document.querySelector(`video[aria-label="Testimonial video by Getrude"]`) as HTMLVideoElement;
            if (getrudeVideo && !playing[0]) {
              getrudeVideo.muted = true;
              getrudeVideo.play().catch((error) => {
                console.error('Auto-play failed:', error);
              });
              setPlaying((prev) => ({ ...prev, 0: true }));
              setCurrentIndex(0); // Ensure Getrude's video is first on mobile
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [playing]);

  // Scroll to the current index on mobile
  useEffect(() => {
    if (carouselRef.current && window.innerWidth < 640) {
      carouselRef.current.scrollTo({
        left: currentIndex * carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  // Navigation handlers
  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
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
    <section
      id="testimonial-videos"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-cream to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-accent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-ibarra relative">
            Video Testimonials
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent animate-pulse-glow" />
          </h2>
          <p className="text-lg sm:text-xl text-primary opacity-80 max-w-3xl mx-auto mt-4">
            Watch real clients share their transformative fitness journeys with personalized coaching.
          </p>
        </div>

        {/* Mobile Carousel (below sm) / Grid (sm and above) */}
        <div className="relative max-w-6xl mx-auto">
          <div
            ref={carouselRef}
            className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            style={{ cursor: window.innerWidth < 640 ? 'grab' : 'default' }}
            role="region"
            aria-label="Video testimonials carousel"
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex-none w-full sm:w-auto snap-center p-4 sm:p-0"
                role="group"
                aria-label={`Video testimonial from ${video.name}`}
              >
                <div
                  className="relative bg-white bg-opacity-95 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Video Player */}
                  <div className="relative aspect-[9/16] overflow-hidden rounded-lg max-h-[500px]">
                    <video
                      className="w-full h-full object-cover"
                      poster={video.thumbnail}
                      controls={playing[index]}
                      muted={index === 0}
                      onClick={(e) => togglePlay(index, e.currentTarget)}
                      aria-label={`Testimonial video by ${video.name}`}
                    >
                      <source src={video.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {!playing[index] && (
                      <button
                        className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-50 hover:bg-opacity-70 transition-all duration-300"
                        onClick={() => togglePlay(index, document.querySelector(`video[aria-label="Testimonial video by ${video.name}"]`))}
                        aria-label={`Play ${video.name}'s testimonial video`}
                      >
                        <Play className="w-12 h-12 text-accent fill-current transform hover:scale-110 transition-transform duration-300" />
                      </button>
                    )}
                  </div>

                  {/* Video Info */}
                  <div className="mt-4 text-center">
                    <h4 className="text-primary font-semibold text-base font-ibarra">{video.name}</h4>
                    <p className="text-primary opacity-70 text-sm mt-1 line-clamp-2">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons (Mobile Only) */}
          <div className="sm:hidden flex justify-center mt-6">
            <button
              onClick={prevVideo}
              className="bg-accent text-primary p-3 rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Previous video testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextVideo}
              className="ml-4 bg-accent text-primary p-3 rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Next video testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator (Mobile Only) */}
          <div className="sm:hidden flex justify-center mt-4 space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-accent ${
                  index === currentIndex ? 'bg-accent scale-125' : 'bg-primary opacity-50'
                }`}
                aria-label={`Go to video testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
// src/components/Pictorials.tsx

import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Image as LucideImage } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Pictorials: React.FC = () => {
  // Images with titles and captions from PhotoGallery
  const images = [
    { src: '/images/pictorials/images1.jpg', title: 'Back Muscle Control', caption: 'Sculpting every inch with precision.', alt: 'Back Flex' },
    { src: '/images/pictorials/images2.jpg', title: 'Peak Physique Check', caption: 'Discipline shows in every flex.', alt: 'Side Flex Pose' },
    { src: '/images/pictorials/images3.jpg', title: 'Focused Arm Strength', caption: 'Building power, rep by rep.', alt: 'Dumbbell Curl Set' },
    { src: '/images/pictorials/images4.jpg', title: 'Overhead Strength', caption: 'Shoulders loaded, focus unshaken.', alt: 'Barbell Shoulder Press' },
    { src: '/images/pictorials/images5.jpg', title: 'Bicep Burnout Reps', caption: 'Precision curls for peak growth.', alt: 'Bicep Curl Isolation' },
    { src: '/images/pictorials/images6.jpg', title: 'Chest Sculpting Routine', caption: 'Every detail counts.', alt: 'Side Chest Definition' },
    { src: '/images/pictorials/images7.jpg', title: 'Controlled Power Lifts', caption: 'Strength with strict form.', alt: 'Barbell Power Lift' },
    { src: '/images/pictorials/images8.jpg', title: 'Mental Reset Between Sets', caption: 'Mind sharp, body ready.', alt: 'Rest Mode Focus' },
    { src: '/images/pictorials/images9.jpg', title: 'Visualizing Next Move', caption: 'Preparation breeds success.', alt: 'Seated Calm Focus' },
    { src: '/images/pictorials/images10.jpg', title: 'Strength in Unity', caption: 'Iron sharpens iron.', alt: 'Training Partners Energy' },
    { src: '/images/pictorials/images11.jpg', title: 'Core Crushing Session', caption: 'Abs forged with grit.', alt: 'Partner Sit-Up Challenge' },
    { src: '/images/pictorials/images12.jpg', title: 'Fitness Community Bond', caption: 'Together, we rise stronger.', alt: 'Group Training Family' },
    { src: '/images/pictorials/images13.jpg', title: 'Sit-Ups to Failure', caption: 'Grind until the last rep.', alt: 'Hardcore Sit-Ups' },
    { src: '/images/pictorials/images14.jpg', title: 'Strength Meets Aesthetic', caption: 'Hard work wears no disguise.', alt: 'Open Chest Confidence' },
    { src: '/images/pictorials/images15.jpg', title: 'Moment 15', caption: 'Discover this captured moment.', alt: 'Gallery Image 15' },
  ];

  // Slider settings for auto-scrolling
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative py-12 md:py-20 bg-cream overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23035A52' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Orbs */}
      <div className="hidden md:block absolute top-10 right-10 w-20 h-20 bg-accent rounded-full opacity-10 animate-pulse pointer-events-none" />
      <div
        className="hidden md:block absolute bottom-12 left-12 w-16 h-16 bg-primary rounded-full opacity-5 animate-float pointer-events-none"
        style={{ animationDelay: '1s' }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-ibarra tracking-tight">
            My Visual Diary
          </h2>
          <p className="text-accent text-base sm:text-lg md:text-xl mt-2 md:mt-3">
            A Journey Through Moments
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-w-4 aspect-h-3 w-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-5">
                    <div className="translate-y-4 hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white text-base md:text-lg font-semibold">
                        {image.title}
                      </h3>
                      <p className="text-white text-xs md:text-sm opacity-80 mt-1">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10 md:mt-12 relative z-20">
          <Link to="/gallery">
            <button className="inline-flex items-center gap-2 bg-accent text-primary px-5 py-2 md:px-6 md:py-3 rounded-full font-medium md:font-semibold text-base md:text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:shadow-md md:hover:shadow-lg">
              <LucideImage size={18} className="md:size-5" />
              View More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pictorials;
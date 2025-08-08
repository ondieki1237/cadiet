import React from 'react';
import { Link } from 'react-router-dom';
import { Image as LucideImage, PlayCircle } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const PhotoGallery: React.FC = () => {
  const galleryVideos = [
    'abs_workout.mp4',
    'aerobic_steps.mp4',
    'chest_bench_press.mp4',
    'inclinepress.mp4',
    'mountain_climbing.mp4',
    'squats.mp4',
  ];

  const galleryImages = [
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

  return (
    <>
      <Navbar />
      <section className="relative py-16 md:py-24 bg-cream min-h-screen">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Video Gallery Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary font-ibarra tracking-tight">
              Full Video Gallery
            </h2>
            <p className="text-accent text-lg sm:text-xl mt-4 max-w-xl mx-auto">
              Explore All My Workout Videos
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mb-20">
            {galleryVideos.map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
                <video
                  src={`/videos/${src}`}
                  controls
                  preload="metadata"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                {/* Hover Play Icon (doesn't block clicks) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <PlayCircle size={48} className="text-white" />
                </div>
                {/* Video Title Overlay (non-clickable layer) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pointer-events-none">
                  <h3 className="text-white text-lg font-semibold">
                    {src.replace('.mp4', '').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Pictorial Gallery Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary font-ibarra tracking-tight">
              Full Photo Gallery
            </h2>
            <p className="text-accent text-lg sm:text-xl mt-4 max-w-xl mx-auto">
              Explore All My Moments
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pointer-events-none">
                  <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                  <p className="text-white text-sm opacity-80">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="text-center mt-16">
            <Link to="/">
              <button className="inline-flex items-center gap-2 bg-accent text-primary px-7 py-3 rounded-full font-semibold text-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:shadow-lg">
                <LucideImage size={22} />
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PhotoGallery;

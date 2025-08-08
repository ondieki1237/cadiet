import React from 'react';
import { Film } from 'lucide-react';

export const TikTokVideos: React.FC = () => {
  const videoIds = [
    '7527376990781934904',
    '7527206856113032454',
    '7526696081481141509',
    '7525511050695822598',
    '7524780350602562821',
    '7526848908291493176',
  ];

  return (
    <section id="tiktok-videos" className="py-12 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Gg fill='%23035A52' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-8 animate-slide-in-left">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-ibarra">
            My TikTok <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Journey</span>
          </h2>
          <p className="text-base lg:text-lg text-primary opacity-80 mt-3 max-w-xl mx-auto font-light">
            Check out my latest fitness tips and workouts on TikTok{' '}
            <span className="italic font-ibarra">@cadiet1</span>
          </p>
        </div>

        <div className="relative overflow-x-auto snap-x snap-mandatory flex space-x-4 pb-4 animate-scale-in">
          {videoIds.map((videoId, index) => (
            <div
              key={videoId}
              className="snap-center flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg group">
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${videoId}`}
                  className="w-full h-full"
                  allow="autoplay; clipboard-write; encrypted-media;"
                  title={`TikTok video ${videoId}`}
                ></iframe>
                <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
            </div>
          ))}
          {videoIds.length === 0 && (
            <div className="text-center text-primary opacity-80 font-light text-base w-full">
              <p>
                No videos available yet! Follow{' '}
                <span className="italic font-ibarra">@cadiet1</span> on TikTok for upcoming fitness content.
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.tiktok.com/@cadiet1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-accent text-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Film className="w-4 h-4 mr-2" />
            Follow on TikTok
          </a>
        </div>
      </div>
    </section>
  );
};
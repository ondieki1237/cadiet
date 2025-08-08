import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Calendar, MapPin, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Gym Instructor & Personal Trainer',
      company: 'Classic Gym 254',
      location: 'Gilgil, Kenya',
      period: '2011 - Present',
      description: 'Providing expert fitness guidance and personalized training programs to diverse clients.',
      achievements: [
        'Designed and implemented personalized workout plans for clients at all fitness levels',
        'Specialized in women\'s muscle-building and fat loss programs',
        'Guided clients through weight loss journeys, helping many lose over 10 kg in under 6 months',
        'Developed specialized programs for post-injury rehabilitation'
      ],
    }
  ];

  const certifications = [
    'Certificate in Fitness Instruction - In Progress via AFAA',
    'CPR & First Aid Certification - In Progress at St John Ambulance Kenya',
    'Nutrition & Wellness Coach Certification',
    'Functional Movement Specialist Certification'
  ];

  return (
    <section id="experience" className="min-h-screen bg-cream relative overflow-x-hidden py-12 sm:py-16 md:py-20">
      {/* Background Pattern with Parallax */}
      <Parallax speed={-10}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23035A52' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </Parallax>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title with Parallax */}
          <Parallax speed={5}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 font-ibarra relative">
                Experience & Certifications
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-primary animate-pulse-glow" />
              </h2>
            </div>
          </Parallax>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Experience Timeline with Parallax */}
            <Parallax speed={-5}>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-8 flex items-center font-ibarra">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-accent mr-2" />
                  Professional Experience
                </h3>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-primary">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full animate-pulse-glow"></div>
                      <div className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in border-2 border-primary" style={{ animationDelay: `${index * 0.2}s` }}>
                        <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 font-ibarra">{exp.title}</h4>
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 text-gray-600 font-glacial text-sm sm:text-base">
                          <span className="font-medium text-primary">{exp.company}</span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-1" />
                            {exp.location}
                          </span>
                          <span className="text-primary font-medium">{exp.period}</span>
                        </div>
                        <p className="text-gray-600 mb-4 font-glacial leading-relaxed text-sm sm:text-base">{exp.description}</p>
                        <ul className="space-y-2 mb-4 sm:mb-6">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start text-gray-600 text-sm sm:text-base font-glacial">
                              <div className="w-2 h-2 bg-accent rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Parallax>

            {/* Certifications with Parallax */}
            <Parallax speed={5}>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-8 flex items-center font-ibarra">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-accent mr-2" />
                  Certifications & Qualifications
                </h3>
                <div className="grid gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-white bg-opacity-90 p-4 sm:p-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-scale-in border-2 border-primary"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent mr-3 flex-shrink-0" />
                        <span className="text-gray-600 text-sm sm:text-base font-glacial">{cert}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-white bg-opacity-90 p-6 sm:p-8 rounded-xl shadow-2xl border-2 border-primary animate-scale-in">
                  <h4 className="text-lg sm:text-xl font-bold text-primary mb-3 font-ibarra">Current Certifications in Progress</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-primary mb-1">AFAA Certificate in Fitness Instruction</h5>
                      <p className="text-gray-600 text-sm mb-2">Online certification with global recognition and practical training for fitness professionals</p>
                      <a href="https://afaa.com/courses/personal-fitness-trainer" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">afaa.com/courses/personal-fitness-trainer</a>
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary mb-1">CPR & First Aid Certification</h5>
                      <p className="text-gray-600 text-sm mb-2">Practical First Aid and CPR training covering emergency response, injury care, and life-saving techniques</p>
                      <div className="text-gray-600 text-sm">
                        <p>St John Ambulance Kenya, Nakuru Branch</p>
                        <p>Contact: 0721 611 555 | Email: info@stjohnkenya.org</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
};
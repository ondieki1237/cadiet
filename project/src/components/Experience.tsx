import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Personal Trainer',
      company: 'Elite Fitness Center',
      location: 'Downtown Gym',
      period: '2022 - Present',
      description: 'Lead trainer responsible for VIP clientele, specializing in strength training and body transformation programs.',
      achievements: ['Increased client retention by 35%', 'Trained 50+ clients to competition level', 'Mentored junior trainers'],
    },
    {
      title: 'Fitness Coach',
      company: 'Community Health Center',
      location: 'Local Community',
      period: '2020 - 2022',
      description: 'Provided group fitness classes and individual coaching sessions for diverse clientele.',
      achievements: ['Managed 15+ weekly group classes', 'Developed injury rehabilitation programs', 'Achieved 95% client satisfaction rate'],
    },
    {
      title: 'Assistant Trainer',
      company: 'FitLife Gymnasium',
      location: 'Sports Complex',
      period: '2019 - 2020',
      description: 'Entry-level position focused on learning advanced training techniques and client management.',
      achievements: ['Completed 500+ training hours', 'Assisted with 100+ client assessments', 'Earned NASM certification'],
    },
  ];

  const certifications = [
    'NASM Certified Personal Trainer (CPT)',
    'Nutrition & Wellness Coach Certification',
    'Functional Movement Screen (FMS) Level 2',
    'CPR & First Aid Certified',
    'TRX Suspension Training Certification',
    'Corrective Exercise Specialist (CES)',
  ];

  return (
    <section id="experience" className="min-h-screen bg-cream relative overflow-x-hidden py-12 sm:py-16 md:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23035A52' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 font-ibarra relative">
              Experience & Certifications
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-primary animate-pulse-glow" />
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Experience Timeline */}
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
                      <div className="text-center">
                        <button className="bg-accent text-primary px-4 sm:px-6 py-2 rounded-full font-glacial text-sm sm:text-base hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
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
                <h4 className="text-lg sm:text-xl font-bold text-primary mb-3 font-ibarra">Continuing Education</h4>
                <p className="text-gray-600 mb-4 font-glacial leading-relaxed text-sm sm:text-base">
                  Committed to staying current with the latest fitness trends, research, and methodologies 
                  through ongoing education and professional development.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm sm:text-base font-glacial">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0" />
                    Annual NASM continuing education requirements
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0" />
                    Monthly fitness industry workshops and seminars
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0" />
                    Regular participation in fitness conventions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
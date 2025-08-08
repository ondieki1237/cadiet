import React from 'react';
import { Truck, UserCheck, Shield, Map, Clock } from 'lucide-react';

export const Driver: React.FC = () => {
  return (
    <section id="driver" className="bg-cream py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23035A52' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary font-ibarra">
            I Drive too!
          </h2>
          <p className="text-lg text-primary opacity-80 mt-4 max-w-2xl mx-auto">
            With a focus on safety, reliability, and professionalism, I bring extensive experience in personal and delivery driving services.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Personal Driver',
                company: 'Wangari’s Family, Gilgil',
                responsibilities: [
                  'Transported family members to various destinations with punctuality and safety as top priorities.',
                  'Ensured vehicle cleanliness and performed basic maintenance checks.',
                  'Managed schedules efficiently to accommodate last-minute changes.',
                ],
                icon: <UserCheck className="w-8 h-8 text-accent" />,
              },
              {
                title: 'Delivery Driver',
                company: 'Crown Courier Services, Kisumu',
                responsibilities: [
                  'Managed and optimized delivery routes for timely shipments.',
                  'Maintained positive customer relations through professional communication.',
                  'Conducted routine vehicle inspections and reported maintenance needs.',
                ],
                icon: <Truck className="w-8 h-8 text-accent" />,
              },
            ].map((job, index) => (
              <div
                key={index}
                className="group bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-opacity-100 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  {job.icon}
                  <div>
                    <h3 className="text-2xl font-semibold text-primary font-ibarra">{job.title}</h3>
                    <p className="text-lg text-primary opacity-70">{job.company}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-primary opacity-80 space-y-2">
                  {job.responsibilities.map((task, i) => (
                    <li key={i} className="text-base">{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-primary font-ibarra mb-8">Key Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Safe Driving', desc: 'Prioritizing road safety', icon: <Shield className="w-6 h-6 text-accent" /> },
              { name: 'Route Planning', desc: 'Optimized navigation', icon: <Map className="w-6 h-6 text-accent" /> },
              { name: 'Time Management', desc: 'Punctual deliveries', icon: <Clock className="w-6 h-6 text-accent" /> },
              { name: 'Customer Service', desc: 'Professional interactions', icon: <UserCheck className="w-6 h-6 text-accent" /> },
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-white bg-opacity-90 backdrop-blur-sm px-4 py-3 rounded-full text-center shadow-lg animate-scale-in hover:bg-opacity-100 transition-all duration-200 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={skill.desc}
                data-tooltip={skill.desc}
              >
                <div className="flex items-center justify-center space-x-2">
                  {skill.icon}
                  <span className="text-primary font-medium text-sm relative inline-block">
                    {skill.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </span>
                </div>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                  {skill.desc}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
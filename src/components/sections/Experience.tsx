
import React, { useRef } from 'react';
import { Code, Network, Server } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "University of Ahmedabad",
      period: "Present",
      description: "Currently I am studying DevOps Engineering at University of Ahmedabad.",
      icon: <Server className="h-6 w-6" />,
      color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
    },
    {
      title: "Networking Engineer",
      company: "University of Ahmedabad",
      period: "Present",
      description: "Learning and implementing networking principles and technologies.",
      icon: <Network className="h-6 w-6" />,
      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
    }
  ];
  
  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto reveal-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground mb-12">
            My professional journey and academic experiences
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative reveal-section">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2"></div>
          
          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-4 md:left-0 ${
                index % 2 === 0 ? 'md:-left-3' : 'md:-right-3'
              } w-6 h-6 rounded-full ${exp.color} flex items-center justify-center z-10`}>
                {exp.icon}
              </div>
              
              {/* Content */}
              <div className="ml-12 md:ml-0 p-4 rounded-lg glass-card interactive-card">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground px-2 py-0.5 rounded-full bg-secondary">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Education section */}
        <div className="mt-20 reveal-section">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Education</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* MCA */}
            <div className="p-4 rounded-lg glass-card interactive-card">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">MCA</h3>
                <span className="text-sm text-muted-foreground px-2 py-0.5 rounded-full bg-secondary">
                  07/2023 - Present
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-2">Gujarat University</p>
            </div>
            
            {/* BCA */}
            <div className="p-4 rounded-lg glass-card interactive-card">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">BCA</h3>
                <span className="text-sm text-muted-foreground px-2 py-0.5 rounded-full bg-secondary">
                  07/2020 - 07/2023
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-2">Vivekanand College</p>
            </div>
            
            {/* HSC */}
            <div className="p-4 rounded-lg glass-card interactive-card">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">HSC (12th)</h3>
                <span className="text-sm text-muted-foreground px-2 py-0.5 rounded-full bg-secondary">
                  03/2020
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-2">Gujarat Board</p>
            </div>
            
            {/* SSC */}
            <div className="p-4 rounded-lg glass-card interactive-card">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">SSC (10th)</h3>
                <span className="text-sm text-muted-foreground px-2 py-0.5 rounded-full bg-secondary">
                  03/2018
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-2">Gujarat Board</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

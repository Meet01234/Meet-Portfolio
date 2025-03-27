
import React, { useRef, useEffect } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Skill categories with their respective skills
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["HTML", "Java", "JavaScript", "CSS", "React.js"]
    },
    {
      name: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS"]
    },
    {
      name: "Tools and Platforms",
      skills: ["Microsoft Office", "Visual Studio", "VS Code", "Browser Developer Tools"]
    },
    {
      name: "Operating Systems",
      skills: ["Windows", "Unix", "Linux"]
    }
  ];
  
  // Languages from resume
  const languages = [
    { name: "English", proficiency: 90 },
    { name: "Hindi", proficiency: 100 },
    { name: "Gujarati", proficiency: 100 }
  ];
  
  // Certifications from resume
  const certifications = [
    "Cisco Networking Technology Specialist - Pearson Certificate 2023",
    "Microsoft Technology Associate",
    "Bridging the frontier of Artificial Intelligence - AI Specialise (BFBGB)",
    "University of AI Programming - Udacity (MJY2012)",
    "Python for Business Professionals - Kaggle (2022)",
    "Learn Python basics for Data Science - Lynda (1120132) - PyCOID in Finance - Coursera"
  ];
  
  // Animation for skill bars
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
            skillBars.forEach((bar) => {
              const barElement = bar as HTMLElement;
              const width = barElement.dataset.width;
              setTimeout(() => {
                barElement.style.width = width || '0%';
              }, 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto reveal-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground mb-12">
            My technical proficiencies and competencies
          </p>
        </div>
        
        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="reveal-section" style={{ transitionDelay: `${index * 100}ms` }}>
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill}</span>
                      <span className="text-xs text-muted-foreground">
                        {75 + Math.floor(Math.random() * 25)}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="skill-bar-fill h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
                        data-width={`${75 + Math.floor(Math.random() * 25)}%`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Languages */}
        <div className="mb-16 reveal-section">
          <h3 className="text-xl font-semibold mb-6 text-center">Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle 
                      className="text-muted stroke-current" 
                      strokeWidth="8" 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="transparent"
                    ></circle>
                    <circle 
                      className="text-primary stroke-current" 
                      strokeWidth="8" 
                      strokeLinecap="round" 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="transparent"
                      strokeDasharray={`${language.proficiency * 2.51} 251.2`}
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)"
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-semibold">{language.proficiency}%</span>
                  </div>
                </div>
                <h4 className="font-medium">{language.name}</h4>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div className="reveal-section">
          <h3 className="text-xl font-semibold mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((certification, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg glass-card hover:border-primary/50 transition-all duration-300"
              >
                <p className="text-sm">{certification}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

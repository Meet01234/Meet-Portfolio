
import React, { useEffect, useRef } from 'react';
import { Code, Shield, Server, Zap } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer for scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal-section');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  // My skills and expertise areas
  const expertiseAreas = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Proficient in HTML, CSS, JavaScript, ReactJS, and creating responsive designs.",
      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Network Security",
      description: "Experienced in ACL, firewalls, intrusion detection, and ethical hacking techniques.",
      color: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Infrastructure Management",
      description: "Skilled in AWS EC2, Chef, and Git for version-controlled infrastructure.",
      color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Software Development",
      description: "Developed projects using Windows, Unix, Linux operating systems and modern frameworks.",
      color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
    }
  ];
  
  return (
    <section id="about" ref={sectionRef} className="py-20">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto reveal-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground mb-12">
            Actively involved backend network administrator seeking a software development position
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* About content */}
          <div className="reveal-section">
            <h3 className="text-xl font-bold mb-4">
              A passionate Computer Engineering student
            </h3>
            <p className="text-muted-foreground mb-4">
              I'm a highly motivated and detail-oriented Computer Engineering Student with a strong foundation in
              network security and software development. I enjoy creating elegant solutions and am passionate about
              technological innovation.
            </p>
            <p className="text-muted-foreground mb-6">
              Currently, I am exploring challenging roles in DevOps Engineering and Networking, where I can contribute
              to organizational growth through my technical expertise while enhancing my skills.
            </p>
            
            {/* Career objective from resume */}
            <div className="p-4 rounded-lg bg-secondary/50 border border-border">
              <h4 className="font-semibold mb-2">Career Objective</h4>
              <p className="text-sm text-muted-foreground">
                Highly motivated and detail-oriented ECE student with a strong foundation in software development, along with
                networking, hardware, and programming background. Seeking to leverage my technical and analytical skills in a
                challenging role to contribute to organizational growth.
              </p>
            </div>
          </div>
          
          {/* Skills and expertise */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 interactive-card reveal-section"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${area.color}`}>
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

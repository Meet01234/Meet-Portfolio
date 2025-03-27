
import React, { useEffect } from 'react';
import { ArrowDown, Code, Download, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import MouseFollower from '@/components/ui/MouseFollower';

const Resume = () => {
  // Enable scroll animations
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
  
  return (
    <div className="min-h-screen pt-24 pb-20">
      <MouseFollower />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-background rounded-xl shadow-lg overflow-hidden glass-card reveal-section">
          {/* Resume header */}
          <div className="p-8 border-b border-border">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Jasmeet Parmar</h1>
                <p className="text-muted-foreground">Computer Engineering Student</p>
              </div>
              
              <a 
                href="#" 
                className="mt-4 md:mt-0 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium flex items-center hover:bg-primary/90 transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:jasminparmarh17@gmail.com" className="hover:text-primary transition-colors">
                  jasminparmarh17@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+918460584775" className="hover:text-primary transition-colors">
                  +91 8460584775
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Gujarat, India 382424</span>
              </div>
              <div className="flex items-center">
                <ExternalLink className="h-4 w-4 mr-2" />
                <a href="https://linkedin.com/in/jasmeet01" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  linkedin.com/in/jasmeet01
                </a>
              </div>
            </div>
          </div>
          
          {/* Resume content */}
          <div className="p-8">
            {/* Career Objective */}
            <section className="mb-8 reveal-section">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-primary/10 p-1 rounded mr-2">
                  <Code className="h-4 w-4 text-primary" />
                </span>
                Career Objective
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Highly motivated and detail-oriented Computer Engineering student with a strong foundation in software development, along with networking, hardware, and programming background. Seeking to leverage my technical and analytical skills in a challenging role to contribute to organizational growth.
              </p>
            </section>
            
            {/* Experience */}
            <section className="mb-8 reveal-section">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-primary/10 p-1 rounded mr-2">
                  <Code className="h-4 w-4 text-primary" />
                </span>
                Work Experience
              </h2>
              
              {/* Experience items */}
              <div className="space-y-4">
                <div className="rounded-lg border border-border p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">DevOps Engineer, Networking Engineer</h3>
                    <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">Present</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Currently I am studying at University of Ahmedabad
                  </p>
                </div>
              </div>
            </section>
            
            {/* Education */}
            <section className="mb-8 reveal-section">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-primary/10 p-1 rounded mr-2">
                  <Code className="h-4 w-4 text-primary" />
                </span>
                Education
              </h2>
              
              <div className="space-y-4">
                <div className="rounded-lg border border-border p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">MCA - Gujarat University</h3>
                    <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">07/2023 - Present</span>
                  </div>
                </div>
                
                <div className="rounded-lg border border-border p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">BCA - Vivekanand College</h3>
                    <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">07/2020 - 07/2023</span>
                  </div>
                </div>
                
                <div className="rounded-lg border border-border p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">HSC (12th)</h3>
                    <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">03/2020</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Gujarat Board</p>
                </div>
                
                <div className="rounded-lg border border-border p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">SSC (10th)</h3>
                    <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">03/2018</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Gujarat Board</p>
                </div>
              </div>
            </section>
            
            {/* Technical Skills */}
            <section className="mb-8 reveal-section">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-primary/10 p-1 rounded mr-2">
                  <Code className="h-4 w-4 text-primary" />
                </span>
                Technical Skills
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Programming Languages</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      HTML, Java, JavaScript, CSS, ReactJS
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Web Technologies</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      HTML, CSS, JavaScript, CSS, ReactJS
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Tools and Platforms</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Microsoft Office, Visual Studio, VS Code, Browser Developer Tools
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Operating Systems</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Windows, Unix, Linux
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Projects */}
            <section className="mb-8 reveal-section">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-primary/10 p-1 rounded mr-2">
                  <Code className="h-4 w-4 text-primary" />
                </span>
                Projects
              </h2>
              
              <div className="space-y-4">
                <div className="rounded-lg border border-border p-4">
                  <h3 className="font-semibold mb-2">AirGuide Tool</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    The objective of this project is to develop an intuitive and effective AirGuide Tool and Presentation
                    Tool for business meetings, allowing interactive navigation of business objectives without needing physical remotes.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="tech-tag">Python</span>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      AI-based gesture recognition
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Touchless navigation system
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Motion detection with deep learning algorithms
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-lg border border-border p-4">
                  <h3 className="font-semibold mb-2">BookingBanquet</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Software application designed to streamline and automate banquet operations, providing a
                    comprehensive solution to enhance customer journey, transaction, and booking process.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="tech-tag">Software Development</span>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Ticket cancellation/refund features
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Comprehensive banquet management
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Customer journey automation
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-lg border border-border p-4">
                  <h3 className="font-semibold mb-2">Infrastructure Automation with Chef & AWS</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Streamlined cloud-based infrastructure management using Chef and Git for version-controlled infrastructure
                    deployments through GitOps patterns.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="tech-tag">AWS</span>
                    <span className="tech-tag">Chef</span>
                    <span className="tech-tag">GitOps</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Certifications */}
            <section className="mb-8 reveal-section">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-primary/10 p-1 rounded mr-2">
                  <Code className="h-4 w-4 text-primary" />
                </span>
                Certifications
              </h2>
              
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                  Cisco Networking Technology Specialist - Pearson Certificate 2023
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                  Microsoft Technology Associate
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                  Bridging the frontier of Artificial Intelligence - AI Specialise (BFBGB)
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                  University of AI Programming - Udacity (MJY2012)
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                  Python for Business Professionals - Kaggle (2022)
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                  Learn Python basics for Data Science - Lynda (1120132) - PyCOID in Finance - Coursera
                </li>
              </ul>
            </section>
            
            {/* Languages */}
            <section className="reveal-section">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-primary/10 p-1 rounded mr-2">
                  <Code className="h-4 w-4 text-primary" />
                </span>
                Languages
              </h2>
              
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-lg border border-border">
                  <span className="font-medium">English</span>
                </div>
                <div className="px-4 py-2 rounded-lg border border-border">
                  <span className="font-medium">Hindi</span>
                </div>
                <div className="px-4 py-2 rounded-lg border border-border">
                  <span className="font-medium">Gujarati</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;


import React, { useEffect } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import MouseFollower from '@/components/ui/MouseFollower';

const Projects = () => {
  // Project data
  const projects = [
    {
      title: "AirGuide Tool",
      description: "The objective of this project is to develop an intuitive and effective AirGuide Tool and Presentation Tool for business meetings, allowing interactive navigation of business objectives without needing physical remotes.",
      technologies: ["Python", "Computer Vision", "Machine Learning"],
      highlights: [
        "AI-based gesture recognition",
        "Touchless navigation system",
        "Motion detection with deep learning algorithms"
      ],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "BookingBanquet",
      description: "Software application designed to streamline and automate banquet operations, providing a comprehensive solution to enhance customer journey, transaction, and booking process.",
      technologies: ["Software Development", "UI/UX", "Database Design"],
      highlights: [
        "Ticket cancellation/refund features",
        "Comprehensive banquet management",
        "Customer journey automation"
      ],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Infrastructure Automation with Chef & AWS",
      description: "Streamlined cloud-based infrastructure management using Chef and AWS for version-controlled infrastructure deployments through GitOps patterns.",
      technologies: ["AWS", "Chef", "GitOps", "Infrastructure as Code"],
      highlights: [
        "Implementing version control",
        "Cloud infrastructure automation",
        "DevOps integration"
      ],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Network Security Implementation",
      description: "Designed and implemented network security solutions using firewalls, ACLs, and intrusion detection systems to protect sensitive data and infrastructure.",
      technologies: ["Networking", "Cybersecurity", "Firewalls"],
      highlights: [
        "Firewall configuration and optimization",
        "Access control lists implementation",
        "Security audit and monitoring"
      ],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Web Development Portfolio",
      description: "Developed responsive web applications using modern frontend frameworks and best practices for performance optimization.",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS"],
      highlights: [
        "Responsive design implementation",
        "Frontend performance optimization",
        "Modern UI/UX practices"
      ],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Data Analysis Dashboard",
      description: "Created interactive data visualization dashboard for business analytics and reporting using Python libraries.",
      technologies: ["Python", "Data Analysis", "Visualization"],
      highlights: [
        "Interactive data visualizations",
        "Real-time data processing",
        "Custom reporting tools"
      ],
      image: "/placeholder.svg",
      link: "#"
    }
  ];
  
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
        <div className="max-w-2xl mx-auto text-center mb-16 reveal-section">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground">
            A showcase of my technical skills, creative problem solving, and project development experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 reveal-section"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project image */}
              <div className="h-48 bg-secondary/70 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-16 h-16 opacity-30"
                />
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Key highlights */}
                <ul className="mb-6 space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-sm flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                {/* Project links */}
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Source Code
                  </a>
                  
                  <a
                    href={project.link}
                    className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                  >
                    View Details
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

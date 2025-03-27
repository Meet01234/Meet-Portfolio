
import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Projects data from the resume
  const projects = [
    {
      title: "AirGuide Tool",
      description: "The objective of this project is to develop an intuitive and effective AirGuide Tool and Presentation Tool for business meetings, allowing interactive navigation of business objectives without needing physical remotes.",
      technologies: ["Python"],
      highlights: [
        "AI-based gesture recognition",
        "Touchless navigation system",
        "Motion detection with deep learning algorithms"
      ],
      link: "#"
    },
    {
      title: "BookingBanquet",
      description: "Software application designed to streamline and automate banquet operations, providing a comprehensive solution to enhance customer journey, transaction, and booking process.",
      technologies: ["Software Development"],
      highlights: [
        "Ticket cancellation/refund features",
        "Comprehensive banquet management",
        "Customer journey automation"
      ],
      link: "#"
    },
    {
      title: "Infrastructure Automation with Chef & AWS",
      description: "Streamlined cloud-based infrastructure management using Chef and AWS for version-controlled infrastructure deployments through GitOps patterns.",
      technologies: ["AWS", "Chef", "GitOps"],
      highlights: [
        "Implementing version control",
        "Cloud infrastructure automation",
        "DevOps integration"
      ],
      link: "#"
    }
  ];
  
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto reveal-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground mb-12">
            Showcasing my technical capabilities and problem-solving skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 reveal-section"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project image/placeholder */}
              <div className="h-48 bg-secondary/70 flex items-center justify-center">
                <span className="font-mono text-2xl opacity-30">Project {index + 1}</span>
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
        
        {/* View all projects button */}
        <div className="text-center mt-12 reveal-section">
          <Link
            to="/projects"
            className="px-6 py-3 bg-secondary text-foreground rounded-md font-medium transition-all hover:scale-105 inline-flex items-center"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

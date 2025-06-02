
import React, { useEffect } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import MouseFollower from '@/components/ui/MouseFollower';

const Projects = () => {
  // Project data
  const projects = [
    {
      title: "Automated Multi-Server CI/CD Pipeline Using Jenkins, Ansible, and Apache",
      description: "Automated CI/CD pipeline using Jenkins, Ansible, and Apache to deploy code across multiple servers with seamless integration and delivery.",
      technologies: ["Jenkins", "Apache", "Ansible", "CI/CD"],
      highlights: [
        "End-to-end CI/CD automation across multiple servers",
        "Infrastructure provisioning and configuration using Ansible",
        "Version-controlled deployments with Jenkins pipelines"
      ],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "AWS-Optimized Nginx Deployment",
      description: "Deployed an Nginx-based web application inside Docker containers on AWS EC2 with Auto Scaling and Route 53 DNS integration.",
      technologies: ["AWS ", "Docker", "Auto Scaling", "Route 53"],
      highlights: [
        "Auto Scaling for high availability under varying loads",
        "Route 53 for domain and DNS routing",
        "Containerized Nginx deployment on EC2"
      ],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "CI/CD Pipeline for Node.js App using Jenkins, Docker & Kubernetes",
      description: "Streamlined cloud-based infrastructure management using Chef and AWS for version-controlled infrastructure deployments through GitOps patterns.",
      technologies: ["Jenkins", "Jenkins", "Kubernetes", "Node.js", "AWS EC2"],
      highlights: [
        "Declarative Jenkins pipeline with GitHub integration",
        "Docker image automation and deployment",
        "Kubernetes YAML-based orchestration"
      ],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Dockerizing the WebSocket Server",
      description: "Built a real-time stock price server using Node.js and Redis, containerized with Docker for scalable deployment.",
      technologies: ["Node.js", "WebSocket", "Docker", "Redis"],
      highlights: [
        "Real-time WebSocket communication",
        "Pub/Sub mechanism using Redis",
        "Docker-based isolation and portability"
      ],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "WordPress Website Deployment Using Docker",
      description: "Deployed WordPress and MySQL using Docker on an AWS EC2 instance with persistent data and container networking.",
      technologies: ["Docker", "WordPress", "EC2", "Docker"],
      highlights: [
        "Isolated containers with Docker networking",
        "Persistent volumes for MySQL and WordPress",
        "EC2 configuration via PuTTY and hosted on port 9090"
      ],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Infrastructure Automation with Chef & Git",
      description: "Automated infrastructure configuration using Chef cookbooks and Git for version control and change tracking.",
      technologies: ["Chef", "Git", "Infra as Code"],
      highlights: [
        "Configuration management via Chef recipes",
        "File lifecycle management (create, update, delete)",
        "Git branching and version control integration"
      ],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Bank Management System",
      description: "A platform for secure and efficient handling of bank accounts, transactions, and customer services.",
      technologies: ["Python", "Software Development"],
      highlights: [
        "User-friendly interface for banking operations",
        "Secure transaction management",
        "Features: account creation, fund transfer, deposit/withdrawal"
      ],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Aptitude Test and Preparation – QuizUp",
      description: "Android application for company-specific aptitude test practice with instant feedback and personalized resources.",
      technologies: ["Android", "UI/UX", "Java"],
      highlights: [
        "Company-wise aptitude practice sets",
        "Real-time quiz evaluation and feedback",
        "Intuitive UI design for better learning experience"
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

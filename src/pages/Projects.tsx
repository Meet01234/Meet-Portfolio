import React, { useEffect } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import MouseFollower from "@/components/ui/MouseFollower";
import Automated_MySQL_Backup_to_S3_via_EC2_Cron from "@/assets/images/Automated-MySQL-Backup-to-S3-via-EC2-Cron PrNo.1.png"; // "./../../assets/images/Automated-MySQL-Backup-to-S3-via-EC2-Cron PrNo.1.png";
import Monitoring_Alerting_Stack_With_Prometheus from "@/assets/images/Monitoring-Alerting-Stack-With-Prometheus PrNo.2.png";
import SonarQube_Auto_Setup_with_PostgreSQL_Nginx_Ubuntu from "@/assets/images/SonarQube-Auto-Setup-with-PostgreSQL-Nginx-Ubuntu-PrNo.3.png";
import CI_CD_Pipeline_for_Python_using_Jenkins_and_SonarQube_on_AWS from "@/assets/images/CI-CD-Pipeline-for-Python-using-Jenkins-and-SonarQube-on-AWS PrNo.4.png";
import Jenkins_Ansible_Apache_CI_CD from "@/assets/images/Jenkins-Ansible-Apache-CI-CD PrNo.5.png";
import AWS_Optimized_Nginx_Deployment_Docker_Route_53_and_Auto_Scaling_EC2 from "@/assets/images/AWS-Optimized Nginx Deployment Docker, Route 53, and Auto-Scaling EC2 PrNo.6.png";
import Auto_Deploy_NodeJS from "@/assets/images/Auto_Deploy_NodeJS PrNo.7.png";
import Realtime_Stock_Websocket_App from "@/assets/images/Realtime-Stock-Websocket-App PrNo.8.png";
import Docker_Wordpress_On_AWS from "@/assets/images/Docker-Wordpress-On-AWS PrNo.9.png";
import Chef_Project_Auto_Clone from "@/assets/images/Chef-Project-Auto-Clone PrNo.10.png";

const Projects = () => {
  // Project data
  const projects = [
    // {
    //   title: "Automated Multi-Server CI/CD Pipeline Using Jenkins, Ansible, and Apache",
    //   description: "Automated CI/CD pipeline using Jenkins, Ansible, and Apache to deploy code across multiple servers with seamless integration and delivery.",
    //   technologies: ["Jenkins", "Apache", "Ansible", "CI/CD"],
    //   highlights: [
    //     "End-to-end CI/CD automation across multiple servers",
    //     "Infrastructure provisioning and configuration using Ansible",
    //     "Version-controlled deployments with Jenkins pipelines"
    //   ],
    //   image: "/placeholder.svg",
    //   link: "#"
    // },
    // {
    //   title: "AWS-Optimized Nginx Deployment",
    //   description: "Deployed an Nginx-based web application inside Docker containers on AWS EC2 with Auto Scaling and Route 53 DNS integration.",
    //   technologies: ["AWS ", "Docker", "Auto Scaling", "Route 53"],
    //   highlights: [
    //     "Auto Scaling for high availability under varying loads",
    //     "Route 53 for domain and DNS routing",
    //     "Containerized Nginx deployment on EC2"
    //   ],
    //   image: "/placeholder.svg",
    //   link: "#"
    // },
    // {
    //   title: "CI/CD Pipeline for Node.js App using Jenkins, Docker & Kubernetes",
    //   description: "Streamlined cloud-based infrastructure management using Chef and AWS for version-controlled infrastructure deployments through GitOps patterns.",
    //   technologies: ["Jenkins", "Jenkins", "Kubernetes", "Node.js", "AWS EC2"],
    //   highlights: [
    //     "Declarative Jenkins pipeline with GitHub integration",
    //     "Docker image automation and deployment",
    //     "Kubernetes YAML-based orchestration"
    //   ],
    //   image: "/placeholder.svg",
    //   link: "#"
    // },
    // {
    //   title: "Dockerizing the WebSocket Server",
    //   description: "Built a real-time stock price server using Node.js and Redis, containerized with Docker for scalable deployment.",
    //   technologies: ["Node.js", "WebSocket", "Docker", "Redis"],
    //   highlights: [
    //     "Real-time WebSocket communication",
    //     "Pub/Sub mechanism using Redis",
    //     "Docker-based isolation and portability"
    //   ],
    //   image: "/placeholder.svg",
    //   link: "#"
    // },
    // {
    //   title: "WordPress Website Deployment Using Docker",
    //   description: "Deployed WordPress and MySQL using Docker on an AWS EC2 instance with persistent data and container networking.",
    //   technologies: ["Docker", "WordPress", "EC2", "Docker"],
    //   highlights: [
    //     "Isolated containers with Docker networking",
    //     "Persistent volumes for MySQL and WordPress",
    //     "EC2 configuration via PuTTY and hosted on port 9090"
    //   ],
    //   image: "/placeholder.svg",
    //   link: "#"
    // },
    // {
    //   title: "Infrastructure Automation with Chef & Git",
    //   description: "Automated infrastructure configuration using Chef cookbooks and Git for version control and change tracking.",
    //   technologies: ["Chef", "Git", "Infra as Code"],
    //   highlights: [
    //     "Configuration management via Chef recipes",
    //     "File lifecycle management (create, update, delete)",
    //     "Git branching and version control integration"
    //   ],
    //   image: "/placeholder.svg",
    //   link: "#"
    // },
    // {
    //   title: "Bank Management System",
    //   description: "A platform for secure and efficient handling of bank accounts, transactions, and customer services.",
    //   technologies: ["Python", "Software Development"],
    //   highlights: [
    //     "User-friendly interface for banking operations",
    //     "Secure transaction management",
    //     "Features: account creation, fund transfer, deposit/withdrawal"
    //   ],
    //   image: "/placeholder.svg",
    //   link: "#"
    // },
    // {
    //   title: "Aptitude Test and Preparation – QuizUp",
    //   description: "Android application for company-specific aptitude test practice with instant feedback and personalized resources.",
    //   technologies: ["Android", "UI/UX", "Java"],
    //   highlights: [
    //     "Company-wise aptitude practice sets",
    //     "Real-time quiz evaluation and feedback",
    //     "Intuitive UI design for better learning experience"
    //   ],
    //   image: "/placeholder.svg",
    //   link: "#"
    // }
    {
      title: "Automated MySQL Backup to S3 via EC2 & Cron",
      description:
        "Automates periodic MySQL database backups from an EC2 instance to an S3 bucket using a shell script and cron job, ensuring reliable and secure data storage.",
      technologies: ["MySQL", "S3", "EC2", "Shell Script", "Cron"],
      highlights: [
        "Automated scheduled MySQL backups",
        "Data backup transfer to AWS S3",
        "Shell script and cron job integration on EC2",
      ],
      image: Automated_MySQL_Backup_to_S3_via_EC2_Cron,
      link: "https://github.com/Meet01234/Automated-MySQL-Backup-to-S3-via-EC2-Cron.git",
    },
    {
      title: "Monitoring & Alerting Stack with Prometheus",
      description:
        "Set up a monitoring and alerting stack with Prometheus, Node Exporter, Blackbox Exporter, and Alertmanager. Includes custom alerts and email notifications for system metrics and service uptime.",
      technologies: [
        "Prometheus",
        "Node Exporter",
        "Blackbox Exporter",
        "Alertmanager",
      ],
      highlights: [
        "System monitoring with Prometheus",
        "Custom alert rules and configurations",
        "Email-based alert notifications via Alertmanager",
      ],
      image: Monitoring_Alerting_Stack_With_Prometheus,
      link: "https://github.com/Meet01234/Monitoring-Alerting-Stack-With-Prometheus.git",
    },
    {
      title: "SonarQube Auto-Setup with PostgreSQL & Nginx (Ubuntu)",
      description:
        "Automated setup of SonarQube on Ubuntu 22.04 using PostgreSQL for database and Nginx as a reverse proxy. Includes PostgreSQL configuration, systemd service setup, and optional SSL via Certbot. Ideal for code quality analysis in DevOps pipelines.",
      technologies: ["SonarQube", "PostgreSQL", "Nginx", "Ubuntu", "Certbot"],
      highlights: [
        "Automated SonarQube deployment on Ubuntu",
        "PostgreSQL setup and integration",
        "Nginx reverse proxy and optional SSL setup",
      ],
      image: SonarQube_Auto_Setup_with_PostgreSQL_Nginx_Ubuntu,
      link: "https://github.com/Meet01234/SonarQube-Auto-Setup-with-PostgreSQL-Nginx-Ubuntu-.git",
    },
    {
      title: "CI/CD Pipeline for Python using Jenkins and SonarQube on AWS",
      description:
        "Built a CI/CD pipeline for Python using Jenkins and SonarQube on AWS. Automated testing, code coverage, and quality analysis. Integrated GitHub with Jenkins and SonarQube for seamless deployments.",
      technologies: ["Python", "Jenkins", "SonarQube", "AWS", "GitHub"],
      highlights: [
        "CI/CD automation for Python on AWS",
        "Integrated Jenkins and SonarQube for quality checks",
        "Code coverage and testing pipeline",
      ],
      image: CI_CD_Pipeline_for_Python_using_Jenkins_and_SonarQube_on_AWS,
      link: "https://github.com/Meet01234/CI-CD-Pipeline-for-Python-using-Jenkins-and-SonarQube-on-AWS.git",
    },
    {
      title:
        "Automated Multi-Server CI/CD Pipeline Using Jenkins, Ansible, and Apache",
      description:
        "Automated CI/CD pipeline using Jenkins, Ansible, and Apache to deploy code across multiple servers with seamless integration and delivery.",
      technologies: ["Jenkins", "Apache", "Ansible", "CI/CD"],
      highlights: [
        "End-to-end CI/CD automation across multiple servers",
        "Infrastructure provisioning and configuration using Ansible",
        "Version-controlled deployments with Jenkins pipelines",
      ],
      image: Jenkins_Ansible_Apache_CI_CD,
      link: "https://github.com/Meet01234/Jenkins-Ansible-Apache-CI-CD.git",
    },
    {
      title:
        "AWS-Optimized Nginx Deployment: Docker, Route 53, and Auto-Scaling EC2",
      description:
        "Deploying an Nginx-based web application inside Docker containers on AWS EC2 with scalability, DNS management, and Auto Scaling.",
      technologies: ["Docker", "Nginx", "Route 53", "EC2", "Auto Scaling"],
      highlights: [
        "DNS management with Route 53",
        "High availability with AWS Auto Scaling",
        "Secure and scalable Nginx deployment via Docker",
      ],
      image:
        AWS_Optimized_Nginx_Deployment_Docker_Route_53_and_Auto_Scaling_EC2,
      link: "#",
    },
    {
      title:
        "CI/CD Pipeline for Node.js App using Jenkins, Docker & Kubernetes",
      description:
        "Real-time CI/CD pipeline: Jenkins builds Docker images on GitHub commits, pushes to Docker Hub, and deploys to Kubernetes cluster on AWS EC2.",
      technologies: ["Jenkins", "Docker", "Kubernetes", "EC2", "GitHub"],
      highlights: [
        "Declarative Jenkinsfile",
        "Kubernetes deployment with YAML files",
        "Fully automated build and deploy pipeline",
      ],
      image: Auto_Deploy_NodeJS,
      link: "https://github.com/Meet01234/Auto_Deploy_NodeJS.git",
    },
    {
      title: "Dockerizing the WebSocket server",
      description:
        "Real-time stock price WebSocket server using Node.js, WebSockets, and Redis with Docker for scalable pub/sub communication.",
      technologies: ["Node.js", "Redis", "WebSocket", "Docker"],
      highlights: [
        "Real-time communication using pub/sub",
        "Docker containerization for deployment",
        "Simulated live stock broadcasting",
      ],
      image: Realtime_Stock_Websocket_App,
      link: "https://github.com/Meet01234/Realtime-Stock-Websocket-App.git",
    },
    {
      title: "WordPress Website Deployment Using Docker",
      description:
        "Hosted WordPress site on EC2 with Docker containers for WordPress and MySQL, using Docker networking and environment variables.",
      technologies: ["WordPress", "MySQL", "Docker", "EC2", "PuTTY"],
      highlights: [
        "Containerized WordPress + MySQL",
        "Persistent storage with Docker volumes",
        "Hosted on port 9090 with isolated containers",
      ],
      image: Docker_Wordpress_On_AWS,
      link: "https://github.com/Meet01234/Docker-Wordpress-On-AWS.git",
    },
    {
      title: "Infrastructure Automation with Chef & Git",
      description:
        "Automated configuration management using Chef recipes and Git version control for scalable infrastructure provisioning.",
      technologies: ["Chef", "Git"],
      highlights: [
        "File creation, update, and deletion via recipes",
        "Git branching & merging for version control",
        "Infrastructure as Code (IaC) implementation",
      ],
      image: Chef_Project_Auto_Clone,
      link: "https://github.com/Meet01234/Chef-Project-Auto-Clone.git",
    },
  ];

  // Enable scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal-section");
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
            A showcase of my technical skills, creative problem solving, and
            project development experience.
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
              {/* <div className="h-48 bg-secondary/70 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-16 h-16 opacity-30"
                />
              </div> */}
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full"
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
                    <li
                      key={highlightIndex}
                      className="text-sm flex items-start"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Project links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Source Code
                  </a>

                  {/* <a
                    href={project.link}
                    className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                  >
                    View Details
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </a> */}
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

import React, { useEffect } from "react";
import {
  ArrowDown,
  Code,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import MouseFollower from "@/components/ui/MouseFollower";

const Resume = () => {
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
        <div className="max-w-4xl mx-auto bg-background rounded-xl shadow-lg overflow-hidden glass-card reveal-section">
          {/* Resume header */}
          <div className="p-8 border-b border-border">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Meet Parmar</h1>
                {/* <p className="text-muted-foreground">Computer Engineering Student</p> */}
                <p className="text-muted-foreground">DevOps Engineer</p>
              </div>

              <a
                href="https://drive.google.com/file/d/1U1PamOYxuXN6XedCDtlmabxpYjiFBeNC/view?usp=drive_link"
                target="_blank"
                className="mt-4 md:mt-0 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium flex items-center hover:bg-primary/90 transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </a>
            </div>

            <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a
                  href="mailto:meetparmar14790@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  meetparmar14790@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a
                  href="tel:+919416514790"
                  className="hover:text-primary transition-colors"
                >
                  +91 9016514790
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center">
                <ExternalLink className="h-4 w-4 mr-2" />
                <a
                  href="https://linkedin.com/in/meet26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/meet26
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
                A results-oriented Fresher DevOps Engineer with a solid
                understanding of DevOps principles and practices. Equipped with
                hands-on experience in automation, continues integration, and
                deployment pipelines, coupled with proficiency in scripting and
                configuration management tools, Skilled in collaborating with
                cross- functional teams to streamline development workflows,
                optimize infrastructure, and enhance system reliability and
                performance.
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
                    <h3 className="font-semibold">
                      DevOps Engineer, Networking Engineer
                    </h3>
                    <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                      01/2025 - Present
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Currently, I am undergoing training and an internship at
                    Amar InfoTech
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
                    <h3 className="font-semibold">MCA - Ganpat University</h3>
                    <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                      09/2023 - 04/2025
                    </span>
                  </div>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">BCA - Vivekanand College</h3>
                    <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                      07/2020 - 05/2023
                    </span>
                  </div>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">HSC (12th)</h3>
                    <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                      03/2020
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Gujarat Board</p>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">SSC (10th)</h3>
                    <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                      03/2017
                    </span>
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
                  <h3 className="font-medium mb-2">
                    Programming Languages & Database
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Python, MySQL
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Web Technologies</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      HTML
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Tools and Platforms</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Microsoft Office, VSCode, Sublime, Git, GitHub, Chef,
                      Docker, Kubernetes, Jenkins, Ansible, Terraform, Grafana,
                      SonarQube, Prometheus
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Operating Systems</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Windows, Unix, Linux, CentOS
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
                  <h3 className="font-semibold mb-2">
                    Automated Multi-Server CI/CD Pipeline Using Jenkins,
                    Ansible, and Apache
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Automated CI/CD pipeline using Jenkins, Ansible, and Apache
                    to deploy code across multiple servers with seamless
                    integration and delivery.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="tech-tag">Jenkins</span>
                    <span className="tech-tag">Apache</span>
                    <span className="tech-tag">Ansible</span>
                    <span className="tech-tag">CI/CD</span>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      End-to-end CI/CD automation across multiple servers
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Infrastructure provisioning and configuration using
                      Ansible
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Version-controlled deployments with Jenkins pipelines
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <h3 className="font-semibold mb-2">
                    AWS-Optimized Nginx Deployment: Docker, Route 53, and
                    Auto-Scaling EC2
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Deploying an Nginx-based web application inside Docker
                    containers on AWS EC2 with scalability, DNS management, and
                    Auto Scaling.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="tech-tag">Docker</span>
                    <span className="tech-tag">Nginx</span>
                    <span className="tech-tag">Route 53</span>
                    <span className="tech-tag">EC2</span>
                    <span className="tech-tag">Auto Scaling</span>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      DNS management with Route 53
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      High availability with AWS Auto Scaling
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Secure and scalable Nginx deployment via Docker
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <h3 className="font-semibold mb-2">
                    CI/CD Pipeline for Node.js App using Jenkins, Docker &
                    Kubernetes
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Real-time CI/CD pipeline: Jenkins builds Docker images on
                    GitHub commits, pushes to Docker Hub, and deploys to
                    Kubernetes cluster on AWS EC2.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="tech-tag">Jenkins</span>
                    <span className="tech-tag">Docker</span>
                    <span className="tech-tag">Kubernetes</span>
                    <span className="tech-tag">EC2</span>
                    <span className="tech-tag">GitHub</span>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Declarative Jenkinsfile
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Kubernetes deployment with YAML files
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Fully automated build and deploy pipeline
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <h3 className="font-semibold mb-2">
                    Dockerizing the WebSocket server
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Real-time stock price WebSocket server using Node.js,
                    WebSockets, and Redis with Docker for scalable pub/sub
                    communication.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Redis</span>
                    <span className="tech-tag">WebSocket</span>
                    <span className="tech-tag">Docker</span>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Real-time communication using pub/sub
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Docker containerization for deployment
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Simulated live stock broadcasting
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <h3 className="font-semibold mb-2">
                    WordPress Website Deployment Using Docker
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Hosted WordPress site on EC2 with Docker containers for
                    WordPress and MySQL, using Docker networking and environment
                    variables.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="tech-tag">WordPress</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">Docker</span>
                    <span className="tech-tag">EC2</span>
                    <span className="tech-tag">PuTTY</span>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Containerized WordPress + MySQL
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Persistent storage with Docker volumes
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Hosted on port 9090 with isolated containers
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <h3 className="font-semibold mb-2">
                    Infrastructure Automation with Chef & Git
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Automated configuration management using Chef recipes and
                    Git version control for scalable infrastructure
                    provisioning.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="tech-tag">Chef</span>
                    <span className="tech-tag">Git</span>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      File creation, update, and deletion via recipes
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Git branching & merging for version control
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Infrastructure as Code (IaC) implementation
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <h3 className="font-semibold mb-2">Bank Management System</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Banking software for managing customer accounts,
                    transactions, and services with secure and user-friendly
                    interfaces.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="tech-tag">Python</span>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Automated account management
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Fund transfers and transaction logs
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Front-End Developer contribution
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <h3 className="font-semibold mb-2">
                    Aptitude Test and Preparation – QuizUp
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Android application for company-specific aptitude test
                    preparation with instant feedback and customized study
                    materials.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="tech-tag">Android</span>
                    <span className="tech-tag">Java</span>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Aptitude practice by company
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Real-time result feedback
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      Front-End Designer contribution
                    </li>
                  </ul>
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
                  Smart Cities Integrating Technology With Rural Life - Research
                  Conclave 2024
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                  Android Using Kotlin - Infosys (04/2024)
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                  Unlocking the Frontiers of Artificial Intelligence - AI
                  Symposium (10/2024)
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                  Bootcamp of iOS Programming - GUNI (10/2023)
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                  Workshop on Introduction to Scientific Computing using Python
                  (11/2023) - IIT Bombay
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                  Python Course for Beginners - Scaler Topic
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                  Introduction to Oracle SQL – Infosys
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                  Basic PL/SQL in Oracle – Infosys
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

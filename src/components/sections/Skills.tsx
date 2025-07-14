import React, { useRef, useEffect } from "react";
import ansible from "../../assets/images/ansible-logo.png";
import centos from "../../assets/images/centos-logo.png";
import chef from "../../assets/images/chef-logo.png";
import docker from "../../assets/images/docker-logo.webp";
import git from "../../assets/images/git-logo.png";
import github from "../../assets/images/github-logo.png";
import grafana from "../../assets/images/grafana-logo.jpeg";
import html from "../../assets/images/html-logo.jpeg";
import jenkins from "../../assets/images/jenkins-logo.jpeg";
import kubernetes from "../../assets/images/kubernetes-logo.png";
import linux from "../../assets/images/linux-logo.jpeg";
import ms_office from "../../assets/images/ms-office-logo.png";
import mysql from "../../assets/images/mysql-logo.jpeg";
import prometheus from "../../assets/images/prometheus-logo.png";
import python from "../../assets/images/python-logo.png";
import sonarqube from "../../assets/images/sonarqube-logo.png";
import sublime from "../../assets/images/sublime-logo.webp";
import terraform from "../../assets/images/terraform.png";
import unix from "../../assets/images/unix-logo.jpeg";
import vscode from "../../assets/images/vscode-logo.png";
import windows from "../../assets/images/windows-logo.png";

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Skill categories with their respective skills
  const skillCategories = [
    {
      name: "Programming Languages & Database",
      skills: [
        { skill: "Python", icon: python, color: "#ddbe4e" },
        { skill: "MySQL", icon: mysql, color: "#00618A" },
      ],
    },
    {
      name: "Web Technologies",
      skills: [{ skill: "HTML", icon: html, color: "#ca4828" }],
    },
    {
      name: "Tools and Platforms",
      skills: [
        { skill: "Microsoft Office", icon: ms_office, color: "#0091E2" },
        { skill: "VSCode", icon: vscode, color: "#1D95E5" },
        { skill: "Sublime", icon: sublime, color: "#0091E2" },
        { skill: "Git", icon: git, color: "#F34F29" },
        { skill: "GitHub", icon: github, color: "#5c5a5a" },
        { skill: "Chef", icon: chef, color: "#0091E2" },
        { skill: "Docker", icon: docker, color: "#0091E2" },
        { skill: "Kubernetes", icon: kubernetes, color: "#0091E2" },
        { skill: "Jenkins", icon: jenkins, color: "#D6A312" },
        { skill: "Ansible", icon: ansible, color: "#FFFFFF" },
        { skill: "Terraform", icon: terraform, color: "#5C4EE5" },
        { skill: "Grafana", icon: grafana, color: "#F15A2A" },
        { skill: "SonarQube", icon: sonarqube, color: "#549DD0" },
        { skill: "Prometheus", icon: prometheus, color: "#F15A2A" },
      ],
    },
    {
      name: "Operating Systems",
      skills: [
        { skill: "Windows", icon: windows, color: "#0091E2" },
        { skill: "Unix", icon: unix, color: "#0091E2" },
        { skill: "Linux", icon: linux, color: "#D6A312" },
        { skill: "CentOS", icon: centos, color: "#0091E2" },
      ],
    },
  ];

  // Languages from resume
  const languages = [
    { name: "English", proficiency: 90 },
    { name: "Hindi", proficiency: 100 },
    { name: "Gujarati", proficiency: 100 },
  ];

  // Certifications from resume
  // const certifications = [
  //   "Cisco Networking Technology Specialist - Pearson Certificate 2023",
  //   "Microsoft Technology Associate",
  //   "Bridging the frontier of Artificial Intelligence - AI Specialise (BFBGB)",
  //   "University of AI Programming - Udacity (MJY2012)",
  //   "Python for Business Professionals - Kaggle (2022)",
  //   "Learn Python basics for Data Science - Lynda (1120132) - PyCOID in Finance - Coursera",
  // ];

  const certifications = [
    "Smart Cities Integrating Technology With Rural Life - Research Conclave 2024",
    "Android Using Kotlin - Infosys (04/2024)",
    "Unlocking the Frontiers of Artificial Intelligence - AI Symposium (10/2024)",
    "Bootcamp of iOS Programming - GUNI (10/2023)",
    "Workshop on Introduction to Scientific Computing using Python (11/2023) - IIT Bombay",
    "Python Course for Beginners - Scaler Topic",
    "Introduction to Oracle SQL – Infosys",
    "Basic PL/SQL in Oracle – Infosys",
  ];

  // Animation for skill bars
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll(".skill-bar-fill");
            skillBars.forEach((bar) => {
              const barElement = bar as HTMLElement;
              const width = barElement.dataset.width;
              setTimeout(() => {
                barElement.style.width = width || "0%";
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground mb-12">
            My technical proficiencies and competencies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="reveal-section"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="flex flex-wrap items-start justify-start gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="space-y-2 rounded-lg text-white hover:scale-105 duration-500 py-3 px-4"
                    style={{ boxShadow: `0 4px 6px ${skill.color}` }}
                    // className={`space-y-2 shadow-md shadow-[${skill.color}] rounded-lg text-white hover:scale-105 duration-500 py-3 px-4`}
                  >
                    <div className="flex flex-col gap-2 items-center">
                      <img src={skill.icon} alt="" className="size-10" />
                      <span className="text-sm font-medium">{skill.skill}</span>
                      {/* <span className="text-xs text-muted-foreground">
                        {75 + Math.floor(Math.random() * 25)}%
                      </span> */}
                    </div>
                    {/* <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        data-width={`${75 + Math.floor(Math.random() * 25)}%`}
                        style={{ width: "0%" }}
                      ></div>
                    </div> */}
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
                    <span className="text-2xl font-semibold">
                      {language.proficiency}%
                    </span>
                  </div>
                </div>
                <h4 className="font-medium">{language.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="reveal-section">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Certifications
          </h3>
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

import React, { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Text animation effect with typewriter style
  useEffect(() => {
    const typingEffect = async () => {
      const elements = document.querySelectorAll(".typing-text");

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement;
        const text = element.getAttribute("data-text") || "";

        element.textContent = "";
        element.classList.add("border-r-2", "border-primary");

        for (let j = 0; j < text.length; j++) {
          await new Promise((resolve) => setTimeout(resolve, 50)); // typing speed
          element.textContent += text[j];
        }

        await new Promise((resolve) => setTimeout(resolve, 500));
        element.classList.remove("border-r-2", "border-primary");
      }
    };

    typingEffect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background decoration elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-tech-foreground/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Hero content */}
          <div className="flex-1 text-center md:text-left space-y-6 max-w-2xl animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tech text-tech-foreground text-sm font-medium mb-4">
              <Terminal className="w-4 h-4 mr-2" />
              <span>Hungry for a Coding Challenge</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-tech-foreground">Meet Parmar</span>
            </h1>

            <div className="h-8">
              {/* <span
                className="typing-text text-xl md:text-2xl text-muted-foreground font-mono"
                data-text="Computer Engineering Student"
              ></span> */}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "I am an ...",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "I am an DevOps Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                // style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
                className="text-xl md:text-2xl text-muted-foreground font-mono"
              />
            </div>

            {/* <p className="text-muted-foreground text-lg max-w-xl">
              A passionate network security enthusiast and software developer
              with expertise in HTML, JavaScript, CSS, ReactJS, and more.
            </p> */}

            <p className="text-muted-foreground text-lg max-w-xl">
              A passionate network security enthusiast with expertise in AWS,
              Version Control, Chef, Docker, Kubernetes, Jenkins, Ansible,
              Terraform.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                to="/resume"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:scale-105 shadow-md flex items-center"
              >
                View Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                to="/projects"
                className="px-6 py-3 bg-secondary text-foreground rounded-md font-medium transition-all hover:scale-105"
              >
                See Projects
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {/* <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">ReactJS</span>
              <span className="tech-tag">Network Security</span> */}

              <span className="tech-tag">Python</span>
              <span className="tech-tag">Microsoft Office</span>
              <span className="tech-tag">VSCode</span>
              <span className="tech-tag">Sublime</span>
              <span className="tech-tag">Git</span>
              <span className="tech-tag">GitHub</span>
              <span className="tech-tag">Chef</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Kubernetes</span>
              <span className="tech-tag">Jenkins</span>
              <span className="tech-tag">Ansible</span>
              <span className="tech-tag">Terraform</span>
              <span className="tech-tag">Grafana</span>
              <span className="tech-tag">SonarQube</span>
              <span className="tech-tag">Prometheus</span>
              <span className="tech-tag">Windows</span>
              <span className="tech-tag">Linux</span>
              <span className="tech-tag">Ubuntu</span>
              <span className="tech-tag">CentOS</span>
            </div>
          </div>

          {/* Hero image/profile */}
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-tech-foreground/20 to-primary/10 rounded-3xl transform rotate-6 scale-105 animate-pulse-slow"></div>
              <div className="glass-card rounded-3xl overflow-hidden p-2 shadow-xl w-64 h-64 md:w-80 md:h-80 animate-float">
                <div className="bg-muted rounded-2xl h-full w-full flex items-center justify-center">
                  <span className="text-2xl font-mono">MP</span>
                </div>
              </div>

              {/* Tech decorations */}
              <div className="absolute -top-4 -right-4 bg-tech text-tech-foreground p-2 rounded-lg rotate-12 animate-float">
                <Terminal className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-muted-foreground text-sm mb-2">
            Scroll Down
          </span>
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

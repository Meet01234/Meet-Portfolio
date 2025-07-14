import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Meet Parmar</h3>
            <p className="text-muted-foreground text-sm">
              Computer Engineering student with a strong foundation in network
              security and software development. Passionate about technological
              innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Meet01234"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://in.linkedin.com/in/meet26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:meetparmar14790@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resume"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Me</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <span className="font-medium">Email:</span>{" "}
                meetparmar14790@gmail.com
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="font-medium">Location:</span> Ahmedabad,
                Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Meet Parmar. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-2 md:mt-0">
            Made with{" "}
            <Heart className="h-3 w-3 mx-1 text-destructive animate-pulse-slow" />{" "}
            by Meet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

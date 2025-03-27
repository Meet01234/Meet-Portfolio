
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];
  
  // Social links
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github className="h-5 w-5" />, 
      url: 'https://github.com/Meet01234'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="h-5 w-5" />, 
      url: 'https://www.linkedin.com/in/meet26'
    },
    { 
      name: 'Email', 
      icon: <Mail className="h-5 w-5" />, 
      url: 'mailto:meetparmar14790@gmail.com'
    }
  ];
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2 glass-card' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-primary rounded-lg w-10 h-10 flex items-center justify-center text-primary-foreground transition-transform group-hover:rotate-12">
            <Code className="h-5 w-5" />
          </div>
          <span className="font-mono font-bold text-xl">Meet Randwa</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`interactive-link text-sm font-medium ${
                    location.pathname === link.path 
                      ? 'text-primary font-semibold' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4 pl-8 border-l border-border">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-16">
          <ul className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) => (
              <li key={link.path} className="w-full text-center">
                <Link 
                  to={link.path}
                  className={`text-xl font-medium ${
                    location.pathname === link.path 
                      ? 'text-primary font-semibold' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            
            {/* Social Links */}
            <li className="w-full pt-6 border-t border-border">
              <div className="flex justify-center space-x-8 pt-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

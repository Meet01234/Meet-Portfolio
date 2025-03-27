
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto reveal-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-12">
            Let's connect! I'm always open to new opportunities and collaborations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact form */}
          <div className="reveal-section">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Hi Meet, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:scale-105 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact info */}
          <div className="space-y-8 reveal-section">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Email</h4>
                    <a 
                      href="mailto:meetparmar14790@gmail.com" 
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      meetparmar14790@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Phone</h4>
                    <a 
                      href="tel:+919016514790" 
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      +91 9016514790
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Location</h4>
                    <p className="text-muted-foreground text-sm">
                      University of Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social links */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/meetparmar" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-2 rounded-md text-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/meetparmar" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-2 rounded-md text-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="mailto:meetparmar14790@gmail.com" 
                    className="bg-secondary p-2 rounded-md text-foreground hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Availability status */}
            <div className="bg-code p-6 rounded-lg border border-border reveal-section">
              <div className="flex items-center mb-2">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <h4 className="font-medium">Currently Available</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently looking for new opportunities in DevOps Engineering and Network Engineering.
                Feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

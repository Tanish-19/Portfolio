import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  FileCode, 
  Video, 
  Database, 
  Coffee,
  Menu,
  X
} from 'lucide-react';
import './index.css';
import profilePic from "./tanish.jpg";
import { useRef } from "react";
import * as emailjs from "@emailjs/browser"; 


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Intersection observer hooks for animations
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Handle scroll event for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle form submission
  const formRef = useRef<HTMLFormElement>(null); // ✅ Declare formRef
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    if (!formRef.current) return;

    emailjs
        .sendForm(
            "service_33bqzq4", // ✅ Your EmailJS Service ID
            "template_6z6v617", // ✅ Your EmailJS Template ID
            formRef.current, 
            "4FAQaNAaZFVOPpBKy" // ✅ Your Public Key
        )
        .then(
            (response: emailjs.EmailJSResponseStatus) => {  // ✅ Add correct type
                alert("Message Sent Successfully!");
                console.log("SUCCESS!", response);
                formRef.current?.reset(); // ✅ Clear form after sending
            },
            (error: Error) => {  // ✅ Add correct type for error
                alert("Failed to Send Message. Please try again!");
                console.error("FAILED...", error);
            }
        );
};


  return (
    <>
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="nav">
            <div className="logo">Tanish.dev</div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
              <li><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tanish Patgaonkar
            </motion.h1>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A passionate developer specializing in Video Editing, DSA, Java, Web Development, and C Language.
            </motion.p>
            <motion.div 
              className="hero-btns"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </motion.div>
          </motion.div>
          <motion.img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
            alt="Hero Image" 
            className="hero-img"
            initial={{ opacity: 0, x: 100 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content" ref={aboutRef}>
            <motion.div 
              className="about-img-container"
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={profilePic} 
                alt="Tanish Patgaonkar" 
                className="about-img"
              />
            </motion.div>
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h3>Who am I?</h3>
              <p>
                I am Tanish Patgaonkar, a passionate developer and problem solver with expertise in multiple domains. 
                With a strong foundation in computer science and a keen eye for detail, I strive to create efficient 
                and elegant solutions to complex problems.
              </p>
              <p>
                My journey in technology has equipped me with a diverse skill set, allowing me to tackle challenges 
                from different angles. I believe in continuous learning and staying updated with the latest technologies 
                and best practices.
              </p>
            </motion.div>
          </div>

          {/* Skills */}
          <div className="skills" ref={skillsRef}>
            <motion.div 
              className="skill-item"
              initial={{ opacity: 0, y: 30 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="skill-icon">
                <Video size={40} />
              </div>
              <h3 className="skill-title">Video Editing</h3>
              <p className="skill-description">
                Creating engaging and professional video content with attention to detail and storytelling.
              </p>
            </motion.div>

            <motion.div 
              className="skill-item"
              initial={{ opacity: 0, y: 30 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="skill-icon">
                <Database size={40} />
              </div>
              <h3 className="skill-title">DSA</h3>
              <p className="skill-description">
                Strong understanding of data structures and algorithms for efficient problem-solving.
              </p>
            </motion.div>

            <motion.div 
              className="skill-item"
              initial={{ opacity: 0, y: 30 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="skill-icon">
                <Coffee size={40} />
              </div>
              <h3 className="skill-title">Java</h3>
              <p className="skill-description">
                Proficient in Java programming with experience in building robust applications.
              </p>
            </motion.div>

            <motion.div 
              className="skill-item"
              initial={{ opacity: 0, y: 30 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="skill-icon">
                <Code size={40} />
              </div>
              <h3 className="skill-title">Web Development</h3>
              <p className="skill-description">
                Creating responsive and interactive web applications using modern technologies.
              </p>
            </motion.div>

            <motion.div 
              className="skill-item"
              initial={{ opacity: 0, y: 30 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="skill-icon">
                <FileCode size={40} />
              </div>
              <h3 className="skill-title">C Language</h3>
              <p className="skill-description">
                Strong foundation in C programming for system-level development and optimization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid" ref={projectsRef}>
            <motion.div 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="E-commerce Platform" 
                className="project-img"
              />
              <div className="project-content">
                <h3 className="project-title">E-commerce Platform</h3>
                <p className="project-category">Web Development</p>
                <p className="project-description">
                  A full-featured e-commerce platform with product catalog, shopping cart, and secure checkout.
                </p>
                <div className="project-links">
                  <a href="#" className="btn btn-primary">View Project</a>
                  <a href="#" className="btn btn-secondary">Source Code</a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Algorithm Visualizer" 
                className="project-img"
              />
              <div className="project-content">
                <h3 className="project-title">Algorithm Visualizer</h3>
                <p className="project-category">DSA / Web Development</p>
                <p className="project-description">
                  Interactive tool for visualizing various sorting and pathfinding algorithms.
                </p>
                <div className="project-links">
                  <a href="#" className="btn btn-primary">View Project</a>
                  <a href="#" className="btn btn-secondary">Source Code</a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Video Editing Portfolio" 
                className="project-img"
              />
              <div className="project-content">
                <h3 className="project-title">Video Editing Portfolio</h3>
                <p className="project-category">Video Editing</p>
                <p className="project-description">
                  Collection of professionally edited videos showcasing various styles and techniques.
                </p>
                <div className="project-links">
                  <a href="#" className="btn btn-primary">View Project</a>
                  <a href="#" className="btn btn-secondary">Source Code</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content" ref={contactRef}>
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h3>Let's Talk</h3>
              <p>
                Feel free to reach out to me for any inquiries, collaborations, or just to say hello. 
                I'm always open to discussing new projects and opportunities.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <span>tanishpatgaonkar@gmail.com</span>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <span>+91 8329259944</span>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <span>Kolhapur, India</span>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/tanish-patgaonkar-434b44302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" name="user_name" id="name" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" name="user_email" id="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="tel" name="user_contact" id="phone" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea name="user_message" id="message" className="form-control" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Tanish.dev</div>
            <p className="footer-text">
              Thank you for visiting my portfolio. Let's create something amazing together!
            </p>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
            <div className="footer-social">
              <a href="https://github.com/" className="social-link" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/" className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
            <p className="copyright">
              &copy; {new Date().getFullYear()} Tanish Patgaonkar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
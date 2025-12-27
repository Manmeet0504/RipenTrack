import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>RipenTrack</h3>
          <p>IoT-Based Fruit Ripeness Detection System</p>
          <p>Final Year Engineering Project</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/project">Project Details</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Technology Stack</h4>
          <ul>
            <li>ESP32 Microcontroller</li>
            <li>AS7341 Spectral Sensor</li>
            <li>Flask Backend</li>
            <li>Machine Learning</li>
            <li>React.js Frontend</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="#" aria-label="GitHub"><FaGithub /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Email"><FaEnvelope /></a>
            <a href="#" aria-label="Phone"><FaPhone /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 RipenTrack Team. All rights reserved. | Thapar Institute of Engineering & Technology</p>
      </div>
    </footer>
  );
};

export default Footer;
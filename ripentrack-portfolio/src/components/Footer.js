import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">RipenTrack</h3>
            <p className="footer-description">
              IoT-powered fruit ripeness detection system combining hardware innovation 
              with machine learning to revolutionize agricultural monitoring.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Project</h4>
            <ul className="footer-links">
              <li><a href="#overview">Overview</a></li>
              <li><a href="#architecture">Architecture</a></li>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#results">Results</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Team</h4>
            <ul className="footer-links">
              <li><a href="#team">Team Members</a></li>
              <li><a href="#mentor">Mentor</a></li>
              <li><a href="#contributions">Contributions</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Documentation</h4>
            <ul className="footer-links">
              <li><a href="#research-paper">Research Paper</a></li>
              <li><a href="#technical-docs">Technical Docs</a></li>
              <li><a href="#code-repository">Code Repository</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 RipenTrack Team. Final Year Engineering Project - TIET.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🍎 RipenTrack 🍌</h3>
          <p>IoT-Based Fruit Ripeness Detection System 🥝</p>
          <p>Final Year Engineering Project 🎓</p>
        </div>

        <div className="footer-section">
          <h4>🔗 Quick Links</h4>
          <ul>
            <li><a href="/">Home 🏠</a></li>
            <li><a href="/about">About 📖</a></li>
            <li><a href="/project">Project Details 🚀</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>⚙️ Technology Stack</h4>
          <ul>
            <li>ESP32 Microcontroller 🔌</li>
            <li>AS7341 Spectral Sensor 🌈</li>
            <li>Flask Backend 🐍</li>
            <li>Machine Learning 🤖</li>
            <li>React.js Frontend ⚛️</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>🌐 Connect</h4>
          <div className="social-links">
            <a href="https://github.com/Manmeet0504" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/manmeet-singh-a8681b204" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>🍊 &copy; 2024 RipenTrack 🍇 | Thapar Institute of Engineering & Technology 🎓</p>
      </div>
    </footer>
  );
};

export default Footer;
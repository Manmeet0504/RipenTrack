import React from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaMicrochip, FaBrain, FaWifi } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              <span className="emoji">🍎</span> RipenTrack <span className="emoji">🍌</span><br />
              IoT Fruit Ripeness Detection <span className="emoji">🥝</span>
            </h1>
            <p className="hero-subtitle">
              <span className="emoji">🌱</span> Final year engineering project showcasing an IoT solution that integrates spectral sensors, machine learning, and web technologies for automated fruit ripeness detection in smart agriculture. <span className="emoji">🚜</span>
            </p>
            <div className="demo-notice">
              <span className="emoji">ℹ️</span> <strong>Portfolio Demo:</strong> This website demonstrates the project's capabilities and technical architecture. The actual hardware implementation uses ESP32 microcontroller with AS7341 sensor for real-time fruit analysis.
            </div>
            <div className="hero-buttons">
              <a href="/about" className="btn btn-primary">See How It Works</a>
              <a href="/project" className="btn btn-secondary">View Details</a>
            </div>
          </motion.div>

          <motion.div
            className="floating-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="device-mockup">
              <div className="device-screen">
                <div className="device-title"><span className="emoji">🎓</span> Final Year Project</div>
                <div className="status-grid">
                  <div className="status-item">
                    <div className="status-label">Project Type</div>
                    <div className="status-value">IoT + ML</div>
                  </div>
                  <div className="status-item">
                    <div className="status-label">Accuracy</div>
                    <div className="status-value quality-value">95%</div>
                  </div>
                  <div className="status-item">
                    <div className="status-label">Tech Stack</div>
                    <div className="status-value">ESP32 + AI</div>
                  </div>
                  <div className="status-item">
                    <div className="status-label">Sensor Type</div>
                    <div className="status-value ripeness-value">AS7341</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title"><span className="emoji">🌟</span> Key Features <span className="emoji">🌟</span></h2>
        <p className="section-subtitle">Innovative technology stack powering smart agriculture <span className="emoji">🍊🍇</span></p>

        <div className="features-grid">
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon-wrapper">
              <FaSeedling className="feature-icon" style={{ color: '#66bb6a' }} />
            </div>
            <h3><span className="emoji">🍎</span> Smart Agriculture</h3>
            <p>Innovative IoT solution for non-invasive fruit ripeness detection</p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon-wrapper">
              <FaMicrochip className="feature-icon" style={{ color: '#66bb6a' }} />
            </div>
            <h3><span className="emoji">🔧</span> IoT Hardware</h3>
            <p>ESP32 microcontroller with AS7341 11-channel spectral sensor</p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon-wrapper">
              <FaBrain className="feature-icon" style={{ color: '#66bb6a' }} />
            </div>
            <h3><span className="emoji">🧠</span> Machine Learning</h3>
            <p>Deep learning model with 95% accuracy for ripeness classification</p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon-wrapper">
              <FaWifi className="feature-icon" style={{ color: '#66bb6a' }} />
            </div>
            <h3><span className="emoji">☁️</span> Cloud Integration</h3>
            <p>WiFi-enabled data transmission to web-based analytics platform</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2 className="section-title"><span className="emoji">⚙️</span> How It Works <span className="emoji">🔬</span></h2>
        <p className="section-subtitle">Simple process, powerful results <span className="emoji">🍓</span></p>

        <div className="steps-container">
          <motion.div
            className="step-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="step-number">1</div>
            <h3><span className="emoji">📊</span> Data Collection</h3>
            <p>AS7341 spectral sensor captures 11-channel light wavelength data from fruit surface</p>
          </motion.div>

          <motion.div
            className="step-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="step-number">2</div>
            <h3><span className="emoji">⚡</span> Processing</h3>
            <p>ESP32 processes sensor data and transmits via WiFi to Flask backend</p>
          </motion.div>

          <motion.div
            className="step-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="step-number">3</div>
            <h3><span className="emoji">🤖</span> AI Analysis</h3>
            <p>Machine learning model classifies ripeness stage with 95% accuracy</p>
          </motion.div>

          <motion.div
            className="step-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="step-number">4</div>
            <h3><span className="emoji">📱</span> Real-time Results</h3>
            <p>Dashboard displays ripeness percentage and quality classification</p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="overview">
        <div className="overview-content">
          <div className="overview-text">
            <h2><span className="emoji">🎯</span> Project Overview <span className="emoji">🍒</span></h2>
            <p>
              RipenTrack represents our final-year engineering capstone project, combining IoT hardware, machine learning, and web technologies to create an automated fruit ripeness detection system. <span className="emoji">🍑</span>
            </p>
            <p>
              The system uses an ESP32 microcontroller paired with an AS7341 spectral color sensor to capture detailed light wavelength data from fruits, which is then processed by our trained ML model to determine ripeness stages. <span className="emoji">🥭</span>
            </p>
            <ul>
              <li><span className="emoji">📊</span> Real-time spectral data collection</li>
              <li><span className="emoji">🤖</span> AI-powered ripeness classification</li>
              <li><span className="emoji">💻</span> Web-based monitoring dashboard</li>
            </ul>
          </div>

          <div className="overview-stats">
            <div className="stat-card">
              <h3>95% <span className="emoji">🎯</span></h3>
              <p>Accuracy Rate</p>
            </div>
            <div className="stat-card">
              <h3>4 <span className="emoji">🍎</span></h3>
              <p>Ripeness Stages</p>
            </div>
            <div className="stat-card">
              <h3>11 <span className="emoji">📊</span></h3>
              <p>Spectral Channels</p>
            </div>
            <div className="stat-card">
              <h3><span className="emoji">⚡</span> Real-time</h3>
              <p>Data Processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2><span className="emoji">🚀</span> Explore the Technology <span className="emoji">🔬</span></h2>
          <p>Learn more about our IoT fruit ripeness detection system <span className="emoji">🍓🍊</span></p>
          <a href="/project" className="cta-button">View Project Details <span className="emoji">📖</span></a>
        </div>
      </section>
    </div>
  );
};

export default Home;

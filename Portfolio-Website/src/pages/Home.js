import React from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaMicrochip, FaBrain, FaWifi } from 'react-icons/fa';
import './Home.css';

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
              🍎 RipenTrack 🍌<br />
              <span className="gradient-text">IoT Fruit Ripeness Detection 🥝</span>
            </h1>
            <p className="hero-subtitle">
              🌱 Final year engineering project showcasing an IoT solution that integrates spectral sensors, machine learning, and web technologies for automated fruit ripeness detection in smart agriculture. 🚜
            </p>
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
                <div className="device-title">ESP32</div>
                <div className="status-grid">
                  <div className="status-item">
                    <div className="status-label">Ripeness</div>
                    <div className="status-value ripeness-value">85%</div>
                  </div>
                  <div className="status-item">
                    <div className="status-label">Quality</div>
                    <div className="status-value quality-value">Good</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">🌟 Key Features 🌟</h2>
        <p className="section-subtitle">Innovative technology stack powering smart agriculture 🍊🍇</p>
        
        <div className="features-grid">
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon-wrapper">
              <FaSeedling className="feature-icon" />
            </div>
            <h3>🍎 Smart Agriculture</h3>
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
              <FaMicrochip className="feature-icon" />
            </div>
            <h3>🔧 IoT Hardware</h3>
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
              <FaBrain className="feature-icon" />
            </div>
            <h3>🧠 Machine Learning</h3>
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
              <FaWifi className="feature-icon" />
            </div>
            <h3>☁️ Cloud Integration</h3>
            <p>WiFi-enabled data transmission to web-based analytics platform</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2 className="section-title">⚙️ How It Works 🔬</h2>
        <p className="section-subtitle">Simple process, powerful results 🍓</p>

        <div className="steps-container">
          <motion.div
            className="step-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="step-number">1</div>
            <h3>📊 Data Collection</h3>
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
            <h3>⚡ Processing</h3>
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
            <h3>🤖 AI Analysis</h3>
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
            <h3>📱 Real-time Results</h3>
            <p>Dashboard displays ripeness percentage and quality classification</p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="overview">
        <div className="overview-content">
          <div className="overview-text">
            <h2>🎯 Project Overview 🍒</h2>
            <p>
              RipenTrack represents our final-year engineering capstone project, combining IoT hardware, machine learning, and web technologies to create an automated fruit ripeness detection system. 🍑
            </p>
            <p>
              The system uses an ESP32 microcontroller paired with an AS7341 spectral color sensor to capture detailed light wavelength data from fruits, which is then processed by our trained ML model to determine ripeness stages. 🥭
            </p>
            <ul>
              <li>✅ Real-time spectral data collection</li>
              <li>✅ AI-powered ripeness classification</li>
              <li>✅ Web-based monitoring dashboard</li>
            </ul>
          </div>

          <div className="overview-stats">
            <div className="stat-card">
              <h3>95% 🎯</h3>
              <p>Accuracy Rate</p>
            </div>
            <div className="stat-card">
              <h3>4 🍎</h3>
              <p>Ripeness Stages</p>
            </div>
            <div className="stat-card">
              <h3>11 📊</h3>
              <p>Spectral Channels</p>
            </div>
            <div className="stat-card">
              <h3>⚡ Real-time</h3>
              <p>Data Processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>🚀 Explore the Technology 🔬</h2>
          <p>Learn more about our IoT fruit ripeness detection system 🍓🍊</p>
          <a href="/project" className="cta-button">View Project Details 📖</a>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaMicrochip, FaBrain, FaWifi } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <FaLeaf />,
      title: "🍎 Smart Agriculture",
      description: "Innovative IoT solution for non-invasive fruit ripeness detection"
    },
    {
      icon: <FaMicrochip />,
      title: "🔧 IoT Hardware",
      description: "ESP32 microcontroller with AS7341 11-channel spectral sensor"
    },
    {
      icon: <FaBrain />,
      title: "🧠 Machine Learning",
      description: "Deep learning model with 95% accuracy for ripeness classification"
    },
    {
      icon: <FaWifi />,
      title: "☁️ Cloud Integration",
      description: "WiFi-enabled data transmission to web-based analytics platform"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <h1 className="hero-title">
                <span className="gradient-text">RipenTrack</span>
                <br />
                IoT Fruit Ripeness Detection
              </h1>
              <p className="hero-subtitle">
                Final year engineering project showcasing an IoT solution that integrates spectral sensors, 
                machine learning, and web technologies for automated fruit ripeness detection in smart agriculture.
              </p>
              <div className="hero-buttons">
                <motion.a
                  href="/demo"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See How It Works
                </motion.a>
                <motion.a
                  href="/project"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-image"
            >
              <div className="floating-card">
                <div className="sensor-simulation">
                  <div className="esp32-board"></div>
                  <div className="sensor-readings">
                    <div className="reading">
                      <span>Ripeness</span>
                      <span className="value">85%</span>
                    </div>
                    <div className="reading">
                      <span>Quality</span>
                      <span className="value">Good</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Key Features</h2>
            <p>Innovative technology stack powering smart agriculture</p>
          </motion.div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="feature-card"
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container">
          <div className="overview-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="overview-text"
            >
              <h2>Project Overview</h2>
              <p>
                RipenTrack represents our final-year engineering capstone project, 
                combining IoT hardware, machine learning, and web technologies to 
                create an automated fruit ripeness detection system.
              </p>
              <p>
                The system uses an ESP32 microcontroller paired with an AS7341 
                spectral color sensor to capture detailed light wavelength data 
                from fruits, which is then processed by our trained ML model to 
                determine ripeness stages.
              </p>
              <ul className="overview-features">
                <li>Real-time spectral data collection</li>
                <li>AI-powered ripeness classification</li>
                <li>Web-based monitoring dashboard</li>
                <li>Scalable IoT architecture</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="overview-stats"
            >
              <div className="stat-card">
                <h3>95%</h3>
                <p>Accuracy Rate</p>
              </div>
              <div className="stat-card">
                <h3>4</h3>
                <p>Ripeness Stages</p>
              </div>
              <div className="stat-card">
                <h3>11</h3>
                <p>Spectral Channels</p>
              </div>
              <div className="stat-card">
                <h3>Real-time</h3>
                <p>Data Processing</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="cta-content"
          >
            <h2>Explore the Project</h2>
            <p>Discover how our IoT system works and the technology behind it</p>
            <motion.a
              href="/demo"
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Demonstration
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
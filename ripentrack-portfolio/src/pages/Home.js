import React from 'react';
import { Link } from 'react-router-dom';
import { FiCpu, FiWifi, FiZap, FiTrendingUp, FiDatabase, FiSmartphone } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>RipenTrack</h1>
          <p>
            IoT-powered fruit ripeness detection system combining ESP32 hardware,
            spectral color sensing, and machine learning to revolutionize agricultural monitoring.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/simulation" className="btn btn-primary">
              Try Live Demo
            </Link>
            <Link to="/project" className="btn btn-secondary">
              View Project Details
            </Link>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Project Overview</h2>
          <p className="section-subtitle">
            A comprehensive IoT solution that integrates hardware sensors with web applications
            to detect and classify fruit ripeness stages using advanced spectral analysis and machine learning.
          </p>
          
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">
                <FiCpu />
              </div>
              <h3 className="feature-title">IoT Hardware</h3>
              <p className="feature-description">
                ESP32 microcontroller with AS7341 11-channel spectral color sensor
                for precise fruit analysis and data collection.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FiDatabase />
              </div>
              <h3 className="feature-title">Machine Learning</h3>
              <p className="feature-description">
                Advanced neural network model trained on spectral data to classify
                fruit ripeness stages with high accuracy.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FiSmartphone />
              </div>
              <h3 className="feature-title">Web Application</h3>
              <p className="feature-description">
                Flask-based web interface for real-time monitoring, data visualization,
                and remote system control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <div className="tech-stack">
            <div className="tech-item">ESP32</div>
            <div className="tech-item">AS7341 Sensor</div>
            <div className="tech-item">Python</div>
            <div className="tech-item">Flask</div>
            <div className="tech-item">TensorFlow/Keras</div>
            <div className="tech-item">React.js</div>
            <div className="tech-item">Arduino IDE</div>
            <div className="tech-item">Machine Learning</div>
            <div className="tech-item">IoT</div>
            <div className="tech-item">Spectral Analysis</div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="grid grid-2">
            <div className="feature-card">
              <div className="feature-icon">
                <FiWifi />
              </div>
              <h3 className="feature-title">Real-time Monitoring</h3>
              <p className="feature-description">
                Continuous monitoring of fruit ripeness with real-time data transmission
                to the web dashboard for immediate insights.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FiZap />
              </div>
              <h3 className="feature-title">Spectral Analysis</h3>
              <p className="feature-description">
                11-channel spectral color sensor captures detailed light wavelength data
                for precise ripeness classification.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FiTrendingUp />
              </div>
              <h3 className="feature-title">Predictive Analytics</h3>
              <p className="feature-description">
                Machine learning model predicts ripeness stages: early ripe, partially ripe,
                ripe, and decay with high accuracy.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FiDatabase />
              </div>
              <h3 className="feature-title">Data Management</h3>
              <p className="feature-description">
                Comprehensive data collection, storage, and analysis with historical
                tracking and trend visualization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>95%</h3>
              <p>Model Accuracy</p>
            </div>
            <div className="stat-item">
              <h3>11</h3>
              <p>Spectral Channels</p>
            </div>
            <div className="stat-item">
              <h3>4</h3>
              <p>Ripeness Classes</p>
            </div>
            <div className="stat-item">
              <h3>Real-time</h3>
              <p>Data Processing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

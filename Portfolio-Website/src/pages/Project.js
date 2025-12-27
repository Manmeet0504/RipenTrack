import React from 'react';
import { motion } from 'framer-motion';
import { FaMicrochip, FaBrain, FaCode, FaChartLine } from 'react-icons/fa';
import '../styles/Project.css';

const Project = () => {
  const techStack = [
    {
      category: "Hardware",
      icon: <FaMicrochip />,
      technologies: [
        { name: "ESP32 Microcontroller", description: "32-bit microcontroller with built-in Wi-Fi and Bluetooth" },
        { name: "AS7341 Spectral Sensor", description: "11-channel spectral color sensor for precise light wavelength detection" },
        { name: "Potentiometer", description: "Manual adjustment control for sensor calibration" }
      ]
    },
    {
      category: "Backend",
      icon: <FaCode />,
      technologies: [
        { name: "Flask Framework", description: "Python web framework for REST API development" },
        { name: "Python", description: "Core programming language for backend logic" },
        { name: "Arduino IDE", description: "Development environment for ESP32 programming" }
      ]
    },
    {
      category: "Machine Learning",
      icon: <FaBrain />,
      technologies: [
        { name: "TensorFlow/Keras", description: "Deep learning framework for model development" },
        { name: "Neural Networks", description: "Multi-class classification for ripeness stages" },
        { name: "Data Preprocessing", description: "Spectral data normalization and feature extraction" }
      ]
    },
    {
      category: "Frontend",
      icon: <FaChartLine />,
      technologies: [
        { name: "React.js", description: "Modern JavaScript framework for user interfaces" },
        { name: "Chart.js", description: "Data visualization for real-time sensor readings" },
        { name: "Responsive Design", description: "Mobile-friendly web application interface" }
      ]
    }
  ];

  const systemArchitecture = [
    {
      layer: "Sensor Layer",
      components: ["ESP32 Microcontroller", "AS7341 Spectral Sensor", "WiFi Communication"],
      description: "Hardware components for data collection and wireless transmission"
    },
    {
      layer: "Communication Layer", 
      components: ["HTTP Requests", "JSON Data Format", "Real-time Streaming"],
      description: "Data transmission protocols and formats"
    },
    {
      layer: "Processing Layer",
      components: ["Flask API Server", "Machine Learning Model", "Data Validation"],
      description: "Backend processing and AI inference"
    },
    {
      layer: "Presentation Layer",
      components: ["React Web App", "Data Visualization", "User Dashboard"],
      description: "User interface and data presentation"
    }
  ];

  const mlModel = {
    inputFeatures: [
      "F1 (415nm) - Violet light wavelength",
      "F2 (445nm) - Blue light wavelength", 
      "F3 (480nm) - Blue-cyan wavelength",
      "F4 (515nm) - Green wavelength",
      "F5 (555nm) - Green-yellow wavelength",
      "F6 (590nm) - Yellow wavelength",
      "F7 (630nm) - Orange wavelength",
      "F8 (680nm) - Red wavelength",
      "Clear channel - Overall light intensity",
      "NIR - Near-infrared wavelength"
    ],
    outputClasses: [
      { name: "Early Ripe", description: "Initial ripening stage, green appearance" },
      { name: "Partially Ripe", description: "Transitional stage with mixed colors" },
      { name: "Ripe", description: "Optimal ripeness for consumption" },
      { name: "Decay", description: "Over-ripe or spoiled condition" }
    ],
    performance: {
      accuracy: "95%",
      precision: "92%",
      recall: "94%",
      f1Score: "93%"
    }
  };

  return (
    <div className="project">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>🔬 Technical Architecture 🚀</h1>
            <p className="hero-subtitle">
              Comprehensive breakdown of our IoT fruit ripeness detection system 🍎, 
              from hardware components to machine learning implementation 🤖.
            </p>
          </motion.div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="system-architecture">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>⚙️ System Architecture 🏗️</h2>
            <p>Multi-layered architecture ensuring scalability and reliability 🚜📊</p>
          </motion.div>
          
          <div className="architecture-layers">
            {systemArchitecture.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="architecture-layer"
              >
                <div className="layer-info">
                  <h3>{layer.layer}</h3>
                  <p>{layer.description}</p>
                  <ul>
                    {layer.components.map((component, i) => (
                      <li key={i}>{component}</li>
                    ))}
                  </ul>
                </div>
                <div className="layer-visual">
                  <div className={`layer-box layer-${index + 1}`}>
                    <span>{layer.layer}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="tech-stack">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>💻 Technology Stack 🛠️</h2>
            <p>Cutting-edge technologies powering our IoT solution 🍇⚡</p>
          </motion.div>
          
          <div className="tech-categories">
            {techStack.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="tech-category"
              >
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.category}</h3>
                </div>
                <div className="tech-list">
                  {category.technologies.map((tech, i) => (
                    <div key={i} className="tech-item">
                      <h4>{tech.name}</h4>
                      <p>{tech.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Learning Model */}
      <section className="ml-model">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>🧠 Machine Learning Model 🤖</h2>
            <p>AI-powered classification system for ripeness detection 🍎📊</p>
          </motion.div>
          
          <div className="ml-content">
            <div className="ml-grid">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="input-features"
              >
                <h3>📊 Input Features (10 Spectral Channels) 🌈</h3>
                <div className="features-list">
                  {mlModel.inputFeatures.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-name">{feature.split(' - ')[0]}</span>
                      <span className="feature-desc">{feature.split(' - ')[1]}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="output-classes"
              >
                <h3>🎯 Output Classification 🍏</h3>
                <div className="classes-list">
                  {mlModel.outputClasses.map((cls, index) => (
                    <div key={index} className="class-item">
                      <h4>{cls.name}</h4>
                      <p>{cls.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="model-performance"
            >
              <h3>📈 Model Performance Metrics 🎯</h3>
              <div className="metrics-grid">
                <div className="metric">
                  <span className="metric-value">{mlModel.performance.accuracy}</span>
                  <span className="metric-label">Accuracy</span>
                </div>
                <div className="metric">
                  <span className="metric-value">{mlModel.performance.precision}</span>
                  <span className="metric-label">Precision</span>
                </div>
                <div className="metric">
                  <span className="metric-value">{mlModel.performance.recall}</span>
                  <span className="metric-label">Recall</span>
                </div>
                <div className="metric">
                  <span className="metric-value">{mlModel.performance.f1Score}</span>
                  <span className="metric-label">F1-Score</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hardware Setup */}
      <section className="hardware-setup">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>🔌 Hardware Configuration ⚡</h2>
            <p>Physical setup and component connections 🔧📡</p>
          </motion.div>
          
          <div className="hardware-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="connections"
            >
              <h3>🔌 ESP32 Connections ⚙️</h3>
              <div className="connection-table">
                <div className="connection-row header">
                  <span>ESP32 Pin</span>
                  <span>Component</span>
                  <span>Purpose</span>
                </div>
                <div className="connection-row">
                  <span>3.3V</span>
                  <span>AS7341 VCC</span>
                  <span>Power Supply</span>
                </div>
                <div className="connection-row">
                  <span>GND</span>
                  <span>AS7341 GND</span>
                  <span>Ground</span>
                </div>
                <div className="connection-row">
                  <span>D21 (SDA)</span>
                  <span>AS7341 SDA</span>
                  <span>I2C Data</span>
                </div>
                <div className="connection-row">
                  <span>D22 (SCL)</span>
                  <span>AS7341 SCL</span>
                  <span>I2C Clock</span>
                </div>
                <div className="connection-row">
                  <span>A0</span>
                  <span>Potentiometer</span>
                  <span>Manual Control</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hardware-diagram"
            >
              <h3>🔌 System Diagram 📐</h3>
              <div className="diagram-container">
                <div className="hardware-visual">
                  <div className="esp32-visual">
                    <span>ESP32</span>
                  </div>
                  <div className="sensor-visual">
                    <span>AS7341</span>
                  </div>
                  <div className="pot-visual">
                    <span>Potentiometer</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
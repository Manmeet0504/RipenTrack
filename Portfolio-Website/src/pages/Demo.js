import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaMicrochip, FaWifi, FaBrain, FaCheckCircle } from 'react-icons/fa';
import './Demo.css';

const Demo = () => {
  return (
    <div className="demo">
      {/* Hero Section */}
      <section className="demo-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>How RipenTrack Works</h1>
            <p className="hero-subtitle">
              Explore the complete journey of our IoT-based fruit ripeness detection system
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Demonstration Section */}
      <section className="video-demo">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Hardware in Action</h2>
            <p className="section-subtitle">
              Watch our original hardware prototype detecting fruit ripeness in real-time
            </p>
            
            <div className="video-container">
              <div className="video-placeholder">
                <FaPlay className="play-icon" />
                <p>Video demonstration will be displayed here</p>
                <p className="video-note">Add your project demo video URL in the component</p>
              </div>
              {/* Uncomment and add your video URL
              <iframe
                width="100%"
                height="500"
                src="YOUR_VIDEO_URL"
                title="RipenTrack Hardware Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* System Workflow */}
      <section className="workflow">
        <div className="container">
          <h2>System Workflow</h2>
          <p className="section-subtitle">
            Step-by-step process of how RipenTrack detects and classifies fruit ripeness
          </p>

          <div className="workflow-steps">
            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="step-number">1</div>
              <div className="step-content">
                <FaMicrochip className="step-icon" />
                <h3>Sensor Data Collection</h3>
                <p>
                  AS7341 spectral sensor captures 11 channels of spectral data from the fruit surface,
                  measuring light absorption at different wavelengths.
                </p>
                <ul className="feature-list">
                  <li>10 visible & near-infrared channels</li>
                  <li>Clear channel for ambient light</li>
                  <li>High precision 16-bit ADC</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">2</div>
              <div className="step-content">
                <FaWifi className="step-icon" />
                <h3>Data Transmission</h3>
                <p>
                  ESP32 microcontroller processes sensor readings and transmits data to the cloud server
                  via WiFi connection for real-time analysis.
                </p>
                <ul className="feature-list">
                  <li>Secure WiFi connectivity</li>
                  <li>Real-time data streaming</li>
                  <li>Low latency transmission</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="step-number">3</div>
              <div className="step-content">
                <FaBrain className="step-icon" />
                <h3>ML Classification</h3>
                <p>
                  Deep learning model analyzes the spectral signature and classifies the fruit into
                  one of four ripeness stages with high accuracy.
                </p>
                <ul className="feature-list">
                  <li>95% classification accuracy</li>
                  <li>4 ripeness categories</li>
                  <li>Keras/TensorFlow powered</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="step-number">4</div>
              <div className="step-content">
                <FaCheckCircle className="step-icon" />
                <h3>Result Display</h3>
                <p>
                  Web interface displays the classification result, confidence score, and recommendations
                  for optimal harvest timing or consumption.
                </p>
                <ul className="feature-list">
                  <li>Instant results</li>
                  <li>Confidence metrics</li>
                  <li>Actionable recommendations</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sample Results */}
      <section className="sample-results">
        <div className="container">
          <h2>Sample Classifications</h2>
          <p className="section-subtitle">
            Example outputs from our system testing with different fruits
          </p>

          <div className="results-grid">
            <motion.div
              className="result-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="result-badge early-ripe">Early Ripe</div>
              <h3>Banana - Day 1</h3>
              <div className="confidence-bar">
                <div className="confidence-fill" style={{ width: '92%' }}>92%</div>
              </div>
              <p className="recommendation">Wait 3-5 days for optimal ripeness</p>
            </motion.div>

            <motion.div
              className="result-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="result-badge partially-ripe">Partially Ripe</div>
              <h3>Apple - Day 3</h3>
              <div className="confidence-bar">
                <div className="confidence-fill" style={{ width: '88%' }}>88%</div>
              </div>
              <p className="recommendation">Monitor for 2-3 more days</p>
            </motion.div>

            <motion.div
              className="result-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="result-badge ripe">Ripe</div>
              <h3>Orange - Day 5</h3>
              <div className="confidence-bar">
                <div className="confidence-fill" style={{ width: '95%' }}>95%</div>
              </div>
              <p className="recommendation">Ready for consumption - optimal quality</p>
            </motion.div>

            <motion.div
              className="result-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="result-badge decay">Decay</div>
              <h3>Banana - Day 8</h3>
              <div className="confidence-bar">
                <div className="confidence-fill" style={{ width: '90%' }}>90%</div>
              </div>
              <p className="recommendation">Past optimal stage - use immediately</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Insights */}
      <section className="technical-insights">
        <div className="container">
          <h2>Technical Insights</h2>
          
          <div className="insights-grid">
            <motion.div
              className="insight-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Spectral Analysis</h3>
              <p>
                The AS7341 sensor captures light absorption patterns across 10 spectral channels.
                Each fruit at different ripeness stages has a unique spectral signature, allowing
                our ML model to accurately classify the ripeness level.
              </p>
              <div className="spec-list">
                <div className="spec-item">
                  <strong>Channels:</strong> F1-F8, Clear, NIR
                </div>
                <div className="spec-item">
                  <strong>Resolution:</strong> 16-bit ADC
                </div>
                <div className="spec-item">
                  <strong>Range:</strong> 350nm - 1000nm
                </div>
              </div>
            </motion.div>

            <motion.div
              className="insight-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Machine Learning Model</h3>
              <p>
                Our deep neural network was trained on 1000+ fruit samples at various ripeness stages.
                The model achieves 95% accuracy in classifying fruits into four distinct categories.
              </p>
              <div className="spec-list">
                <div className="spec-item">
                  <strong>Architecture:</strong> Dense Neural Network
                </div>
                <div className="spec-item">
                  <strong>Training Data:</strong> 1000+ samples
                </div>
                <div className="spec-item">
                  <strong>Accuracy:</strong> 95%
                </div>
              </div>
            </motion.div>

            <motion.div
              className="insight-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Hardware Setup</h3>
              <p>
                The system uses ESP32 for WiFi connectivity and Arduino IDE for programming.
                The compact design makes it portable and suitable for field deployment in
                agricultural settings.
              </p>
              <div className="spec-list">
                <div className="spec-item">
                  <strong>Microcontroller:</strong> ESP32
                </div>
                <div className="spec-item">
                  <strong>Sensor:</strong> AS7341 11-channel
                </div>
                <div className="spec-item">
                  <strong>Power:</strong> USB-C / Battery
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;

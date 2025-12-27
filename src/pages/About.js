import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLightbulb, FaBullseye, FaCogs } from 'react-icons/fa';
import './About.css';

const About = () => {
  const objectives = [
    {
      icon: <FaBullseye />,
      title: "Primary Objective",
      description: "Develop an automated, non-invasive fruit ripeness detection system using IoT technology and machine learning algorithms."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Integrate spectral color sensing with AI to revolutionize fruit quality assessment in agricultural and retail sectors."
    },
    {
      icon: <FaCogs />,
      title: "Technical Goals",
      description: "Create a scalable system architecture that can be deployed across various agricultural environments and supply chains."
    }
  ];

  const challenges = [
    "Accurate spectral data interpretation across different fruit varieties",
    "Real-time processing of high-dimensional sensor data",
    "Developing robust ML models for diverse environmental conditions",
    "Creating user-friendly interfaces for non-technical users",
    "Ensuring system reliability and scalability"
  ];

  const achievements = [
    "Successfully developed and deployed IoT hardware prototype",
    "Achieved 95% accuracy in ripeness classification",
    "Created comprehensive web-based monitoring system",
    "Implemented real-time data streaming and visualization",
    "Designed scalable system architecture for commercial deployment"
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>About RipenTrack</h1>
            <p className="hero-subtitle">
              A comprehensive IoT solution addressing real-world challenges in 
              agricultural technology and smart farming systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Context */}
      <section className="project-context">
        <div className="container">
          <div className="context-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="context-text"
            >
              <h2>Project Background</h2>
              <p>
                RipenTrack emerged from the critical need to modernize fruit quality 
                assessment in agricultural supply chains. Traditional manual inspection 
                methods are time-consuming, subjective, and prone to human error.
              </p>
              <p>
                Our final-year engineering project focuses on developing an automated, 
                IoT-based solution that leverages spectral sensing technology and 
                machine learning to provide accurate, real-time fruit ripeness detection.
              </p>
              <div className="academic-info">
                <FaGraduationCap className="academic-icon" />
                <div>
                  <h4>Academic Project</h4>
                  <p>Final Year Capstone Project<br />
                  Thapar Institute of Engineering & Technology<br />
                  Computer Science & Engineering</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="context-image"
            >
              <div className="image-placeholder">
                <div className="system-diagram">
                  <div className="diagram-node sensor">ESP32 + AS7341</div>
                  <div className="diagram-arrow">→</div>
                  <div className="diagram-node processing">ML Model</div>
                  <div className="diagram-arrow">→</div>
                  <div className="diagram-node output">Web Dashboard</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="objectives">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Project Objectives</h2>
            <p>Clear goals driving our technical innovation and implementation</p>
          </motion.div>
          
          <div className="objectives-grid">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="objective-card"
              >
                <div className="objective-icon">{objective.icon}</div>
                <h3>{objective.title}</h3>
                <p>{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="challenges-solutions">
        <div className="container">
          <div className="cs-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="challenges"
            >
              <h2>Technical Challenges</h2>
              <ul className="challenges-list">
                {challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="achievements"
            >
              <h2>Key Achievements</h2>
              <ul className="achievements-list">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="research-impact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="impact-content"
          >
            <h2>Research Impact & Applications</h2>
            <div className="impact-grid">
              <div className="impact-card">
                <h3>Agricultural Sector</h3>
                <p>Reducing post-harvest losses through accurate ripeness monitoring</p>
              </div>
              <div className="impact-card">
                <h3>Retail Industry</h3>
                <p>Optimizing inventory management and customer satisfaction</p>
              </div>
              <div className="impact-card">
                <h3>Supply Chain</h3>
                <p>Improving logistics and distribution efficiency</p>
              </div>
              <div className="impact-card">
                <h3>IoT Innovation</h3>
                <p>Contributing to smart agriculture and Industry 4.0</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLightbulb, FaBullseye, FaCogs } from 'react-icons/fa';
import './About.css';

const About = () => {
  const objectives = [
    {
      icon: <FaBullseye />,
      title: "🎯 Primary Objective",
      description: "Develop an automated, non-invasive fruit ripeness detection system using IoT technology and machine learning algorithms. 🍎🔬"
    },
    {
      icon: <FaLightbulb />,
      title: "💡 Innovation",
      description: "Integrate spectral color sensing with AI to revolutionize fruit quality assessment in agricultural and retail sectors. 🌈🤖"
    },
    {
      icon: <FaCogs />,
      title: "⚙️ Technical Goals",
      description: "Create a scalable system architecture that can be deployed across various agricultural environments and supply chains. 🚜📊"
    }
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
          >
            <h1>🍊 About RipenTrack 🥭</h1>
            <p className="hero-subtitle">
              A comprehensive IoT solution addressing real-world challenges in
              agricultural technology and smart farming systems 🌱🚜
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Context */}
      <section className="project-context">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="context-content"
          >
            <h2>📖 Project Background 🌟</h2>
            <p>
              RipenTrack emerged from the critical need to modernize fruit quality
              assessment in agricultural supply chains. Traditional manual inspection
              methods are time-consuming, subjective, and prone to human error. 🔍
            </p>
            <p>
              Our final-year engineering project focuses on developing an automated,
              IoT-based solution that leverages spectral sensing technology and
              machine learning to provide accurate, real-time fruit ripeness detection. 🍓⚡
            </p>

            <div className="academic-info">
              <FaGraduationCap className="academic-icon" />
              <div>
                <h4>🎓 Academic Project</h4>
                <p>
                  Final Year Capstone Project 📚<br />
                  Thapar Institute of Engineering & Technology 🏛️<br />
                  Computer Science & Engineering 💻
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="objectives-section">
        <div className="container">
          <h2>🎯 Project Objectives 🌟</h2>
          <div className="objectives-grid">
            {objectives.map((obj, index) => (
              <motion.div
                key={index}
                className="objective-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="objective-icon">{obj.icon}</div>
                <h3>{obj.title}</h3>
                <p>{obj.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Demo Images */}
      <section className="demo-section">
        <div className="container">
          <h2>📸 System Demonstration 🚀</h2>
          <p className="section-subtitle">Our working prototype in action 🔬🍎</p>

          <div className="demo-images-grid">
            <motion.div
              className="demo-image-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src="/images/demo-image1.jpg" alt="RipenTrack System Demo 1" />
              <p className="image-caption">🔧 Hardware Setup & Sensor Integration 🌈</p>
            </motion.div>

            <motion.div
              className="demo-image-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img src="/images/demo-image2.jpg" alt="RipenTrack System Demo 2" />
              <p className="image-caption">⚡ Real-time Detection & Classification 🤖</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

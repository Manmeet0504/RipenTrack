import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Arjun Pundir",
      role: "Data Science & Machine Learning Lead",
      image: "/api/placeholder/300/300",
      bio: "Specialized in data collection, machine learning model development, and backend statistics. Led the AI/ML aspects of the project with expertise in neural networks and data preprocessing.",
      contributions: [
        "Machine Learning model development and training",
        "Data collection and preprocessing pipeline",
        "Statistical analysis and performance metrics",
        "Backend API development for ML inference",
        "Data visualization and reporting"
      ],
      skills: ["Python", "TensorFlow", "Data Science", "Statistics", "Flask"],
      quote: "Working on Data collection and Machine Learning aspects of the project was a challenging as well as enjoyable task for me. Still finding ways to improve the performance of this model.",
      social: {
        github: "#",
        linkedin: "#", 
        email: "arjun@example.com"
      }
    },
    {
      name: "Brahmjot Kaur",
      role: "Frontend Development & UI/UX Design",
      image: "/api/placeholder/300/300",
      bio: "Frontend specialist responsible for creating intuitive user interfaces and seamless user experiences. Focused on responsive design and modern web technologies.",
      contributions: [
        "React.js frontend application development",
        "UI/UX design and user interface optimization",
        "Responsive web design implementation",
        "Data visualization components",
        "User experience testing and refinement"
      ],
      skills: ["React.js", "JavaScript", "CSS", "UI/UX Design", "Responsive Design"],
      quote: "Creating an intuitive interface that makes complex IoT data accessible to users was both challenging and rewarding.",
      social: {
        github: "#",
        linkedin: "#",
        email: "brahmjot@example.com"
      }
    },
    {
      name: "Team Member 3",
      role: "IoT Hardware & System Integration",
      image: "/api/placeholder/300/300", 
      bio: "Hardware specialist focusing on IoT system design, sensor integration, and embedded programming. Responsible for the physical implementation of the sensing system.",
      contributions: [
        "ESP32 microcontroller programming",
        "AS7341 sensor integration and calibration",
        "Hardware system design and assembly",
        "IoT communication protocols implementation",
        "System testing and validation"
      ],
      skills: ["Arduino", "C++", "IoT", "Hardware Design", "Embedded Systems"],
      quote: "Bridging the gap between physical sensors and digital intelligence through innovative IoT solutions.",
      social: {
        github: "#",
        linkedin: "#",
        email: "member3@example.com"
      }
    }
  ];

  const mentor = {
    name: "Dr. Nitigya Sambyal",
    title: "Assistant Professor",
    department: "Computer Science & Engineering",
    institution: "Thapar Institute of Engineering & Technology",
    specialization: "Deep Learning, Computer Vision and Image Processing",
    email: "Nitigya.sambyal@thapar.edu",
    image: "/api/placeholder/300/300",
    qualifications: [
      "PhD in Computer Science and Engineering, Punjab Engineering College (Deemed to be University), Chandigarh",
      "M. Tech in Computer Science from University of Jammu, Jammu",
      "B. Tech in Computer Engineering from University of Jammu, Jammu",
      "Certifications in various FDPs from NITTTR Chandigarh, IIT Roorkee, IIT Kanpur"
    ],
    guidance: "Provided expert guidance in machine learning methodologies, research direction, and technical implementation strategies throughout the project development."
  };

  return (
    <div className="team">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>Our Team</h1>
            <p className="hero-subtitle">
              Meet the dedicated team behind RipenTrack - combining diverse skills 
              in IoT, machine learning, and web development to create innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="mentor-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Project Mentor</h2>
            <p>Expert guidance and academic supervision</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mentor-card"
          >
            <div className="mentor-image">
              <img src={mentor.image} alt={mentor.name} />
            </div>
            <div className="mentor-info">
              <h3>{mentor.name}</h3>
              <p className="mentor-title">{mentor.title}</p>
              <p className="mentor-dept">{mentor.department}</p>
              <p className="mentor-institution">{mentor.institution}</p>
              
              <div className="mentor-details">
                <h4>Specialization</h4>
                <p>{mentor.specialization}</p>
                
                <h4>Qualifications</h4>
                <ul>
                  {mentor.qualifications.map((qual, index) => (
                    <li key={index}>{qual}</li>
                  ))}
                </ul>
                
                <h4>Project Guidance</h4>
                <p>{mentor.guidance}</p>
                
                <div className="mentor-contact">
                  <FaEnvelope />
                  <span>{mentor.email}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-members">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Team Members</h2>
            <p>Collaborative expertise across multiple disciplines</p>
          </motion.div>
          
          <div className="members-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="member-card"
                whileHover={{ y: -10 }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                  
                  <div className="member-quote">
                    <blockquote>"{member.quote}"</blockquote>
                  </div>
                  
                  <div className="member-contributions">
                    <h4>Key Contributions</h4>
                    <ul>
                      {member.contributions.map((contribution, i) => (
                        <li key={i}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="member-skills">
                    <h4>Technical Skills</h4>
                    <div className="skills-list">
                      {member.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="member-social">
                    <a href={member.social.github} aria-label="GitHub">
                      <FaGithub />
                    </a>
                    <a href={member.social.linkedin} aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href={`mailto:${member.social.email}`} aria-label="Email">
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="team-stats">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="stats-content"
          >
            <h2>Project Timeline & Collaboration</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>6</h3>
                <p>Months Development</p>
              </div>
              <div className="stat-item">
                <h3>3</h3>
                <p>Team Members</p>
              </div>
              <div className="stat-item">
                <h3>1000+</h3>
                <p>Code Commits</p>
              </div>
              <div className="stat-item">
                <h3>95%</h3>
                <p>Model Accuracy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Philosophy */}
      <section className="collaboration">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="collaboration-content"
          >
            <h2>Our Collaboration Approach</h2>
            <div className="collaboration-grid">
              <div className="collaboration-item">
                <h3>Interdisciplinary Expertise</h3>
                <p>Combining hardware engineering, software development, and data science to create comprehensive solutions.</p>
              </div>
              <div className="collaboration-item">
                <h3>Agile Development</h3>
                <p>Iterative development process with regular testing, feedback, and continuous improvement.</p>
              </div>
              <div className="collaboration-item">
                <h3>Research-Driven Innovation</h3>
                <p>Grounding our technical decisions in solid research and academic best practices.</p>
              </div>
              <div className="collaboration-item">
                <h3>Open Communication</h3>
                <p>Regular team meetings, documentation, and knowledge sharing to ensure project success.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
# RipenTrack - IoT Fruit Ripeness Detection System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Node](https://img.shields.io/badge/Node-%3E%3D14.0.0-green.svg)](https://nodejs.org/)

A comprehensive portfolio website showcasing our final-year engineering project: an IoT-based fruit ripeness detection system that integrates spectral sensors, machine learning, and web technologies for automated fruit ripeness monitoring in smart agriculture.

## 🎓 Project Overview

**RipenTrack** is an innovative IoT solution designed to revolutionize fruit quality assessment in smart agriculture. The system uses a combination of hardware sensors and machine learning to provide non-invasive, accurate fruit ripeness detection.

### Key Features

- 🌱 **Non-Invasive Detection**: Uses spectral analysis without damaging the fruit
- 🤖 **AI-Powered Classification**: Deep learning model with 95% accuracy
- 📡 **IoT Integration**: Real-time data transmission via ESP32 WiFi
- 📊 **Web Dashboard**: Interactive visualization of sensor data and predictions
- 🎯 **Four Ripeness Stages**: Early Ripe, Partially Ripe, Ripe, and Decay

### Technical Stack

#### Hardware
- **ESP32 Microcontroller**: WiFi-enabled data processing and transmission
- **AS7341 Spectral Sensor**: 11-channel spectral color sensor
- **Arduino IDE**: Firmware development environment

#### Machine Learning
- **Framework**: Keras/TensorFlow
- **Model Type**: Deep Neural Network
- **Input Features**: 10 spectral channels
- **Output Classes**: 4 ripeness stages
- **Accuracy**: 95%

#### Web Application
- **Frontend**: React.js 18.2.0
- **Routing**: React Router DOM 6.3.0
- **Animations**: Framer Motion 7.3.2
- **Charts**: Chart.js 3.9.1 & React-Chartjs-2 4.3.1
- **Icons**: React Icons 4.4.0
- **Styling**: CSS3 with responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manmeet0504/RipenTrack.git
   cd RipenTrack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
RipenTrack_Website/
├── public/                      # Static files
│   ├── images/                  # Project images
│   ├── index.html              # HTML template
│   └── manifest.json           # PWA manifest
├── src/
│   ├── components/             # Reusable components
│   │   ├── Header.js          # Navigation bar
│   │   ├── Header.css
│   │   ├── Footer.js          # Site footer
│   │   └── Footer.css
│   ├── pages/                  # Page components
│   │   ├── Home.js            # Landing page
│   │   ├── Home.css
│   │   ├── About.js           # Project background
│   │   ├── About.css
│   │   ├── Project.js         # Technical details
│   │   ├── Project.css
│   │   ├── Team.js            # Team members
│   │   ├── Team.css
│   │   ├── Demo.js            # Hardware demonstration
│   │   └── Demo.css
│   ├── App.js                  # Main application
│   ├── App.css
│   ├── index.js               # Entry point
│   └── index.css              # Global styles
├── Actual Code for the Project/ # Original Flask application
│   └── drive-download-*/       # Project resources
│       ├── app/                # Flask backend
│       ├── CPG165_PPT.pptx    # Project presentation
│       └── Final Report_Formatted_16DEC.pdf
├── package.json                # Dependencies
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

## 🎨 Website Pages

### 1. Home
Landing page with project overview, key features, and call-to-action buttons.

### 2. About
Detailed project background, objectives, challenges faced, and achievements.

### 3. Project
Technical architecture, system components, ML model details, and hardware specifications.

### 4. Team
Team members' profiles, roles, contributions, and mentor information.

### 5. Demo
Step-by-step workflow demonstration, sample classifications, and technical insights with video integration placeholder.

## 🔬 How It Works

1. **Sensor Data Collection**: AS7341 captures 11 channels of spectral data
2. **Data Transmission**: ESP32 processes and transmits data via WiFi
3. **ML Classification**: Deep learning model analyzes spectral signatures
4. **Result Display**: Web interface shows classification with confidence scores

## 👥 Team

- **Arjun Pundir** - Machine Learning & Data Science
- **Brahmjot Kaur** - Frontend Development & UI/UX
- **Team Member 3** - IoT Hardware & Embedded Systems

**Mentor**: Dr. Nitigya Sambyal  
**Institution**: Thapar Institute of Engineering & Technology

## 📊 Project Stats

- **Model Accuracy**: 95%
- **Ripeness Stages**: 4 (Early Ripe, Partially Ripe, Ripe, Decay)
- **Spectral Channels**: 11 (F1-F8, Clear, NIR)
- **Training Samples**: 1000+

## 🎯 Future Enhancements

- Integration with mobile applications
- Support for additional fruit varieties
- Cloud-based data analytics
- Multi-language support
- Real-time notifications

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Thapar Institute of Engineering & Technology for providing resources
- Dr. Nitigya Sambyal for mentorship and guidance
- Open-source community for amazing tools and libraries

## 📞 Contact

For queries or collaboration opportunities:

- **GitHub**: [Manmeet0504](https://github.com/Manmeet0504)
- **Repository**: [RipenTrack](https://github.com/Manmeet0504/RipenTrack)

## 🌟 Contributing

This is an academic project portfolio. While it's not open for contributions, feel free to fork and use it as inspiration for your own projects!

---

**Made with ❤️ by the RipenTrack Team**

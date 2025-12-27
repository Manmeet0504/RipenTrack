# 🍎 RipenTrack IoT Project

Complete IoT-based Fruit Ripeness Detection System - Final Year Engineering Capstone Project

## 📁 Repository Structure

```
RipenTrack_Website/
├── Portfolio-Website/          # React.js portfolio website showcasing the project
│   ├── src/                   # Website source code
│   ├── public/                # Static assets and images
│   └── netlify.toml          # Netlify deployment configuration
│
└── Actual Code for the Project/  # IoT system implementation
    ├── app/                   # Flask backend and ML model
    ├── ESP32 code/           # Microcontroller firmware
    └── Resources/            # Project documentation and reports
```

## 🌐 Portfolio Website

Visit our live portfolio: **[Deployed on Netlify - Link will be updated after deployment]**

The portfolio website is built with React.js and showcases:
- 🎯 Project overview and objectives
- ⚙️ Technical architecture and system design
- 🔬 Machine learning model details
- 📸 Hardware demonstration and prototype images
- 🚀 Complete technology stack

### Running the Website Locally

```bash
cd Portfolio-Website
npm install
npm start
```

## 🔧 Actual IoT System

The complete IoT fruit ripeness detection system includes:

### Hardware Components
- ESP32 Microcontroller
- AS7341 11-channel Spectral Color Sensor
- Potentiometer for manual control
- WiFi connectivity

### Software Stack
- **Backend**: Flask (Python)
- **Machine Learning**: TensorFlow/Keras
- **Frontend**: React.js
- **Communication**: HTTP/JSON over WiFi

### Key Features
- ✅ Real-time spectral data collection (11 channels)
- ✅ AI-powered ripeness classification (95% accuracy)
- ✅ 4 ripeness stages: Early Ripe, Partially Ripe, Ripe, Decay
- ✅ Web-based monitoring dashboard
- ✅ Non-invasive detection method

## 🎓 Academic Information

**Institution**: Thapar Institute of Engineering & Technology  
**Department**: Computer Science & Engineering  
**Project Type**: Final Year Capstone Project  
**Year**: 2024-2025

## 🚀 Deployment

### Website Auto-Deployment (Netlify)

The Portfolio-Website is configured for automatic deployment:

1. **Netlify Configuration**: `Portfolio-Website/netlify.toml`
2. **Build Command**: `npm run build`
3. **Publish Directory**: `build`
4. **Auto-deploy**: Triggers on push to `main` branch

### Setting up Netlify (First Time)

1. Go to [https://www.netlify.com/](https://www.netlify.com/)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select this repository
5. Configure build settings:
   - **Base directory**: `Portfolio-Website`
   - **Build command**: `npm run build`
   - **Publish directory**: `Portfolio-Website/build`
6. Click "Deploy site"

Netlify will automatically:
- Build and deploy on every push to main branch
- Provide a live URL (e.g., `ripentrack.netlify.app`)
- Enable HTTPS automatically
- Handle redirects for React Router

## 📊 Project Highlights

- 🌱 **Smart Agriculture**: IoT solution for modern farming
- 🍎 **Non-invasive**: Spectral sensing technology
- 🤖 **AI-Powered**: Deep learning classification
- ⚡ **Real-time**: Instant ripeness detection
- 📈 **High Accuracy**: 95% classification accuracy
- 🌐 **Web Dashboard**: React-based monitoring interface

## 🛠️ Technology Stack

### IoT Hardware
- ESP32 (WiFi-enabled microcontroller)
- AS7341 (11-channel spectral sensor)

### Machine Learning
- TensorFlow/Keras
- Neural Network (Multi-class classification)
- 10 spectral input features
- 4 output classes

### Web Technologies
- **Backend**: Flask, Python
- **Frontend**: React.js, Framer Motion
- **Styling**: CSS3 with green agricultural theme
- **Deployment**: Netlify (auto-deploy)

## 📄 Documentation

Complete project documentation including reports, presentations, and technical specifications can be found in the `Actual Code for the Project/Resources/` directory.

## 🤝 Contributing

This is an academic project. For questions or collaboration opportunities, please refer to the contact information on the portfolio website.

## 📝 License

This project is part of an academic capstone project at Thapar Institute of Engineering & Technology.

---

**🍎 RipenTrack** - Revolutionizing fruit quality assessment with IoT and AI 🚜🌱

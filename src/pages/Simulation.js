import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';
import { FaPlay, FaPause, FaRedo, FaWifi, FaThermometerHalf, FaLightbulb } from 'react-icons/fa';
import './Simulation.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const Simulation = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentFruit, setCurrentFruit] = useState('banana');
  const [ripenessStage, setRipenessStage] = useState('early ripe');
  const [spectralData, setSpectralData] = useState([]);
  const [sensorReadings, setSensorReadings] = useState({
    temperature: 22,
    humidity: 65,
    lightIntensity: 450,
    wifiStrength: -45
  });
  const [prediction, setPrediction] = useState({
    confidence: 85,
    stage: 'Partially Ripe',
    recommendation: 'Monitor for 2-3 more days'
  });

  // Simulated spectral data for different fruits and ripeness stages
  const fruitData = {
    banana: {
      'early ripe': [120, 135, 158, 180, 165, 142, 128, 115, 98, 85],
      'partially ripe': [145, 162, 185, 210, 195, 175, 158, 140, 125, 110],
      'ripe': [185, 205, 235, 265, 245, 220, 195, 175, 155, 140],
      'decay': [95, 110, 125, 140, 135, 125, 110, 95, 80, 70]
    },
    apple: {
      'early ripe': [110, 125, 145, 170, 155, 135, 120, 105, 90, 80],
      'partially ripe': [135, 155, 175, 200, 185, 165, 145, 130, 115, 100],
      'ripe': [175, 195, 225, 255, 235, 210, 185, 165, 145, 130],
      'decay': [85, 100, 115, 130, 125, 115, 100, 85, 70, 60]
    },
    orange: {
      'early ripe': [125, 140, 165, 190, 175, 150, 135, 120, 105, 95],
      'partially ripe': [150, 170, 195, 220, 205, 180, 160, 145, 130, 115],
      'ripe': [195, 215, 245, 275, 255, 230, 205, 185, 165, 150],
      'decay': [100, 115, 130, 145, 140, 130, 115, 100, 85, 75]
    }
  };

  const spectralChannels = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'Clear', 'NIR'];

  // Simulate real-time data updates
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        // Generate new spectral data with some variation
        const baseData = fruitData[currentFruit][ripenessStage];
        const newData = baseData.map(value => {
          const variation = (Math.random() - 0.5) * 20; // ±10 variation
          return Math.max(0, Math.round(value + variation));
        });
        
        setSpectralData(prev => {
          const newDataPoint = {
            timestamp: new Date().toLocaleTimeString(),
            values: newData
          };
          return [...prev.slice(-19), newDataPoint]; // Keep last 20 readings
        });

        // Update sensor readings
        setSensorReadings(prev => ({
          temperature: Math.round((prev.temperature + (Math.random() - 0.5) * 2) * 10) / 10,
          humidity: Math.round((prev.humidity + (Math.random() - 0.5) * 5) * 10) / 10,
          lightIntensity: Math.round(prev.lightIntensity + (Math.random() - 0.5) * 50),
          wifiStrength: Math.round(prev.wifiStrength + (Math.random() - 0.5) * 5)
        }));

        // Update prediction based on current data
        const stages = ['Early Ripe', 'Partially Ripe', 'Ripe', 'Decay'];
        const stageIndex = stages.indexOf(ripenessStage.split(' ').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
        setPrediction({
          confidence: Math.round(85 + (Math.random() - 0.5) * 20),
          stage: stages[stageIndex],
          recommendation: getRecommendation(stages[stageIndex])
        });
      }, 2000); // Update every 2 seconds
    }
    return () => clearInterval(interval);
  }, [isRunning, currentFruit, ripenessStage]);

  const getRecommendation = (stage) => {
    const recommendations = {
      'Early Ripe': 'Wait 3-5 days for optimal ripeness',
      'Partially Ripe': 'Monitor for 2-3 more days',
      'Ripe': 'Ready for consumption - optimal quality',
      'Decay': 'Past optimal stage - use immediately or discard'
    };
    return recommendations[stage];
  };

  const startSimulation = () => setIsRunning(true);
  const pauseSimulation = () => setIsRunning(false);
  const resetSimulation = () => {
    setIsRunning(false);
    setSpectralData([]);
  };

  // Chart configurations
  const spectralChartData = {
    labels: spectralChannels,
    datasets: [{
      label: 'Current Reading',
      data: spectralData.length > 0 ? spectralData[spectralData.length - 1].values : new Array(10).fill(0),
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.1
    }]
  };

  const timeSeriesData = {
    labels: spectralData.map(d => d.timestamp),
    datasets: [{
      label: 'Average Intensity',
      data: spectralData.map(d => d.values.reduce((a, b) => a + b, 0) / d.values.length),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.1
    }]
  };

  const ripenessDistribution = {
    labels: ['Early Ripe', 'Partially Ripe', 'Ripe', 'Decay'],
    datasets: [{
      data: [25, 35, 30, 10],
      backgroundColor: [
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 99, 132, 0.8)'
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 2
    }]
  };

  return (
    <div className="simulation">
      {/* Hero Section */}
      <section className="simulation-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>Live IoT Simulation</h1>
            <p className="hero-subtitle">
              Experience our RipenTrack system in action with real-time simulated sensor data 
              and machine learning predictions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Control Panel */}
      <section className="control-panel">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="panel-content"
          >
            <h2>Simulation Controls</h2>
            <div className="controls-grid">
              <div className="control-group">
                <label>Fruit Type</label>
                <select 
                  value={currentFruit} 
                  onChange={(e) => setCurrentFruit(e.target.value)}
                  disabled={isRunning}
                >
                  <option value="banana">Banana</option>
                  <option value="apple">Apple</option>
                  <option value="orange">Orange</option>
                </select>
              </div>
              
              <div className="control-group">
                <label>Ripeness Stage</label>
                <select 
                  value={ripenessStage} 
                  onChange={(e) => setRipenessStage(e.target.value)}
                  disabled={isRunning}
                >
                  <option value="early ripe">Early Ripe</option>
                  <option value="partially ripe">Partially Ripe</option>
                  <option value="ripe">Ripe</option>
                  <option value="decay">Decay</option>
                </select>
              </div>
              
              <div className="control-buttons">
                <button 
                  onClick={startSimulation} 
                  disabled={isRunning}
                  className="btn btn-primary"
                >
                  <FaPlay /> Start
                </button>
                <button 
                  onClick={pauseSimulation} 
                  disabled={!isRunning}
                  className="btn btn-secondary"
                >
                  <FaPause /> Pause
                </button>
                <button 
                  onClick={resetSimulation}
                  className="btn btn-outline"
                >
                  <FaRedo /> Reset
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real-time Dashboard */}
      <section className="dashboard">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="dashboard-header"
          >
            <h2>Real-time Sensor Dashboard</h2>
            <div className="status-indicator">
              <span className={`status-dot ${isRunning ? 'active' : 'inactive'}`}></span>
              <span>{isRunning ? 'Live Data Stream' : 'Simulation Paused'}</span>
            </div>
          </motion.div>
          
          {/* Sensor Status Cards */}
          <div className="sensor-cards">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="sensor-card"
            >
              <FaThermometerHalf className="sensor-icon" />
              <div className="sensor-info">
                <span className="sensor-label">Temperature</span>
                <span className="sensor-value">{sensorReadings.temperature}°C</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="sensor-card"
            >
              <FaLightbulb className="sensor-icon" />
              <div className="sensor-info">
                <span className="sensor-label">Light Intensity</span>
                <span className="sensor-value">{sensorReadings.lightIntensity} lux</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sensor-card"
            >
              <FaWifi className="sensor-icon" />
              <div className="sensor-info">
                <span className="sensor-label">WiFi Signal</span>
                <span className="sensor-value">{sensorReadings.wifiStrength} dBm</span>
              </div>
            </motion.div>
          </div>
          
          {/* Charts Grid */}
          <div className="charts-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="chart-container"
            >
              <h3>Spectral Data (Current Reading)</h3>
              <Bar data={spectralChartData} options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'AS7341 Spectral Sensor Channels'
                  }
                }
              }} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="chart-container"
            >
              <h3>Time Series Data</h3>
              <Line data={timeSeriesData} options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Average Spectral Intensity Over Time'
                  }
                },
                scales: {
                  x: {
                    display: false
                  }
                }
              }} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="chart-container"
            >
              <h3>Ripeness Distribution</h3>
              <Doughnut data={ripenessDistribution} options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                  title: {
                    display: true,
                    text: 'Sample Dataset Distribution'
                  }
                }
              }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ML Prediction Results */}
      <section className="prediction-results">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prediction-content"
          >
            <h2>AI Prediction Results</h2>
            <div className="prediction-grid">
              <div className="prediction-card main-prediction">
                <h3>Current Prediction</h3>
                <div className="prediction-stage">{prediction.stage}</div>
                <div className="confidence-meter">
                  <span>Confidence: {prediction.confidence}%</span>
                  <div className="confidence-bar">
                    <div 
                      className="confidence-fill" 
                      style={{ width: `${prediction.confidence}%` }}
                    ></div>
                  </div>
                </div>
                <p className="recommendation">{prediction.recommendation}</p>
              </div>
              
              <div className="prediction-details">
                <h3>Analysis Details</h3>
                <div className="detail-item">
                  <span>Fruit Type:</span>
                  <span>{currentFruit.charAt(0).toUpperCase() + currentFruit.slice(1)}</span>
                </div>
                <div className="detail-item">
                  <span>Processing Time:</span>
                  <span>0.23s</span>
                </div>
                <div className="detail-item">
                  <span>Model Version:</span>
                  <span>v2.1.0</span>
                </div>
                <div className="detail-item">
                  <span>Data Points:</span>
                  <span>{spectralData.length}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* System Information */}
      <section className="system-info">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="info-content"
          >
            <h2>System Information</h2>
            <div className="info-grid">
              <div className="info-card">
                <h3>Hardware Status</h3>
                <ul>
                  <li><span className="status-ok"></span> ESP32 Connected</li>
                  <li><span className="status-ok"></span> AS7341 Sensor Active</li>
                  <li><span className="status-ok"></span> WiFi Connection Stable</li>
                  <li><span className="status-ok"></span> Power Supply Normal</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Software Status</h3>
                <ul>
                  <li><span className="status-ok"></span> ML Model Loaded</li>
                  <li><span className="status-ok"></span> API Server Running</li>
                  <li><span className="status-ok"></span> Database Connected</li>
                  <li><span className="status-ok"></span> Real-time Processing</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Performance Metrics</h3>
                <ul>
                  <li>Prediction Latency: <strong>230ms</strong></li>
                  <li>Data Collection Rate: <strong>0.5 Hz</strong></li>
                  <li>System Uptime: <strong>99.9%</strong></li>
                  <li>Accuracy Rate: <strong>95.2%</strong></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Simulation;
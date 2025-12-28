// src/App.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './styles/globals.css';

// New Loading Screen Component
const ModernLoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = [
    "Crafting digital experiences...",
    "Initializing components...",
    "Loading creativity...",
    "Almost ready...",
    "Welcome to my portfolio"
  ];

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 100);

    // Cycle through subtitles
    const subtitleInterval = setInterval(() => {
      setSubtitleIndex(prev => (prev + 1) % subtitles.length);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(subtitleInterval);
    };
  }, []);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Effects */}
      <div className="loading-background">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-shape"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="loading-container">
        {/* Logo/Name with modern animation */}
        <motion.div
          className="loading-title-wrapper"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="loading-title gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="letter" data-letter="T">T</span>
            <span className="letter" data-letter="h">h</span>
            <span className="letter" data-letter="a">a</span>
            <span className="letter" data-letter="r">r</span>
            <span className="letter" data-letter="i">i</span>
            <span className="letter" data-letter="d">d</span>
            <span className="letter" data-letter="u">u</span>
          </motion.h1>
          <motion.div
            className="title-underline"
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>

        {/* Animated Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={subtitleIndex}
            className="loading-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {subtitles[subtitleIndex]}
          </motion.p>
        </AnimatePresence>

        {/* Modern Progress Bar - FIXED */}
        <div className="progress-container">
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="progress-glow"
                animate={{
                  x: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
          <motion.span
            className="progress-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {Math.round(progress)}%
          </motion.span>
        </div>

        {/* Loading Animation */}
        <div className="loading-animation">
          <motion.div
            className="loader-circle"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: {
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div className="inner-circle" />
            <div className="outer-circle" />
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                style={{
                  transform: `rotate(${i * 45}deg)`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Status Indicators */}
        <div className="status-indicators">
          <motion.div
            className="status-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="status-dot active" />
            <span>System Ready</span>
          </motion.div>
          <motion.div
            className="status-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className={`status-dot ${progress > 50 ? 'active' : 'inactive'}`} />
            <span>Assets Loading</span>
          </motion.div>
          <motion.div
            className="status-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className={`status-dot ${progress > 90 ? 'active' : 'inactive'}`} />
            <span>Finalizing</span>
          </motion.div>
        </div>
      </div>

      {/* Footer Note */}
      <motion.div
        className="loading-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
      
      </motion.div>
    </motion.div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate actual loading with minimum time
    const minLoadingTime = 3000; // 3 seconds minimum
    
    const startTime = Date.now();
    
    const loadAssets = async () => {
      try {
        // You could add actual asset preloading here
        await Promise.all([
          // Preload critical assets
          new Promise(resolve => setTimeout(resolve, 1500)),
        ]);
      } catch (error) {
        console.log("Loading completed with error:", error);
      }
      
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minLoadingTime - elapsed);
      
      setTimeout(() => {
        setIsLoading(false);
      }, remaining);
    };
    
    loadAssets();
  }, []);

  // ✅ Scroll to top whenever section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <ModernLoadingScreen />
        ) : (
          <motion.div
            className="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
            <main className="main-content">
              <AnimatePresence mode="sync">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
                  {activeSection === 'about' && <About />}
                  {activeSection === 'skills' && <Skills />}
                  {activeSection === 'projects' && <Projects />}
                  {activeSection === 'contact' && <Contact />}
                </motion.div>
              </AnimatePresence>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
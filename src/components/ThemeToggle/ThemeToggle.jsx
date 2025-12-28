// src/components/ThemeToggle/ThemeToggle.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from "../../contexts/ThemeContext";


import '../ThemeToggle/ThemeToggle.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="theme-toggle-inner"
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {isDark ? (
          <Sun size={20} className="theme-icon" />
        ) : (
          <Moon size={20} className="theme-icon" />
        )}
      </motion.div>
      
      <motion.div
        className="theme-bg"
        initial={false}
        animate={{
          background: isDark 
            ? 'linear-gradient(135deg, #374151, #1f2937)' 
            : 'linear-gradient(135deg, #fbbf24, #f59e0b)'
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
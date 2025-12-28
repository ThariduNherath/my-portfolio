// src/components/Skills/Skills.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaTools } from 'react-icons/fa'; // icons for categories
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillsData = {
    frontend: [
      { name: 'React', level: 70, color: '#61DAFB' },
      { name: 'TypeScript', level: 50, color: '#3178C6' },
      { name: 'JavaScript', level: 65, color: '#F7DF1E' },
      { name: 'Next.js', level: 20, color: '#000000' },
      { name: 'Vue.js', level: 30, color: '#4FC08D' },
      { name: 'Tailwind CSS', level: 30, color: '#06B6D4' }
    ],
    backend: [
      { name: 'Node.js', level: 80, color: '#339933' },
      { name: 'Python', level: 85, color: '#3776AB' },
      { name: 'PostgreSQL', level: 20, color: '#4169E1' },
      { name: 'MongoDB', level: 40, color: '#47A248' },
      { name: 'GraphQL', level: 10, color: '#E10098' },
      { name: 'Redis', level: 10, color: '#DC382D' }
    ],
    tools: [
      { name: 'Git', level: 80, color: '#F05032' },
      { name: 'Docker', level: 20, color: '#2496ED' },
      { name: 'AWS', level: 8, color: '#FF9900' },
      { name: 'Figma', level: 70, color: '#F24E1E' },
      { name: 'Webpack', level: 1, color: '#8DD6F9' },
      { name: 'Jest', level: 1, color: '#C21325' }
    ]
  };

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: <FaReact size={20} /> },
    { id: 'backend', name: 'Backend', icon: <FaNodeJs size={20} /> },
    { id: 'tools', name: 'Tools', icon: <FaTools size={20} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="skills section-padding" id="skills">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <motion.div
          className="skills-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {skillsData[activeCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card glass-effect"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 400 } }}
              >
                <div className="skill-header">
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div 
                    className="skill-color"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                
                <motion.div
                  className="skill-level"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="level-dots">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className={`level-dot ${i < Math.floor(skill.level / 10) ? 'filled' : ''}`}
                        style={i < Math.floor(skill.level / 10) ? { backgroundColor: skill.color } : {}}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;

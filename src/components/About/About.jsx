// src/components/About/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target, Code, Palette } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { icon: Award, number: '3+', text: 'Projects Completed', suffix: '+' },
    { icon: Users, number: '2', text: 'Happy Clients', suffix: '+' },
    { icon: Clock, number: '1', text: 'Years Experience', suffix: '+' },
    { icon: Target, number: '80', text: 'Success Rate', suffix: '%' }
  ];

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications using React, Node.js, Express, and AI-powered tools'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered designs that combine aesthetics with intuitive, seamless experiences'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Crafting digital excellence</p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <motion.h3 variants={itemVariants}>
            Full Stack Developer & Creative Technologist
            </motion.h3>
            
            <motion.p variants={itemVariants}>
            I’m a motivated Full Stack Developer with 1 year of experience building responsive, scalable, and user friendly web applications.
             Skilled in React, Node.js, Express, and AI-powered tools, I deliver solutions that solve real world problems and thrive in collaborative environments.
            </motion.p>
            
            <motion.p variants={itemVariants}>
            I believe in clean code, thoughtful design, and continuous learning.
             Every project is an opportunity to innovate, push boundaries, and deliver digital experiences that are both functional and visually engaging.
            </motion.p>

            <motion.div className="services-grid" variants={itemVariants}>
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="service-card glass-effect"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon size={32} className="service-icon" />
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.text}
                className="stat-card glass-effect"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="stat-header">
                  <stat.icon size={32} className="stat-icon" />
                  <motion.h4
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6, type: "spring" }}
                  >
                    {stat.number}<span className="stat-suffix">{stat.suffix}</span>
                  </motion.h4>
                </div>
                <p>{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
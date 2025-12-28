import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, Rocket, Laptop, Palette } from 'lucide-react';
import myImage from '../../assets/Blue and Gray Simple Professional CV Resume (1).jpg';
import './Hero.css';

const Hero = ({ setActiveSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const floatingImage = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const floatingCards = [
    { icon: <Rocket size={28} />, className: 'card-1', delay: 0 },
    { icon: <Laptop size={28} />, className: 'card-2', delay: 2 },
    { icon: <Palette size={28} />, className: 'card-3', delay: 4 },
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-orbit hero-orbit-1"></div>
        <div className="hero-orbit hero-orbit-2"></div>
        <div className="hero-orbit hero-orbit-3"></div>
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 className="hero-title">
              Hi, I'm{' '}
              <motion.span
                className="gradient-text"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                Tharidu
              </motion.span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={itemVariants}>
              Full Stack Developer & Experience Designer
            </motion.p>

            <motion.p className="hero-description" variants={itemVariants}>
              I create digital experiences that merge modern web technologies with user focused design.
              From responsive apps to interactive interfaces, I bring ideas to life with code and creativity.
            </motion.p>

            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.button
                className="btn btn-primary"
                onClick={() => setActiveSection('projects')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}

              >
                View My Work
              </motion.button>
              <motion.a
                className="btn btn-secondary"
                href="public\Tharidu Herath.pdf"
                download="Tharidu Herath.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                Download CV
              </motion.a>

            </motion.div>

            <motion.div className="social-links" variants={itemVariants}>
              {[
                { icon: Github, href: 'https://github.com/ThariduNherath', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/tharidu-herath/', label: 'LinkedIn' },
                { icon: Mail, href: 'thariduherath7@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Floating profile image */}
            <motion.img
              src={myImage}
              alt="My Profile"
              className="hero-image"
              variants={floatingImage}
              animate="animate"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 120 }}
            />

            {/* Floating icon cards */}
            {floatingCards.map((card, idx) => (
              <motion.div
                key={idx}
                className={`floating-card ${card.className} glass-effect`}
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: card.delay }}
              >
                {card.icon}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      
      </div>
    </section>
  );
};

export default Hero;
// src/components/Projects/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowRight } from 'lucide-react';
import './Projects.css';

// Import your project images (adjust paths as needed)
import shoewebsiteimg from '../../assets/shoe-website.JPG';
import tastybite from '../../assets/Tasty.JPG';
import dashboard from '../../assets/dashboard.JPG'
import weather from '../../assets/weather.JPG';
import flutterdashboard from '../../assets/flutter_dashbaord.png';
import flutterEcommerceImg from '../../assets/e_commerce_flutter.png';
import inventorySystemImg from '../../assets/inventory.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Shoe Website',
      description: 'Creative full-stack shoe store built with React, Firebase, and EmailJS',
      fullDescription:
        'A responsive and interactive shoe e-commerce website developed using React. It includes Firebase authentication, product storage, a dynamic search page, EmailJS integration for notifications, and a chatbot for user interaction. The website ensures a seamless user experience across all screen sizes with animated and modern UI design.',
      image: shoewebsiteimg,
      technologies: ['React', 'Firebase', 'EmailJS', 'Node.js', 'CSS3'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: 'https://github.com/ThariduNherath/Nike-shoe-website-',
      features: [
        'Firebase Authentication (Login & Sign-Up)',
        'Email Notifications via EmailJS',
        'Product Search & Filter Functionality',
        'Dynamic Admin Dashboard',
        'Chatbot Integration',
        'Responsive & Animated UI Design',
      ],
      status: 'Completed',
    },
    {
      id: 2,
      title: 'TastyBites Website',
      description: 'Fast and reliable food delivery with a modern and responsive design',
      fullDescription:
        'A fully responsive and interactive food delivery website built using React and Tailwind CSS. It features Firebase authentication, real-time order tracking, restaurant and menu browsing, secure online payments, and a user-friendly interface with engaging animations. The website ensures a seamless experience across all screen sizes with a modern, fast, and visually appealing design that brings restaurant-quality meals to your doorstep.',
      image: tastybite,
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      category: 'frontend',
      liveUrl: 'https://tasty-bites-tharidu-heraths-projects.vercel.app/',
      githubUrl: 'https://github.com/ThariduNherath/tasty-bites',
      features: [
        
    'Responsive and Interactive User Interface',
    'Restaurant & Menu Browsing with Filters',
    'Add to Cart and Functionality',
    'Animated and Modern UI Design with Smooth Transitions',
  
      ],
      status: 'Completed',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with forecasting',
      fullDescription:
        'A responsive weather dashboard that provides detailed forecasts, historical data, and beautiful visualizations. Integrates with multiple weather APIs for accurate and reliable data.',
      image: weather,
      technologies: ['React', 'Chart.js', 'API Integration', 'PWA'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: 'https://github.com/ThariduNherath/weather-dashboard',
      features: [
        '7-Day Weather Forecast',
        'Interactive Data Visualization',
        'Location-based Services',
        'Weather Alerts',
        'Offline Support',
        'Progressive Web App',
      ],
      status: 'Completed',
    },
    {
      id: 4,
      title: 'Analytics Dashboard API',
      description: 'Modern backend API with data analytics endpoints',
      fullDescription:
        'A full-featured analytics API platform built with Node.js, Express, and SQLite. It provides RESTful endpoints for user stats, sales summaries, and revenue analytics, with optimized data queries for real-time dashboards. Designed to be easily integrated with React dashboards or other frontends.',
      image: dashboard,
      technologies: ['Node.js', 'Express', 'SQLite', 'Prisma', 'Chart.js'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'RESTful API Endpoints (/api/stats, /api/sales/summary)',
        'User and Sales Analytics',
        'Optimized Data Queries',
        'JWT Authentication (Optional)',
        'Easy Integration with Frontend Dashboards',
        'Error Handling & Validation',
        'Supports SQLite or PostgreSQL',
      ],
      status: 'Completed',
    },
     {
      id: 5,
      title: 'Fitness Tracking Dashboard',
      description: 'Modern Flutter UI for activity tracking and analytic',
      fullDescription:
        'A beautifully designed Flutter mobile app that allows users to track workouts, view daily statistics, and monitor progress with interactive charts using fl_chart. Includes responsive layouts, custom scrollable panels, activity widgets, and chart cards with gradient visuals. Ideal for showcasing advanced Flutter UI capabilities.',
      image: flutterdashboard,
      technologies: ['Flutter', 'Dart', 'fl_chart', 'Provider'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: 'https://github.com/ThariduNherath/fitness-tracker-ui',
      features: [
         'Interactive Line & Bar Charts',
    'Activity Summary Widgets',
    'Custom Dashboard Layout',
    'Responsive UI for All Screen Sizes',
    'Scroll-based Animation Support',
    'Dark Theme Integration',
    'Reusable Components & Cards'
      ],
      status: 'Completed',
    },
    {
  id: 6,
  title: 'Flutter E Commerce Mobile App',
  description: 'Modern Flutter based e-commerce mobile application with clean architecture',
  fullDescription:
    'A fully functional and responsive e-commerce mobile application developed using Flutter and Dart. The app includes product listing, product detail view, cart management, authentication screens, category filtering, wishlist functionality, and a modern UI design with dark/light theme support. Built with scalable architecture and reusable widgets, ensuring smooth performance and clean code structure.',
  image: flutterEcommerceImg, // add your project image variable here
  technologies: ['Flutter', 'Dart', 'GetX', 'Material UI', 'Responsive Design'],
  category: 'frontend',
  liveUrl: '#',
  githubUrl: 'https://github.com/ThariduNherath/e_commerce_flutter',
  features: [
    'User Authentication (Sign In / Sign Up)',
    'Product Listing with Grid View',
    'Product Detail Screen with Image & Description',
    'Add to Cart & Wishlist Functionality',
    'Category Filtering & Bottom Sheet Filters',
    'Dark & Light Theme Support',
    'Custom Reusable Widgets',
    'Modern and Clean UI Design',
    'Responsive Layout for All Screen Sizes',
    'Smooth Navigation using GetX'
  ],
  status: 'Completed',
},{
  id: 8,
  title: 'Inventory Management System',
  description: 'Inventory tracking system with user isolation, analytics, and stock monitoring',
  fullDescription:
    'A modern inventory management system built with Next.js, React, and TypeScript, featuring multi-tenant user isolation, secure authentication, product CRUD operations, and real-time analytics dashboards. The system visualizes inventory trends with Recharts, monitors stock levels with threshold-based indicators, and provides a responsive, user-friendly interface. Built with Prisma ORM and PostgreSQL (Neon) for high performance and scalability.',
  image: inventorySystemImg, // add your project image variable here
  technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Recharts', 'Stack Auth'],
  category: 'fullstack',
  liveUrl: 'https://inventory-dashboard-mu-ten.vercel.app',
  githubUrl: 'https://github.com/ThariduNherath/inventory-dashboard',
  features: [
    'User Authentication with Stack Auth and protected routes',
    'Product Management with full CRUD, search, and pagination',
    'Analytics Dashboard with key metrics, 30-day trends, and progress indicators',
    'Stock Monitoring with In Stock / Low Stock / Out of Stock visual indicators',
    'Responsive area charts for inventory trends',
    'User data isolation for multi-tenant support',
    'Server-side authentication validation and cache revalidation',
    'Optimized database queries with indexing for performance'
  ],
  status: 'Completed',
}

  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects section-padding" id="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="projects-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                whileHover={{
                  y: -10,
                  transition: { type: 'spring', stiffness: 400 },
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image-content"
                  />
                  <div className="project-status">
                    <span
                      className={`status-badge ${project.status.toLowerCase()}`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-overlay">
                  <motion.div
                    className="overlay-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>View Project</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-btn"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={24} />
                </button>

                <div className="modal-header">
                  <div className="modal-image">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="modal-image-content"
                    />
                  </div>
                  <div>
                    <h2>{selectedProject.title}</h2>
                    <p>{selectedProject.description}</p>
                    <span
                      className={`status-badge ${selectedProject.status.toLowerCase()}`}
                    >
                      {selectedProject.status}
                    </span>
                  </div>
                </div>

                <div className="modal-body">
                  <p>{selectedProject.fullDescription}</p>

                  <div className="modal-features">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedProject.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-technologies">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-links">
                    <motion.a
                      href={selectedProject.liveUrl}
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={selectedProject.githubUrl}
                      className="btn btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
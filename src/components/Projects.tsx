import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiShield, FiSmartphone, FiGlobe } from 'react-icons/fi';
import { fadeInUp, staggerContainer, scaleOnHover } from '../utils/animations';
import { FiCalendar } from 'react-icons/fi';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Ransomware Detection, Prevention & Rollback using AI',
      description: 'AI-based cybersecurity system using LSTM & Isolation Forest algorithms for real-time ransomware detection and automated rollback capabilities.',
      period: 'Jan 2025 – Jun 2025',
      technologies: ['Python', 'PyTorch', 'React.js', 'Flutter', 'Machine Learning', 'LSTM', 'Isolation Forest'],
      icon: <FiShield size={32} />,
      color: 'from-red-400 to-red-600',
      status: 'In Development',
      features: [
        'Real-time ransomware detection using machine learning',
        'Automated file rollback system',
        'User-friendly dashboard interface',
        'Mobile app for remote monitoring'
      ],
      liveUrl: null, // No live demo yet
      githubUrl: 'https://github.com/Arun0218cse/ransomware.git' // Example link
    },
{
  title: 'Bus Reservation System',
  description: 'A full-stack web application built with Python and Django for managing bus reservations, seat booking, and user authentication with a clean admin interface and real-time availability tracking.',
  period: 'Jul 2024 – Jan 2025',
  technologies: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'SQLite', 'Bootstrap'],
  icon: <FiGlobe size={32} />, // Changed to globe for web app
  color: 'from-blue-400 to-blue-600', // Updated to blue for tech/web theme
  status: 'Completed',
  features: [
    'User registration and login system',
    'Real-time seat availability and booking',
    'Admin dashboard for managing buses and routes',
    'Booking history and ticket generation',
    'Responsive design for desktop and mobile'
  ],
  liveUrl: null, // No live demo (or add Netlify/Heroku link if available)
  githubUrl: 'https://github.com/Arun0218cse/NANMUDHALVAN_TUESDAYBATCH_PROJECT_FILES-main.git'
},
    {
      title: 'Edizo.in Website Development',
      description: 'Fullstack company website development featuring modern design, responsive layout, and robust backend infrastructure.',
      period: 'Jan 2025 – Present',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      icon: <FiGlobe size={32} />,
      color: 'from-blue-400 to-blue-600',
      status: 'Live',
      features: [
        'Modern responsive design',
        'Content management system',
        'SEO optimization',
        'Performance optimization'
      ],
      liveUrl: 'https://edizo.in', // ✅ Real website
      githubUrl: null // Private repo – hide source
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto mb-8"
          />
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Innovative solutions combining cutting-edge technology with practical applications
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover="hover"
              className="group"
            >
              <motion.div
                variants={scaleOnHover}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden h-full"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${project.color} p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      {project.icon}
                    </div>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-4">
                    <FiCalendar size={16} />
                    {project.period}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {/* Live Demo Button */}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                      >
                        <FiExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}

                    {/* Source Code Button */}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-lg font-medium transition-colors duration-200"
                      >
                        <FiGithub size={16} />
                        Source Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
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
      ]
    },
    {
      title: 'Smart Parking System',
      description: 'IoT-enabled parking optimization system with real-time sensor monitoring and mobile application for seamless parking management.',
      period: 'Jul 2024 – Jan 2025',
      technologies: ['IoT Sensors', 'Flutter', 'Firebase', 'Cloud Functions', 'Real-time Database'],
      icon: <FiSmartphone size={32} />,
      color: 'from-green-400 to-green-600',
      status: 'Completed',
      features: [
        'Real-time parking space detection',
        'Mobile app for parking reservations',
        'IoT sensor integration',
        'Cloud-based data processing'
      ]
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
      ]
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
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      <FiGithub size={16} />
                      Source Code
                    </motion.button>
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
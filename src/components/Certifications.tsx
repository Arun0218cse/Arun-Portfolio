import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiExternalLink, FiStar } from 'react-icons/fi';
import { fadeInUp, staggerContainer, scaleOnHover } from '../utils/animations';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'AWS Academy Graduate – Cloud Architecting',
      issuer: 'Amazon Web Services',
      year: '2024',
      description: 'Comprehensive training in cloud architecture, design patterns, and AWS services implementation',
      color: 'from-orange-400 to-orange-600',
      badge: '☁️'
    },
    {
      title: 'Python for Data Science Certification',
      issuer: 'Professional Training Institute',
      year: '2023',
      description: 'Advanced Python programming for data analysis, machine learning, and scientific computing',
      color: 'from-green-400 to-green-600',
      badge: '🐍'
    },
    {
      title: 'Cloud Deployment Specialist',
      issuer: 'Multiple Platforms',
      year: '2024',
      description: 'Hands-on experience with multiple cloud deployments and infrastructure management',
      color: 'from-blue-400 to-blue-600',
      badge: '🚀'
    },
    {
      title: 'Open Source Contributor',
      issuer: 'GitHub Community',
      year: '2023-2024',
      description: 'Active contributions to open-source projects and community development initiatives',
      color: 'from-purple-400 to-purple-600',
      badge: '⭐'
    }
  ];

  const achievements = [
    'AWS Cloud Architecture Expertise',
    'Python Data Science Proficiency',
    'Multiple Successful Deployments',
    'Open Source Community Recognition'
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900">
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
            Certifications & Achievements
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto mb-8"
          />
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Continuous learning and professional development in cutting-edge technologies
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover="hover"
              className="group"
            >
              <motion.div
                variants={scaleOnHover}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 h-full"
              >
                {/* Badge */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${cert.color} p-4 mb-6 mx-auto flex items-center justify-center text-3xl`}>
                  {cert.badge}
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 text-center">
                  {cert.title}
                </h3>

                <div className="text-center mb-4">
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                    <FiCalendar size={16} />
                    {cert.year}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed mb-6">
                  {cert.description}
                </p>

                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    <FiAward size={16} />
                    View Certificate
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Summary */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-bold text-center mb-8"
          >
            Key Achievements
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <FiStar size={24} className="mx-auto mb-3 text-yellow-300" />
                <p className="font-medium">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
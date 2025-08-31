import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiExternalLink, FiStar } from 'react-icons/fi';
import { fadeInUp, staggerContainer, scaleOnHover } from '../utils/animations';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Cloud Virtual Internship by AWS Academy',
      issuer: 'Amazon Web Services (AWS Academy)',
      year: 'March 2024',
      description: 'Hands-on cloud computing experience with AWS services including EC2, S3, Lambda, and cloud architecture fundamentals.',
      color: 'from-orange-400 to-orange-600',
      badge: '☁️',
      certificateUrl: 'https://drive.google.com/file/d/19oxwfm-QyVBFG6rBt4b-gPHltgY2YX3f/view?usp=drive_link' // Replace with actual link
    },
    {
      title: 'Designing an Intuitive and User-Friendly Interface',
      issuer: 'IQMath ',
      year: 'October 2024',
      description: 'UI/UX principles, wireframing, prototyping, and user-centered design practices for digital products.',
      color: 'from-green-400 to-green-600',
      badge: '🎨',
      certificateUrl: 'https://drive.google.com/file/d/19pyCJZl1Aj5V2aVLuPSRmSv63-10VnuP/view?usp=drive_link' // Replace with actual link
    },
    {
      title: 'Online Portfolio Development using GitHub',
      issuer: 'GUVI via NaanMudhalvan',
      year: 'July 2024 – January 2025',
      description: 'Full-stack portfolio development using React, GitHub Pages, and modern web technologies with version control and deployment.',
      color: 'from-blue-400 to-blue-600',
      badge: '💻',
      certificateUrl: 'https://drive.google.com/file/d/19vHjXxbWEGWElFcD1VXjBZWxUk_V43Mf/view?usp=drive_link' // Replace with actual link
    }
  ];

  const achievements = [
    'AWS Cloud Practitioner Skills',
    'UI/UX Design Proficiency',
    'GitHub Portfolio Deployment',
    'Full-Stack Web Development'
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Certification Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${cert.color} p-4 mb-6 mx-auto flex items-center justify-center text-3xl`}
                >
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

                {/* View Certificate Button (Links to Google Drive Image Preview) */}
                <div className="text-center">
                  <motion.a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    <FiAward size={16} />
                    View Certificate
                  </motion.a>
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
import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiAward } from 'react-icons/fi';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

const About: React.FC = () => {
  const education = [
    {
      degree: 'BE Computer Science Engineering',
      institution: 'Paavai College of Engineering',
      location: 'Namakkal, Tamil Nadu',
      grade: 'CGPA: 7.2',
      year: '2025',
      icon: '🎓'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Saraswathi Matric Higher Secondary School',
      location: 'Ayilpatty,Tamil Nadu',
      grade: '80.11%',
      year: '2021',
      icon: '📚'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Saraswathi Matric Higher Secondary School',
      location: 'Ayilpatty,Tamil Nadu',
      grade: '69%',
      year: '2019',
      icon: '🏫'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
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
            About Me
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Professional Summary</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                Proactive and detail-oriented BE Computer Science Engineeing graduate with hands-on experience in 
                AI-driven cybersecurity, web development, and mobile applications. Skilled in React.js, Flutter, 
                and cloud computing, with a strong foundation in software engineering and UI/UX design. 
                Passionate about building innovative solutions and contributing to scalable IT projects.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <FiMapPin className="text-blue-600 dark:text-blue-400" />
                  <span className="text-sm">Mangalapuram, Namakkal</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <FiCalendar className="text-blue-600 dark:text-blue-400" />
                  <span className="text-sm">Available Immediately</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{edu.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-1">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <FiAward size={14} />
                          {edu.grade}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiCalendar size={14} />
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
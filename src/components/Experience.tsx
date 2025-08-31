import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { fadeInUp, fadeInLeft, staggerContainer } from '../utils/animations';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Fullstack Developer',
      company: 'Edizo Pvt Ltd',
      location: 'now run virtually',
      period: 'January 2025 – Present',
      type: 'Full-time',
      description: [
        'Developed fullstack websites and Flutter mobile applications',
        'Led development of edizo.in company website',
        'Handled React.js frontend development with modern UI/UX practices',
        'Implemented Node.js/Express backend with MongoDB database integration',
        'Collaborated with cross-functional teams to deliver scalable solutions'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Flutter'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'UI/UX Design Intern',
      company: 'IQ MATH',
      location: 'Chennai, Tamil Nadu',
      period: 'October 2024 – November 2024',
      type: 'Internship',
      description: [
        'Designed interactive UI components for educational applications',
        'Created detailed prototypes using Figma and Adobe XD',
        'Conducted user research and usability testing',
        'Collaborated with development team to implement design systems',
        'Improved user experience through iterative design processes'
      ],
      technologies: ['Figma', 'Adobe XD', 'UI/UX Design', 'Prototyping', 'User Research'],
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
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
            Professional Experience
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto mb-8"
          />
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Building impactful solutions through hands-on development and design experience
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={index % 2 === 0 ? fadeInLeft : fadeInUp}
              className="relative"
            >
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block" />
              )}
              
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${exp.color} p-4 flex-shrink-0`}>
                    <FiBriefcase size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 mb-1">
                          <FiCalendar size={16} />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                          <FiMapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
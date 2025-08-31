import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiSmartphone, 
  FiDatabase, 
  FiCloud, 
  FiTool, 
  FiSettings,
  FiLayers
} from 'react-icons/fi';
import { fadeInUp, staggerContainer, scaleOnHover } from '../utils/animations';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FiCode size={24} />,
      skills: ['Python', 'Dart', 'JavaScript', 'HTML', 'CSS', 'C', 'C++'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FiLayers size={24} />,
      skills: ['React.js', 'Flutter', 'Node.js', 'Express.js'],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Databases',
      icon: <FiDatabase size={24} />,
      skills: ['Firebase', 'MongoDB', 'MySQL'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Cloud Technologies',
      icon: <FiCloud size={24} />,
      skills: ['AWS (Certified)', 'Firebase', 'Cloud Functions'],
      color: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Development Tools',
      icon: <FiTool size={24} />,
      skills: ['VS Code', 'Git', 'Android Studio', 'Figma', 'Adobe XD'],
      color: 'from-pink-400 to-pink-600'
    },
    {
      title: 'Specialized Skills',
      icon: <FiSettings size={24} />,
      skills: ['AI/ML (LSTM, Isolation Forest)', 'IoT Integration', 'UI/UX Design', 'Prompt Engineering'],
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
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
            Skills & Expertise
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto mb-8"
          />
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building modern applications and solving complex problems
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover="hover"
              className="group"
            >
              <motion.div
                variants={scaleOnHover}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 h-full"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-4 mb-6 mx-auto`}>
                  <div className="text-white w-full h-full flex items-center justify-center">
                    {category.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-600"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
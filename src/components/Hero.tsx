import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiMail, FiEye } from 'react-icons/fi';
import { fadeInUp, buttonHover } from '../utils/animations';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-6xl font-bold text-blue-600 dark:text-blue-400">
              AC
            </div>
          </div>
        </motion.div>

        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-4"
        >
          Arun C
        </motion.h1>

        <motion.h2
          {...fadeInUp}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6"
        >
          Software Developer
        </motion.h2>

        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Proactive and detail-oriented B.Tech Computer Science graduate building innovative solutions
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            {...buttonHover}
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg"
          >
            <FiEye size={20} />
            View Projects
          </motion.button>
          <motion.button
            {...buttonHover}
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg"
          >
            <FiMail size={20} />
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('#about')}
          >
            <FiArrowDown size={24} className="text-slate-600 dark:text-slate-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
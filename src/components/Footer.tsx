import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleOnHover,
  buttonHover,
} from '../utils/animations'; // Adjust path if needed

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Description */}
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4">Arun C</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Software Developer passionate about creating innovative solutions using modern technologies. 
              Specializing in full-stack development, mobile applications, and AI-driven systems.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Arun0218cse"
                target="_blank"
                rel="noopener noreferrer"
                variants={scaleOnHover}
                whileHover="hover"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/arun-c-209547343"
                target="_blank"
                rel="noopener noreferrer"
                variants={scaleOnHover}
                whileHover="hover"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <FiLinkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:tech18arun@gmail.com"
                variants={scaleOnHover}
                whileHover="hover"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <FiMail size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInLeft} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    variants={scaleOnHover}
                    whileHover="hover"
                    className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Summary */}
          <motion.div variants={fadeInRight} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h4 className="text-lg font-semibold mb-6">Let's Connect</h4>
            <p className="text-slate-300 mb-6">
              Always open to discussing new opportunities, collaborations, and innovative projects.
            </p>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              variants={buttonHover}
              whileHover="hover"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md transition-all duration-200"
            >
              Start a Conversation
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-slate-400 text-sm"
            >
              © 2025 Arun C. All rights reserved. Built with React & Tailwind CSS.
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-0 w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <FiArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
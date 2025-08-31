import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGlobe, 
  FiHeart, 
  FiClock,
  FiSend
} from 'react-icons/fi';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, buttonHover } from '../utils/animations';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send the email or integrate with a service
    alert('Thank you for your message! I\'ll get back to you soon.');
    reset();
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      label: 'Email',
      value: 'tech18arun@gmail.com',
      href: 'mailto:tech18arun@gmail.com'
    },
    {
      icon: <FiPhone size={24} />,
      label: 'Phone',
      value: '+91-8608630388',
      href: 'tel:+918608630388'
    },
    {
      icon: <FiMapPin size={24} />,
      label: 'Location',
      value: 'Mangalapuram, Namakkal, Tamil Nadu, India',
      href: null
    },
    {
      icon: <FiClock size={24} />,
      label: 'Availability',
      value: 'Immediate',
      href: null
    }
  ];

  const additionalInfo = [
    {
      icon: <FiGlobe size={20} />,
      label: 'Languages',
      value: 'Tamil (Native), English (Fluent)'
    },
    {
      icon: <FiHeart size={20} />,
      label: 'Interests',
      value: 'Web Development, Mobile Apps, Cloud Architecture, Cybersecurity, AI'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
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
            Get In Touch
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto mb-8"
          />
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Ready to collaborate on your next project? Let's discuss how we can build something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg transition-colors duration-200"
                >
                  <FiSend size={20} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-800 dark:text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Additional Information</h4>
              <div className="space-y-4">
                {additionalInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-blue-600 dark:text-blue-400 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{info.label}</p>
                      <p className="text-slate-800 dark:text-white">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
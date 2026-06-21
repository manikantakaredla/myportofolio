import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 15 } }
  };

  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Skills</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Superpowers
          </p>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className={`flex flex-col items-center justify-center w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl border ${skill.border} ${skill.bg} shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer`}
            >
              <div className="mb-3 transform transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-700">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="education" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Education</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Academic Background
          </p>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          className="relative pl-6 md:pl-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Vertical Line */}
          <div className="absolute left-[11px] md:left-[50%] top-2 bottom-2 w-[2px] bg-slate-200 md:-translate-x-1/2" />

          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 last:mb-0 ${isLeft ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-11px] md:left-[50%] md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-primary shadow-sm z-10" />

                {/* Content */}
                <div className={`md:w-[45%] w-full pl-6 md:pl-0 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="text-xs font-bold text-slate-400 mb-1 tracking-widest uppercase">
                    {edu.duration}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 leading-tight mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-bold text-primary mb-2">
                    {edu.major}
                  </p>
                  <p className="text-sm font-medium text-slate-600 mb-3">
                    {edu.institution}
                  </p>
                  <div className={`inline-block px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs font-bold text-slate-700 ${isLeft ? 'md:mr-0' : 'md:ml-0'}`}>
                    {edu.score}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

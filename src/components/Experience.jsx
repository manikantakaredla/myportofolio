import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Career</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Experience
          </p>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-200/60 p-8 rounded-[2rem] shadow-sm flex flex-col transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-100">
                <div className="flex space-x-4">
                  <div className="p-3 bg-slate-50 rounded-2xl text-primary h-fit">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug tracking-tight mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-bold text-primary">
                      {exp.company}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-slate-500 mb-6 bg-slate-50 px-3 py-1.5 rounded-lg w-fit text-xs font-bold uppercase tracking-wider">
                <Calendar className="h-3.5 w-3.5" />
                <span>{exp.duration}</span>
              </div>

              <ul className="space-y-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-600 leading-relaxed">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

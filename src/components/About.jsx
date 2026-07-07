import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolioData';
import { Download } from 'lucide-react';
import resumePdf from '../data/myatsresume.pdf';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">About Me</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Who am I?
          </p>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div 
            className="flex flex-col space-y-8 text-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug max-w-2xl">
              Passionate about software engineering and building impactful digital products.
            </h3>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {aboutData.description1}
            </p>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {aboutData.description2}
            </p>

            <div className="pt-8 w-full max-w-md border-t border-slate-100 flex justify-center">
              <a
                href={resumePdf} 
                download="myatsresume.pdf"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-sm font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:text-primary shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

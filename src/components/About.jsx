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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 scale-105 transition-transform duration-300 group-hover:rotate-6"></div>
              <div className="absolute inset-0 bg-slate-100 rounded-3xl transform -rotate-3 scale-105 transition-transform duration-300 group-hover:-rotate-6"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-xl w-72 h-72 sm:w-80 sm:h-80 overflow-hidden z-10">
                <img 
                  src="/src/assets/profile.jpg" 
                  alt="Durga Sree Veera Manikanta Karedla" 
                  className="w-full h-full object-cover rounded-2xl bg-slate-100"
                  onError={(e) => {
                    e.target.src = 'https://media.licdn.com/dms/image/v2/D4D03AQHZ9XS8heTfcw/profile-displayphoto-scale_400_400/B4DZ7rO5XgHEAg-/0/1782063015491?e=1783555200&v=beta&t=RAn654lKBI6I7jf174IOSw6LoslqjNOIHMJr0h-bLuU';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              Passionate about software engineering and building impactful digital products.
            </h3>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {aboutData.description1}
            </p>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {aboutData.description2}
            </p>

            <div className="pt-6 border-t border-slate-100">
              <a
                href={resumePdf} 
                download="myatsresume.pdf"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-200 text-sm font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:text-primary shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

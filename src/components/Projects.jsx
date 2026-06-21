import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Portfolio</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </p>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white border border-slate-200/60 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col group h-full relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-md">
                    {project.category}
                  </span>
                  
                  <div className="flex space-x-2 text-slate-400">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-colors"
                      aria-label="View Source on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.demo !== "#" && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-500 mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="inline-flex items-center px-3 py-1 text-xs font-bold text-slate-700 bg-slate-100 rounded-lg border border-slate-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-6 mt-auto">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">Key Highlights</span>
                  <ul className="space-y-3">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm font-medium text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

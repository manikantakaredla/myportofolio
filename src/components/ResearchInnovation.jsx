import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ShieldAlert, Rocket, ArrowUpRight } from 'lucide-react';

const innovations = [
  {
    title: "MitraAI Smart Clock",
    category: "MSME Ideathon Participant",
    icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
    desc: "An intelligent smart clock ecosystem designed for modern assistance, leveraging voice recognition, and contextual scheduling tools.",
    status: "Ideathon Participant",
    statusColor: "bg-yellow-50 text-yellow-700 border-yellow-200/50"
  },
  {
    title: "AI-Based Vehicle Noise Detection System",
    category: "Acoustic ML Modeling",
    icon: <ShieldAlert className="h-6 w-6 text-red-500" />,
    desc: "Smart software agent designed to track decibel levels and capture high-pitch anomalous vehicle sounds for city noise control.",
    status: "Research Phase",
    statusColor: "bg-red-50 text-red-700 border-red-200/50"
  },
  {
    title: "Startup & Innovation Initiatives",
    category: "Entrepreneurship & Ideation",
    icon: <Rocket className="h-6 w-6 text-purple-500" />,
    desc: "Active engagement in university-level incubation centers, presenting and iterating on business models for consumer web products.",
    status: "Active Incubatee",
    statusColor: "bg-purple-50 text-purple-700 border-purple-200/50"
  }
];

export default function ResearchInnovation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="research-innovation" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Innovation</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Research & Initiatives
          </p>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {innovations.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, shadow: "0 15px 30px -10px rgba(0, 0, 0, 0.08)" }}
              className="bg-slate-50/50 border border-slate-200/60 p-6 sm:p-8 rounded-3xl text-left flex flex-col justify-between transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white border border-slate-200/60 rounded-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>

                <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1.5">
                  {item.category}
                </span>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/60 mt-6 flex items-center text-xs font-bold text-slate-400 group cursor-pointer hover:text-primary transition-colors">
                <span>View project brief</span>
                <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

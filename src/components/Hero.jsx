import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { heroData } from '../data/portfolioData';
import resumePdf from '../data/myatsresume.pdf';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-full h-full bg-slate-50/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <motion.div
            className="lg:col-span-7 flex flex-col text-left space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 rounded-full px-3.5 py-1.5 w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Available for Opportunities</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
            >
              Hi, I'm <br />
              <span className="text-primary">
                Durga Sree Veera Manikanta Karedla
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 font-sans h-8"
            >
              <TypeAnimation
                sequence={[
                  heroData.headline,
                  1000,
                  'Problem Solver',
                  1000,
                  'Innovative Thinker',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed"
            >
              {heroData.subHeadline}
            </motion.p>



            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-semibold rounded-xl text-white bg-primary hover:bg-primary/95 shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-200 text-sm font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                Contact Me
              </button>

              <a
                href={resumePdf}
                download="myatsresume.pdf"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-semibold rounded-xl text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 pt-4 border-t border-slate-200/60 w-fit"
            >
              <a
                href="https://www.linkedin.com/in/manikanta-karedla-598a352b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-slate-600 hover:text-primary hover:bg-primary/5 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ManikantaKaredla"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:luckyha0637k@gmail.com"
                className="p-2.5 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-slate-100 rounded-3xl transform rotate-6 scale-95 opacity-70 pointer-events-none" />
            <div className="absolute inset-0 bg-white border border-slate-200 rounded-3xl transform -rotate-3 pointer-events-none shadow-sm" />

            <div className="relative bg-white p-4 border border-slate-200 rounded-3xl shadow-xl w-[280px] sm:w-[320px] aspect-square overflow-hidden z-10 group hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQHZ9XS8heTfcw/profile-displayphoto-scale_400_400/B4DZ7rO5XgHEAg-/0/1782063015491?e=1783555200&v=beta&t=RAn654lKBI6I7jf174IOSw6LoslqjNOIHMJr0h-bLuU"
                alt="Durga Sree Veera Manikanta Karedla"
                className="w-full h-full object-cover rounded-2xl bg-slate-100 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

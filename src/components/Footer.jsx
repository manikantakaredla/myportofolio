import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side */}
        <div className="text-center sm:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Manikanta Karedla. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 mt-1.5">
            Designed & Developed by <span className="text-white font-medium">Manikanta Karedla</span>
          </p>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl border border-slate-700/50 shadow-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>

      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle, CheckCircle2 } from 'lucide-react';
import { contactData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5 text-emerald-600" />,
      label: "Email Address",
      value: "luckyha0637k@gmail.com",
      actionHref: "mailto:luckyha0637k@gmail.com",
      actionText: "Send Mail"
    },
    {
      icon: <MapPin className="h-5 w-5 text-red-600" />,
      label: "Current Location",
      value: "Rajahmundry, Andhra Pradesh, India",
      actionHref: "https://maps.google.com/?q=Rajahmundry,Andhra+Pradesh,India",
      actionText: "Open Maps"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-blue-600" />,
      label: "LinkedIn Professional",
      value: "manikanta-karedla-598a352b0",
      actionHref: "https://www.linkedin.com/in/manikanta-karedla-598a352b0/",
      actionText: "Let's Connect"
    },
    {
      icon: <Github className="h-5 w-5 text-slate-800" />,
      label: "GitHub Profile",
      value: "ManikantaKaredla",
      actionHref: "https://github.com/ManikantaKaredla",
      actionText: "View Code"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Get in Touch</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Me
          </p>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{contactData.heading}</h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                I am actively seeking new opportunities to build impactful software. Drop me a line or connect with me via social channels.
              </p>

              <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm mb-8">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">Available For:</span>
                <ul className="space-y-3">
                  {contactData.availableFor.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              {contactDetails.map((detail, index) => (
                <div 
                  key={index}
                  className="bg-white border border-slate-200/60 p-4.5 rounded-2xl shadow-sm flex items-center justify-between group hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl group-hover:bg-primary/5 transition-colors">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">{detail.label}</span>
                      <span className="text-sm font-bold text-slate-800 break-all">{detail.value}</span>
                    </div>
                  </div>
                  <a 
                    href={detail.actionHref} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary hover:text-primary/80 px-3 py-1.5 bg-primary/5 hover:bg-primary/10 rounded-lg transition-all"
                  >
                    {detail.actionText}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/60 p-6 sm:p-10 rounded-3xl shadow-lg text-left relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all text-slate-800"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all text-slate-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Partnership, placement request, etc."
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all text-slate-800"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder="Tell me about your project opportunity..."
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all resize-none text-slate-800"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-4 bg-primary text-white font-extrabold rounded-xl hover:bg-primary/95 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    className="flex flex-col items-center justify-center py-16 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="p-5 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 shadow-sm mb-6">
                      <CheckCircle className="h-12 w-12" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Message Sent Successfully!</h3>
                    <p className="text-slate-500 text-sm sm:text-base max-w-sm font-medium">
                      Thank you for reaching out. I have received your email and will respond to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-8 text-sm font-bold text-primary hover:text-primary/80 px-6 py-2.5 border-2 border-slate-200 rounded-xl transition-all"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

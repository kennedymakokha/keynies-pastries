'use client'
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const contactInfo = [
    { icon: MapPin, title: 'Location', info: 'Rongai' },
    { icon: Clock, title: 'Hours', info: 'Mon-Fri: 6AM–7PM\nSat-Sun: 7AM–8PM' },
    { icon: Phone, title: 'Contact', info: '(+254) 716794384\ninfo@keyniespastries.com' },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-amber-900 text-white flex items-center justify-center px-4 py-10 lg:py-20"
    >
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Column */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="flex items-start space-x-4 bg-white/10 p-6 rounded-xl backdrop-blur-md"
              >
                <div className="bg-amber-800 p-3 rounded-full">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-amber-200 whitespace-pre-line">{item.info}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white text-amber-900 rounded-xl p-6 md:p-8 shadow-xl w-full"
          >
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-medium mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-amber-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-amber-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="message">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-amber-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-md transition-all w-full lg:w-auto"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

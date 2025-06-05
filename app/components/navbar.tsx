"use client";
import { motion } from "framer-motion";
import { Cake } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-amber-100"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-between space-x-2">
          <Cake className="h-8 w-8 text-amber-600" />
          <span className="text-2xl font-bold text-amber-800">Keynies Pastries</span>
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {["Home", "Pastries", "About", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="text-amber-700 hover:text-amber-900 font-medium transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

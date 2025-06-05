"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cake, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "Home", url: "/" },
    { title: "Pastries", url: "/menu" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-amber-100"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <Cake className="h-8 w-8 text-amber-600" />
          <Link href="/" className="text-2xl font-bold text-amber-800">
            Keynies Pastries
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.url}
              href={item.url}
              whileHover={{ y: -2 }}
              className="text-amber-700 hover:text-amber-900 font-medium transition-colors"
            >
              {item.title}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-amber-700 hover:text-amber-900 focus:outline-none"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-amber-100 px-6 pb-4"
          >
            <div className="flex flex-col space-y-4 mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  className="text-amber-700 hover:text-amber-900 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

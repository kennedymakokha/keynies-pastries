'use client'
import React from 'react'
import { motion } from "framer-motion";
import { Cake } from "lucide-react";
function Footer() {
    const myDate = new Date(); // Creates a Date object with the current date and time.
    myDate.setFullYear(2025); // Sets the year of the Date object to 2025.

    return (
        <footer className="bg-amber-950 text-amber-200 py-8">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center space-x-2 mb-4"
                >
                    <Cake className="h-6 w-6" />
                    <span className="text-xl font-bold">keynies  pastries</span>
                </motion.div>
                <p className="text-sm">© {myDate.getFullYear()} keynies  pastries. All rights reserved. Made with love and butter.</p>
            </div>
        </footer>
    )
}

export default Footer
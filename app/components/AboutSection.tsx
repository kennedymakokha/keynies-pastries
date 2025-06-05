'use client'
import React from 'react'
import { motion } from "framer-motion";
import { ChefHat, Heart, Award } from "lucide-react";
function AboutSection() {
    return (
        <section id="about" className="py-20 bg-gradient-to-r from-amber-100 to-orange-100">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                            alt="Baker at work"
                            className="rounded-2xl shadow-lg"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-amber-900">
                            Crafted with Passion
                        </h2>
                        <p className="text-lg text-amber-700">
                            For over 7 years, Keynies  pastries has been the heart of our community,
                            bringing authentic  pastry traditions to your table. Our master
                            bakers start before dawn, ensuring every piece meets our exacting standards.
                        </p>

                        <div className="grid grid-cols-3 gap-6 mt-8">
                            {[
                                { icon: ChefHat, text: "Master Bakers" },
                                { icon: Heart, text: "Made with Love" },
                                { icon: Award, text: "Award Winning" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="text-center"
                                >
                                    <item.icon className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                                    <p className="text-sm font-medium text-amber-800">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
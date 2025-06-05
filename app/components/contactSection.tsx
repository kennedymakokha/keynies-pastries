'use client'
import React from 'react'
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
function ContactSection() {
    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <section id="contact" className="py-20 bg-amber-900 text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Our Bakery</h2>
                    <p className="text-xl text-amber-200 max-w-2xl mx-auto">
                        Come experience the aroma of fresh pastries and the warmth of our welcoming atmosphere
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8 text-center"
                >
                    {[
                        {
                            icon: MapPin,
                            title: "Location",
                            info: "Rongai\n "
                        },
                        {
                            icon: Clock,
                            title: "Hours",
                            info: "Mon-Fri: 6:00 AM - 7:00 PM\nSat-Sun: 7:00 AM - 8:00 PM"
                        },
                        {
                            icon: Phone,
                            title: "Contact",
                            info: "(+254) 716794384 -CAKE\ninfo@keyniespastries.com"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            className="space-y-4"
                        >
                            <item.icon className="h-12 w-12 text-amber-300 mx-auto" />
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-amber-200 whitespace-pre-line">{item.info}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 text-lg">
                            Get Directions
                        </Button>
                    </motion.div> */}
                </motion.div>
            </div>
        </section>
    )
}

export default ContactSection
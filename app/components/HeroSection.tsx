"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

export default function Hero() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Use images from the public folder
    const images = ["/images/cake1.webp", "/images/cake2.jpeg", "/images/cake3.jpg"];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative flex items-center justify-center h-screen text-center px-6 overflow-hidden">
            
            {/* Background Image Slider */}
            <div className="absolute inset-0 transition-all duration-1000 bg-cover bg-center"
                 style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-8"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg"
                    >
                        Artisan Pastries
                        <br />
                        <span className="text-amber-300">Made with Love</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-white max-w-2xl mx-auto drop-shadow-md"
                    >
                        Experience the finest French pastries crafted daily with premium ingredients
                        and traditional techniques passed down through generations.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">
                                View Our Menu
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outline" size="lg" className="border-amber-500 text-amber-300 hover:bg-white/20 px-8 py-3 text-lg">
                                Visit Our Shop
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

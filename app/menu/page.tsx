'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const scaleOnHover = {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.2 },
};

const pastries = [
    {
        name: 'Chocolate Croissant',
        price: 'Ksh 1400.50',
        description: 'Buttery pastry filled with rich Belgian chocolate',
        image: 'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?w=400&h=300&fit=crop',
    },
    {
        name: 'Strawberry Tart',
        price: 'Ksh 1600.00',
        description: 'Fresh strawberries on vanilla custard with crispy tart shell',
        image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop',
    },
    {
        name: 'Éclair Collection',
        price: 'Ksh 500.25',
        description: 'Classic French éclairs with various premium fillings',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    },
    {
        name: 'Vanilla Mille-Feuille',
        price: 'Ksh 1200.00',
        description: 'Layered puff pastry with vanilla cream and powdered sugar',
        image: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?w=400&h=300&fit=crop',
    },
    {
        name: 'Lemon Meringue Tart',
        price: 'Ksh 1450.75',
        description: 'Tangy lemon curd topped with toasted meringue',
        image: 'https://images.unsplash.com/photo-1606755962773-42ff0c07de94?w=400&h=300&fit=crop',
    },
    {
        name: 'Raspberry Danish',
        price: 'Ksh 950.00',
        description: 'Flaky pastry with raspberry jam and icing drizzle',
        image: 'https://images.unsplash.com/photo-1618194302174-cd3fd738c92e?w=400&h=300&fit=crop',
    },
];

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-amber-50 py-16 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-bold text-amber-900 mb-4">Our Full Pastry Menu</h1>
                <p className="text-xl text-amber-700 max-w-2xl mx-auto">
                    Explore our collection of artisan pastries — crafted fresh daily with love and premium ingredients.
                </p>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid md:grid-cols-3 gap-10"
            >
                {pastries.map((pastry, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                        <div className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl bg-white">
                            <motion.div {...scaleOnHover}>
                                <Image
                                    width={400}
                                    height={300}
                                    src={pastry.image}
                                    alt={pastry.name}
                                    className="w-full h-64 object-cover"
                                />
                            </motion.div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-amber-900">{pastry.name}</h3>
                                    <span className="text-lg font-semibold text-amber-600">{pastry.price}</span>
                                </div>
                                <p className="text-amber-700 mb-4">{pastry.description}</p>

                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex items-center text-amber-500 gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-current" />
                                        ))}
                                    </div>

                                    <a
                                        href={`https://wa.me/+254716794384?text=Hello! I'm interested in ordering: ${encodeURIComponent(pastry.name)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-5 py-2 rounded-md shadow-md transition-all"
                                    >
                                        Order
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}

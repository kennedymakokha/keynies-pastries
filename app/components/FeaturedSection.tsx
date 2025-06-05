"use client";
import React, { useState, useMemo } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Reusable StarRating Component
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center text-amber-500 gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
      {halfStar && <Star className="h-4 w-4 fill-current opacity-50" />}
    </div>
  );
};

function FeaturedSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
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

  const allPastries = [
    {
      name: "Chocolate Croissant",
      price: 1400.5,
      rating: 4.8,
      description: "Buttery pastry filled with rich Belgian chocolate",
      image:
        "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?w=400&h=300&fit=crop",
    },
    {
      name: "Strawberry Tart",
      price: 1600.0,
      rating: 4.3,
      description:
        "Fresh strawberries on vanilla custard with crispy tart shell",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
    },
    {
      name: "Éclair Collection",
      price: 500.25,
      rating: 4.6,
      description: "Classic French éclairs with various premium fillings",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    },
  ];

  const [sortKey, setSortKey] = useState("name");
  const [minRating, setMinRating] = useState(0);
  const [reviews, setReviews] = useState<{
    [key: string]: { name: string; rating: number; comment: string }[];
  }>({});

  const handleReviewSubmit = (
    pastryName: string,
    review: { name: string; rating: number; comment: string }
  ) => {
    setReviews((prev) => ({
      ...prev,
      [pastryName]: [...(prev[pastryName] || []), review],
    }));
  };

  const filteredPastries = useMemo(() => {
    return allPastries
      .filter((p) => p.rating >= minRating)
      .sort((a, b) => {
        if (sortKey === "price") return a.price - b.price;
        if (sortKey === "rating") return b.rating - a.rating;
        return a.name.localeCompare(b.name);
      });
  }, [sortKey, minRating]);

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
    }).format(value);

  return (
    <section id="pastries" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Signature Pastries
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Each pastry is handcrafted using the finest ingredients and
            traditional French techniques
          </p>
        </motion.div>

        {/* Filter + Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <label className="mr-2 font-medium">Sort by:</label>
            <select
              onChange={(e) => setSortKey(e.target.value)}
              className="border px-3 py-1 rounded"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div>
            <label className="mr-2 font-medium">Minimum Rating:</label>
            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              value={minRating}
              onChange={(e) => setMinRating(parseFloat(e.target.value))}
              className="border px-3 py-1 rounded w-24"
            />
          </div>
        </div>

        {/* Pastry Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {filteredPastries.map((pastry, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg">
                <motion.div {...scaleOnHover}>
                  <Image
                    src={pastry.image}
                    alt={`Photo of ${pastry.name} - ${pastry.description}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-amber-900">
                      {pastry.name}
                    </h3>
                    <span className="text-lg font-semibold text-amber-600">
                      {formatPrice(pastry.price)}
                    </span>
                  </div>
                  <p className="text-amber-700 mb-4">{pastry.description}</p>

                  <div className="flex justify-between items-center mt-4">
                    <StarRating rating={pastry.rating} />
                    <a
                      href={`https://wa.me/+254716794384?text=Hello! I'm interested in ordering: ${encodeURIComponent(
                        pastry.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Order ${pastry.name} on WhatsApp`}
                      className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-6 py-2 rounded-md shadow-md transition-all"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedSection;

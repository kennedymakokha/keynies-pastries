'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PackageCheck, Loader2, Truck, X } from 'lucide-react';
import Image from 'next/image';

const orders = [
  {
    id: 'ORD12345',
    item: 'Strawberry Tart',
    price: 'Ksh 1,600.00',
    status: 'Delivered',
    date: 'June 1, 2025',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=200&h=160&fit=crop',
    steps: ['Order Placed', 'Preparing', 'Out for Delivery', 'Delivered'],
    currentStep: 4,
  },
  {
    id: 'ORD12346',
    item: 'Chocolate Croissant',
    price: 'Ksh 1,400.50',
    status: 'Out for Delivery',
    date: 'June 3, 2025',
    image: 'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?w=200&h=160&fit=crop',
    steps: ['Order Placed', 'Preparing', 'Out for Delivery', 'Delivered'],
    currentStep: 3,
  },
];

export default function MyOrders() {
  const [trackingOrder, setTrackingOrder] = useState<null | typeof orders[0]>(null);

  return (
    <section className="min-h-screen bg-amber-50 px-4 py-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-white/70 backdrop-blur-md border border-amber-200 shadow-xl rounded-xl p-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 text-center mb-8">
          My Orders
        </h2>

        {orders.length === 0 ? (
          <p className="text-center text-amber-700 text-lg">You have no orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <motion.div
                key={order.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-amber-200 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center gap-4 p-4"
              >
                <Image  height={100} width={100}
                  src={order.image}
                  alt={order.item}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-amber-900">{order.item}</h3>
                  <p className="text-amber-700">{order.date}</p>
                  <p className="text-amber-800 font-medium">{order.price}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    {order.status === 'Delivered' ? (
                      <span className="flex items-center text-green-600 font-semibold">
                        <PackageCheck className="w-5 h-5 mr-1" />
                        Delivered
                      </span>
                    ) : (
                      <span className="flex items-center text-yellow-600 font-semibold animate-pulse">
                        <Loader2 className="w-5 h-5 mr-1 animate-spin" />
                        {order.status}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setTrackingOrder(order)}
                    className="bg-amber-600 hover:bg-amber-700 text-white text-sm px-4 py-1.5 rounded-md shadow"
                  >
                    Track Order
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Track Order Modal */}
      <AnimatePresence>
        {trackingOrder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-6 w-full max-w-md relative"
            >
              <button
                onClick={() => setTrackingOrder(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-bold text-amber-900 mb-4">
                Tracking: {trackingOrder.item}
              </h3>
              <div className="space-y-4">
                {trackingOrder.steps.map((step, index) => {
                  const isActive = index < trackingOrder.currentStep;
                  const isCurrent = index === trackingOrder.currentStep - 1;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          isActive ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span
                        className={`text-sm ${
                          isCurrent
                            ? 'font-semibold text-amber-900'
                            : isActive
                            ? 'text-amber-700'
                            : 'text-gray-500'
                        }`}
                      >
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 text-center text-sm text-amber-700">
                <Truck className="w-5 h-5 inline mr-1" />
                Estimated delivery within 30 minutes.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

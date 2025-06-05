'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, LogIn } from 'lucide-react';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Logged in!');
    // 🔐 Add your auth logic here
  };

  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-amber-100 via-white to-amber-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/60 backdrop-blur-md rounded-xl shadow-xl p-8 border border-white/20"
      >
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-1">
              Email
            </label>
            <div className="flex items-center border border-amber-300 rounded-md px-3 py-2 bg-white">
              <Mail className="w-4 h-4 text-amber-500 mr-2" />
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full outline-none text-amber-900 bg-transparent placeholder-amber-400"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-amber-800 mb-1">
              Password
            </label>
            <div className="flex items-center border border-amber-300 rounded-md px-3 py-2 bg-white">
              <Lock className="w-4 h-4 text-amber-500 mr-2" />
              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                className="w-full outline-none text-amber-900 bg-transparent placeholder-amber-400"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-amber-800 hover:bg-amber-700 text-white font-semibold py-3 rounded-md shadow-md flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            Login
          </motion.button>
        </form>

        {/* Extra Links */}
        <div className="text-center text-sm text-amber-700 mt-6 space-y-2">
          <p>
            Forgot your password?{' '}
            <a href="#" className="text-amber-900 underline hover:text-amber-700">
              Reset it
            </a>
          </p>
          <p>
          Don&apos;t have an account?{' '}
            <a href="#" className="text-amber-900 underline hover:text-amber-700">
              Sign up
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

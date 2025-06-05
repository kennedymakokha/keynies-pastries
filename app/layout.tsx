import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-pink-50 text-brown-800`}>
        <AnimatePresence>{children}</AnimatePresence>
      </body>
    </html>
  );
}
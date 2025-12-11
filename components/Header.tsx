'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-beige/95 backdrop-blur-sm border-b border-brown-dark/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Image
              src="/logos/logo-brown.jpg"
              alt="ASCO Village"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a
              href="#about"
              className="text-brown-dark hover:text-green-dark transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-brown-dark hover:text-green-dark transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </nav>
    </header>
  )
}


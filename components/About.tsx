'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-beige"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-brown-dark mb-8 text-center">
            About ASCO Village
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            ASCO is a construction company behind ASCO VILLAGE, a modern villa project offering strong engineering, premium finishes, and a peaceful community for families.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

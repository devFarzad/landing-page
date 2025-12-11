'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactItems = [
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+964 770 611 0181',
      href: 'tel:+9647706110181',
      color: 'text-green-dark',
      hoverColor: 'hover:text-green-light',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'info@ascovillage.com',
      href: 'mailto:info@ascovillage.com',
      color: 'text-green-dark',
      hoverColor: 'hover:text-green-light',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: 'Erbil - Piramam Road - Opposite Grand Majidi Mall',
      href: null,
      color: 'text-brown-dark',
      hoverColor: '',
    },
  ]

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
          <h2 className="text-4xl sm:text-5xl font-bold text-brown-dark mb-12 text-center">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactItems.map((item, index) => {
              const Icon = item.icon
              const Component = item.href ? 'a' : 'div'
              const props = item.href
                ? { href: item.href, className: 'cursor-pointer' }
                : { className: '' }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: 'easeOut',
                  }}
                >
                  <Component
                    {...props}
                    className={`flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md transition-all duration-300 ${item.hoverColor} ${props.className}`}
                  >
                    <Icon
                      className={`text-4xl mb-4 ${item.color} transition-colors duration-300`}
                    />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.label}
                    </h3>
                    <p
                      className={`text-sm sm:text-base ${item.color} transition-colors duration-300`}
                    >
                      {item.value}
                    </p>
                  </Component>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


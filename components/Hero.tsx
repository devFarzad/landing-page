'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Hero() {
  const contactItems = [
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+964 770 611 0181',
      href: 'tel:+9647706110181',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'info@ascovillage.com',
      href: 'mailto:info@ascovillage.com',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: 'Erbil - Piramam Road - Opposite Grand Majidi Mall',
      href: null,
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <Image
                src="/logos/logo-brown.jpg"
                alt="ASCO Village Logo"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Coming Soon & Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-12"
          >
            {/* Coming Soon Section */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brown-dark mb-6">
                Coming Soon
              </h1>
              <div className="w-24 h-1 bg-green-dark mx-auto lg:mx-0 mb-6"></div>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                We are working on something amazing. Stay tuned for updates about ASCO Village.
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <div className="space-y-4">
                {contactItems.map((item, index) => {
                  const Icon = item.icon
                  const Component = item.href ? 'a' : 'div'
                  const props = item.href
                    ? { href: item.href, className: 'cursor-pointer' }
                    : { className: '' }

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4 + index * 0.1,
                        ease: 'easeOut',
                      }}
                    >
                      <Component
                        {...props}
                        className={`flex items-center gap-4 p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg ${item.href ? 'hover:bg-gray-50' : ''} ${props.className}`}
                      >
                        <div className="flex-shrink-0">
                          <Icon className="text-2xl text-green-dark" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-sm font-semibold text-gray-600 mb-1">
                            {item.label}
                          </h3>
                          <p className="text-base text-brown-dark font-medium">
                            {item.value}
                          </p>
                        </div>
                      </Component>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

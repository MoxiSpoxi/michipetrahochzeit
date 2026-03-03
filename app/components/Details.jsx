'use client'

import { motion } from 'framer-motion'
import { useConfig } from '../context/WeddingConfigContext'

export default function Details() {
  const { config } = useConfig()
  const { details } = config

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-blue-100 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className={`font-display ${details.fontSize?.introTitle || 'text-2xl'} md:text-3xl text-blue-900 font-bold whitespace-pre-line`}>
            {details.introTitle}
          </p>
          <p className={`font-display ${details.fontSize?.introText || 'text-lg'} text-blue-700 mt-6 whitespace-pre-line`}>
            {details.introText}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {details.events.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-100/80 rounded-2xl p-8 shadow-xl border border-blue-300 hover:border-blue-900 transition-colors duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4 text-blue-900 drop-shadow-lg">{detail.icon}</div>
              <h3 className={`font-display ${details.fontSize?.eventTitle || 'text-2xl'} text-blue-900 font-bold mb-2`}>
                {detail.title}
              </h3>
              <p className={`font-display ${details.fontSize?.eventTime || 'text-lg'} text-blue-700 mb-3`}>
                {detail.time}
              </p>
              <p className="font-sans text-blue-800 font-medium mb-2">
                {detail.location}
              </p>
              <p className="font-sans text-sm text-blue-600 mb-4">
                {detail.address}
              </p>
              <p className={`font-display ${details.fontSize?.eventDescription || 'text-base'} text-blue-900 italic`}>
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-rose/30 rounded-full px-8 py-4">
            <p className={`font-display ${details.fontSize?.footerText || 'text-lg'} text-wine`}>
              {details.footerText}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

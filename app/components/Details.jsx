'use client'

import { motion } from 'framer-motion'
import { useWeddingConfig } from '../hooks/useWeddingConfig'

export default function Details() {
  const { config, isLoaded } = useWeddingConfig()
  
  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center">Laden...</div>
  }
  
  const detailsData = config.details || {
    introTitle: '',
    introText: '',
    events: [],
    footerText: ''
  }

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
          <div className="space-y-4">
            {detailsData.introTitle.split('\n\n').filter(p => p.trim()).map((paragraph, idx) => (
              <p key={`intro-title-${idx}`} className={`font-display ${detailsData.fontSize?.introTitle || 'text-2xl'} md:text-3xl text-blue-900 font-bold whitespace-pre-line`}>
                {paragraph.trim()}
              </p>
            ))}
          </div>
          {detailsData.introText && (
            <div className="mt-6 space-y-4">
              {detailsData.introText.split('\n\n').filter(p => p.trim()).map((paragraph, idx) => (
                <p key={`intro-text-${idx}`} className={`font-display ${detailsData.fontSize?.introText || 'text-lg'} text-blue-900 whitespace-pre-line`}>
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          )}
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {detailsData.events.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-100/80 rounded-2xl p-8 shadow-xl border border-blue-300 hover:border-blue-900 transition-colors duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4 text-blue-900 drop-shadow-lg">{detail.icon}</div>
              <h3 className={`font-display ${detailsData.fontSize?.eventTitle || 'text-2xl'} text-blue-900 font-bold mb-2`}>
                {detail.title}
              </h3>
              <p className={`font-display ${detailsData.fontSize?.eventTime || 'text-lg'} text-blue-700 mb-3 font-semibold`}>
                {detail.time}
              </p>
              {detail.location && (
                <p className="font-sans text-blue-800 font-medium mb-2">
                  📍 {detail.location}
                </p>
              )}
              {detail.address && (
                <p className="font-sans text-sm text-blue-600 mb-4">
                  {detail.address}
                </p>
              )}
              <div className="space-y-4">
                {detail.description.split('\n\n').filter(p => p.trim()).map((paragraph, idx) => (
                  <p key={idx} className={`font-display ${detailsData.fontSize?.eventDescription || 'text-base'} text-blue-900 leading-relaxed whitespace-pre-line`}>
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
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
          <div className="inline-block bg-blue-50 rounded-full px-8 py-4 border-2 border-blue-900">
            <p className={`font-display ${detailsData.fontSize?.footerText || 'text-2xl'} text-blue-900 font-bold`}>
              {detailsData.footerText}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

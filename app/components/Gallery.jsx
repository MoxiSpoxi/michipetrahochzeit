'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useConfig } from '../context/WeddingConfigContext'

export default function Gallery() {
  const { config } = useConfig()
  const { gallery } = config
  
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`font-display ${gallery.fontSize?.title || 'text-4xl'} md:text-5xl text-blue-900 font-bold mb-4`}>
            {gallery.title}
          </h2>
          <p className={`font-display ${gallery.fontSize?.subtitle || 'text-lg'} text-blue-700`}>
            {gallery.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className={`font-hand ${gallery.fontSize?.footerText || 'text-2xl'} text-blue-300`}>
            {gallery.footerText}
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <p className="text-center text-blue-900 mt-4 font-display text-lg font-bold">
                {selectedImage.alt}
              </p>
            </motion.div>
            
            <button 
              className="absolute top-4 right-4 text-blue-900 text-4xl hover:text-blue-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

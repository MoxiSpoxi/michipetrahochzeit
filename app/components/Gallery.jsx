'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Unsere Hochzeitsbilder
  const images = [
    { id: 1, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.38.jpeg', alt: 'Bild 1' },
    { id: 2, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.39.jpeg', alt: 'Bild 2' },
    { id: 3, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.40.jpeg', alt: 'Bild 3' },
    { id: 4, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.41.jpeg', alt: 'Bild 4' },
    { id: 5, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.42.jpeg', alt: 'Bild 5' },
    { id: 6, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.43.jpeg', alt: 'Bild 6' },
    { id: 7, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.44.jpeg', alt: 'Bild 7' },
    { id: 8, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.45.jpeg', alt: 'Bild 8' },
    { id: 9, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.46.jpeg', alt: 'Bild 9' },
    { id: 10, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.47.jpeg', alt: 'Bild 10' },
    { id: 11, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.48.jpeg', alt: 'Bild 11' },
  ]

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
          <h2 className="font-display text-4xl md:text-5xl text-blue-900 font-bold mb-4">
            Unsere Galerie
          </h2>
          <p className="font-display text-lg text-blue-700">
            Momente, die wir für immer in unseren Herzen tragen
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
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
          <p className="font-hand text-2xl text-blue-300">
            ♥ Mehr Bilder folgen nach dem großen Tag ♥
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
